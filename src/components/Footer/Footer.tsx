import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="navbar justify-around" style={{ background: "#1c2c58" }}>
      <div className="flex flex-col items-start">
        <div className="pl-40">tap.finance</div>
        <div className="pl-40 text-zinc-500">
          ©tap.finance All rights reserved. Privacy Policy Terms of use
        </div>
        {/* <a href="/" style={{ paddingTop: "8px" }}>
          <h2>Stake</h2>
        </a> */}
      </div>
      <div>
        <div className="flex-none pr-5">
          <FaTwitter />
        </div>
        <div className="flex-none pr-5">
          <FaDiscord />
        </div>
        <div className="flex-none pr-5">
          <FaInstagram />
        </div>
      </div>
    </div>

    // <div style={{ background: "#1c2c58" }} className="py-2">
    //   <div className="flex">
    //     <div>
    //       <div className="pl-40">tap.finance</div>
    //       <div className="pl-40 text-zinc-500">
    //         ©tap.finance All rights reserved. Privacy Policy Terms of use
    //       </div>
    //     </div>
    //     <div className=" text-zinc-500">
    //       ©tap.finance All rights reserved. Privacy Policy Terms of use
    //     </div>
    //   </div>
    //   <div className=" col-span-3">
    //     <i className="bi bi-discord"></i>
    //   </div>
    // </div>
  );
};

export default Footer;
