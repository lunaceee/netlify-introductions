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
      ],
      places: [
        {
          name: "Honolulu",
          stars: 4,
          rating: 8.9,
          img: "/honolulu.jpg",
          description:
            "Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Koʻolau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach."
        },
        {
          name: "Santorini",
          stars: 4,
          rating: 7.8,
          img: "/santorini.jpg",
          description:
            "With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in places, spilling like icy cornices down the terraced rock."
        },
        {
          name: "Cusco",
          stars: 3,
          rating: 7.4,
          img: "/peru.jpg",
          description:
            "Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants."
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
      addFollower(state) {
        state.users[state.indexedUser].followers++;
      },
      removeFollower(state) {
        state.users[state.indexedUser].followers--;
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
