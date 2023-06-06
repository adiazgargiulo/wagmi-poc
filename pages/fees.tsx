import { useFeeData } from 'wagmi'

const FeesPage = () => {
    const { data, isError, isLoading } = useFeeData()
    console.log('FeesPage',data);
    if (isLoading) return <div>Fetching fee data…</div>
    if (isError) return <div>Error fetching fee data</div>
    return <div>Fee data: {JSON.stringify(data?.formatted)}</div>
}
export default FeesPage;