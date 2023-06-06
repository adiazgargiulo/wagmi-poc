import {FC} from 'react'
import {useEnsAvatar, useEnsResolver} from "wagmi";

enum SupportedChains {
    eth = 'eth', pol = 'pol'
}

interface EnsProfileProps {
    domain: `${string}.${keyof typeof SupportedChains}`
}

export const EnsProfile: FC<EnsProfileProps> = ({domain}) => {
    const {data: avatar, isError: avatarFetchError, isLoading} = useEnsAvatar({
        name: domain,
    })

    const {data: address, isError: addressFetchHasError, isLoading: loadingAddress} = useEnsResolver({
        name: domain,
    })

    console.log('avatar', avatar, 'address', address)

    if (isLoading || loadingAddress) return <div>Fetching data…</div>

    return (<div>
            {avatarFetchError || addressFetchHasError ? `We couldn't fetch data for the given domain ${domain}` : ''}
            {!avatarFetchError && !addressFetchHasError && <div>User: {avatar} - {address} </div>}
        </div>)
}