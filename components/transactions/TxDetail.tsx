import {useTransaction} from "wagmi";
import {TransactionHash} from "../../types/Transactions";
import {AddressToDomain} from "../users/AddressToDomain";

interface TxDetailProps {
    hash: TransactionHash
}

const TxDetail = ({hash}: TxDetailProps) => {

    const {data, isError, isLoading, error} = useTransaction({
        hash: hash,
    })

    if (isError) return (<> Error... {JSON.stringify(error)} </>);
    if (!data || isLoading) return (<> Loading... </>);

    return (
        <div className={'flex border-2 my-2 p-2 justify-between rounded-lg'}>
            <div>
                <div>Hash: {JSON.stringify(data.hash)}</div>
                <div>from: {JSON.stringify(data.from)} - <AddressToDomain address={data.from}/></div>
                <div>to: {JSON.stringify(data?.to)} - {data.to && <AddressToDomain address={data.to}/>} </div>
            </div>
            <div className={'flex flex-col items-end'}>
                <div>nonce: {JSON.stringify(data?.nonce)}</div>
                <div>value: {JSON.stringify(data?.value.toString())}</div>
                <div>blockNumber: {JSON.stringify(data?.blockNumber?.toString())}</div>
            </div>
        </div>
    )
}

export default TxDetail;