import {Title} from "../components/atoms/text";
import {ReadContract} from "../components/contracts/read";
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