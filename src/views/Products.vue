<template>
  <div id="products">
    <span class="text-white text-4xl ">Bubble Tea</span>
    <div class="flex flex-row justify-center">
     
        <ul v-for="item in menu" :key="item.name">
          
          <li class="text-red-500">
            <BubbleTea>
            <span>{{ item.name }}</span>
            <span>{{item.title}}</span>
            <span>{{ item.price }}</span>
            </BubbleTea>
          </li>
          
        </ul>
      
    </div>
  </div>
</template>

<script>
// import BubbleTea from "@/components/BubbleTea.vue";
export default {
  name: "Products",
  // components: {
  //   BubbleTea,
  // },
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
  },
  async created() {
    this.menu = await this.fetchMenu();
  },
};
</script>
