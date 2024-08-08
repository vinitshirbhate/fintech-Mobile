import { useLocalSearchParams } from "expo-router";

const API_KEY = process.env.COINMARKETCAP_API_KEY;

export async function GET(request: Request) {
  //   const { ids } = useLocalSearchParams();
  //   const response = await fetch(
  //     `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
  //     {
  //       headers: {
  //         "X-CMC_PRO_API_KEY": API_KEY!,
  //       },
  //     }
  //   );
  //   const res = await response.json();
  //   return new Response(JSON.stringify(res));
  return Response.json(data);
}

const data = {
  "1": {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    category: "coin",
    description:
      "Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,737,193. The last known price of Bitcoin is 58,958.93287942 USD and is up 5.07 over the last 24 hours. It is currently trading on 11630 active market(s) with $41,429,624,614.54 traded over the last 24 hours. More information can be found at https://bitcoin.org/.",
    slug: "bitcoin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    subreddit: "bitcoin",
    notice: "",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "bitcoin-ecosystem",
      "ftx-bankruptcy-estate",
    ],
    "tag-names": [
      "Mineable",
      "PoW",
      "SHA-256",
      "Store Of Value",
      "State Channel",
      "Coinbase Ventures Portfolio",
      "Three Arrows Capital Portfolio",
      "Polychain Capital Portfolio",
      "Binance Labs Portfolio",
      "Blockchain Capital Portfolio",
      "BoostVC Portfolio",
      "CMS Holdings Portfolio",
      "DCG Portfolio",
      "DragonFly Capital Portfolio",
      "Electric Capital Portfolio",
      "Fabric Ventures Portfolio",
      "Framework Ventures Portfolio",
      "Galaxy Digital Portfolio",
      "Huobi Capital Portfolio",
      "Alameda Research Portfolio",
      "a16z Portfolio",
      "1Confirmation Portfolio",
      "Winklevoss Capital Portfolio",
      "USV Portfolio",
      "Placeholder Ventures Portfolio",
      "Pantera Capital Portfolio",
      "Multicoin Capital Portfolio",
      "Paradigm Portfolio",
      "Bitcoin Ecosystem",
      "FTX Bankruptcy Estate ",
    ],
    "tag-groups": [
      "OTHERS",
      "ALGORITHM",
      "ALGORITHM",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "PLATFORM",
      "CATEGORY",
    ],
    urls: {
      website: ["https://bitcoin.org/"],
      twitter: [],
      message_board: ["https://bitcointalk.org"],
      chat: [],
      facebook: [],
      explorer: [
        "https://blockchain.info/",
        "https://live.blockcypher.com/btc/",
        "https://blockchair.com/bitcoin",
        "https://explorer.viabtc.com/btc",
        "https://www.okx.com/web3/explorer/btc",
      ],
      reddit: ["https://reddit.com/r/bitcoin"],
      technical_doc: ["https://bitcoin.org/bitcoin.pdf"],
      source_code: ["https://github.com/bitcoin/bitcoin"],
      announcement: [],
    },
    platform: null,
    date_added: "2010-07-13T00:00:00.000Z",
    twitter_username: "",
    is_hidden: 0,
    date_launched: "2010-07-13T00:00:00.000Z",
    contract_address: [],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: false,
  },
};
