import {useFeeData} from 'wagmi'
import { Title } from "../components/atoms/text";

const FeesPage = () => {
  const { data, isError, isLoading } = useFeeData();

  if (isLoading) return <div className={"py-8"}>Fetching fee data…</div>;
  if (isError) return <div className={"py-8"}>Error fetching fee data</div>;
  return (
    <div className={"py-8"}>
      <div className={"my-8 text-center"}>
        <Title variant={"h1"} text={"Fees"} />
      </div>
      Fee data: {JSON.stringify(data?.formatted)}
    </div>
  );
};
export default FeesPage;