const CONTRACT_ADDRESS = "0x09f770e756d0EAa6eAABd416BdFB55ec77F9E02d"
const META_DATA_URL = "ipfs://bafyreicpcm5mr3wplqe6esjgmqykpjqgsus3prejack76ll5fhesgadpty/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });