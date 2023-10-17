<template>
  <q-page class="flex">
    <div class="full-width absolute-top q-mt-lg">
      <TopBar />
      <q-separator class="full-width q-mt-sm" />
    </div>

    <q-scroll-area horizontal :visible="false" class="q-scroll-area full-width">
      <div class="row no-wrap">
        <div class="full-width" v-for="item in 10" :key="item">
          <div class="column items-center justify-center q-mr-md">
            <q-avatar size="62px">
              <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <span>Nome</span>
          </div>
        </div>
      </div>
    </q-scroll-area>

    <div class="container-bottom full-width absolute-bottom q-pb-lg">
      <q-separator class="full-width q-mb-sm" />
      <BottomBar />
    </div>
  </q-page>
</template>

<script>
import TopBar from "src/components/TopBar/Index.vue";
import BottomBar from "src/components/BottomBar/Index.vue";
export default {
  name: "MainPage",
  components: {
    TopBar,
    BottomBar,
  },
};
</script>

<style lang="scss" scoped>
.container-bottom {
  background-color: #fafafa;
}

.q-scroll-area {
  height: 98px;
  margin-top: 70px;
}

.q-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#fbaa47, #d91a46, #a60f93);
  padding: 2px;
  .avatar {
    width: 57px;
    height: 57px;
    border: solid 2px #ffff;
  }
}
</style>
