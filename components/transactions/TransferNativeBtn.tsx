import { parseEther } from "viem";
import { usePrepareSendTransaction, useSendTransaction } from "wagmi";
import { Button } from "../atoms/button";
import { TransferBtnProps } from "./TransferBtn";
import { FC } from "react";
import { truncateAddress } from "../utils";
import { ClipboardBtn } from "../utils/clipboard-btn";

type TransferNativeBtnProps = Omit<TransferBtnProps, "asset">;

export const TransferNativeBtn: FC<TransferNativeBtnProps> = ({
  to,
  amount,
}) => {
  const { config } = usePrepareSendTransaction({
    to: to,
    value: parseEther(amount),
  });
  const { data, isSuccess, sendTransaction } = useSendTransaction(config);

  return (
    <div className={"py-8 items-center justify-center flex flex-col"}>
      <Button
        variant={"primary"}
        disabled={!sendTransaction}
        onClick={() => sendTransaction?.()}
      >
        Transfer Native
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
