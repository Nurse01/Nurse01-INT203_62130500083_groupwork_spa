<template>
  <div id="app" class=" w-auto h-auto ">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  background-color: #003049;
  color: white;
}
.btn {
  background-color: #e5bda0;
  border-radius: 9999px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>

<script>
export default {
  name: "App",
};
</script>
