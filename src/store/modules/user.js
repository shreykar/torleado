const state = {
  user: {
    social: {

    }
  },
  isLoggedIn: false
}

const mutations = {
  setUser(state, user) {
    debugger
    state.user.id = user.id
    state.user.name = user.name || ""
    state.user.profile_picture = user.profile_picture || ""
    state.user.interests = user.interests || ""
    state.user.email = user.email || ""
    state.user.intro = user.intro || ""
    if (!user.social) {
      user.social = {
        userId: user
      }
    }
    state.user.social.ig_followers = user.social.ig_followers || 0
    state.user.social.yt_followers = user.social.yt_followers || 0
    state.user.social.tt_followers = user.social.tt_followers || 0
    state.user.social.twitter_followers = user.social.twitter_followers || 0
    state.user.social.lin_followers = user.social.lin_followers || 0
    state.user.social.snap_followers = user.social.snap_followers || 0
    state.user.social.ig_handle = user.social.ig_handle || ""
    state.user.social.yt_handle = user.social.yt_handle || ""
    state.user.social.tt_handle = user.social.tt_handle || ""
    state.user.social.twitter_handle = user.social.twitter_handle || ""
    state.user.social.lin_handle = user.social.lin_handle || ""
    state.user.social.snap_handle = user.social.snap_handle || ""
  },
  setLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  }
}

const actions = {
  login({
    commit
  }, user) {
    commit('setUser', user)
    commit('setLoggedIn', true)
  },
  logout({
    commit
  }) {
    commit('setUser', null)
    commit('setLoggedIn', false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}