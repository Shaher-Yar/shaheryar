<template>
 <div class="enroll-form-container">
    <h3 class="component-title">Enroll Now</h3>
    <div class="enrollment-info">
      <p class="enrollment-paragraph">
          We are thrilled to invite you to embark on a transformative fitness journey by enrolling in our state-of-the-art gym. Choosing to become a member means embracing a lifestyle of wellness, strength, and vitality. Our facility offers top-notch equipment, expert trainers, and a supportive community that will empower you to achieve your fitness goals.
          As a valued member, you'll gain access to a variety of fitness classes, personalized workout plans, and exclusive member events. Whether you're a seasoned gym enthusiast or just starting your fitness adventure, our dedicated team is committed to guiding you every step of the way.
          By enrolling, you're not just joining a gym; you're joining a community of like-minded individuals who share your commitment to health and well-being. We can't wait to see you achieve the results you desire and celebrate your successes together.
         <br><strong>Welcome to the Fitness family – where your fitness journey begins!</strong><br><strong>Best Regards</strong>,
      </p>
    </div>

    <div>
       <div class="enroll-form">
         <label for="name">Name:</label>
         <input type="text" v-model="enrollmentData.name" id="name" required>
   
         <label for="email">Email:</label>
         <input type="email" v-model="enrollmentData.email" id="email" required>
   
         <label for="phone">Phone Number:</label>
         <input type="tel" v-model="enrollmentData.phone" id="phone" required>
   
         <label for="slot">Preferred Slot Time:</label>
         <input type="text" v-model="enrollmentData.slot" id="slot" placeholder="e.g., Morning, Afternoon" required>
  
          <button @click="submitEnrollment">Confrim</button>
       </div>
    </div>
 

    <div v-if="enrollmentSuccess" class="success-message">
        Enrolled successfully! Thank you for joining us.
    </div>
</div> 

    <div class="enrollment-info">
      <p class="enrollment-paragraph">
          we pride ourselves on providing more than just a fitness facility – we offer a holistic and uplifting experience that transcends traditional gym memberships. Our state-of-the-art equipment, coupled with expert trainers and a dynamic community, creates an environment where every workout becomes a step toward personal triumph. We believe in fostering not only physical strength but also mental resilience, supporting you on your journey to a healthier, happier life. Joining our gym means immersing yourself in a culture of encouragement, motivation, and continuous self-improvement. <br>Experience the difference at <strong>FITNESS</strong> – where each visit isn't just a workout; it's a positive stride toward the best version of yourself.<br><strong>Regards Managment</strong>
      </p>
    </div>

</template>
  
<script>
  export default {
    data() {
      return {
        enrollmentData: {
          name: '',
          email: '',
          phone: '',
          slot: '',
        },
      };
    },
    methods: {
      submitEnrollment() {
        
        localStorage.setItem('enrollmentData', JSON.stringify(this.enrollmentData));
        this.enrollmentSuccess = true;

      },
    },
   };
</script>
   
<style scoped>

 .component-title{
    font-size: xx-large;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
 }
 .enroll-form {
       max-width: 500px;
       margin: 20px auto;
     }
   
 label {
       display: block;
       margin-bottom: 8px;
     }
   
 input {
       width: 100%;
       padding: 10px;
       margin-bottom: 15px;
       box-sizing: border-box;
     }
   
 button {
       background-color: #20c485;
       color: #fff;
       padding: 12px 20px;
       font-size: 16px;
       font-style: italic;
       border: none;
       border-radius: 4px;
       cursor: pointer;
       transition: background-color 0.3s;
     }
   
 button:hover {
       background-color: #12814a;
     }
 
 .enroll-form-container {
     max-width: 50%;
     margin: 20px auto;
     padding: 20px;
     font-style: italic;
     border-radius: 8px;
    }
 
 .enrollment-info {
     text-align: center;
     margin-bottom: 20px;
    }
 
 .enrollment-paragraph {
     color: #fff;
     font-style: italic;
     font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    } 

.success-message {
  color: #e4eeeb;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  font-style: italic;
  background-color: rgb(37, 36, 36);
}
</style>
   
   