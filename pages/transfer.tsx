import {TransferBtn} from "../components/transactions/TransferBtn";
import {Input} from "../components/atoms/input";
import {useRef} from "react";

const TransferPage = () => {
    const destinationInputRef = useRef<HTMLInputElement | null>(null);
    const amountInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={'w-1/2 flex flex-col justify-center items-center gap-4 py-8'}>
            <Input variant="primary" type={'text'} ref={destinationInputRef} placeholder={'destination'} />
            <Input variant="primary" type={'number'} ref={amountInputRef} placeholder={'amount'} min={0} />
            <TransferBtn to={'0xc3aCE27643494c0Adc725563e55a4F6FC05B2F28'} amount={'0.01'} />
        </div>
    )
}

export default TransferPage;