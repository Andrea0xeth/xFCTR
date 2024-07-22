async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const fctrAddress = "0x6dD963C510c2D2f09d5eDdB48Ede45FeD063Eb36";
    
    // Deploy xFCTR token
    const xFCTR = await ethers.getContractFactory("xFCTR");
    const xfctr = await xFCTR.deploy(deployer.address);
    await xfctr.deployed();
    console.log("xFCTR deployed to:", xfctr.address);
  
    // Deploy LockAndVote contract
    const LockAndVote = await ethers.getContractFactory("LockAndVote");
    const lockAndVote = await LockAndVote.deploy(fctrAddress, xfctr.address, deployer.address);
    await lockAndVote.deployed();
    console.log("LockAndVote deployed to:", lockAndVote.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });