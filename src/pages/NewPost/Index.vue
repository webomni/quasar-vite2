<template>
  <q-page class="flex column justify-between">
    <div>
      <div
        class="full-width row items-center justify-between bg-grey-2 q-py-lg"
      >
        <q-btn flat color="grey-9" label="Cancel" />
        <div>
          <strong>Recents</strong>
          <q-icon name="fas fa-chevron-down" class="q-ml-xs" size="11px" />
        </div>
        <q-btn flat color="primary" label="Done" />
      </div>
      <q-img
        class="q-mt-sm cursor-pointer selected-image"
        src="https://picsum.photos/500/300"
        :ratio="1"
      />
      <q-scroll-area
        horizontal
        :visible="false"
        class="q-scroll-area full-width"
      >
        <div class="row">
          <q-img
            :ratio="1"
            v-for="item in 24"
            :key="item"
            class="cursor-pointer col-3"
            src="https://picsum.photos/500/300/"
          />
        </div>
      </q-scroll-area>
    </div>
    <q-tabs
      v-model="tab"
      class="text-grey-6 full-width container-bottom"
      active-color="grey-9"
      indicator-color="grey-8"
    >
      <q-tab name="grid" label="Library" />
      <q-tab name="photo" label="Photo" />
      <q-tab name="video" label="Video" />
    </q-tabs>
  </q-page>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      tab: "grid",
    };
  },
};
</script>

<style lang="scss" scoped>
strong {
  font-size: 16px;
}
.q-btn {
  text-transform: none;
  font-size: 16px;
}
.q-tabs {
  height: 78px;
}

.q-scroll-area {
  height: calc(100vw / 2);
  @media (min-height: 800px) {
    height: 100vw;
    padding-bottom: 78px;
  }
}
.selected-image {
  width: 100vw;
  height: 90vw;
}
</style>
