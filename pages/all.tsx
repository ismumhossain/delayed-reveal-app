import { ThirdwebNftMedia, useContract, useNFTs, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const All: NextPage = () => {
  const { contract } = useContract("0x22aCFfFF4B5A01EA8FA12D64814F9843324Cd743");
  const { data: nfts } = useNFTs(contract);

  const nftsInRows = [];
  const rowSize = 5;

  if (!nfts) {
    return <div>Loading...</div>;
  }

  for (let i = 0; i < nfts.length; i += rowSize) {
    nftsInRows.push(nfts.slice(i, i + rowSize));
  }

  return (
    <div>
      {nftsInRows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.cardcontainer}>
          {row.map((nft) => (
            <div className={styles.card} key={nft.metadata.id.toString()}>
              <ThirdwebNftMedia metadata={nft.metadata} />
              <h2>{nft.metadata.name}</h2>
              <h4>{nft.metadata.description}</h4>
              <div className={styles.buttoncontainer}>
                <Web3Button
                  className={styles.button}
                  accentColor="white"
                  contractAddress="0x22aCFfFF4B5A01EA8FA12D64814F9843324Cd743"
                  action={(contract) =>
                    contract.erc1155.claim(nft.metadata.id, 1)
                  }
                  onSuccess={(result) => alert("Success!")}
                >
                  Claim
                </Web3Button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default All;
