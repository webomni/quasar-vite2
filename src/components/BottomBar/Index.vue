<template>
  <div class="full-width row justify-around">
    <q-img
      width="22px"
      height="25px"
      class="q-ml-sm"
      src="src/assets/house.svg"
    />
    <q-img
      width="25px"
      height="25px"
      class="q-ml-sm"
      src="src/assets/search.svg"
    />
    <q-img
      width="25px"
      height="25px"
      class="q-ml-sm"
      src="src/assets/add.svg"
    />
    <q-img
      width="27px"
      height="23px"
      class="q-ml-sm"
      src="src/assets/heart.svg"
    />
    <q-avatar size="28px">
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BottomBar",
});
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>
