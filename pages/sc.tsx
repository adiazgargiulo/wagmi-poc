import { useWatchPendingTransactions } from 'wagmi'
import {TransactionHash} from "../types/Transactions";
import {useState} from "react";
import {Title} from "../components/atoms/text";

const SmartContractInteraction = () => {

    const [txHashes, setTxHashes] = useState<TransactionHash[]>([])

    useWatchPendingTransactions({
        listener: (hashes) => setTxHashes((previous) => [...hashes, ...previous]),
    })

    return (
        <>
            <Title variant={'h1'} text={'Pending Transactions List'}/>
            {txHashes.map((txHash) => {
                return (
                    <div key={txHash} className={'text-center cursor-pointer hover:text-red-800'}>
                        <a href={`https://mumbai.polygonscan.com/tx/${txHash}`} target={'_blank'} rel={'noreferrer'}>
                            {txHash}
                        </a>
                    </div>
                )
            })}
        </>
    )
}
export default SmartContractInteraction;