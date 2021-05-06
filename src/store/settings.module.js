import { ItemsService, CommentsService } from "@/common/api.service";
import { FETCH_ITEM, FETCH_COMMENTS } from "./actions.type";
import { SET_ITEM, SET_COMMENTS } from "./mutations.type";

export const state = {
  item: {},
  comments: []
};

export const actions = {
  [FETCH_ITEM](context, itemSlug) {
    return ItemsService.get(itemSlug)
      .then(({ data }) => {
        context.commit(SET_ITEM, data.item);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [FETCH_COMMENTS](context, itemSlug) {
    return CommentsService.get(itemSlug)
      .then(({ data }) => {
        context.commit(SET_COMMENTS, data.comments);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ITEM](state, item) {
    state.item = item;
  },
  [SET_COMMENTS](state, comments) {
    state.comments = comments;
  }
};

export default {
  state,
  actions,
  mutations
};
