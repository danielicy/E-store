import { ItemsService } from "@/common/api.service";
import { FETCH_ITEMS, FETCH_ITEM, FETCH_CATEGORIES } from "./actions.type";
import { FETCH_START, FETCH_END, SET_ITEM } from "./mutations.type";

const state = {
  categories: [],
  items: [],
  isLoading: true 
};

const getters = { 
  items(state) {
    return state.items;
  },
  isLoading(state) {
    return state.isLoading;
  },
  categories(state) {
    return state.categories;
  }
};

const actions = {
  [FETCH_ITEMS]({ commit }, params) {
    commit(FETCH_START);

    return ItemsService.get(params)
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [FETCH_ITEM](context, itemSlug, prevItem) {
    if (prevItem !== undefined) {
      return context.commit(SET_ITEM, prevItem);
    }

    context.commit(
      SET_ITEM,
      state.items.find(item => item.title === itemSlug)
    );
    return state.items[0];
  },
  [FETCH_CATEGORIES](context, category) {
    context.commit(
      SET_ITEM,
      state.items.find(item => item.title === category)
    );
    return state.items[0];
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, items) {
    const categories = items.map(cat => cat.store_category_title);
    state.categories = [...new Set(categories)];

    state.items = items;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
