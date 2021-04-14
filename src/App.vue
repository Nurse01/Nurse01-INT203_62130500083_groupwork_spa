<template>
  <div class="bg-darkBlue h-screen text-white" >
    
    <div id="content" class="flex justify-between" >
      <div><Intro></Intro></div>
     <div><Preview></Preview></div> 
    </div>
 
    
  </div>
</template>
<script>
import Intro from "./components/Intro.vue";
import Preview from './components/Preview.vue';

export default {
  name: "App",
  components: {
    Intro,
    Preview
  },
};
</script>