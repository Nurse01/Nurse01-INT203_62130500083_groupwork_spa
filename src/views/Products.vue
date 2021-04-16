<template>
  <div id="products">
    <h1 class="text-white text-4xl text-center">Bubble Tea</h1>
    <div class="grid grid-cols-2 justify-center m-10 ">
      <ul v-for="item in menu" :key="item.name">
        <bubble-tea>
          <li class="text-tea flex flex-row ">
            <div class="w-48 h-48">
              <img :src="getImgPath(item.src)" />
            </div>
            <div class="text-xl m-10">
              <span>{{ item.name }}</span
              ><br />
              <span>{{ item.title }}</span
              ><br />
              <span>{{ item.price }}</span>
            </div>
          </li>
        </bubble-tea>
      </ul>
    </div>
    
      <div class="flex justify-center pb-10 gap-4">
         <router-link to="/">
         <button class="bg-tea rounded-full py-3 px-6 ">
         Back
        </button>
        </router-link>
        <router-link to="/order">
        <button class="bg-tea rounded-full py-3 px-6 ">
          Order
        </button>
        </router-link>
       
      </div>
    
  </div>
</template>

<script>
import BubbleTea from "@/components/BubbleTea.vue";
export default {
  name: "Products",
  components: {
    BubbleTea,
  },
  data() {
    return {
      menu: [],
    };
  },
  methods: {
    async fetchMenu() {
      try {
        const res = await fetch("http://localhost:5000/menu");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    getImgPath(name) {
      return require("@/assets/bbt/" + name);
    },
  },
  async created() {
    this.menu = await this.fetchMenu();
  },
};
</script>
