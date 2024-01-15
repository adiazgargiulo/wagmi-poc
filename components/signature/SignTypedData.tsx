import {useSignTypedData} from 'wagmi'
import {Button} from "../atoms/button";
import {copyToClipboard, truncateAddress} from "../utils";
import { types, message, domain } from "../utils/signature";

export const SignTypedData = () => {
  const { data, isError, isLoading, isSuccess, signTypedData } =
    useSignTypedData({
      domain,
      message,
      primaryType: "Mail",
      types,
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
        Error signing message
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
        variant={"primary"}
        onClick={() => signTypedData()}
      >
        Sign typed data
      </Button>
    </div>
  );
};