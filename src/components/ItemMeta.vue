<template>
  <div class="image">
    <img
      class="thmb"
      v-if="item.images[0]"
      :src="item.images[0].url"
      alt="KonimBo"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemMeta",
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    actions: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
<style scoped>
.thmb {
  width: 60%;
  max-width: 400px;
  float: left;
  max-height: 240px;
  margin: 10% 2% 10% 10%;

  border: forestgreen solid 5px;
  border-radius: 10px;
}

@media screen and (max-width: 320px) {
  .image {
    width: 80%;
    margin: 1% 2% 1% 1%;
  }
}
@media screen and (max-width: 1204px) {
  image. {
    width: 60%;
    margin: 10% 2% 10% 10%;
  }
}

.image {
  position: absolute;
  float: left;
}
</style>
