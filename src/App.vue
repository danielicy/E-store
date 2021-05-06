<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/TheHeader";
import Footer from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
