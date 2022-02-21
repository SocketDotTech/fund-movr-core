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
    [constants.bridges.Hyphen]: '0xBE51D38547992293c89CC589105784ab60b004A9',
    [constants.middleware.OneInch]:
      '0x5800249621DA520aDFdCa16da20d8A5Fc0f814d8',

    routeIds: {
      [constants.bridges.Hop]: 1,
      [constants.bridges.PolygonBridge]: 2,
      [constants.bridges.ArbitrumBridge]: 3,
      [constants.bridges.AnySwapRouterV4]: 4,
      [constants.bridges.Hyphen]: 5,
      [constants.middleware.OneInch]: 6,
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
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.middleware.OneInch]: 3,
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
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.middleware.ZeroX]: 3,
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
      '0x565810cbfa3Cf1390963E5aFa2fB953795686339',
      [constants.middleware.OneInch]: '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.bridges.Hyphen]: 2,
      [constants.middleware.OneInch]: 3,
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
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
      [constants.middleware.OneInch]:
      '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
    routeIds: {
      [constants.bridges.Hop]: 1,
      [constants.middleware.OneInch]: 3,
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
      '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
      [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
      [constants.middleware.OneInch]: '0xaa3d9fA3aB930aE635b001d00C612aa5b14d750e',
    routeIds: {
      [constants.bridges.Hop]: 1,
      [constants.bridges.AnySwapRouterV4]: 2,
      [constants.middleware.OneInch]: 4,
    },
    chainInfo: {
      chainId: 42161,
      name: 'Arbitrum',
      isL1: false,
    },
  },

  100: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [constants.middleware.OneInch]: '0x565810cbfa3Cf1390963E5aFa2fB953795686339',
    routeIds: {
      [constants.bridges.Hop]: 1,
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
    [constants.bridges.Hop]: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [constants.bridges.Hyphen]: '0x565810cbfa3Cf1390963E5aFa2fB953795686339',
    [constants.middleware.OneInch]:
      '0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0',
    routeIds: {
      [constants.bridges.Hop]: 1,
      [constants.bridges.AnySwapRouterV4]: 2,
      [constants.bridges.Hyphen]: 3,
      [constants.middleware.OneInch]: 5,
    },
    chainInfo: {
      chainId: 137,
      name: 'polygon',
      isL1: false,
    },
  },
}
