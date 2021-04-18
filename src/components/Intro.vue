<template>
  <div id="intro" class=" pt-40 pl-20">
    <span class="text-5xl"
      >You deserve good things <br />like
      <span class="text-tea text-7xl font-bold">Bubble Tea</span></span
    >
    <div class="font-light m-5 ml-0">
      It’s not true that money can’t buy happiness. <br />
      I mean, have you tried buying boba tea? It’s the same thing!
    </div>
    <router-link to="/products">
      <button class="btn">View Product</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Intro",
  
};
</script>
