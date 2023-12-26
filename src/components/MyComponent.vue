<template>
    <div>
      <h3 class="component-title">Details about Avilable and Pricing of Courses</h3>
      <div class="card-container">
        <Card :card="testCard" />
        <Card v-for="(card, index) in cards" :key="index" :card="card" />
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/CardComponent.vue';
  
  export default {
    components: {
      Card,
    },
    data() {
      return {

        testCard: [
        {
          type: 'subscription',
          title: 'Fitness Classes',
          imageSrc: 'https://images.unsplash.com/photo-1605300287659-9ca1a156d7c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
          description: 'Physical fitness is a general state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, physical activity, and sufficient rest.',
          price: '$10/month',
          buttonLink: '/enroll',
          buttonText: 'Enroll Now',
        },
        
        {
          type: 'subscription',
          title: 'Muscle Bulking',
          imageSrc: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
          description: 'Physical fitness is a general state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, physical activity, and sufficient rest.',
          price: '$20/month',
          buttonLink: '/enroll',
          buttonText: 'Enroll Now',
        },
        {
          type: 'subscription',
          title: 'Heavy Weight',
          imageSrc: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
          description: 'Physical fitness is a general state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, physical activity, and sufficient rest.',
          price: '$30/month',
          buttonLink: '/enroll',
          buttonText: 'Enroll Now',
        },
        {
          type: 'subscription',
          title: 'Yoga Classes',
          imageSrc: 'https://images.unsplash.com/photo-1572459815549-873917ec8c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
          description: 'Physical fitness is a general state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, physical activity, and sufficient rest.',
          price: '$35/month',
          buttonLink: '/enroll',
          buttonText: 'Enroll Now',
        },
        {
          type: 'subscription',
          title: 'Yoga Classes',
          imageSrc: 'https://images.unsplash.com/photo-1572459815549-873917ec8c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
          description: 'Physical fitness is a general state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, physical activity, and sufficient rest.',
          price: '$35/month',
          buttonLink: '/enroll',
          buttonText: 'Enroll Now',
        },
        {
          type: 'subscription',
          title: 'Yoga Classes',
          imageSrc: 'https://images.unsplash.com/photo-1572459815549-873917ec8c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
          description: 'Physical fitness is a general state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, physical activity, and sufficient rest.',
          price: '$35/month',
          buttonLink: '/enroll',
          buttonText: 'Enroll Now',
        },
        ],
      };
    },

  };
  </script>

  <style scoped> 
  h3{
    color: rgb(233, 226, 226);
    font-size: 22px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: italic;
  }
</style>