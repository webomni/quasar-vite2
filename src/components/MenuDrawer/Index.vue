<template>
  <q-drawer
    side="right"
    v-model="open"
    show-if-above
    bordered
    class="menu-drawer"
    @hide="hide"
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <div class="container-items">
      <div class="q-pl-md q-pt-xl">
        <span>S. Khasanov_</span>
        <div class="q-mt-lg">
          <q-img src="src/assets/archive.svg" width="24px" class="q-mr-sm" />
          <span>Archive</span>
        </div>
        <div class="q-mt-lg">
          <q-img src="src/assets/activity.svg" width="24px" class="q-mr-sm" />
          <span>Your Activity</span>
        </div>
        <div class="q-mt-lg">
          <q-img src="src/assets/name-tag.svg" width="24px" class="q-mr-sm" />
          <span>Nametag</span>
        </div>
        <div class="q-mt-lg">
          <q-img src="src/assets/save-post.svg" width="24px" class="q-mr-sm" />
          <span>Saved</span>
        </div>
        <div class="q-mt-lg">
          <q-img
            src="src/assets/close-friends.svg"
            width="24px"
            class="q-mr-sm"
          />
          <span>Close Friends</span>
        </div>
        <div class="q-mt-lg">
          <q-img
            src="src/assets/discover-people.svg"
            width="24px"
            class="q-mr-sm"
          />
          <span>Discover People</span>
        </div>
        <div class="q-mt-lg">
          <q-img src="src/assets/facebook.svg" width="24px" class="q-mr-sm" />
          <span>Open Facebook</span>
        </div>
      </div>
      <div class="q-pa-sm">
        <div class="q-mt-lg">
          <q-img src="src/assets/settings.svg" width="24px" class="q-mr-sm" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExamploComponent",
  data() {
    return {
      open: false,
    };
  },
  props: {
    drawerRight: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  watch: {
    drawerRight() {
      this.open = this.drawerRight;
    },
  },
  methods: {
    hide() {
      this.$emit("close");
    },
  },
});
</script>

<style lang="scss" scoped>
.container-items {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
