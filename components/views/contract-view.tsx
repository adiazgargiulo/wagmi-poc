"use client";
import { useContractEvent } from "wagmi";
import { erc20ABI } from "wagmi";
import { FC, useEffect, useState } from "react";
import { TransactionHash } from "../../types/Transactions";
import { Title } from "../atoms/text";
import { TransferBtn } from "../transactions/TransferBtn";
import TxDetail from "../transactions/TxDetail";
import Image from "next/image";
import QRCode from "qrcode";

interface ContractsViewProps {
  contractAddress: `0x${string}`;
}

export const ContractsView: FC<ContractsViewProps> = ({ contractAddress }) => {
  const [transferHashes, setTransferHashes] = useState<TransactionHash[]>([]);
  const [qrUrl, setQrUrl] = useState<string | undefined>(undefined);

  useContractEvent({
    address: contractAddress,
    abi: erc20ABI,
    eventName: "Transfer",
    listener(transactions) {
      const tx: TransactionHash = transactions[0]
        .transactionHash as TransactionHash;
      if (tx) setTransferHashes((prev) => [tx, ...prev]);
    },
  });

  useEffect(() => {
    QRCode.toDataURL(contractAddress).then((url: string) => {
      console.log("qr", url);
      setQrUrl(url);
    });
  }, [contractAddress]);

  return (
    <div className={"my-4"} key={contractAddress}>
      <div className={"my-4 flex items-center align-middle justify-center"}>
        <div>
          {qrUrl && (
            <Image
              src={qrUrl}
              alt={"qr-with-address-to-scan"}
              width={100}
              height={100}
            />
          )}
        </div>
        <div>
          Listening contract <br /> {contractAddress}
        </div>
      </div>
      <div>
        <TransferBtn
          asset={contractAddress}
          to={"0x20209DD505b94731D7cFDe8a765012B876917928"}
          amount={"0.1"}
        />
      </div>
      <div className={"flex items-center justify-center"}>
        <Title variant={"h1"} text={"Transfers"} />
      </div>
      {transferHashes.length === 0 && (
        <div className={"my-4 text-center"}>No transfers yet !</div>
      )}
      <div className={"my-4"}>
        {transferHashes.map((tx, index) => (
          <div key={index}>
            <TxDetail hash={tx} />
          </div>
        ))}
      </div>
    </div>
  );
};
