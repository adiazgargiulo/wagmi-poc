import { useContractRead, useContractWrite } from 'wagmi'
import { erc20ABI } from 'wagmi'
import {Button} from "../components/atoms/button";
import {Text, Title} from "../components/atoms/text";
import {ReadContract} from "../components/contracts/read";
import {parseEther} from "viem";
import {ApproveContract} from "../components/contracts/approve";

const RequestContracts = () => {

    return (
        <div className={'py-8 items-center justify-center flex flex-col'}>
            <Title variant={'h1'} text={'Requests to contract'} />
            <ReadContract />
            <ApproveContract />
        </div>
    )
}
export default  RequestContracts