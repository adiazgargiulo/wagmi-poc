import {NextPage} from "next";
import {useContractEvent} from "wagmi";
import {erc20ABI} from 'wagmi'
import {useState} from "react";
import {TransactionHash} from "../types/Transactions";
import TxDetail from "../components/transactions/TxDetail";
import Image from "next/image";
import QRCode from 'qrcode'
import {Title} from "../components/atoms/text";

export const ContractsPage: NextPage = () => {

    const [transferHashes, setTransferHashes] = useState<TransactionHash[]>([])
    const [qrUrl, setQrUrl] = useState<string | undefined>(undefined)

    useContractEvent({
        address: '0x19D66Abd20Fb2a0Fc046C139d5af1e97F09A695e',
        abi: erc20ABI,
        eventName: 'Transfer',
        listener(transactions) {
            const tx: TransactionHash = transactions[0].transactionHash as TransactionHash
            if (tx) setTransferHashes((prev) => [tx, ...prev,])
        },
    })

    QRCode.toDataURL('0x19D66Abd20Fb2a0Fc046C139d5af1e97F09A695e')
        .then((url: string) => {
            console.log('qr', url)
            setQrUrl(url)
        })

    return (
        <div className={'my-4'}>
            <div className={'my-4 flex items-center align-middle justify-center'}>
                <div>
                    {qrUrl && <Image src={qrUrl} alt={'qr-with-address-to-scan'} width={100} height={100}/>}
                </div>
                <div>
                    Listening contract <br/> 0x19D66Abd20Fb2a0Fc046C139d5af1e97F09A695e
                </div>
            </div>
            <div className={'flex items-center justify-center'}>
                <Title variant={'h1'} text={'Transfers'}/>
            </div>
            {transferHashes.length === 0 && <div className={'my-4 text-center'}>No transfers yet !</div>}
            <div className={'my-4'}>
                {transferHashes.map((tx, index) => <div key={index}><TxDetail hash={tx}/></div>)}
            </div>
        </div>)
}

export default ContractsPage;
