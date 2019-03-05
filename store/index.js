import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: "index",
      indexedUser: 0,
      userInfo: [
        {
          title: "luna",
          pronouns: "she",
          _path: "/intros/luna"
        }
      ]
    },
    mutations: {
      SET_USER_INFO(state, info) {
        state.userInfo = info;
      },
      updatePage(state, pageName) {
        state.page = pageName;
      },
      changeUser(state, i) {
        state.indexedUser = i;
      },
      changeUserBySlug(state, slug) {
        let i = 0;
        for (let user of state.userInfo) {
          if (user.slug === slug) {
            state.indexedUser = i;
            break;
          }
          i++;
        }
      }
    },
    getters: {
      selectedUser: state => {
        return state.userInfo[state.indexedUser];
      },
      allUsers: state => {
        return state.userInfo;
      },
      getUserBySlug: state => slug => {
        return state.userInfo.find(user => user.slug === slug) || {};
      }
    },
    actions: {
      async fetchUserInfo({ state, commit }) {
        let context = await require.context(
          "~/content/intros/",
          false,
          /\.json$/
        );

        const userInfo = await context.keys().map(fileName => {
          const slug = fileName.replace(".json", "").replace("./", "");
          return {
            ...context(fileName),
            _path: `/intros/${slug}`,
            slug: slug
          };
        });

        commit("SET_USER_INFO", userInfo);
      }
    }
  });
};

export default createStore;
