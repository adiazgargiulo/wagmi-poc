import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import {ConnectButton, getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { goerli, mainnet, polygon, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Toaster } from 'react-hot-toast';
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';

const { chains, publicClient } = configureChains(
    [
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli, polygonMumbai] : [mainnet, polygon]),
    ],
    [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Globant RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} showRecentTransactions={true}>
          <Head>
            <title>GEERS</title>
            <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
            <link href="/favicon.ico" rel="icon" />
          </Head>
          <Toaster containerStyle={{ top: '85vh' }}/>
          <section className={'bg-purple-400'}>
            <div className={'max-w-5xl m-auto '}>
              <div className={'mx-4 flex flex-row justify-between align-middle items-center py-8'}>
                <div className={''}>
                  <Link href={'/'}>
                    <span className={'font-bold text-2xl cursor-pointer'}> GEERS </span>
                  </Link>
                </div>
                <ConnectButton />
              </div>
            </div>
          </section>
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
          <Analytics />
        </RainbowKitProvider>
      </WagmiConfig>
  );
}

export default MyApp;
