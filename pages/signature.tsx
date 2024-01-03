import {SignMessage} from "../components/signature/SignMessage";
import {SignTypedData} from "../components/signature/SignTypedData";
import {Title} from "../components/atoms/text";


const SignaturePage = () => {
    return (
      <div className={"py-8"}>
        <div className={"my-8 text-center"}>
          <Title variant={"h1"} text={"Signatures"} />
        </div>
        <div
          className={
            "flex flex-row gap-2 items-center justify-center w-full max-w-5xl mx-auto"
          }
        >
          <div className={"w-1/2"}>
            <SignMessage />
          </div>
          <div className={"w-1/2"}>
            <SignTypedData />
          </div>
        </div>
      </div>
    );
}

export default SignaturePage;