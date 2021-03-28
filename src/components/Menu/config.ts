import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.juicypeachswap.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.juicypeachswap.com/'
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.juicypeachswap.com/#/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.juicypeachswap.com/farms'
  },
  // {
  //  label: 'Baskets',
  //  icon: 'PoolIcon',
  //  href: 'https://www.juicypeachswap.com/baskets'
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9512e7fD29c187B31b2405396EC4217624EEC08c', // testnet address - to be changed
      },
      //  {
      //  label: 'CoinGecko',
      //  href: 'https://www.coingecko.com/en/coins/goose-finance',
      //  },
      //  {
      //  label: 'CoinMarketCap',
      //  href: 'https://coinmarketcap.com/currencies/goose-finance/',
      //  },
      //  {
      //  label: 'AstroTools',
      //  href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      //  },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/JuicyPeachSwapDefi/",
      },
      {
        label: "Docs",
        href: "https://juicypeachswap.gitbook.io/juicypeachswap/",
      },
      {
        label: "Roadmap",
        href: "https://juicypeachswap.gitbook.io/juicypeachswap/roadmap",
      },
      {
        label: "Blog",
        href: "https://medium.com/@juicypeachswap",
      },
    ],
  },

]

export default config
