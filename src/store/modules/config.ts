import { Commit } from 'vuex'
import { configType, getConfig, setConfig } from '@/utils/configStore'
import { handleThemeChange } from '@/utils/theme'

const state: configType = {
  theme: 1
}

const mutations = {
  initConfig (state: configType, config: configType): void {
    state.theme = config.theme
    handleThemeChange(config.theme)
  },
  storeConfig (state: configType): void {
    setConfig(state)
  },
  updateTheme (state: configType, theme: number): void {
    state.theme = theme
  }
}

const actions = {
  async init ({ commit }: { commit: Commit }): Promise<void> {
    const configData = await getConfig()
    commit('initConfig', configData)
  },
  async update ({ commit }: { commit: Commit }, theme: number): Promise<void> {
    commit('updateTheme', theme)
    commit('storeConfig')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
