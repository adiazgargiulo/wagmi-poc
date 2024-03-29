import {TransferBtn} from "../components/transactions/TransferBtn";
import {Input} from "../components/atoms/input";
import {useRef} from "react";
import { TransferNativeBtn } from "../components/transactions/TransferNativeBtn";
import { Title } from "../components/atoms/text";

const TransferPage = () => {
  const destinationInputRef = useRef<HTMLInputElement | null>(null);
  const amountInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={"w-1/2 flex flex-col justify-center items-center gap-4 py-8"}
    >
      <div className={"my-8 text-center"}>
        <Title variant={"h1"} text={"Transfer"} />
      </div>
      <Input
        variant="primary"
        type={"text"}
        ref={destinationInputRef}
        placeholder={"destination"}
      />
      <Input
        variant="primary"
        type={"number"}
        ref={amountInputRef}
        placeholder={"amount"}
        min={0}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 w-full">
        <TransferBtn
          asset="0x41723a346daE8c0c8487dFB3857828174B4fBd72"
          to={`0x20209DD505b94731D7cFDe8a765012B876917928`}
          amount={`0.1`}
        />
        <TransferNativeBtn
          to={`0x20209DD505b94731D7cFDe8a765012B876917928`}
          amount={`0.1`}
        />
      </div>
    </div>
  );
};

export default TransferPage;