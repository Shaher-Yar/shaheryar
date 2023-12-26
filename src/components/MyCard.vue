<template>
  <div v-if="card" class="card">
    <img :src="card.imageSrc" alt="Card Image" />
    <div class="card-content">
      <h2 v-if="card.title">{{ card.title }}</h2>
      <p v-if="card.description">{{ card.description }}</p>
      <p v-if="card.price">Price: {{ card.price }}</p>
      <router-link v-if="card.buttonLink" :to="card.buttonLink">
        <button v-if="card.buttonText">{{ card.buttonText }}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
}

.card img {
  width: 100%;
  border-radius: 8px;
}

.card-content {
  margin-top: 10px;
}

.card-content h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.card-content p {
  margin-bottom: 10px;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
}
</style>
