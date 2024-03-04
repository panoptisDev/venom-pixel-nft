const blockListAbi = {"ABIversion":2,"version":"2.3","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"addManager","inputs":[{"name":"manager","type":"address"}],"outputs":[]},{"name":"removeManager","inputs":[{"name":"manager","type":"address"}],"outputs":[]},{"name":"addToBanList","inputs":[{"name":"collection","type":"address"},{"name":"nftId","type":"uint32"}],"outputs":[]},{"name":"removeFromBanList","inputs":[{"name":"collection","type":"address"},{"name":"nftId","type":"uint32"}],"outputs":[]},{"name":"cleanBanList","inputs":[],"outputs":[]}],"data":[{"key":1,"name":"nonce_","type":"uint16"},{"key":2,"name":"owner_","type":"address"}],"events":[{"name":"NftBlocked","inputs":[{"name":"id","type":"uint32"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"nonce_","type":"uint16"},{"name":"owner_","type":"address"},{"name":"managers_","type":"map(address,bool)"},{"name":"blocked_","type":"map(uint32,bool)"}]} as const
const indexAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"collection","type":"address"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"},{"name":"owner","type":"address"},{"name":"nft","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_nft","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nft","type":"address"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"}]} as const
const indexBasisAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_collection","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_collection","type":"address"}]} as const
const segmintCollectionAbi = {"ABIversion":2,"version":"2.3","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"codeNft","type":"cell"},{"name":"codeIndex","type":"cell"},{"name":"codeIndexBasis","type":"cell"},{"name":"jsonMetadata","type":"string"}],"outputs":[]},{"name":"changeOwner","inputs":[{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"changeManager","inputs":[{"name":"newManager","type":"address"}],"outputs":[]},{"name":"disableMint","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"enableMint","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"getMintDisabled","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"changeEpoch","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"uint32"},{"name":"value1","type":"uint128"}]},{"name":"setTilePrice","inputs":[{"name":"newCurrentPrice","type":"uint128"},{"name":"newEpochPriceGrow","type":"uint128"}],"outputs":[]},{"name":"setNftBurningBlocked","inputs":[{"name":"nftId","type":"uint32"},{"name":"isBlocked","type":"bool"},{"name":"sendGasBack","type":"address"}],"outputs":[]},{"name":"claimTiles","inputs":[{"name":"tileStartX","type":"uint6"},{"name":"tileStartY","type":"uint6"},{"name":"tileEndX","type":"uint6"},{"name":"tileEndY","type":"uint6"},{"name":"tilesToColorify","type":"bytes[]"},{"name":"description","type":"string"},{"name":"url","type":"string"}],"outputs":[]},{"name":"colorifyTiles","inputs":[{"name":"nftId","type":"uint32"},{"name":"tilesColors","type":"bytes[]"},{"name":"tileStartX","type":"uint6"},{"name":"tileStartY","type":"uint6"},{"name":"tileEndX","type":"uint6"},{"name":"tileEndY","type":"uint6"},{"name":"sendGasBack","type":"address"}],"outputs":[]},{"name":"burnNft","inputs":[{"name":"nftId","type":"uint32"},{"name":"lockedAmount","type":"uint128"},{"name":"nftTileStartX_","type":"uint6"},{"name":"nftTileStartY_","type":"uint6"},{"name":"nftTileEndX_","type":"uint6"},{"name":"nftTileEndY_","type":"uint6"}],"outputs":[]},{"name":"getTile","inputs":[{"name":"answerId","type":"uint32"},{"name":"tileX","type":"uint6"},{"name":"tileY","type":"uint6"}],"outputs":[{"name":"pixels","type":"bytes"},{"name":"nftId","type":"uint32"},{"name":"epoch","type":"uint32"}]},{"name":"getData","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"nftCounter","type":"uint32"},{"name":"epoch","type":"uint32"},{"name":"currentEpochTilePrice","type":"uint128"},{"name":"mintDisabled","type":"bool"}]},{"name":"getNftIndexCodeHash","inputs":[{"name":"answerId","type":"uint32"},{"name":"_owner","type":"address"}],"outputs":[{"name":"codeHash","type":"string"}]},{"name":"getRandomNftFromTheField","inputs":[{"name":"answerId","type":"uint32"},{"name":"seed","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"upgrade","inputs":[{"name":"newCode","type":"cell"}],"outputs":[]},{"name":"indexBasisCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexBasisCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndexBasis","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"indexBasis","type":"address"}]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"totalSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"nftCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"nftCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"nftAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"}],"outputs":[{"name":"nft","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"owner_","type":"address"},{"key":2,"name":"nonce_","type":"uint16"}],"events":[{"name":"MintDisabledChanged","inputs":[{"name":"newValue","type":"bool"}],"outputs":[]},{"name":"TileColorify","inputs":[{"name":"nftId","type":"uint32"},{"name":"nftEpoch","type":"uint32"},{"name":"tileX","type":"uint6"},{"name":"tileY","type":"uint6"},{"name":"colors","type":"bytes"}],"outputs":[]},{"name":"NftMinted","inputs":[{"name":"nftId","type":"uint32"},{"name":"nftEpoch","type":"uint32"},{"name":"owner","type":"address"},{"name":"tileStartX","type":"uint6"},{"name":"tileStartY","type":"uint6"},{"name":"tileEndX","type":"uint6"},{"name":"tileEndY","type":"uint6"},{"name":"colors","type":"bytes[]"}],"outputs":[]},{"name":"EpochChanged","inputs":[{"name":"newEpoch","type":"uint32"},{"name":"oneTileClaimPrice","type":"uint128"}],"outputs":[]},{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_codeNft","type":"cell"},{"name":"_totalSupply","type":"uint128"},{"name":"_json","type":"string"},{"name":"_codeIndex","type":"cell"},{"name":"_codeIndexBasis","type":"cell"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_deployIndexBasisValue","type":"uint128"},{"name":"owner_","type":"address"},{"name":"nonce_","type":"uint16"},{"name":"mintDisabled_","type":"bool"},{"name":"manager_","type":"address"},{"components":[{"name":"epochWitNftId","type":"uint64"},{"name":"colors","type":"bytes"}],"name":"tiles_","type":"map(uint12,tuple)"},{"name":"currentEpoch_","type":"uint32"},{"name":"currentEpochTilesLeft_","type":"uint12"},{"name":"currentEpochTilePrice_","type":"uint128"},{"name":"prevEpochTilePrice_","type":"uint128"},{"name":"epochTilePriceGrow_","type":"uint128"}]} as const
const segmintNftAbi = {"ABIversion":2,"version":"2.3","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"sendGasTo","type":"address"},{"name":"remainOnNft","type":"uint128"},{"name":"indexDeployValue","type":"uint128"},{"name":"indexDestroyValue","type":"uint128"},{"name":"codeIndex","type":"cell"},{"name":"lockedAmount","type":"uint128"},{"name":"nftTileStartX","type":"uint6"},{"name":"nftTileStartY","type":"uint6"},{"name":"nftTileEndX","type":"uint6"},{"name":"nftTileEndY","type":"uint6"},{"name":"description","type":"string"},{"name":"url","type":"string"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"getNftCustomData","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"collection","type":"address"},{"name":"lockedAmount","type":"uint128"},{"name":"description","type":"string"},{"name":"url","type":"string"},{"name":"tileStartX","type":"uint6"},{"name":"tileStartY","type":"uint6"},{"name":"tileEndX","type":"uint6"},{"name":"tileEndY","type":"uint6"}]},{"name":"colorify","inputs":[{"name":"colors","type":"bytes[]"},{"name":"description","type":"string"},{"name":"url","type":"string"}],"outputs":[]},{"name":"setBurningBlocked","inputs":[{"name":"isBlocked","type":"bool"},{"name":"sendGasBack","type":"address"}],"outputs":[]},{"name":"burnNft","inputs":[],"outputs":[]},{"name":"onBurnSuccess","inputs":[],"outputs":[]},{"name":"onBurnError","inputs":[],"outputs":[]},{"name":"proxyTransferToOwner","inputs":[],"outputs":[]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"answerId","type":"uint32"},{"name":"collection","type":"address"},{"name":"owner","type":"address"}],"outputs":[{"name":"index","type":"address"}]},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeOwner","inputs":[{"name":"newOwner","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeManager","inputs":[{"name":"newManager","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]},{"name":"OwnerChanged","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"ManagerChanged","inputs":[{"name":"oldManager","type":"address"},{"name":"newManager","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_manager","type":"address"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_codeIndex","type":"cell"},{"name":"nftTileStartX_","type":"uint6"},{"name":"nftTileStartY_","type":"uint6"},{"name":"nftTileEndX_","type":"uint6"},{"name":"nftTileEndY_","type":"uint6"},{"name":"remainOnNft_","type":"uint128"},{"name":"lockedAmount_","type":"uint128"},{"name":"description_","type":"string"},{"name":"url_","type":"string"},{"name":"burnInProgress_","type":"bool"},{"name":"isBurningBlocked_","type":"bool"}]} as const

export const factorySource = {
    BlockList: blockListAbi,
    Index: indexAbi,
    IndexBasis: indexBasisAbi,
    SegmintCollection: segmintCollectionAbi,
    SegmintNft: segmintNftAbi
} as const

export type FactorySource = typeof factorySource
export type BlockListAbi = typeof blockListAbi
export type IndexAbi = typeof indexAbi
export type IndexBasisAbi = typeof indexBasisAbi
export type SegmintCollectionAbi = typeof segmintCollectionAbi
export type SegmintNftAbi = typeof segmintNftAbi