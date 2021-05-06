<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        KonimBo
      </router-link>
      <span class="attribution">
        Are You Ready to Go to the Next Level?
        <a rel="noopener noreferrer" target="blank" href="https://www.linkedin.com/in/danieli-cywyak-0270935b/"
          >Built By Danieli Cywyak</a
        > 
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
