<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Tree of Life</h1>
        <p>Sell As Much As You Can.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              
              <li class="nav-item">
                <router-link
                  :to="{ name: 'home' }"
                  exact
                  class="nav-link"
                  active-class="active"
                >
                  Global Feed
                </router-link>
              </li>
              <li class="nav-item" v-if="category">
                <router-link
                  :to="{ name: 'home-tag', params: { category } }"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="ion-pound"></i> {{ category }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; 
import Category from "./../components/Category";
import { FETCH_CATEGORIES } from "@/store/actions.type";

export default {
  name: "home",
  components: {
    Category
  },
  mounted() {
    this.$store.dispatch(FETCH_CATEGORIES);     
  },  
  computed: {
    ...mapGetters([ "categories"]),
    category() {
      return this.$route.params.category;
    }
  }
};
</script>
