<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/personal trainer">Personal Trainer</router-link></li>
          <li><router-link to="/classes">Classes</router-link></li>
          <li><router-link to="/society">Society</router-link></li>
          <li><router-link to="/spa">Spa</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/membership">Member Ship</router-link></li>
          <li><router-link to="/clubs">Clubs</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact-us">Contact us</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="hero-section">
      <div class="hero-content"></div>
    </div>

    <MyComponent :cardData="cardData" @cardClick="handleCardClick" />
    <MyCard
      v-for="(cardItem, index) in cardData"
      :key="index"
      :cardItem="cardItem"
      @enrollNowClick="handleEnrollNowClick"
    />
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue';
import MyCard from '@/components/MyCard.vue';

export default {
  components: {
    MyComponent,
    MyCard, 
  },
  data() {
    return {
      cardData: [
        {
          imageSrc: 'https://example.com/image1.jpg',
          paragraph: 'Description for card 1.',
          buttonLink: '/route1',
          buttonText: 'Button 1',
        },
      ],
    };
  },
  methods: {
    handleEnrollNowClick(cardItem) {
      localStorage.setItem('clickedCard', JSON.stringify(cardItem));
      this.$router.push('/enroll-now');
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #000000;
  color: #bdb6b6;
  overflow: hidden;
  position: fixed;
  width: 100%;
}

.navbar a {
  float: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #777c7c;
  color: black;
}

.nav-links {
  list-style: none;
  display: flex;
  margin-left: auto; 
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  font-style: Arial;
  color: #fff;
}

.hero-section {
  background: url("https://wallpapercave.com/wp/wp2639543.jpg") center/cover no-repeat;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  height: 600px;
}
</style>
