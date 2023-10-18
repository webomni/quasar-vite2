<template>
  <div class="column full-width">
    <div class="row justify-between items-center full-width">
      <div class="row items-center">
        <q-avatar size="28px" class="q-mx-md">
          <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="column">
          <strong>Joshua_I</strong>
          <span>Tokyo, Japan</span>
        </div>
      </div>
      <q-icon
        class="q-mr-md"
        name="fas fa-ellipsis-h"
        size="15px"
        color="dark-items"
      />
    </div>
    <q-img class="q-mt-sm" src="https://picsum.photos/500/300" :ratio="1" />
    <div class="row justify-between q-mx-sm q-my-md">
      <div>
        <q-img
          width="21px"
          height="18px"
          class="q-mr-md"
          src="src/assets/heart.svg"
        />
        <q-img
          width="19px"
          height="21px"
          class="q-mr-md"
          src="src/assets/comment.svg"
        />
        <q-img
          width="21px"
          height="22px"
          class="q-mr-md"
          src="src/assets/direct.svg"
        />
      </div>

      <q-icon
        class="q-mr-xl"
        name="fas fa-ellipsis-h"
        size="15px"
        color="dark-items"
      />
      <q-img
        width="17px"
        height="20px"
        class="q-ml-sm"
        src="src/assets/save-post.svg"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostInsta",
});
</script>
