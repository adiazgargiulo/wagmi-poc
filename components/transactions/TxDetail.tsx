import {useTransaction} from "wagmi";
import {TransactionHash} from "../../types/Transactions";
import {AddressToDomain} from "../users/AddressToDomain";
import Link from "next/link";
import { formatGwei } from "viem";

interface TxDetailProps {
  hash: TransactionHash;
}

const TxDetail = ({ hash }: TxDetailProps) => {
  const { data, isError, isLoading, error } = useTransaction({
    hash: hash,
  });

  console.log("tx", data);

  if (isError) return <> Error... {JSON.stringify(error)} </>;
  if (!data || isLoading) return <> Loading... </>;

  return (
    <div className={"flex border-2 my-2 p-2 justify-between rounded-lg"}>
      <div>
        <div>
          Hash:{" "}
          <Link
            className="underline"
            href={`https://mumbai.polygonscan.com/tx/${data.hash}`}
            target="_blank"
          >
            {data.hash}
          </Link>
        </div>
        <div>
          from: {data?.from} - <AddressToDomain address={data.from} />
        </div>
        <div>
          to: {data?.to} - {data.to && <AddressToDomain address={data.to} />}{" "}
        </div>
      </div>
      <div className={"flex flex-col items-end"}>
        <div>nonce: {data?.nonce}</div>
        <div>value: {formatGwei(data?.value)}</div>
        <div>blockNumber: {data?.blockNumber?.toString()}</div>
      </div>
    </div>
  );
};

export default TxDetail;