<template>
  <div class="profile-container h-100">
    <div class="row p-5">
      <div class="col-7 text-truncate">
        <div class="row">
          <span class="header-name text-truncate">{{ user.name }}</span>
          <ul class="follower-count mt-2">
            <li class="me-2" v-for="(value, key) in fullNames" :key="key">
              <i :class="getIcon(key)"></i>
              {{ formatNumer(user.social[key]) }}
            </li>
          </ul>

          <ul class="follower-count mt-4 interest-badges">
            <li class="me-2" v-for="interest in getBadgeArray()" :key="interest">
              <span class="badge rounded-pill bg-light text-dark">{{ interest }}</span>
            </li>
          </ul>
          <p class="header">{{ strings.intro }}</p>
          <p class="intro">
            {{ user.intro }}
          </p>
        </div>
      </div>
      <div class="col-5">
        <img class="profile-banner" :src="getImage()">
        <div class="form-control-container mt-4">
          <div class="form-submit-btn text-center">
            <button type="button" class="btn btn-light">{{ strings.contact + " " + user.name }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 justify-content-center">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ strings.focus }}</h5>
            <p class="card-text">
              Influencer's most focused platforms based on the data will be listed here.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 justify-content-center">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ strings.engagement }}</h5>
            <p class="card-text">
              Influencer's most engaged platforms based on the data will be listed here.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 justify-content-center">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ strings.impact_factor }}</h5>
            <p class="card-text">
              Influencer's impact out of 100 on social-media based on the data. This should give an idea of the 
              reach of the influencer.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 pb-4">
      <div class="card card-fl">
        <div class="card-body">
          <h5 class="card-title">{{ strings.verdict }}</h5>
          <p class="card-text">
            Verdict about influencer, such as, "Based on the data we have Shreyas seems to be quite a lot influential in
            the tech and startup domain. His impact factor and engagement suggest his followers are paying attention to
            what he posts."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: "ProfileView",
  data() {
    return {
      fullNames: {
        "ig_followers": { "fullName": "instagram" },
        "twitter_followers": { "fullName": "twitter" },
        "snap_followers": { "fullName": "snapchat" },
        "yt_followers": { "fullName": "youtube" },
        "lin_followers": { "fullName": "linkedin" },
        "tt_followers": { "fullName": "tiktok" },
      },
      strings: {
        "intro": "INTRO",
        "contact": "Contact",
        "focus": "Focus",
        "engagement": "Engagement",
        "impact_factor": "Impact Factor"
      }
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user,
      isLoggedIn: state => state.isLoggedIn
    }),
    ...mapGetters('user', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('user',[
      'login' 
    ]),
    
    getImage() {
      return require("../assets/profile.png")
    },
    formatNumer(num) {
      return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(num);
    },
    getIcon(key) {
      return "bi bi-" + this.fullNames[key].fullName
    },
    getBadgeArray() {
      return this.user.interests.split(",")
    }
  },
};
</script>
