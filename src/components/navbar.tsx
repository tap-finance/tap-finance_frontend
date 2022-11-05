export const Navbar = () => {
  return (
    <div className="navbar" style={{ background: "#1c2c58" }}>
      <div className="flex-1">
        <a href="/">
          <img
            src="/icons/dappstopLogo.svg"
            className="h-5 pl-3"
            alt="dappStopLogo"
          />
        </a>
      </div>
      <div className="flex-none">{/* <ConnectButton /> */}</div>
    </div>
  );
};
