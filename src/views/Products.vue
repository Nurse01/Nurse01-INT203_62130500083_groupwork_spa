<template>
  <div id="products">
    <h1 class=" text-4xl text-center m-10">- Menu -</h1>
    <div class="grid grid-cols-2 justify-center m-10 ">
      <ul v-for="item in menu" :key="item.name">
        <bubble-tea>
          <li class="text-tea flex flex-row ">
            <div class="w-48 h-48">
              <img :src="getImgPath(item.src)" />
            </div>
            <div class="text-xl m-10">
              <span class="">{{ item.name }}</span
              ><br />
              <span class="text-sm font-light	">({{ item.title }})</span><br />
              <span>{{ item.price }}</span>
            </div>
          </li>
        </bubble-tea>
      </ul>
    </div>

    <div class="flex justify-center pb-10 gap-4 ">
      <router-link to="/">
        <button class="btn">
          Back
        </button>
      </router-link>
      <router-link to="/review">
        <button class="btn">
          Review
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",


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
