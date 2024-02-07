'use client'
import { erc20ABI, useContractReads } from "wagmi";
import React, { FC } from "react";
import { TransactionHash } from "../../types/Transactions";

interface ReadContractProps {
  hash: TransactionHash;
}

export const ReadContract: FC<ReadContractProps> = (
  { hash } = { hash: "0x693ea3384f0C1Ad2B58d15623Dc326E2A380e1E0" }
) => {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: hash,
        abi: erc20ABI,
        functionName: "decimals",
      },
      {
        address: hash,
        abi: erc20ABI,
        functionName: "name",
      },
      {
        address: hash,
        abi: erc20ABI,
        functionName: "symbol",
      },
      {
        address: hash,
        abi: erc20ABI,
        functionName: "totalSupply",
      },
    ],
  });

  if (isLoading)
    return (
      <div className={"flex justify-center items-center flex-col"}>
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className={"flex justify-center items-center flex-col"}>
        Error fetching decimals
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center items-center flex-col"> No data </div>
    );

  const [decimals, name, symbol, supply] = data;

  return (
    <div className={"flex justify-center items-center flex-col"}>
      <div>Contract: {hash}</div>
      <div>{decimals && <span>Decimals: {decimals.result}</span>}</div>
      <div>{name && <span>Name: {name.result}</span>}</div>
      <div>{symbol && <span>Symbol: {symbol.result}</span>}</div>
      <div>{supply && <span>Supply: {supply.result?.toString()}</span>}</div>
    </div>
  );
};