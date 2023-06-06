import {useFeeData} from 'wagmi'

const FeesPage = () => {
    const {data, isError, isLoading} = useFeeData()

    if (isLoading) return <div className={'py-8'}>Fetching fee data…</div>
    if (isError) return <div className={'py-8'}>Error fetching fee data</div>
    return <div className={'py-8'}>Fee data: {JSON.stringify(data?.formatted)}</div>
}
export default FeesPage;