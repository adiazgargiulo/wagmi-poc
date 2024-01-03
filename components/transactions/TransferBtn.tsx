import { FC } from "react";
import { Button } from "../atoms/button";
import { erc20ABI, useContractWrite } from "wagmi";
import { parseEther } from "viem";
import { truncateAddress } from "../utils";
import { HashToClipboard } from "../utils/hash-to-clipboard";

export interface TransferBtnProps {
  asset: `0x${string}`;
  to: `0x${string}`;
  amount: `${number}`;
}

export const TransferBtn: FC<TransferBtnProps> = ({ to, amount, asset }) => {
  const { data, isLoading, isSuccess, isError, error, write } =
    useContractWrite({
      address: asset,
      abi: erc20ABI,
      functionName: "transfer",
      args: [to, parseEther(amount)],
    });

  if (isLoading) return <div className={"text-center"}>Loading...</div>;
  if (isError && error) console.error("error", error);

  return (
    <div className={"py-8 items-center justify-center flex flex-col"}>
      <Button variant={"primary"} onClick={() => write()}>
        Transfer{" "}
      </Button>
      {isSuccess && data?.hash && (
        <div className="flex flex-row items-center justify-center mt-4 gap-2">
          <HashToClipboard hash={data?.hash} truncated />
        </div>
      )}
    </div>
  );
};