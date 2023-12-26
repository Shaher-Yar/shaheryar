<template>
  <div class="contact-container">
    <section>
      <h1>Contact Us</h1>
      <p>
        Have questions or suggestions? Reach out to us using the contact information below.
      </p>
    </section>

    <section>
      <h2>Contact Information</h2>
      <div class="contact-info">
        <div>
          <strong>Email:</strong>
          <p>info@fitnessgym.com</p>
        </div>
        <div>
          <strong>Phone:</strong>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <strong>Address:</strong>
          <p>123 Fitness Street, Cityville, State, 12345</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Contact Form</h2>
      <form @submit.prevent="submitContactForm">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" v-model="contactForm.name" required />
        </div>

        <div class="form-group">
          <label for="email">Your Email:</label>
          <input type="email" id="email" v-model="contactForm.email" required />
        </div>

        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea id="message" v-model="contactForm.message" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitContactForm() {
      console.log('Contact form submitted:', this.contactForm);
    },
  },
};
</script>

<style scoped>
.contact-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: white;
}

section {
  margin-bottom: 30px;
}

h1, h2 {
  color: #202020;
  font-family: 'Arial', sans-serif;
}

p {
  color: #0e0d0d;
  font-family: 'Arial', sans-serif;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
}

.contact-info div {
  flex: 1;
  margin-right: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #0e0d0d;
}

strong{
  color: #0e0d0d;
}

input,
textarea {
  width: 40%;
  padding: 10px;
  border: 1px solid #888484;
  border-radius: 4px;
  margin-bottom: 10px;
}

button {
  width: 30%;
  background-color: #17a082;
  color: #fff;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #148b7c;
}
</style>
