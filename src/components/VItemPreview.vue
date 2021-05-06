<template>
  <div class="item-preview">
    <router-link :to="itemLink" class="preview-link">
      <ItemMeta isPreview :item="item" />
      <div class="item-header">
        <h3 v-text="item.title" />

        <span class="category-name">{{ item.store_category_title }}</span>
      </div>

      <p v-text="item.desc" />
    </router-link>
  </div>
</template>

<script>
import ItemMeta from "./ItemMeta";
export default {
  name: "ItemPreview",
  components: {
    ItemMeta
  },
  props: {
    item: { type: Object, required: true }
  },
  computed: {
    itemLink() {
      return {
        name: "item",
        params: {
          slug: this.item.title
        }
      };
    }
  }
};
</script>
<style scoped>
.item-preview {
  border: green double 1px;
  height: 200px;
  margin: 2px;
}
img {
  width: 50px;
}
h3 {
  width: 70%;
  font-size: 1.2vw;

  position: relative;
}


.category-name {
  margin: 8% 15%;
}

.item-header {
  display: flex;
  flex-direction: column;
  float: right;
  align-items: end;
  margin: 12px;
  padding: 10px;
}

@media screen and (max-width: 320px) {
 

  h3{
    font-size: 3.2vw; 
    width: 40%;
  }
  .category-name {
  margin: 8% 2%;
}

.item-preview{
  height: 300px;
}
}
@media screen and (max-width: 1204px) {
   
}
</style>
