import { defineChain } from "viem";

export const rootstockTestnet = defineChain({
  id: 31,
  name: "Rootstock Testnet",
  network: "rootstock Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock Bitcoin",
    symbol: "tRBTC",
  },
  rpcUrls: {
    public: { http: ["https://public-node.testnet.rsk.co"] },
    default: { http: ["https://public-node.testnet.rsk.co"] },
  },
  blockExplorers: {
    blockscout: { name: "Blockscout", url: "https://rootstock.blockscout.com" },
    default: { name: "RSK Explorer", url: "https://explorer.testnet.rsk.co" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4249540,
    },
  },
  testnet: true,
});
