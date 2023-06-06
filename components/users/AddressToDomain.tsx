import { useEnsName } from 'wagmi'
import {UserAddress} from "../../types/Transactions";

export const AddressToDomain = ({ address }: { address: UserAddress }) => {
    const { data, isError, isLoading } = useEnsName({
        address,
    })

    if (isLoading) return <div>Fetching name…</div>
    if (isError) return <></>

    return <div>{data}</div>
}