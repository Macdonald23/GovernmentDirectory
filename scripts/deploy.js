async function main() {
    const Directory = await ethers.getContractFactory("GovernmentDirectory");
    const directory = await Directory.deploy();
    await directory.waitForDeployment();
  
    console.log("Contract deployed to:", await directory.getAddress());
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  