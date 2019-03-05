<template>
  <transition-group tag="div">
    <div
      key="illos"
      :class="{ 
    'intro' : (page === 'intros-slug'), 
    'group' : (page === 'group'), 
    'index' : (page === 'index') 
  }"
    >
      <v-container>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-single.svg" alt class="bird-single">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-1.svg" alt class="bird-1">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-2.svg" alt class="bird-2">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-3.svg" alt class="bird-3">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-4.svg" alt class="bird-4">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-5.svg" alt class="bird-5">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-main.svg" alt class="bird-main">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src alt>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/tree-branch-left.svg" width="200" class="left-branch">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/tree-branch-right.svg" width="200" class="right-branch">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs3>
            <img src="../static/images/logo.svg" alt key="logo" class="logo">
          </v-flex>
        </v-layout>
        <v-layout
          row
          justify-center
          align-center
          :class="{ 
    'intro' : (page === 'intros-slug'), 
    'group' : (page === 'group')
  }"
        >
          <v-flex xs3 sm2>
            <v-avatar size="120" class="profile-photo">
              <v-img :src="selectedUser.thumnail" alt>
                <div class="fill-height bottom-gradient"></div>
              </v-img>
            </v-avatar>
          </v-flex>
        </v-layout>
        <v-layout justify-center class="profile-name">
          <v-flex xs3 sm2>
            <h1>{{ selectedUser.title }}</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </transition-group>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      activeUser: "profile-photo",
      secondaryUser: "profile-photo-secondary"
    };
  },
  computed: {
    ...mapState(["page", "indexedUser", "userInfo"]),
    ...mapGetters(["selectedUser"])
  }
};
</script>

<style lang="scss" scoped>
@mixin group($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
  display: block;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}

.bird-single {
  opacity: 0;
}

.bird-1 {
  z-index: 1;
  @include group(-18px, -30px);
  transform: scale(0.2);
}

.bird-2 {
  z-index: 1;
  @include group(18px, 10px);
  transform: scale(0.2);
}

.bird-3 {
  z-index: 1;
  @include group(58px, 240px);
  transform: scale(0.2);
}

.bird-4 {
  z-index: 1;
  @include group(68px, 220px);
  transform: scale(0.2);
}

.bird-5 {
  z-index: 1;
  @include group(-50px, -60px);
  transform: scale(0.2);
}

.bird-main {
  @include group(-30px, -22px);
  transform: scale(0.18);
}

.right-branch {
  @include group(80px, 180px);
  transform: scale(0.6);
}

.left-branch {
  @include group(20px, 0);
  transform: scale(0.8);
}

.profile-photo {
  @include group(160px, 130px);
  backface-visibility: hidden;
  transition: 0.4s all ease-out;
}

.profile-name {
  @include group(290px, 140px);
}

//animations
.index {
  .profile-photo,
  .profile-name,
  .bird-1,
  .bird-2,
  .bird-3,
  .bird-4,
  .bird-5 {
    opacity: 0;
  }

  .logo {
    @include group(230px, 100px);
    transform: scale(1);
  }
}

.intro {
  .bird-1,
  .bird-2,
  .bird-3,
  .bird-4,
  .bird-5,
  .bird-main {
    opacity: 0;
  }

  .bird-single {
    opacity: 1;
    z-index: 1;
    @include group(60px, 56px);
    transform: scale(0.18) rotate(0.02turn);
  }

  .logo {
    @include group(100px, 110px);
    transform: scale(1);
  }

  .right-branch {
    @include group(160px, 10px);
    transform: scale(0.6) rotate(0.02turn);
  }

  .profile-photo {
    transform: scale(0.8);
  }
  .profile-name {
    transform: scale(0.9);
  }
}

.group {
  .logo {
    @include group(220px, 100px);
  }
  .profile-photo,
  .profile-name {
    opacity: 0;
  }
}

@media screen and (min-width: 700px) {
  .index {
    .left-branch {
      @include group(60px, 100px);
      transform: scale(1);
    }
    .right-branch {
      @include group(80px, 450px);
      transform: scale(1);
    }
    .bird-main {
      @include group(-30px, 180px);
      transform: scale(0.2);
    }
    .logo {
      @include group(230px, 300px);
      transform: scale(1);
    }
  }
  .group {
    .bird-1 {
      z-index: 1;
      @include group(75px, 150px);
      transform: scale(0.2);
    }

    .bird-2 {
      z-index: 1;
      @include group(40px, 30px);
      transform: scale(0.2);
    }

    .bird-3 {
      z-index: 1;
      @include group(100px, 560px);
      transform: scale(0.2);
    }

    .bird-4 {
      z-index: 1;
      @include group(120px, 500px);
      transform: scale(0.2);
    }

    .bird-5 {
      z-index: 1;
      @include group(0, 30px);
      transform: scale(0.2);
    }

    .bird-main {
      @include group(-60px, 180px);
      transform: scale(0.18);
    }
    .left-branch {
      @include group(80px, 100px);
      transform: scale(1.2);
    }
    .right-branch {
      @include group(150px, 500px);
      transform: scale(1);
    }
    .logo {
      @include group(220px, 310px);
      transform: scale(1);
    }
    .profile-photo {
      @include group(100px, 200px);
    }
  }

  .intro {
    .left-branch {
      @include group(70px, 100px);
      transform: scale(1);
    }
    .right-branch {
      @include group(80px, 450px);
      transform: scale(1);
    }
    .bird-single {
      @include group(-20px, 180px);
      transform: scale(0.2);
    }
    .logo {
      @include group(80px, 300px);
      transform: scale(1);
    }
    .profile-photo {
      @include group(160px, 330px);
    }
    .profile-name {
      @include group(300px, 340px);
    }
  }
}

@media screen and (min-width: 1200px) {
  // Home page
  .index {
    .left-branch {
      @include group(100px, 260px);
      transform: scale(1.3);
    }
    .right-branch {
      @include group(150px, 740px);
      transform: scale(1);
    }
    .bird-main {
      @include group(-50px, 400px);
      transform: scale(0.3);
    }
    .logo {
      transform: scale(2);
      @include group(250px, 520px);
    }
  }

  // Individual page
  .intro {
    .left-branch {
      @include group(120px, 200px);
      transform: scale(1.5);
    }
    .right-branch {
      @include group(200px, 860px);
      transform: scale(1);
    }
    .bird-single {
      @include group(40px, 300px);
      transform: scale(0.2);
    }
    .logo {
      @include group(120px, 550px);
      transform: scale(1.3);
    }
    .profile-photo {
      @include group(200px, 560px);
    }

    .profile-name {
      @include group(340px, 570px);
    }
  }

  // Team page
  .group {
    .bird-1 {
      z-index: 1;
      @include group(75px, 300px);
      transform: scale(0.2);
    }

    .bird-2 {
      z-index: 1;
      @include group(40px, 180px);
      transform: scale(0.2);
    }

    .bird-3 {
      z-index: 1;
      @include group(100px, 790px);
      transform: scale(0.2);
    }

    .bird-4 {
      z-index: 1;
      @include group(100px, 800px);
      transform: scale(0.2);
    }

    .bird-5 {
      z-index: 1;
      @include group(0, 180px);
      transform: scale(0.2);
    }

    .bird-main {
      @include group(-30px, 400px);
      transform: scale(0.18);
    }
    .left-branch {
      @include group(80px, 260px);
      transform: scale(1.2);
    }
    .right-branch {
      @include group(150px, 740px);
      transform: scale(1);
    }
    .logo {
      @include group(240px, 530px);
      transform: scale(1);
    }
    .profile-photo {
      @include group(200px, 200px);
    }
  }
}
</style>
