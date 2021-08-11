import { constants } from '../constants'
import { Address } from './type'
export const addresses: { [chainId: number]: Address } = {
  5: {
    registry: '0xE1c57390e16697581108aEd6d6af34589FF003B1',
    [constants.bridges.Hop]: '0x5459b12b8e3d2ae06b1ea548b9867e7c244f8b64',
    [constants.bridges.PolygonBridge]: '0xbbd6bbcf144d814c593baa755afe1e2165ce3273',
    chainInfo: {
      chainId: 5,
      name: 'goerli',
      isL1: true,
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
    registry: '0x44b86641f0be14a76A7aC13e078f1721A58C594d',
    [constants.bridges.Hop]: '0x7900b1c27879c96676CB04147a412dbfcEC62AF4',
    [constants.bridges.AnySwap]: '0xE000893e4001295f458366Ec6670406b982592fD',
    chainInfo: {
      chainId: 80001,
      name: 'mumbai',
      isL1: false,
    },
  },
}
