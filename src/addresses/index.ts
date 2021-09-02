import { constants } from '../constants'
import { Address } from './type'
export const addresses: { [chainId: number]: Address } = {
  1: {
    registry: '0x7Bd1a6561c740F7Bc3737806F4BeBC59496578CC',
    [constants.bridges.Hop]: '0xe0A222461297eC5aEB00300e7E4b4D7f4527c2BB',
    [constants.bridges.PolygonBridge]:
      '0x0E57ad390DB8DE60976ff19eb62C27DEaF4BCB67',
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
  5: {
    registry: '0xCB1463E75D57121135Eb037079F6C6B04d635822',
    [constants.bridges.Hop]: '0xCB6db7eff52E4558aBE5A03edA87093333ff7615',
    [constants.bridges.PolygonBridge]:
      '0xd2ed8218a109882c23e5B1371f22C00e621a6105',
    chainInfo: {
      chainId: 5,
      name: 'goerli',
      isL1: true,
    },
    extraData: {
      RootChainManagerProxy: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
      ERC20PredicateProxy: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',
      ERC721PredicateProxy: '0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b',
    },
  },
  42: {
    registry: '0x55aDfcd3a1493dd92DD583b194D075997CbDC4ab',
    [constants.bridges.Hop]: '0x3B32321a33690b98BC6D0264722aD98851F245BF',
    chainInfo: {
      chainId: 42,
      name: 'kovan',
      isL1: true,
    },
  },
  77: {
    registry: '0x0cc843ff7B3a2DDb2a8CD8AD632C7D0414ac5595',
    [constants.bridges.Hop]: '0x8260339a2Eab94464EB4Ff2A449F8e282343C8Ed',
    [constants.bridges.AnySwap]: '0x30196C29E733241F2d4A655C8622Faf5d27B77e3',
    chainInfo: {
      chainId: 77,
      name: 'sokol',
      isL1: false,
    },
  },
  80001: {
    registry: '0x7Bd1a6561c740F7Bc3737806F4BeBC59496578CC',
    [constants.bridges.Hop]: '0xe0A222461297eC5aEB00300e7E4b4D7f4527c2BB',
    [constants.bridges.AnySwap]: '0x0E57ad390DB8DE60976ff19eb62C27DEaF4BCB67',
    [constants.bridges.Hyphen]: '0xFB1B607F03311Ed21bd650F3D0c511BD8C9aA5ab',
    chainInfo: {
      chainId: 80001,
      name: 'mumbai',
      isL1: false,
    },
  },
  100: {
    registry: '0x1e7d31283Dc1fACd0aCFe8A71355aD04870DE6Ce',
    [constants.bridges.Hop]: '0xEbfC1C3BCbd31D69097664A9555ad8D7f6784e8A',
    [constants.bridges.AnySwap]: '0x0FDdf4922A19D61DB84Fbe4e823E80Bd1a4F22Be',
    chainInfo: {
      chainId: 100,
      name: 'xDai',
      isL1: false,
    },
  },
  137: {
    registry: '0xEbfC1C3BCbd31D69097664A9555ad8D7f6784e8A',
    [constants.bridges.Hop]: '0x0FDdf4922A19D61DB84Fbe4e823E80Bd1a4F22Be',
    [constants.bridges.AnySwapRouterV4]: '0x80589802C34858Fa9ae0C526bF8972D5fFc4d9DF',
    chainInfo: {
      chainId: 137,
      name: 'polygon',
      isL1: false,
    },
  },
  4: {
    registry: '0xBafCA3fba40EbB8D0Cf093Dc761D2BeE9A2F0DCf',
    [constants.bridges.Hop]: '0x1e7d31283Dc1fACd0aCFe8A71355aD04870DE6Ce',
    [constants.bridges.PolygonBridge]: '0xEbfC1C3BCbd31D69097664A9555ad8D7f6784e8A',
    [constants.bridges.ArbitrumBridge]: '0x0FDdf4922A19D61DB84Fbe4e823E80Bd1a4F22Be'
  }
}
