<template>
  <div id="order">
    <h1 class="text-4xl text-center m-10">Review</h1>
    <div class="p-10 ml-20 grid grid-cols-2 justify-center">
      <div>
      <form name="review-form" @submit.prevent="submitForm">
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
          <button class="btn">Submit</button>
        </div>
      </form>
      </div>
    
    <div>
      <ul v-for="review in reviews" :key="review.id">
        <review-bord>
          <li>
            <span>Name : {{ review.name }}</span> <br />
            <span>Comment : {{ review.comment }}</span>
          </li>
          <button @click="editButton(review)" class="border-2 border-indigo-600 m-5 w-5 h-5 ">
            <img src="../assets/edit.png" />
          </button>
          <button @click="deleteReview(review.id)" class="border-2 border-indigo-600  w-5 h-5 ">
            <img src="../assets/delete.png" />
          </button>
        </review-bord>
      </ul>
    </div>
    </div>
  <router-link to="/" class="flex justify-center">
    <button class="btn">Home</button>
  </router-link>
  </div>
</template>
<style scoped>
#name,
#comment {
  color: #003049;
}
</style>
<script>
import ReviewBord from "../components/ReviewBord.vue";
export default {
  name: "Review",
  components: {
    ReviewBord,
  },
  data() {
    return {
      enteredName: "",
      enteredComment: "",
      invalidNameInput: false,
      invalidCommentInput: false,
      reviews: [],
      isEditing: false,
      editingId: null,
      url: "http://localhost:5000/reviews",
    };
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidCommentInput = this.enteredComment === "" ? true : false;

      console.log(`${this.enteredName}`);
      console.log(`${this.enteredComment}`);
      if (this.isEditing) {
        this.editReview();
      } else {
        this.addReview();
      }
      this.enteredName = "";
      this.enteredComment = "";
    },

    async addReview() {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.enteredName,
            comment: this.enteredComment,
          }),
        });
        const data = await res.json();
        this.reviews = [...this.reviews, data];
      } catch (error) {
        console.log(error);
      }
    },
    async deleteReview(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: "DELETE",
        });
        this.reviews = this.reviews.filter((review) => review.id !== deleteId);
      } catch (error) {
        console.log(error);
      }
    },
    editButton(editingReview) {
      this.isEditing = true;
      this.enteredName = editingReview.name;
      this.enteredComment = editingReview.comment;
      this.editingId = editingReview.id;
      console.log("editButton func");
    },
    async editReview() {
      try {
        const res = await fetch(`${this.url}/${this.editingId}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.enteredName,
            comment: this.enteredComment,
          }),
        });
        const data = await res.json();
        this.reviews = this.reviews.map((review) =>
          review.id === this.editingId
            ? { ...review, name: data.name, comment: data.comment }
            : review
        );
        this.isEditing = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
