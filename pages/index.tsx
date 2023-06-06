import {ConnectButton} from '@rainbow-me/rainbowkit';
import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useAccount, useTransaction} from 'wagmi'
import Link from "next/link";
import {Title} from "../components/atoms/text";

const Home: NextPage = () => {
    const {connector: activeConnector, isConnected} = useAccount()

    return (
        <div className={styles.container}>
            <div className={'text-center mt-10'}>
                <Title variant={'h1'} text={'Home'}/>
            </div>
            <div className={styles.grid}>
                <Link href="/transactions">
                    <div className={styles.card}>
                        <h2>Transactions &rarr;</h2>
                        <p>Get transactions information on the fly</p>
                    </div>
                </Link>
                <Link href="/contracts">
                    <div className={styles.card}>
                        <h2>Contracts &rarr;</h2>
                        <p>Listen to contract events live, without pooling!</p>
                    </div>
                </Link>
                <Link href="/transfer">
                    <div className={styles.card}>
                        <h2>Transfer &rarr;</h2>
                        <p>Send transactions to the blockchain super easily</p>
                    </div>
                </Link>
                <Link href="/fees">
                    <div className={styles.card}>
                        <h2>Fees &rarr;</h2>
                        <p>Calculate fees cost depending on network status</p>
                    </div>
                </Link>
                <Link href="/signature">
                    <div className={styles.card}>
                        <h2>Signature &rarr;</h2>
                        <p>Sign payloads & messages to handle secure transactions</p>
                    </div>
                </Link>
                <Link href="/ens" >
                    <div className={'opacity-50 pointer-events-none'}>
                        <div className={styles.card}>
                            <h2>ENS &rarr;</h2>
                            <p>Resolve ENS transfers & get user information</p>
                        </div>
                    </div>
                </Link>
                <Link href="/sc">
                    <div className={styles.card}>
                        <h2>Smart Contract &rarr;</h2>
                        <p>Interact with smart contract and get list of tx on demand</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
