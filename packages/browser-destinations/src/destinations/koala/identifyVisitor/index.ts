import type { BrowserActionDefinition } from '../../../lib/browser-destinations'
import type { Settings } from '../generated-types'
import type { Payload } from './generated-types'
import type { KoalaSDK } from '../types'

const action: BrowserActionDefinition<Settings, KoalaSDK, Payload> = {
  title: 'Identify Visitor',
  description: 'Update visitor traits in Koala.',
  defaultSubscription: 'type = "identify"',
  platform: 'web',
  fields: {
    traits: {
      type: 'object',
      label: 'Traits',
      description: 'Traits to associate with the visitor in Koala.',
      required: true,
      default: { '@path': '$.traits' },
      defaultObjectUI: 'object'
    }
  },
  perform: (koala, { payload }) => {
    if (payload?.traits) {
      koala.identify(payload.traits).catch(() => {
        // Ignore
      })
    }
  }
}

export default action