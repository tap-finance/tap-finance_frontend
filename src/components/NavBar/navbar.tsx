import ConnectButton from "./ConnectButton";
import tapFinanceLogo from "../icons/tapFinanceLogo.png";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()]
);
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
});

export const Navbar = () => {
  return (

    <WagmiConfig client={client}>
      <div className="navbar" style={{ background: "#1c2c58" }}>
        <div className="flex-1">
          <a href="/">
            <img
              src={tapFinanceLogo}
              className=""
              style={{ height: "60px" }}
              alt="logo"
            />
          </a>
          <a href="/" style={{ paddingTop: "8px" }}>
            <h2>Stake</h2>
          </a>
        </div>
        <div className="flex-none">
          <ConnectButton />
        </div>
      </div>
    </WagmiConfig>
  );
};