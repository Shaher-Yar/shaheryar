<template>
  <div class="card-container">
    <div v-for="(item, index) in card" :key="index" class="card">
      <div v-if="item.type === 'subscription'">
        <img :src="item.imageSrc" alt="Subscription Image" class="card-image" />
        <div class="card-content">
          <h2 class="card-title">{{ item.title }}</h2>
          <p class="card-paragraph">{{ item.description }}</p>
          <p class="card-price">{{ item.price }}</p>
          <router-link :to="item.buttonLink" class="card-button">{{ item.buttonText }}</router-link>
        </div>
      </div>
    </div>
  </div>
  <h3 class="component-title">Customer Reviews</h3>
  <div class="feedback-section">
    
    <div v-for="(review, index) in reviews" :key="index" class="review">
      <p><strong>{{ review.user }}</strong></p>
      <p>{{ review.comment }}</p>
    </div>
  </div>
  <h3 class="component-title">Leave a Comment</h3>
  <div class="leave-comment">
      <textarea v-model="newReview.comment" placeholder="Add your comment"></textarea>
      <input v-model="newReview.user" placeholder="Your Name">
      
    </div>
    <button @click="submitReview">Submit Comment</button>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reviews: [
        { user: 'John Doe', comment: 'Amazing personal trainers and complete, clean gym. Would highly recommend!' },
        { user: 'Smith', comment: 'One the best studios in the city. Expertly developed HIIT workouts, guided by top industry professionals in a state-of-the-art facility' },
        { user: 'Jane', comment: 'Gives me an excellent workout every time and is able to keep things fresh after months of going consistently. Great people and great results!' },
        { user: 'Bruce', comment: 'Excellent service!' },
      ],
      newReview: {
        user: '',
        comment: '',
      },
    };
  },
  methods: {
    submitReview() {
      if (this.newReview.user && this.newReview.comment) {
        this.reviews.push({
          user: this.newReview.user,
          comment: this.newReview.comment,
        });

        this.newReview.user = '';
        this.newReview.comment = '';
      }
    },
  },
};
</script>


<style scoped>
.component-title {
  font-size: 1.5em;
  color: #e7eeec;
  margin-bottom: 20px;
  font-weight: bold;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0.1, 0.1, 0, 0.1);
}

.card {
  border: 1px solid #555;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1d1c1c;
  box-shadow: 0 4px 8px rgba(114, 113, 113, 0.1);
  margin-bottom: 20px;
  width: 100%; 
}

.card-image {
  max-width: 400px;
  height: 400px;
  border-radius: 8px 8px 0 0;
  box-shadow: 10px 10px 8px  #6e7270;
  transition: transform 0.3s ease;
  margin-top: 5px;
  padding-left: 5px;
}

.card-image:hover {
  transform: scale(1.05);
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.card-paragraph {
  margin: 5px 0;
}

.card-price {
  font-weight: bold;
  color: #36e6ab;
}

.card-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #11d1a7;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #0ca189;
}

/* .card:hover {
  transform: scale(1.05);
} */

.feedback-section {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.review {
  padding: 10px;
  border: 1px solid #4d4b4b;
  border-radius: 8px;
  background-color: #1b1b1b;
  box-sizing: border-box;
  width: 100%; 
}
/* .leave-comment {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  background-color: #1b1a1a;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
} */

.leave-comment {
  display: flex;
  flex-wrap: non-wrap; 
  justify-content: center;
}

.leave-comment textarea, .leave-comment input {
  width: calc(32% - 10px); 
  padding: 10px;
  margin-right: 10px; 
  margin-bottom: 10px;
  border: 1px solid #ebe7e7;

  border-radius: 4px;
  box-sizing: border-box;
}

.leave-comment input {
  margin-right: 0; 
}

button {
    background-color: #2db694;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 877px;
  }

  button:hover {
    background-color: #0d745a;
  }
</style>