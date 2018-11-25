<template>
  <transition-group tag="div">
    <div v-for="(user, i) in userInfo" 
      :key="user.title" 
      :class="[user === selectedUser ? activeUser : secondaryUser]"
    >
      <nuxt-link exact :to="userInfo[i]._path">
        <img v-if="page === 'index'" src="../static/images/netlify-logo.png" />
        <img v-else :src="user.thumnail" alt="">
      </nuxt-link>
    </div>

    <button :class="follow" key="follow">
      <span>Follow</span>
    </button>

     <h2 key="profile-name" class="profile-name">
      <span v-if="page === 'group'" class="user-trip">{{ selectedUser.title }}</span>
      <span v-else-if="page === 'index'">Netlify</span>
      <span v-else>{{ selectedUser.title }}</span>
    </h2>

  </transition-group>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      following: false,
      follow: 'follow',
      followclass: 'active-follow',
      activeUser: 'profile-photo',
      secondaryUser: 'profile-photo-secondary',
    }
  },
  computed: {
    ...mapState(['page', 'indexedUser', 'userInfo']),
    ...mapGetters(['selectedUser']),
  }
}
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

.profile-photo {
  width: 200px;
  @include group(150px, 0);
  img {
    border-radius: 4px;
  }
}

.profile-photo-secondary {
  @include group(150px, 0);
  width: 200px;
  opacity: 0;
  transition: none;
  img {
    border-radius: 50% 50%;
  }
}

.profile-photo,
.profile-photo-secondary {
  img {
    transition: 0.4s all ease;
    width: 100%;
    cursor: pointer;
  }
}

.follow {
  font-weight: bold;
  width: 150px;
  transition: 1s all ease;
  @include group(320px, 220px);
  &:focus {
    outline: 1px dotted rgb(5, 134, 106);
  }
}

.profile-name {
  font-size: 35px;
  @include group(355px, 0);
}

//animations
.intro {
  .follow {
    transform: translate3d(-215px, -80px, 0);
  }
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
  }
  .profile-name {
    transform: translate3d(140px, -125px, 0) scale(0.75);
    color: white;
  }
}

.group {
  .follow {
    opacity: 0;
    transition: none;
  }
  .profile-photo {
    img {
      border-radius: 50% 50%;
    }
  }
  .profile-photo,
  .profile-photo-secondary {
    display: inline-block;
    position: relative;
    opacity: 1;
    width: 50px;
    margin: 0 4px;
    img:hover {
      transition: 0.2s all ease;
      border: 4px solid white;
    }
  }

  .profile-name {
    transform: translate3d(0px, -125px, 0);
    color: white;
  }
}

.index {
  .profile-photo {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.index .profile-photo {
  transform: translate3d(0, 0, 0) scale(1) !important;
}

//make the icon aligned with the avatars that are similar on mobile
@media screen and (max-width: 600px) {
  .group,
  .intro {
    .side-icon {
      transform: translate3d(0, -65px, 0);
      padding: 14px 14px 12px;
    }
  }
}

.items,
.list-move {
  transition: all 0.4s ease;
}

.list-leave-active {
  position: absolute;
}

#text {
  transform-origin: 50% 50%;
}

svg {
  fill: #a8dadc;
}

@media screen and (max-width: 600px) {
  ul,
  aside {
    display: none;
  }
}
</style>