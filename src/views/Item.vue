<template>
  <div class="item-page">
    <div class="banner">
      <div class="container">
        <h3>{{ item.title }}</h3>
        <ItemMeta :item="item" :actions="true"></ItemMeta>
      </div>
      <div class="price">
        <h2>מחיר: {{ item.price | currency }}</h2>
      </div>
      <div class="row">
        <div class="column" v-for="image in item.images" :key="image.id">
          <img class="thumnbnail" :src="image.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import marked from "marked";
import store from "@/store";
import ItemMeta from "@/components/ItemMeta";
import { FETCH_ITEM } from "@/store/actions.type";

export default {
  name: "rwv-item",
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    ItemMeta
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([store.dispatch(FETCH_ITEM, to.params.slug)]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["item", "currentUser", "comments"])
  },
  methods: {
    parseMarkdown(content) {
      return marked(content);
    }
  },
  filters: {
    currency: value => {
      return parseInt(value) + "₪ ";
    }
  }
};
</script>
<style scoped>
.banner {
  height: 80vh;
}
h1 {
  float: right;
}

.price {
  text-align: center;
}

.thumnbnail {
  width: 40%;
  border: forestgreen solid 1px;
  border-radius: 10px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  border: forestgreen solid 5px;
  border-radius: 10px;
  background-color: white;
  width: 70%;
  text-align: center;
  margin: auto;
  position: relative;
  top: 120px;
}

/* Create two equal columns that sits next to each other */
.column {
  flex: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}
</style>
