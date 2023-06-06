import { FC } from "react";
import {Button} from "../atoms/button";
import {usePrepareSendTransaction, useSendTransaction} from "wagmi";
import {parseEther} from "viem";
import {Spinner} from "../atoms/spinner";

interface TransferBtnProps {
    to: string,
    amount: `${number}`,
}

export const TransferBtn: FC<TransferBtnProps> = ({ to, amount }) => {
    const {config} = usePrepareSendTransaction({
        to: to,
        value: parseEther(amount)
    })
    const {data, isLoading, isSuccess, sendTransaction} =
        useSendTransaction(config)

    return (
        <div className={'my-4'}>
            <Button variant={'primary'} disabled={!sendTransaction} onClick={() => sendTransaction?.()}>
                { isLoading && <Spinner/>}
                { isLoading ? 'Sending Transaction...' : 'Send Transaction'}
            </Button>
        </div>
    )
}