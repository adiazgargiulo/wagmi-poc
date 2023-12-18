import type {NextPage} from 'next';
import {LinkCard} from "../components/atoms/Link/LinkCard";

const Home: NextPage = () => {

    return (
      <div className={"max-w-5xl"}>
        <div className={"grid grid-col-1 md:grid-cols-3"}>
          <LinkCard
            title={"Transactions"}
            description={"Get information from the transaction hash on the fly"}
            href={"/transactions"}
          />
          <LinkCard
            title={"Listen to Contracts"}
            description={"Listen to contract events live, without pooling!"}
            href={"/contracts"}
          />
          <LinkCard
            title={"Request to Contracts"}
            description={
              "Make contracts request typed safe with custom contract import"
            }
            href={"/request-contracts"}
          />
          <LinkCard
            title={"Transfer"}
            description={"Send transactions to the blockchain super easily"}
            href={"/transfer"}
          />
          <LinkCard
            title={"Fees"}
            description={"Calculate fees cost depending on network status"}
            href={"/fees"}
          />
          <LinkCard
            title={"Signature"}
            description={
              "Sign payloads & messages to handle secure transactions"
            }
            href={"/signature"}
          />
          {/* <LinkCard title={'ENS'} description={'Resolve ENS transfers & get user information'} href={'/ens'} disable={true} /> */}
          {/* <LinkCard title={'Smart Contract'} description={'Interact with smart contract and get list of tx on demand'} href={'/sc'} /> */}
        </div>
      </div>
    );
};

export default Home;
