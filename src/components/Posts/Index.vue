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
    <q-img
      class="q-mt-sm cursor-pointer"
      src="https://picsum.photos/500/300"
      :ratio="1"
      @click="countClicks++"
    >
      <q-icon
        v-if="animationClass !== ''"
        :class="animationClass"
        class="absolute-center"
        name="fas fa-heart"
        color="white"
      />
    </q-img>
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

    <!--  -->
    <div class="row items-center q-mb-xs">
      <q-avatar size="17px" class="q-ml-sm q-mr-xs">
        <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      liked by <strong> craig_love</strong> and <strong> 44,686 others</strong>
    </div>
    <div class="q-mx-sm q-mb-lg">
      <strong>Joshua_I</strong> The game in japan was amazing and I want to
      shere some photos.
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostInsta",
  data() {
    return {
      animationClass: "",
      countClicks: 0,
    };
  },
  watch: {
    /* criar um lisner, tem que ser o mesmo nome do return */
    countClicks() {
      setTimeout(() => {
        if (this.countClicks != 2) {
          this.countClicks = 0;
        }
      }, 1000);
      if (this.countClicks == 2) {
        this.addLikeInPost();
        this.countClicks = 0;
      }
    },
  },
  methods: {
    addLikeInPost() {
      this.animationClass = "animate-like";
      setTimeout(() => {
        this.animationClass = "";
      }, 300);
    },
  },
});
</script>

<style lang="scss" scoped>
.animate-like {
  animation-duration: 300ms;
  animation-name: liked;
}
@keyframes liked {
  from {
    font-size: 45px;
  }
  10% {
    font-size: 48px;
  }
  75% {
    font-size: 75px;
  }
  90% {
    font-size: 73px;
  }
  to {
    font-size: 0px;
  }
}
</style>
