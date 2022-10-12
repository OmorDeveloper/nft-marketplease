import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
          <a href="/">
            <p className={Style.footer_box_social_logo}>Paytusker LLC</p>
            {/* <DiJqueryLogo className={Style.footer_box_social_logo} /> */}
          </a>
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className={Style.footer_social}>
            <a href="https://m.facebook.com/#!/TuPublish/?tsid=0.584001426281142&source=result">
              <TiSocialFacebook />
            </a>
            <a href="https://www.linkedin.com/company/tupublish/">
              <TiSocialLinkedin />
            </a>
            <a href="https://twitter.com/paytusker">
              <TiSocialTwitter />
            </a>
            <a href="https://youtube.com/channel/UCgIsSYLJzBLOl5yRhDlwPaQ">
              <TiSocialYoutube />
            </a>
            <a href="https://www.instagram.com/chaintusker/">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
         
          <div className={Style.subscribe_box_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;