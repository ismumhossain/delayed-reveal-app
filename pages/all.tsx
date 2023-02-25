import { ThirdwebNftMedia, useContract, useNFTs, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const All: NextPage = () => {
  const {contract} = useContract (
    "0xF713659BeDA87Ab02414e010f6980AC414e8e58F"
  )
  console.log(contract)
  const {data: nfts} = useNFTs(contract)

  return (
    <div>
      <div className={styles.cardcontainer}>
        {nfts?.map((nft) => (
        <div className={styles.card} key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia metadata={nft.metadata} />
            <h2>{nft.metadata.name}</h2>
            <h4>{nft.metadata.description}</h4>
            <div className={styles.buttoncontainer}>
            <Web3Button className={styles.button}
            accentColor='white'
            contractAddress = "0xF713659BeDA87Ab02414e010f6980AC414e8e58F"
            action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
            onSuccess={(result) => alert("Success!")}
            >Claim</Web3Button>
        </div>
      </div>
      ))}
      </div>
    </div>
  )
};

export default All;
