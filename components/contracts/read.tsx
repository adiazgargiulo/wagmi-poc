import {erc20ABI, useContractReads} from "wagmi";
import React from "react";

export const ReadContract = () => {

    const { data, isError, isLoading} = useContractReads({
        contracts: [
            {
                address: '0x693ea3384f0C1Ad2B58d15623Dc326E2A380e1E0',
                abi: erc20ABI,
                functionName: 'decimals',
            },
            {
                address: '0x693ea3384f0C1Ad2B58d15623Dc326E2A380e1E0',
                abi: erc20ABI,
                functionName: 'name',
            },
            {
                address: '0x693ea3384f0C1Ad2B58d15623Dc326E2A380e1E0',
                abi: erc20ABI,
                functionName: 'symbol',
            }
        ]
    })

    if (isLoading) return <div className={'flex justify-center items-center flex-col'}>Loading...</div>
    if (isError) return <div className={'flex justify-center items-center flex-col'}>Error fetching decimals</div>

    return (
        <div className={'flex justify-center items-center flex-col'}>
            <span>decimals: {JSON.stringify(data)}</span>
        </div>
    )
}