<template>
  <div>
    <app-navigation/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppNavigation from "~/components/AppNavigation.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>


<style>
/* common styles shared through the application */

body {
  background: #fafafa;
  color: #333;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.2;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited,
a:active {
  color: orangered;
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  font-family: "Playfair Display", serif;
  font-weight: normal;
}

.top {
  text-transform: uppercase;
  font-size: 14px;
  color: #666;
  padding: 0;
  margin: 30px 0 0;
}

hr {
  border-top: 1px solid #ccc;
  border-bottom: none;
  margin-top: 15px;
}

@media screen and (max-width: 600px) {
  main {
    flex-direction: column;
  }
  .intro {
    width: 100%;
  }
}

/* screen reader only */
.hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
