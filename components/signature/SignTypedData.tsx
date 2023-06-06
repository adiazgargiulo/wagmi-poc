import {useSignTypedData} from 'wagmi'
import {Button} from "../atoms/button";
import {copyToClipboard, truncateAddress} from "../utils";

// All properties on a domain are optional
const domain = {
    name: 'Ether Mail', version: '1', verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const

// The named list of all type definitions
const types = {
    Person: [{name: 'name', type: 'string'}, {name: 'wallet', type: 'address'},],
    Mail: [{name: 'from', type: 'Person'}, {name: 'to', type: 'Person'}, {name: 'contents', type: 'string'},],
} as const

const message = {
    from: {
        name: 'Cow', wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    }, to: {
        name: 'Bob', wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    }, contents: 'Hello, Bob!',
} as const
export const SignTypedData = () => {


    const {data, isError, isLoading, isSuccess, signTypedData} = useSignTypedData({
        domain, message, primaryType: 'Mail', types,
    })

    if (isLoading) return <div className={'flex flex-col items-center justify-center'}>Signing message...</div>
    if (isError) return <div className={'flex flex-col items-center justify-center'}>Error signing message</div>
    if (isSuccess && data) return (
        <div className={'flex flex-col items-center justify-center truncate cursor-pointer'} onClick={() => copyToClipboard(data)}>
            <div>Signature: </div>
            <div>{truncateAddress(data)}</div>
        </div>
    )

    return (
        <div className={'flex flex-col items-center justify-center'}>
            <Button disabled={isLoading} variant={'primary'} onClick={() => signTypedData() }>
                Sign typed data
            </Button>
        </div>
    )
}