import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";

import {NFTCard, Title,  Loader,} from "../components/componentsindex";

import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const collection = () => {


  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);


  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items.reverse());
      setNftsCopy(items);
    });
  }, []);


  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.nftphoto} />

      <Title
        heading="Explore, collect, and sell NFTs"
      />
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}

      <Brand />
    </div>
  );
};

export default collection;
