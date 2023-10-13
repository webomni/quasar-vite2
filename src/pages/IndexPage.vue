<template>
  <q-page class="flex flex-center">
    <div>
      <h4>{{ message }}</h4>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const message = ref("Hello Word!");

    return {
      message,
    };
  },
});
</script>
