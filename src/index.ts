import { KiviPlugin, segment, http } from '@kivibot/core'

const { version } = require('../package.json')
const plugin = new KiviPlugin('demo', version)

const config = {}

plugin.onMounted(() => {
  Object.assign(config, plugin.loadConfig())
  plugin.saveConfig(config)

  plugin.onMessage(event => {
    const { raw_message } = event

    if (raw_message === 'hello') {
      const msgs = [segment.face(66), 'world']
      event.reply(msgs)
    }
  })
})

export { plugin }
