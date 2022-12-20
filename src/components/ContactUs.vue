<template>
<div class="position-relative min-vh-100" id="contactUs">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.009031108877!2d29.08960971540204!3d40.981283079303445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac904dc80da45%3A0xd8d5d7e153b2c83f!2zUkVJTlNVUkFOQ0UgSFVCIFJFQVPDnFJBTlMgQlJPS0VSTMSwxJ7EsCBBLsWeLg!5e0!3m2!1str!2str!4v1668353872017!5m2!1str!2str"
          width="100%"
          style="border:0;height: 60vh;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="position-absolute" style="top: 40%; left: 10%;">
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="wrapper">
              <div class="row g-0 o-gutters">
                <div class="col-md-7 d-flex align-items-stretch ">
                  <div class="contact-wrap w-100 p-md-5  p-4 bg-light shadow-lg">
                    <h3 class="mb-4">Get in touch</h3>
                    <div id="form-message-warning" class="mb-4"></div>
                    <div id="form-message-success" class="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form method="POST" id="contactForm" name="contactForm">
                      <div class="row">
                        <div class="col-md-6 mb-1">
                          <div class="form-group">
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name">
                          </div>
                        </div>
                        <div class="col-md-6 mb-1">
                          <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                          </div>
                        </div>
                        <div class="col-md-12 mb-1">
                          <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
                          </div>
                        </div>
                        <div class="col-md-12 mb-1">
                          <div class="form-group">
                            <textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div class="col-md-12 mb-1">
                          <div class="form-group">
                            <input type="submit" value="Send Message" class="btn text-white" style="background:#4A4A4A;">
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-stretch">
                  <div class="info-wrap w-100 p-lg-5 p-4 rounded" style="margin: -1rem 0;background:#4A4A4A; ">
                    <h3 class="mb-4 mt-md-4">Contact us</h3>
                    <div class="dbox w-100 d-flex align-items-start">
                      <div class="icon d-flex me-1 align-items-center justify-content-center">
                        <span class="fa fa-map-marker"></span>
                      </div>
                      <div class="text pl-3">
                        <p><span>Address:</span> Sahrayıcedit Mah. Atatürk Cad. Mesa Koz No:69 </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex me-1 align-items-center justify-content-center">
                        <span class="fa fa-phone"></span>
                      </div>
                      <div class="text pl-3">
                        <p><span>Phone:</span> <a href="tel://1234567920">+90 216 514 61 02 </a></p>
                      </div>
                    </div>
                    <div class="dbox w-100 me-1 d-flex align-items-center">
                      <div class="icon me-1 d-flex align-items-center justify-content-center">
                        <span class="fa fa-paper-plane"></span>
                      </div>
                      <div class="text pl-3">
                        <p><span>Email:</span> <a href="#">info@rehub.com.tr</a></p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon me-1 d-flex align-items-center justify-content-center">
                        <span class="fa fa-globe"></span>
                      </div>
                      <div class="text pl-3">
                        <p><span>Website</span> <a href="#">yoursite.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>