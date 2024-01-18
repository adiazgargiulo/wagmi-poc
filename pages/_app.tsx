import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  goerli,
  mainnet,
  polygon,
  polygonMumbai,
  rootstock,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { Toaster } from "react-hot-toast";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { rootstockTestnet } from "../types/rootstockTestnet";
import {
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { CustomRainbowKitBtn } from "../components/custom-rainbowkit/button";

const { chains, publicClient } = configureChains(
  [
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [goerli, polygonMumbai, rootstockTestnet]
      : [mainnet, polygon, rootstock]),
  ],
  [publicProvider()]
);

const customConnectors = connectorsForWallets([
  {
    groupName: "Suggested",
    wallets: [
      metaMaskWallet({
        projectId: "018d1c5e-a1fa-7086-951d-18aa050e348a",
        chains: chains,
      }),
      rainbowWallet({
        projectId: "018d1c5e-a1fa-7086-951d-18aa050e348a",
        chains: chains,
      }),
      ledgerWallet({
        projectId: "018d1c5e-a1fa-7086-951d-18aa050e348a",
        chains: chains,
      }),
    ],
  },
]);

const { connectors } = getDefaultWallets({
  appName: "Globant RainbowKit App",
  projectId: "018d1c5e-a1fa-7086-951d-18aa050e348a",
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
      <RainbowKitProvider
        chains={chains}
        showRecentTransactions={true}
        locale="es"
      >
        <Head>
          <title>GEERS</title>
          <meta
            name="format-detection"
            content="telephone=no, date=no, email=no, address=no"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <Toaster containerStyle={{ top: "85vh" }} />
        <section className={"bg-purple-400"}>
          <div className={"max-w-5xl m-auto "}>
            <div
              className={
                "mx-4 flex flex-row justify-between align-middle items-center py-8"
              }
            >
              <div className={""}>
                <Link href={"/"}>
                  <span className={"font-bold text-2xl cursor-pointer"}>
                    {" "}
                    GEERS{" "}
                  </span>
                </Link>
              </div>
              {/* <CustomRainbowKitBtn /> */}
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
