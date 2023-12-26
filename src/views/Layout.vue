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
              <li><router-link to="/contact-us">Contact us</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
           </ul>
      </div>
    </nav>
</div>
  </template>

<script>
export default {
  name: 'Layout',
};
</script>