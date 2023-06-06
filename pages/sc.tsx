import {useWatchPendingTransactions} from 'wagmi'
import {TransactionHash} from "../types/Transactions";
import {useState} from "react";
import {Title} from "../components/atoms/text";

const SmartContractInteraction = () => {

    const [txHashes, setTxHashes] = useState<TransactionHash[]>([])

    useWatchPendingTransactions({
        listener: (hashes) => setTxHashes((previous) => [...hashes, ...previous]),
    })

    return (
        <div className={'py-8'}>
            <Title variant={'h1'} text={'Pending Transactions List'}/>
            <div className={'py-8'}>
                {txHashes.map((txHash) => {
                    return (
                        <div key={txHash} className={'text-center cursor-pointer hover:text-red-800'}>
                            <a href={`https://mumbai.polygonscan.com/tx/${txHash}`} target={'_blank'}
                               rel={'noreferrer'}>
                                {txHash}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SmartContractInteraction;