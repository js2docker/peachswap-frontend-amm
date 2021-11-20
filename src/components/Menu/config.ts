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
    href: '/coming-soon'
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
        href: 'https://pancakeswap.info/', // testnet address - to be changed
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
        label: "Docs",
        href: "https://juicypeachswap.gitbook.io/juicypeachswap/",
      },
    ],
  },

]

export default config
