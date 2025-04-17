const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding Contract", function () {
  let Crowdfunding;
  let crowdfunding;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    Crowdfunding = await ethers.getContractFactory("Crowdfunding");
    [owner, addr1, addr2] = await ethers.getSigners();
    crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.deployed();
  });

  it("Should launch a new campaign", async function () {
    await crowdfunding.launch("Test Campaign", "Description", ethers.utils.parseEther("1"), Math.floor(Date.now() / 1000), Math.floor(Date.now() / 1000) + 86400);
    const campaign = await crowdfunding.campaigns(1);
    expect(campaign.title).to.equal("Test Campaign");
  });

  it("Should allow pledging to a campaign", async function () {
    await crowdfunding.launch("Test Campaign", "Description", ethers.utils.parseEther("1"), Math.floor(Date.now() / 1000), Math.floor(Date.now() / 1000) + 86400);
    await crowdfunding.connect(addr1).pledge(1, { value: ethers.utils.parseEther("0.5") });
    const pledged = await crowdfunding.pledgedAmount(1, addr1.address);
    expect(pledged).to.equal(ethers.utils.parseEther("0.5"));
  });

  it("Should allow unpledging from a campaign", async function () {
    await crowdfunding.launch("Test Campaign", "Description", ethers.utils.parseEther("1"), Math.floor(Date.now() / 1000), Math.floor(Date.now() / 1000) + 86400);
    await crowdfunding.connect(addr1).pledge(1, { value: ethers.utils.parseEther("0.5") });
    await crowdfunding.connect(addr1).unpledge(1, ethers.utils.parseEther("0.5"));
    const pledged = await crowdfunding.pledgedAmount(1, addr1.address);
    expect(pledged).to.equal(0);
  });
});