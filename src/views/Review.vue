<template>
  <div id="order">
    <h1 class="text-4xl text-center m-10">Review</h1>
    <div class="p-10 ml-20">
      <form @submit.prevent="submitForm">
        <div class="m-5">
          <label class="label" for="name">Your Name</label><br />
          <input type="text" id="name" v-model.trim="enteredName" class="m-3" />
          <p v-if="invalidNameInput" class="text-red-500">
            Please enter your name!
          </p>
        </div>
        <div class="m-5">
          <label class="label" for="comment">Comment</label><br />
          <input
            type="text"
            id="comment"
            v-model.trim="enteredComment"
            class="m-3 "
          />
          <p v-if="invalidCommentInput" class="text-red-500">
            Please enter your Review!
          </p>
        </div>
        <div class="m-8">
          <button class="btn" @click="addReview(reviews)">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
#name,
#comment {
  color: #003049;
}
</style>
<script>
export default {
  name: "Review",
  data() {
    return {
      enteredName: "",
      enteredComment: "",
      invalidNameInput: false,
      invalidCommentInput: false,
      reviews:[],
      url: "http://localhost:5000/reviews",
    };
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidCommentInput = this.enteredComment === "" ? true : false;

      console.log(`${this.enteredName}`);
      console.log(`${this.enteredComment}`);
      // alert(`Thank you ${this.enteredName}`);
    },
  
    async addReview() {
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify({
          name: this.enteredName,
          comment: this.enteredComment,
        }),
      });
      const data = await res.json();
      this.reviews = [...this.reviews, data];
    },
    
  },
};
</script>
