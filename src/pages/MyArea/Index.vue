<template>
  <q-page class="flex column">
    <div class="column q-pt-xl q-px-md full-width">
      <q-icon
        name="fas la-bars"
        color="black"
        size="31px"
        class="absolute-right q-ma-lg"
      />
      <div class="full-width row justify-center">
        <q-icon name="fas fa-lock" color="black" size="11px" class="q-mr-xs" />
        <strong>Jacob_w</strong>
        <q-icon
          name="fas fa-chevron-down"
          color="black"
          size="11px"
          class="q-ml-xs"
        />
      </div>
      <!-- avatar -->
      <div class="row items-center justify-between full-width q-mt-lg">
        <q-avatar size="96px" class="avatar-Profile">
          <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="column items-center">
          <strong>54</strong>
          <span>Posts</span>
        </div>
        <div class="column items-center">
          <strong>834</strong>
          <span>Followers</span>
        </div>
        <div class="column items-center">
          <strong>162</strong>
          <span>Following</span>
        </div>
      </div>

      <div class="column q-mt-md">
        <strong>Jocob West</strong>
        <span> Digital goodies disigner @pixsellz</span>
        <span> Everything is designed. </span>
      </div>
      <q-btn
        flat
        dense
        color="white"
        class="btn-edit full-width q-my-md"
        text-color="black"
        label="Edit Profile"
      />

      <!-- avatar -->
      <div class="row">
        <div class="column items-center q-mr-md">
          <q-avatar size="64px" class="avatar-story">
            <q-icon name="fas fa-plus" size=""></q-icon>
          </q-avatar>
          <span>New</span>
        </div>
        <div class="column items-center q-mr-md" v-for="item in 3" :key="item">
          <q-avatar size="64px" class="avatar-story">
            <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <span>Friends</span>
        </div>
      </div>
    </div>
    <q-separator class="q-mt-md" />
    <div class="full-width">
      <q-tabs v-model="tab" class="text-teal" active-color="grey-8">
        <q-tab name="grid">
          <q-img src="src/assets/grid.svg" width="22px" />
        </q-tab>
        <q-tab name="profile">
          <q-img src="src/assets/profile.svg" width="22px" />
        </q-tab>
      </q-tabs>
      <div class="row q-mb-lg">
        <q-img
          :ratio="1"
          v-for="item in 5"
          :key="item"
          class="cursor-pointer col-4"
          src="https://picsum.photos/500/300"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "MyArea",
  data() {
    return {
      tab: "grid",
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar-Profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: solid 2px #c7c7cc;
  padding: 2px;
  .avatar {
    width: 91px;
    height: 91px;
  }
}

.avatar-Profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: solid 2px #c7c7cc;
  padding: 2px;
  .avatar {
    width: 91px;
    height: 91px;
  }
}
.avatar-story {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: solid 2px #c7c7cc;
  padding: 4px;
  .avatar {
    width: 60px;
    height: 55px;
  }
}
.btn-edit {
  height: 35px;
  border-radius: 6px;
  text-transform: none;
  padding: 5px;
  border: solid 1px rgba(60, 60, 67, 0.18);
}
</style>
