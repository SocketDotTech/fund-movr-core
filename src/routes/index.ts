import { constants } from '../constants'

export const routes = {
  1: {
    bridgeIds: {
      [constants.bridges.Hop]: 1,
      [constants.bridges.PolygonBridge]: 2,
      [constants.bridges.ArbitrumBridge]: 3,
      [constants.bridges.AnySwapRouterV4]: 4,
      [constants.bridges.Hyphen]: 5,
      [constants.bridges.OptimismBridge]: 8,
      [constants.bridges.Celer]: 9,
    },
    middlewareIds: {
      [constants.middleware.OneInch]: 7,
    },
    bridgeNames: {
      1: constants.bridges.Hop,
      2: constants.bridges.PolygonBridge,
      3: constants.bridges.ArbitrumBridge,
      4: constants.bridges.AnySwapRouterV4,
      5: constants.bridges.Hyphen,
      8: constants.bridges.OptimismBridge,
      9: constants.bridges.Celer,
    },
    middlewareNames: {
      7: constants.middleware.OneInch,
    },
  },
  56: {
    bridgeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.bridges.Celer]: 4,
    },
    middlewareIds: {
      [constants.middleware.OneInch]: 3,
    },
    bridgeNames: {
      1: constants.bridges.AnySwapRouterV4,
      4: constants.bridges.Celer,
    },
    middlewareNames: {
      3: constants.middleware.OneInch,
    },
  },
  100: {
    bridgeIds: {
      [constants.bridges.Hop]: 4,
    },
    bridgeNames: {
      4: constants.bridges.Hop,
    },
    middlewareNames: {
      2: constants.middleware.OneInch,
    },
    middlewareIds: {
      [constants.middleware.OneInch]: 2,
    },
  },
  42: {
    bridgeIds: {
      [constants.bridges.Hop]: 1,
    },
    bridgeNames: {
      1: constants.bridges.Hop,
    },
  },
  5: {
    bridgeIds: {
      [constants.bridges.Hop]: 1,
      [constants.bridges.PolygonBridge]: 2,
    },
    bridgeNames: {
      1: constants.bridges.Hop,
      2: constants.bridges.PolygonBridge,
    },
  },
  80001: {
    bridgeIds: {
      [constants.bridges.Hop]: 1,
      [constants.bridges.Hyphen]: 2,
    },
    bridgeNames: {
      1: constants.bridges.Hop,
      2: constants.bridges.Hyphen,
    },
  },
  137: {
    bridgeIds: {
      [constants.bridges.Hop]: 7,
      [constants.bridges.AnySwapRouterV4]: 2,
      [constants.bridges.Hyphen]: 3,
      [constants.bridges.Celer]: 8
    },
    bridgeNames: {
      7: constants.bridges.Hop,
      2: constants.bridges.AnySwapRouterV4,
      3: constants.bridges.Hyphen,
      8: constants.bridges.Celer
    },
    middlewareIds: {
      [constants.middleware.OneInch]: 5,
    },
    middlewareNames: {
      5: constants.middleware.OneInch,
    },
  },
  4: {
    bridgeIds: {
      [constants.bridges.ArbitrumBridge]: 1,
    },
    bridgeNames: {
      1: constants.bridges.ArbitrumBridge,
    },
  },
  250: {
    bridgeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.bridges.Celer]: 4,
    },
    bridgeNames: {
      1: constants.bridges.AnySwapRouterV4,
      4: constants.bridges.Celer
    },
    middlewareIds: {
      [constants.middleware.ZeroX]: 3,
    },
    middlewareNames: {
      3: constants.middleware.ZeroX,
    },
  },
  10: {
    bridgeIds: {
      [constants.bridges.Hop]: 4,
      [constants.bridges.Across]: 5,
      [constants.bridges.Celer]: 6,
    },
    bridgeNames: {
      4: constants.bridges.Hop,
      5: constants.bridges.Across,
      6: constants.bridges.Celer
    },
    middlewareIds: {
      [constants.middleware.OneInch]: 3,
    },
    middlewareNames: {
      3: constants.middleware.OneInch,
    },
  },
  43114: {
    bridgeIds: {
      [constants.bridges.AnySwapRouterV4]: 1,
      [constants.bridges.Hyphen]: 2,
      [constants.bridges.Celer]:4, 
    },
    bridgeNames: {
      1: constants.bridges.AnySwapRouterV4,
      2: constants.bridges.Hyphen,
      4: constants.bridges.Celer
    },
    middlewareNames: {
      3: constants.middleware.OneInch,
    },
    middlewareIds: {
      [constants.middleware.OneInch]: 3,
    },
  },
  42161: {
    bridgeIds: {
      [constants.bridges.Hop]: 5,
      [constants.bridges.AnySwapRouterV4]: 2,
      [constants.bridges.Across]: 6,
      [constants.bridges.Celer]: 7
    },
    middlewareIds: {
      [constants.middleware.OneInch]: 4,
    },
    bridgeNames: {
      5: constants.bridges.Hop,
      2: constants.bridges.AnySwapRouterV4,
      6: constants.bridges.Across,
      7: constants.bridges.Celer
    },
    middlewareNames: {
      4: constants.middleware.OneInch,
    },
  },

  1313161554: {
    bridgeIds: {
      [constants.bridges.Celer]: 1,
    },
    bridgeNames: {
      1: constants.bridges.Celer,
    },
  },
}
