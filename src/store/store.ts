import Vue from 'vue';
import Vuex, { GetterTree, ActionTree, MutationTree } from 'vuex';

import { istFormStore } from './IstFormStore';

Vue.use(Vuex);

export interface IGrundState {
  count: number;
  message: string;
}

const getInitialState = (): IGrundState => {
  return {
    count: 0,
    message: 'Pænt goddag',
  };
};

export const getters: GetterTree<IGrundState, IGrundState> = {
  GetMessage: (state) => state.message,
  GetCount: (state) => state.count,
};

export const actions: ActionTree<IGrundState, IGrundState> = {
  incrementCount({ commit }) {
    commit('incrementCount');
  },
};

export const mutations: MutationTree<IGrundState> = {
  incrementCount(state: IGrundState) {
    state.count = state.count + 1;
  },
  setMessage(state: IGrundState, data) {
    state.message = data;
  },
};

export default new Vuex.Store({
  state: getInitialState(),
  getters,
  mutations,
  actions,
  modules: {
    istForm: istFormStore,
  },
});
