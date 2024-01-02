"use client";
import { NextPage } from "next";
import { ContractsView } from "../components/views/contract-view";
import { Input } from "../components/atoms/input";
import { Button } from "../components/atoms/button";
import { useForm } from "react-hook-form";

type ContractFormInput = {
  contractAddress: `0x${string}`;
};

export const ContractsPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ContractFormInput>({
    defaultValues: {
      contractAddress: `0x41723a346daE8c0c8487dFB3857828174B4fBd72`,
    },
  });

  const contractAddress = getValues("contractAddress");

  const handleChangeContract = (data: ContractFormInput) => {
    console.log(data);
    // return setContractAddress(event.target.);
  };

  return (
    <div>
      <div className="my-6 ">
        <form
          className="w-full flex flex-col gap-y-2 justify-center items-center"
          onSubmit={handleSubmit(handleChangeContract)}
        >
          <Input
            variant={"primary"}
            {...register("contractAddress", { required: true })}
          ></Input>
          <Button variant={"primary"} type="submit">
            Change contract
          </Button>
        </form>
      </div>
      {contractAddress && <ContractsView contractAddress={contractAddress} />}
    </div>
  );
};

export default ContractsPage;
