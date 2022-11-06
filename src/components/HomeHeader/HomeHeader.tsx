const HomeHeader = () => {
  return (
    <div className="flex">
      <div className="ml-14 p-16">
        <p className="pb-16 text-5xl">
          #1 One-Stop access for providing NFT liquidity
        </p>
        <p className="text-2xl text-gray-500">
          Tap.finance is here for all of your NFT liquidity needs, using a
          variety of incredible resources to bring you the most optimised path
          forward.
        </p>
      </div>
      <div className="pr-16">
        <p className="text-black text-opacity-0 text-3xl ">
          #1 One-Stop access for providing NFT liquidity
        </p>
        <img
          className="rounded-lg border-2"
          style={{ height: "auto", minWidth: "600px" }}
          src={require("../icons/heroImage.png")}
          alt="drop"
        />
      </div>
    </div>
  );
};
export default HomeHeader;
