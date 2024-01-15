import {useSignMessage} from "wagmi";
import { Button} from "../atoms/button";
import {copyToClipboard, truncateAddress} from "../utils";
import { getMessageAsHex } from "../utils/signature";

export const SignMessage = () => {
  const { data, isError, error, isLoading, isSuccess, signMessage } =
    useSignMessage({
      message: getMessageAsHex(),
    });

  if (isLoading)
    return (
      <div className={"flex flex-col items-center justify-center"}>
        Signing message...
      </div>
    );
  if (isError)
    return (
      <div className={"flex flex-col items-center justify-center"}>
        Error signing message {JSON.stringify(error)}
      </div>
    );
  if (isSuccess && data)
    return (
      <div
        className={
          "flex flex-col items-center justify-center truncate cursor-pointer"
        }
        onClick={() => copyToClipboard(data)}
      >
        <div>Signature: </div>
        <div>{truncateAddress(data)}</div>
      </div>
    );

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <Button
        disabled={isLoading}
        onClick={() => signMessage()}
        variant={"primary"}
      >
        Sign message
      </Button>
    </div>
  );
};