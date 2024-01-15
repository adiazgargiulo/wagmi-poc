// All properties on a domain are optional
import {
  encodeAbiParameters,
  parseAbiParameters,
  keccak256,
  toBytes,
} from "viem";

export const domain = {
  name: "Ether Mail",
  version: "1",
  verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
} as const;

// The named list of all type definitions
export const types = {
  Person: [
    { name: "name", type: "string" },
    { name: "wallet", type: "address" },
  ],
  Mail: [
    { name: "from", type: "Person" },
    { name: "to", type: "Person" },
    { name: "contents", type: "string" },
  ],
} as const;

export const message = {
  from: {
    name: "Cow",
    wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
  },
  to: {
    name: "Bob",
    wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
  },
  contents: "Hello, Bob!",
} as const;

export const getMessageAsHex = (): string => {
  const encodedParams = encodeAbiParameters(
    parseAbiParameters("string, string, string, string, string"),
    [
      message.from.name,
      message.from.wallet,
      message.to.name,
      message.to.wallet,
      message.contents,
    ]
  );
  const messageHash = keccak256(toBytes(encodedParams));

  return messageHash;
};
