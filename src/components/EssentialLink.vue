<template>
  <h1>example</h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExamploComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
