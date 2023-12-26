<template>
  <div class="about-container">
    
    <section>
      <h1>Welcome to Our Gym</h1>
      <p>
        Welcome to <strong>FITNESS GYM</strong>! We are thrilled to have you join our fitness community, and we look forward to supporting you on your fitness journey. Whether you're a seasoned athlete or just starting out, our gym is a place where everyone can feel motivated and encouraged to achieve their health and wellness goals.
      </p>
    </section>

    
    <section>
      <h2>Meet Our Team</h2>
      <div class="team-grid">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
          <img :src="member.photo" :alt="member.name" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.bio }}</p>
        </div>
      </div>
    </section>


    <section>
      <h2>Our State-of-the-Art Facilities</h2>
      <p>
        Our gym is equipped with the latest and most advanced fitness machines to cater to a diverse range of workouts. From cardio enthusiasts to strength training aficionados, you'll find top-of-the-line equipment that ensures an efficient and enjoyable exercise session.
      </p>
    </section>

    <section>
      <h2>Our Satisfied Clients</h2>
      <div class="success-stories-grid">
        <div v-for="(story, index) in successStories" :key="index" class="success-story">
          <img :src="story.beforeAfterPhoto" :alt="story.name" />
          <p>{{ story.testimonial }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Membership Information</h2>
      <form @submit.prevent="submitMembershipForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="membershipForm.name" required />

        <label for="contact">Contact:</label>
        <input type="text" id="contact" v-model="membershipForm.contact" required />

        <label for="sex">Sex:</label>
        <select id="sex" v-model="membershipForm.sex" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label for="age">Age:</label>
        <input type="number" id="age" v-model="membershipForm.age" required />

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="membershipForm.email" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          name: 'John',
          photo: 'https://www.thimble.com/wp-content/uploads/2022/05/Personal-Trainer-Salary-Guide.jpg',
          bio: 'Certified Personal Trainer with over 10 years of experience in fitness coaching.',
        },
        {
          name: 'Sarah',
          photo: 'https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?s=612x612&w=0&k=20&c=0wMa1MYxt6HHamjd66d5__XGAKbJFDFQyu9LCloRsYU=',
          bio: 'Certified Personal Trainer with over 5 years of experience in fitness coaching.',
        },
        {
          name: 'William',
          photo: 'https://img.freepik.com/premium-photo/portrait-thumbs-up-man-with-tablet-screen-gym-mockup-after-exercise-face-like-hand-gesture-personal-trainer-with-technology-happy-space-marketing-advertising-fitness_590464-185883.jpg',
          bio: 'Certified Personal Trainer with over 7 years of experience in fitness coaching.',
        },
      ],
      successStories: [
        {
          name: 'Jane Smith',
          beforeAfterPhoto: 'https://i.pinimg.com/736x/9b/4e/f9/9b4ef92255c9f29d3f7437166b2d752c.jpg',
          testimonial: 'Thanks to Fitness Gym, I achieved my weight loss goals and feel more confident than ever!',
        },
        {
          name: 'Jane Smith',
          beforeAfterPhoto: 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2022/06/30152654/jbyb-results-600-jarran.png',
          testimonial: 'Thanks to Fitness Gym, I achieved my weight loss goals and feel more confident than ever!',
        },
        {
          name: 'Jane Smith',
          beforeAfterPhoto: 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2022/06/30152606/jbyb-results-600-andrew.png',
          testimonial: 'Thanks to Fitness Gym, I achieved my weight loss goals and feel more confident than ever!',
        },
      ],

      membershipForm: {
        name: '',
        contact: '',
        sex: '',
        age: null,
        email: '',
      },
      methods: {
    submitMembershipForm() {
      console.log('Membership form submitted:', this.membershipForm);
      
    },
  },
      
    };
  },
};

</script>


 <style scoped>
 .about-container {
   max-width: auto;
   margin: 0 auto;
   padding: 20px;
   font-family: 'Arial', sans-serif;
   background-color: white;
 }
 
 section {
   margin-bottom: 30px;
 }
 
 h1, h2, h3 {
   color: #3f3e3e;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-style: italic;
 }
 
 .team-member, .success-story {
   margin-bottom: 20px;
 }
 
 .team-member img, .success-story img {
   max-width: 50%;
   height: auto;
   border-radius: 8px;
   margin-bottom: 10px;
 }
 
 p{
   color: #0e0d0d;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-style: italic;
 }
 
 .team-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
   gap: 10px;
   justify-content: center;
 }
 
 .team-member {
   text-align: center;
 }
 
 .success-stories-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
   gap: 10px;
   justify-content: center;
 }
 
 .success-story {
   text-align: center;
 }
 
 .form-group {
   margin-bottom: 20px;
 }
 
 label {
   display: block;
   font-weight: bold;
   margin-bottom: 5px;
   color: #0e0d0d;
 }
 
 input,
 select {
   width: 50%;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 4px;
   margin-bottom: 10px;
 }
 
 button {
   width: 50%;
   background-color: #2ecc71;
   color: #fff;
   border: none;
   padding: 12px;
   cursor: pointer;
   border-radius: 4px;
   transition: background-color 0.3s ease;
 }
 
 button:hover {
   background-color: #27ae60;
 }
</style>
 