import nftx from "../icons/NFTX.png";
import sudo from "../icons/Sudoswap.png";
import taplogo from "../icons/tap.logo.png";

const Liquidity = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl pb-10">Liquidity Sources</p>
      <div className="flex items-center">
        <div className="avatar   flex flex-col items-center">
          <div className="w-24 rounded-full mx-20 border-2 mb-3">
            <img src={sudo} alt="" />
          </div>
          <span className="badge badge-sm badge-outline w-20">Sudoswap</span>
        </div>
        <div className="avatar   flex flex-col items-center">
          <div className="w-24 rounded-full mx-20 border-2 mb-3">
            <img src={nftx} alt="" />
          </div>
          <span className="badge badge-sm badge-outline w-20">NFTX</span>
        </div>
        <div className="avatar   flex flex-col items-center">
          <div className="w-24 rounded-full mx-20 border-2 mb-3">
            <img src={taplogo} alt="" />
          </div>
          <span className="badge badge-sm badge-outline w-20">Tap.Finance</span>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
