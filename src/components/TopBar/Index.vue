<template>
  <div class="full-width row justify-between">
    <q-img class="icon-top-bar-camera q-ml-sm" src="src/assets/camera.svg" />
    <q-img class="logo" src="src/assets/instadev-logo.svg" />
    <div>
      <q-img class="icon-top-bar q-mr-lg" src="src/assets/reels.svg" />
      <q-img class="icon-top-bar-direct q-mr-sm" src="src/assets/direct.svg" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TopBar",
});
</script>

<style scoped>
.logo {
  width: 115px;
  height: 30px;
}
.icon-top-bar-camera {
  width: 29px;
  height: 26px;
}
.icon-top-bar {
  width: 24px;
}
.icon-top-bar-direct {
  width: 23px;
}
.q-img {
  cursor: pointer;
}
</style>
