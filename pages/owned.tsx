import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const All: NextPage = () => {
  const {contract} = useContract (
    "0xF713659BeDA87Ab02414e010f6980AC414e8e58F"
  )
  const address = useAddress()

  const {data: nfts} = useOwnedNFTs(
    contract,
    address,
  );

  return (
    <div>
      <div className={styles.cardcontainer}>
        {nfts?.map((nft) => (
        <div className={styles.card} key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia metadata={nft.metadata} />
            <h2>{nft.metadata.name}</h2>
            <h4>{nft.metadata.description}</h4>
        </div>
      ))}
      </div>
    </div>
  )
};

export default All;
