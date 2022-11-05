import ConnectButton from "./ConnectButton";
import tapFinanceLogo from "./icons/tapFinanceLogo.png";

export const Navbar = () => {
  return (
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
  );
};
