'use client'
import { erc20ABI, useContractReads } from "wagmi";
import React from "react";

export const ReadContract = () => {

    const address = "0x693ea3384f0C1Ad2B58d15623Dc326E2A380e1E0";
    
    const { data, isError, isLoading } = useContractReads({
      contracts: [
        {
          address: address,
          abi: erc20ABI,
          functionName: "decimals",
        },
        {
          address: address,
          abi: erc20ABI,
          functionName: "name",
        },
        {
          address: address,
          abi: erc20ABI,
          functionName: "symbol",
        },
      ],
    });

    if (isLoading) return <div className={'flex justify-center items-center flex-col'}>Loading...</div>
    if (isError) return <div className={'flex justify-center items-center flex-col'}>Error fetching decimals</div>

    if (!data) return (
      <div className="flex justify-center items-center flex-col"> No data </div>
    );

    const [decimals, name, symbol] = data;

    return (
      <div className={"flex justify-center items-center flex-col"}>
        <div>Contract: {address}</div>
        <div>{decimals && <span>Decimals: {decimals.result}</span>}</div>
        <div>{name && <span>Name: {name.result}</span>}</div>
        <div>{symbol && <span>Symbol: {symbol.result}</span>}</div>
      </div>
    );
}