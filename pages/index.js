import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs, currentAccount } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if(currentAccount) {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
      });
    }
   
  }, []);

  //CREATOR LIST
  const creators = getTopCreators(nfts);
  console.log(creators);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
     
      
      
      
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
     
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
            {nfts.length == 5 ? <Loader /> : <NFTCard NFTData={nfts} />}

     
       <Title
        heading="PDF Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
            {nfts.length == 5 ? <Loader /> : <NFTCard NFTData={nfts} />}
            <Title
        heading="🎬 Videos Collection"
        paragraph="
Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome."
      />
            {nfts.length == 5 ? <Loader /> : <NFTCard NFTData={nfts} />}
      <Brand />
      
    </div>
  );
};

export default Home;
