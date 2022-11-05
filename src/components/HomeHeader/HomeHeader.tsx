import Home from "../Home/Home";


const HomeHeader = () => {

    return (
        <div>
            <div className="grid grid-flow-col gap-3">
                <div className="ml-14 col-span-3">
                    <p className="py-20 text-7xl">#1 One-Stop access for providing NFT liquidity</p>
                    <p className="text-4xl text-gray-500">Tap.finance is here for all of your NFT liquidity needs, using a variety of incredible resources to bring you the most optimised path forward.</p>
                </div>
                <div className=" col-span-3">
                    <p className="text-black text-opacity-0 text-3xl">#1 One-Stop access for providing NFT liquidity</p>
                    <img className="py-20 w-full" src={require('../icons/tap.logo.png')} />
                </div>
            </div>
        </div>

    );
}
export default HomeHeader;