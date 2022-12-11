<template>
<NavBar></NavBar>
  <main class="position-relative" >
    <div class="position-absolute" style="top: 55%;left: 5%;">
			<span class="p-2 fs-1 d-inline-flex mb-2 bg-white" style="font-weight: 900;letter-spacing: 2px;">Welcome to
				<span class="logo-text ms-2"> Re </span>
				<span class="logo-text-second">Hub</span>
			</span><br>
      <span class="p-2 fs-1 text-white"  style="display: inline-flex;font-weight: 900;letter-spacing: 2px;box-shadow: -10px 0 0 0 #fff;">
				Independent, Specialized,
			<br>
				Only Reinsurance Broker.
         </span>
    </div>
    <video autoplay muted loop id="myVideo" style="z-index: 998;height: 100vh;width: 100%;object-fit: cover;">
      <source src="../assets/videos/main.mp4" type="video/mp4" />
    </video>
    <div class="position-absolute w-100 h-100 top-0 bg-dark bg-opacity-10" style="z-index: 1000;">
    </div>
  </main>
  <AboutUs></AboutUs>
  <ContactUs></ContactUs>
<Footer></Footer>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";

export default {
  components: {
    ContactUs,
    AboutUs,
    Footer,
    NavBar
  }
}
</script>
<style>
.logo-text {
  color: #8F1E7D !important;
}
.logo-text-second {
  color: #4A4A4A !important;
}
</style>
