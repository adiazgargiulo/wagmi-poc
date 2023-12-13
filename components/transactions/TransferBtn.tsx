import { FC } from "react";
import {Button} from "../atoms/button";
import {erc20ABI, useContractWrite, usePrepareSendTransaction, useSendTransaction} from "wagmi";
import {parseEther} from "viem";
import {Spinner} from "../atoms/spinner";

interface TransferBtnProps {
  to: `0x${string}`;
  amount: `${number}`;
}

export const TransferBtn: FC<TransferBtnProps> = ({ to, amount }) => {

    const { data, isLoading, isError, error, write } = useContractWrite({
      address: "0x41723a346daE8c0c8487dFB3857828174B4fBd72",
      abi: erc20ABI,
      functionName: "transfer",
      args: [to, parseEther(amount)],
    });

    if (isLoading) return <div className={"text-center"}>Loading...</div>;
    if (isError && error)
      console.error("error", error);

    return (
      <div className={"py-8"}>
        <Button variant={"primary"} onClick={() => write()}>
          Transfer{" "}
        </Button>
        <div className="mt-2">{data &&  data.hash}</div>
      </div>
    );
}