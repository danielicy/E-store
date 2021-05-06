import { SET_ITEM } from "./mutations.type";

const initialState = {
  item: {
    created_at: "",
    updated_at: "",
    title: "",
    store_category_title: "",
    store_category_title_with_parent: {
      child_title: "",
      parent_title: ""
    },
    price: "",
    desc: "",
    images: [
      {
        id: Number,
        url: "",
        position: Number,
        alt: ""
      }
    ]
  },
  categories: []
};

export const state = { ...initialState };

export const actions = {};

export const mutations = {
  [SET_ITEM](state, item) {
    state.item = item;
  }
};

const getters = {
  item(state) {
    return state.item;
  },
  comments(state) {
    return state.comments;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
