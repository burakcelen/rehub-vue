<template>
  <nav class="navbar navbar-expand-lg navbar-fixed fw-bold shadow-none border-0 position-fixed w-100 px-3 top-0 left-0 ">
    <div class="container-fluid px-3">
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
						<span class="nav-logo" style="width: 80px">
							<a class="navbar-brand link-light" href="#">
								<img src="../assets/img/logo.png" class="img-fluid" alt="website logo"
                /></a>
						</span>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 fs-6 px-3 link-light">
          <li class="nav-item active">
            <router-link
                to="/"
                class="nav-link active">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
                to="/"
                class="nav-link">
              About Us
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
                to="/our-works"
                class="nav-link">
              Our Works
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
                to="/"
                class="nav-link">
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 nav {
   z-index: 9999;
 }
 a.hover,
 a.router-link-active {
   border-bottom: 2px solid #5352db;
 }
</style>
