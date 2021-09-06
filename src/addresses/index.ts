import { constants } from '../constants'
import { Address } from './type'
export const addresses: { [chainId: number]: Address } = {
  80001: {
    registry: '0x72F8ba665D81931dBba1A0717D7a1BAf71d66246',
    [constants.bridges.Hop]: '0x589236f61b971919F49014F4633484DF356Dd2Fb',
    [constants.bridges.AnySwapRouterV4]: '0xeF9a0eb3e73f2c0A374a030ee3c7df528fB08828',
    [constants.bridges.Hyphen]: '0x8FC206D026E44b0fA88a3A0AEb53534f1300D789',
    [constants.middleware.OneInch]: '0x1765b308001753901c7A676d0E1cCE5d03e18dd0',
    chainInfo: {
      chainId: 80001,
      name: 'mumbai',
      isL1: false,
    },
  },
  137: {
    registry: '0x33694ef1a68268C009f3FA0B6F012F748745A5E9',
    [constants.bridges.Hop]: '0x242D296f4CFfD6eA0ea030194396ab5a4eb11a54',
    [constants.bridges.AnySwapRouterV4]: '0x5464f7297e44049Ac89587A6BfA4e1431a0F0c1c',
    [constants.bridges.Hyphen]: '0xE30AEE439a4b5355386444D38e7495d7fd6B8249',
    [constants.middleware.OneInch]: '0xfD4C7083dBB0e80867011ef84b5FC9dA80D63E17',

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
    [constants.bridges.ArbitrumBridge]: '0x0FDdf4922A19D61DB84Fbe4e823E80Bd1a4F22Be',
     chainInfo: {
      chainId: 4,
      name: 'rinkeby',
      isL1: true,
    },
  }
}
