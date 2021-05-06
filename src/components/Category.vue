<template>  
  <span :class="className">{{name}}</span>
</template>

<script>
export default {
  name: "Category",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: "tag-pill tag-default"
    }
  },
  computed: {
    homeRoute: () => ({ name: "home-tag", params: { category: name } })
  }
};
</script>
