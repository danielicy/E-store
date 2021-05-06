<template>
  <div>
    <input
      class="search-box"
      type="text"
      v-model="search"
      placeholder="Search for an item.."
    />

    <div class="categories">
      <span class="category reset-category" @click="clearCategories">X</span>
      <span
        @click="categorySelected(category)"
        v-for="(category, index) in categories"
        :name="category"
        :key="index"
        class="category"
      >
        {{ category }}
      </span>
    </div>

    <div v-if="isLoading" class="item-preview">Loading items...</div>
    <div v-else>
      <div v-if="items.length === 0" class="item-preview">
        No items are here... yet.
      </div>
      <div :key="selectedCategory">
        <ItemPreview
          v-for="(item, index) in filteredList"
          :item="item"
          :key="item.title + index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ItemPreview from "./VItemPreview";
import { FETCH_ITEMS } from "../store/actions.type";
import Category from "./../components/Category";

export default {
  name: "ItemList",
  components: {
    ItemPreview,
    Category
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    category: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      currentPage: 1,
      search: "",
      selectedCategory: ""
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      };
      if (this.category) {
        filters.category = this.category;
      }
      return {
        type,
        filters
      };
    },
    filteredList: {
      get: function() {
        let items = this.items.filter(item => {
          return item.title.toLowerCase().includes(this.search.toLowerCase());
        });

        if (this.selectedCategory)
          items = items.filter(
            item => item.store_category_title == this.selectedCategory
          );

        return items;
      },
      set: function(value) {
        this.$emit("update:search", value);
      }
    },
    XfilteredList() {
      let items = this.items.filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase());
      });

      if (this.selectedCategory)
        items = items.filter(
          item => item.store_category_title == this.selectedCategory
        );

      return items;
    },
    categoryFilter() {
      const items = this.filteredList();

      console.log(items);

      if (this.selectedCategory)
        return items.filter(
          item => item.store_category_title === this.selectedCategory
        );
      return items;
    },

    ...mapGetters([ "isLoading", "items", "categories"])
  },
  watch: {     
    type() {
      this.fetchItems();
    },
    category() {
      this.fetchItems();
    }
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.$store.dispatch(FETCH_ITEMS, this.listConfig);
    },
    categorySelected(category) {
      this.selectedCategory = category;
      this.filteredList = this.filteredList.filter(
        item => item.store_category_title === this.selectedCategory
      );
    },
    clearCategories() {
      this.selectedCategory = "";
    }
  }
};
</script>
<style scoped>
.search-box {
  margin: 10px;
  width: 70%;
}

.category {
  border: forestgreen 1px solid;
  border-radius: 10%;
  padding: 3px;
  margin: 5px;
  float: right;
  cursor: pointer;
}

.category:hover {
  background: rgb(218, 255, 223);
  scale: 1.1;
}
.categories {
  display: inline-block;
}

.reset-category {
  color: red;
  padding: 24px 12px ;
}
</style>
