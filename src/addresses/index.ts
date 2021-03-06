import { constants } from '../constants'
import { Address } from './type'
export const addresses: { [chainId: number]: Address } = {
  1: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0xd286595d2e3D879596FAB51f83A702D10a6db27b',
    [constants.bridges.PolygonBridge]:
      '0xa7649aa944b7dce781859c18913c2dc8a97f03e4',
    [constants.bridges.ArbitrumBridge]:
      '0x852C5DE08b9beB014caD171C16B12a8D7456ea3f',
    [constants.bridges.AnySwapRouterV4]:
      '0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB',
    [constants.bridges.Hyphen]: '0x17A89B7372866a0155bF14980973Ad4408A3145C',
    [constants.middleware.OneInch]:
      '0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0',
    [constants.bridges.OptimismBridge]: '0xA7f7e4fE8E4cdDCD9969Bd3fbcFF67000CD7DE47',
    [constants.bridges.Celer]: '0x6086c6451217241D8e42e134733A542095E13c47',

    routeIds: {
      [constants.bridges.Hop]: 1,
      [constants.bridges.PolygonBridge]: 2,
      [constants.bridges.ArbitrumBridge]: 3,
      [constants.bridges.AnySwapRouterV4]: 4,
      [constants.bridges.Hyphen]: 10,
      [constants.middleware.OneInch]: 7,
      [constants.bridges.OptimismBridge]: 8,
      [constants.bridges.Celer]: 9,
    },
    chainInfo: {
      chainId: 1,
      name: 'mainnet',
      isL1: true,
    },
    extraData: {
      ERC20PredicateProxy: '0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf',
      ERC721PredicateProxy: '0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD',
      RootChainManagerProxy: '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77',
    },
  },

  56: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.AnySwapRouterV4]:
      '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [constants.middleware.OneInch]:
      '0xd286595d2e3D879596FAB51f83A702D10a6db27b',
    [constants.bridges.Celer]: '0x06714dD1783C7Eb28c918156727bfD3aef8A4B8D',
    [constants.bridges.Hyphen]: '0x3f367Bf9F7dcC55d97cF311b71Fb9F41e415531A',
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.middleware.OneInch]: 3,
      [constants.bridges.Celer]: 4,
      [constants.bridges.Hyphen]: 5,
    },
    chainInfo: {
      chainId: 56,
      name: 'bsc',
      isL1: false,
    },
  },
  250: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.AnySwapRouterV4]:
      '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
      [constants.middleware.ZeroX]:
      '0xA7649aa944b7Dce781859C18913c2Dc8A97f03e4',
    [constants.bridges.Celer]: '0xF51e426240E1C0b63dC7F7ec8b172376487329E3',
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.middleware.ZeroX]: 3,
      [constants.bridges.Celer]: 4
    },
    chainInfo: {
      chainId: 250,
      name: 'fantom',
      isL1: false,
    },
  },
  43114: {
    registry: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
      [constants.bridges.Hyphen]:
      '0x1D6811553Aff8231aDd04A84F300b89E15D99EA4',
      [constants.middleware.OneInch]: '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
      [constants.bridges.Celer]: '0xb584D4bE1A5470CA1a8778E9B86c81e165204599',
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.bridges.Hyphen]: 5,
      [constants.middleware.OneInch]: 3,
      [constants.bridges.Celer]: 4,
    },
    chainInfo: {
      chainId: 43114,
      name: 'Avalanche',
      isL1: false,
    },
  },
  10: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]:
      '0xaa3d9fA3aB930aE635b001d00C612aa5b14d750e',
      [constants.middleware.OneInch]:
      '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
    [constants.bridges.Across]: '0x2ddf16ba6d0180e5357d5e170ef1917a01b41fc0',
    [constants.bridges.Celer]: '0xb584D4bE1A5470CA1a8778E9B86c81e165204599',
    routeIds: {
      [constants.bridges.Hop]: 4,
      [constants.middleware.OneInch]: 3,
      [constants.bridges.Across]: 5,
      [constants.bridges.Celer]: 6,
    },
    chainInfo: {
      chainId: 10,
      name: 'Optimism',
      isL1: false,
    },
  },
  42161: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]:
      '0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB',
      [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
      [constants.middleware.OneInch]: '0xaa3d9fA3aB930aE635b001d00C612aa5b14d750e',
      [constants.bridges.Across]: '0xbeC6222b2Ff95735Ee83cA20dA9F190deAbA6489',
      [constants.bridges.Celer]: '0x3f367Bf9F7dcC55d97cF311b71Fb9F41e415531A',
    routeIds: {
      [constants.bridges.Hop]: 5,
      [constants.bridges.AnySwapRouterV4]: 2,
      [constants.middleware.OneInch]: 4,
    [constants.bridges.Across]: 6,
      [constants.bridges.Celer]: 7,
    },
    chainInfo: {
      chainId: 42161,
      name: 'Arbitrum',
      isL1: false,
    },
  },

  100: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0x852C5DE08b9beB014caD171C16B12a8D7456ea3f',
    [constants.middleware.OneInch]: '0x565810cbfa3Cf1390963E5aFa2fB953795686339',
    routeIds: {
      [constants.bridges.Hop]: 4,
      [constants.middleware.OneInch]: 2,
    },
    chainInfo: {
      chainId: 100,
      name: 'xdai',
      isL1: false,
    },
  },

  137: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0x03027410f25c527d5aeb3e6e56a6389611dcb2a9',
    [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [constants.bridges.Hyphen]: '0x64107EB9DC50E79Fb3977b9D6C927f9B9C5Bd218',
    [constants.middleware.OneInch]:
      '0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0',
    [constants.bridges.Celer]: '0xe48AE3B68f0560d4aaA312E12fD687630C948561',
    routeIds: {
      [constants.bridges.Hop]: 7,
      [constants.bridges.AnySwapRouterV4]: 2,
      [constants.bridges.Hyphen]: 9,
      [constants.middleware.OneInch]: 5,
      [constants.bridges.Celer]: 8
    },
    chainInfo: {
      chainId: 137,
      name: 'polygon',
      isL1: false,
    },
  },

  1313161554: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Celer]: '0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB',
    routeIds: {
      [constants.bridges.Celer]: 1,
    },
    chainInfo: {
      chainId: 1313161554,
      name: 'Aurora',
      isL1: false,
    },
  }
}
