<template>
  <div id="edit" class="body-view">
    <div class="row overflow-auto h-100">
      <div
        class="col-lg-5 col-md-12 align-self-center h-100 bordering-right h-100 gx-0 p-0 align-self-start overflow-auto overflow-x-hidden">
        <div class="edit-profile-form-container row justify-content-center">
          <div class="row w-100 p-5">
            <!-- Name -->
            <div class="form-control-container mt-5">
              <span class="form-control-label">
                {{ strings.name }}
              </span>
              <input v-model="user.name" type="name" class="form-control form-control-input-text" id="user-name"
                placeholder="Shreyas Kavathekar">
            </div>
            <!-- Profile Picture -->
            <div class="form-control-container mt-5">
              <span class="form-control-label">
                {{ strings.profile_picture }}
              </span>
              <input class="form-control form-control-input-file" type="file" id="user-profile-picture">
            </div>
            <!-- Intro -->
            <div class="form-control-container mt-5">
              <span class="form-control-label">
                {{ strings.intro }}
              </span>
              <textarea v-model="user.intro" rows="6" class="form-control form-control-input-text-area" id="user-intro"
                :placeholder="strings.placeholder_intro"></textarea>
            </div>
            <!-- Interests -->
            <div class="form-control-container mt-5">
              <span class="form-control-label">
                {{ strings.interests }}
              </span>
              <div class="form-control form-control-input-tags p-0">
                <TagsInput v-model="user.interests" />
              </div>
            </div>
            <!-- Follower counts -->
            <div class="row gx-0">
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.ig_followers }}
                  </span>
                  <input v-model="user.social.ig_followers" type="number" class="form-control form-control-input-text" id="user-ig-follower" 
                    placeholder="11232">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.tt_followers }}
                  </span>
                  <input v-model="user.social.tt_followers" type="number" class="form-control form-control-input-text" id="user-tt-follower" 
                    placeholder="11232">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.yt_followers }}
                  </span>
                  <input v-model="user.social.yt_followers" type="number" class="form-control form-control-input-text" id="user-yt-follower" 
                    placeholder="11232">
                </div>
              </div>
            </div>
            <div class="row gx-0">
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.lin_followers }}
                  </span>
                  <input v-model="user.social.lin_followers" type="number" class="form-control form-control-input-text" id="user-lin-follower" 
                    placeholder="11232">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.twitter_followers }}
                  </span>
                  <input v-model="user.social.twitter_followers" type="number" class="form-control form-control-input-text" id="user-twitter-follower" 
                    placeholder="11232">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.snap_followers }}
                  </span>
                  <input v-model="user.social.snap_followers" type="number" class="form-control form-control-input-text" id="user-snap-follower" 
                    placeholder="11232">
                </div>
              </div>
            </div>
            <!-- Follower counts end-->

            <!-- Handles -->
            <div class="row gx-0">
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.ig_handle }}
                  </span>
                  <input v-model="user.social.ig_handle" type="text" class="form-control form-control-input-text" id="user-ig-handle" 
                    :placeholder="strings.shreykar">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.tt_handle }}
                  </span>
                  <input v-model="user.social.tt_handle" type="text" class="form-control form-control-input-text" id="user-tt-handle" 
                    :placeholder="strings.shreykar">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.yt_handle }}
                  </span>
                  <input v-model="user.social.yt_handle" type="text" class="form-control form-control-input-text" id="user-yt-handle" 
                    :placeholder="strings.shreykar">
                </div>
              </div>
            </div>
            <div class="row gx-0">
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.lin_handle }}
                  </span>
                  <input v-model="user.social.lin_handle" type="text" class="form-control form-control-input-text" id="user-lin-handle" 
                    :placeholder="strings.shreykar">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.twitter_handle }}
                  </span>
                  <input v-model="user.social.twitter_handle" type="text" class="form-control form-control-input-text" id="user-twitter-handle" 
                    :placeholder="strings.shreykar">
                </div>
              </div>
              <div class="col-4 gx-3">
                <div class="form-control-container mt-5">
                  <span class="form-control-label">
                    {{ strings.snap_handle }}
                  </span>
                  <input v-model="user.social.snap_handle" type="text" class="form-control form-control-input-text" id="user-snap-handle" 
                    :placeholder="strings.shreykar">
                </div>
              </div>
            </div>
            <!-- Handles end-->
            <div class="form-submit-btn mt-5">
              <button @click.prevent="submitted" type="button" class="btn btn-outline-primary">{{ strings.save }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-7 h-100 d-none d-lg-block h-100 gx-0 p-0 align-self-start overflow-auto overflow-y-hidden profile-container">
        <ProfileVuew />
      </div>
    </div>
  </div>
</template>

<script>
import TagsInput from "@/tools/TagsInput.vue"

import ProfileVuew from "./Profile.vue"
import { mapState, mapGetters, mapActions } from 'vuex'
import { update } from "../services/user";

export default {
  name: "EditProfile",
  components: { TagsInput, ProfileVuew },
  data() {
    return {
      strings: {
        "quote": "Let's Make Some Influencing!",
        "name": "Name",
        "profile_picture": "Profile Picture",
        "intro": "Intro",
        "ig_followers": "IG Followers",
        "twitter_followers": "Twitter Followers",
        "yt_followers": "YT Subscribers",
        "tt_followers": "TT Followers",
        "lin_followers": "Lin Followers",
        "snap_followers": "Snap Followers",
        "ig_handle": "IG @",
        "twitter_handle": "Twitter @",
        "yt_handle": "YT @",
        "tt_handle": "TT @",
        "lin_handle": "Lin @",
        "snap_handle": "Snap @",
        "interests": "Interests",
        "shreykar": "shreykar",
        "save": "Save",
        "placeholder_intro": "Hey hey, it's your friendly neighbourhood Insta Tech guru!" +
          "I'm hustling through life with a goal of working for the brands" +
          "that light my fire! I specialize in software development and hold a good amount of followers in..."
      },
    };
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
  
    submitted() {
      // this.v$.$touch();
      // if (this.v$.$invalid) {
      //   return;
      // }
      var data = { user: this.user }
      update(data).then((result) => {
        if (result.data.user && result.data.user.id) {
          this.login(result.data.user)
          this.$router.push("/edit-profile")
        }
      }).catch((err) => {
        console.log(err)
      });
    },
  },
};
</script>
