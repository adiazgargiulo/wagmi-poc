import { FC } from "react";
import { Button } from "../atoms/button";
import { erc20ABI, useContractWrite } from "wagmi";
import { parseEther } from "viem";
import { truncateAddress } from "../utils";
import { ClipboardBtn } from "../utils/clipboard-btn";

export interface TransferBtnProps {
  to: `0x${string}`;
  amount: `${number}`;
}

export const TransferBtn: FC<TransferBtnProps> = ({ to, amount }) => {
  const { data, isLoading, isSuccess, isError, error, write } =
    useContractWrite({
      address: "0x41723a346daE8c0c8487dFB3857828174B4fBd72",
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
          <div className="">{truncateAddress(data?.hash)}</div>
          <ClipboardBtn text={data?.hash} />
        </div>
      )}
    </div>
  );
};