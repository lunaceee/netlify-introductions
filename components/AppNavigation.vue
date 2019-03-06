<template>
  <header
    :class="{ 
    'intro with-shadow' : (page === 'intros-slug'), 
    'group with-shadow' : (page === 'group'), 
    'index' : (page === 'index') 
  }"
  >
    <div class="nav-wrapper">
      <nav>
        <ul>
          <nuxt-link exact to="/">
            <li>Home</li>
          </nuxt-link>
          <nuxt-link exact :to="selectedUser._path">
            <li>{{ selectedUser.title }}'s Home</li>
          </nuxt-link>
          <nuxt-link to="/group">
            <li>{{ selectedUser.title }}'s Team</li>
          </nuxt-link>
        </ul>

        <div @click="menuOpened = !menuOpened">
          <icon-base class="menu" icon-name="menu" width="28" height="28">
            <icon-three-dot/>
          </icon-base>
        </div>
        <app-menu-drawer :menuOpened="menuOpened"/>
      </nav>
    </div>
    <div>
      <app-nav-transition/>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { TimelineMax, Expo, Sine, Back } from "gsap";
import IconBase from "./IconBase.vue";
import IconThreeDot from "./IconThreeDot.vue";
import AppMenuDrawer from "./AppMenuDrawer.vue";
import AppNavTransition from "./AppNavTransition.vue";

export default {
  computed: {
    ...mapState(["page", "userInfo"]),
    ...mapGetters(["selectedUser"])
  },
  data() {
    return {
      isIndex: "page === index",
      saved: false,
      menuOpened: false
    };
  },
  components: {
    IconBase,
    IconThreeDot,
    AppMenuDrawer,
    AppNavTransition
  },
  methods: {
    openMenu() {
      TweenMax.to(".first", 0.2, {
        x: 18,
        ease: Sine.easeOut
      });
      TweenMax.to(".last", 0.2, {
        x: -18,
        ease: Sine.easeOut
      });
      TweenMax.staggerTo(
        ".first, .middle, .last",
        0.2,
        {
          ease: Sine.easeOut
        },
        0.04
      );
    },
    closeMenu() {
      TweenMax.to(".first", 0.2, {
        x: 0,
        ease: Sine.easeIn
      });
      TweenMax.to(".last", 0.2, {
        x: 0,
        ease: Sine.easeIn
      });
      TweenMax.to(".first, .middle, .last", 0.2, {
        fill: "#EDE7F6"
      });
    }
  },
  watch: {
    menuOpened(val) {
      if (val) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    }
  }
};
</script>

<style scoped lang="scss">
header {
  width: 100vw;
  height: 300px;
  position: relative;
}

@mixin header($imgurl) {
  background: url($imgurl) center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 300px;
}

// animation

.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
  background: #000000;
}

@media screen and (max-width: 1200px) {
  .nav-wrapper {
    padding: 0 20px;
  }
}

ul {
  list-style: none;
  padding: 15px 0;
  li {
    display: inline-block;
    margin-right: 40px;
  }
  a,
  a:active,
  a:visited {
    color: white;
    text-decoration: none;
  }
}

@media screen and (max-width: 600px) {
  ul {
    display: none;
  }
}

.nuxt-link-active {
  font-weight: bold;
}

nav {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.menu {
  position: absolute;
  right: 0;
  top: 8px;
  cursor: pointer;
}
</style>
