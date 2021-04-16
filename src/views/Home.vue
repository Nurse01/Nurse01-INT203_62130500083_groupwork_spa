<template>
  <div id="content" class=" text-white flex justify-between">
    <div><Intro></Intro></div>
    <div><Preview></Preview></div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Preview from "@/components/Preview.vue";
export default {
  name: "Home",
  components: {
    Intro,
    Preview,
  },
};
</script>
