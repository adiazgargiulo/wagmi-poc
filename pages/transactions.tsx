import {NextPage} from "next";
import {useRef} from "react";
import styles from "../styles/Home.module.css";
import {TransactionHash} from "../types/Transactions";
import {useState} from "react";
import TxDetail from "../components/transactions/TxDetail";
import {Button} from "../components/atoms/button";
import {Input} from "../components/atoms/input";
import { HashToClipboard } from "../components/utils/hash-to-clipboard";
import { Title } from "../components/atoms/text";

const TransactionsPage: NextPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [txHash, setTxHash] = useState<TransactionHash | undefined>(
    "0x9dad85184d5b90785fa644c7e53b773a17332ccdbcc1417ee84456f53dbff2e0"
  );
  const [error, setError] = useState<string | undefined>(undefined);

  const getInputValue = () => {
    setError(undefined);
    if (!inputRef.current || inputRef.current?.value === "")
      setError("invalid hash");
    setTxHash(inputRef.current?.value as TransactionHash);
  };

  return (
    <div className={styles.container}>
      <div className={"my-8 text-center"}>
        <Title variant={"h1"} text={"Transactions"} />
      </div>
      <div className={"my-4"}>
        <Input variant="primary" type={"text"} ref={inputRef} />
      </div>
      <div className={"my-4 flex justify-center align-middle"}>
        <Button variant="primary" onClick={getInputValue}>
          Get Tx Detail
        </Button>
      </div>
      <div className={"my-4 text-center"}>{error && <div>{error}</div>}</div>
      <div className={"my-4 text-center"}>
        Example:
        <ul className="flex flex-col gap-y-2">
          <li className="flex flex-row gap-x-2 items-center justify-center">
            <HashToClipboard hash="0x9dad85184d5b90785fa644c7e53b773a17332ccdbcc1417ee84456f53dbff2e0" />
          </li>
          <li className="flex flex-row gap-x-2 items-center justify-center">
            <HashToClipboard hash="0xd770e0b57a8487f5a2c2cd6ad7708e0573d680e80a35cdfed80af1b78e0df479" />
          </li>
        </ul>
      </div>
      <div className={"my-4"}>{txHash && <TxDetail hash={txHash} />}</div>
    </div>
  );
};

export default TransactionsPage;