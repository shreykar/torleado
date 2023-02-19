<template>
  <div id="auth" class="body-view">
    <div class="row overflow-scroll">
      <LeftBarQuote />
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftBarQuote from '@/components/LeftBarQuote.vue';
export default {
  components: { LeftBarQuote },
  name: "AuthView",
};
</script>
