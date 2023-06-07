import {erc20ABI, useContractWrite} from "wagmi";
import {parseEther} from "viem";
import {Button} from "../atoms/button";

export const ApproveContract = () => {
    const {
        data,
        isLoading,
        isError ,
        error,
        write
    } = useContractWrite({
        address: '0xEFC9Ee2688318154Ac66677E775dc0d518257263',
        abi: erc20ABI,
        functionName: 'approve',
        args: ["0x20209DD505b94731D7cFDe8a765012B876917928", parseEther(`0.001`)]
    })

    if (isLoading) return <div className={'text-center'}>Loading...</div>
    if (isError && error) return <div className={'text-center'}>Error {JSON.stringify(error)}</div>

    return (
        <div className={'py-8'}>
            <Button variant={"primary"} onClick={() => write()}> Approve </Button>
            {data && JSON.stringify(data)}
        </div>
    )
}