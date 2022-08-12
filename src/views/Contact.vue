<template>
  <div>
    <button data-bs-toggle="modal" class="btn" data-bs-target="#exampleModal">
      <div class="float">
        <i class="fa-solid fa-phone-flip my-float"></i>
      </div>
    </button>
    <!-- Modal -->
    <div
      class="modal fade text-center"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">
              Contact Me
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="p-3">
              <form
                action="https://formspree.io/f/xeqnrenb"
                method="POST"
                class="form"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form p-2">
                      <input
                        type="name"
                        id="name"
                        name="name"
                        class="form-control"
                        placeholder="Name*"
                      />
                      <label for="name" class=""></label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="md-form p-2">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                        placeholder="Email*"
                      />
                      <label for="email" class=""></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form p-2">
                      <input
                        type="subject"
                        id="subject"
                        name="subject"
                        class="form-control"
                        placeholder="Subject*"
                      />
                      <label for="subject" class=""></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form p-2">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                        placeholder="Message*"
                      ></textarea>
                      <label for="message"></label>
                    </div>
                  </div>
                </div>
                <div class="contact-btn row p-3">
                  <div class="col-md-6">
                    <button
                      type="submit"
                      class="btn btn-outline-success col-lg-6"
                      target="_blank"
                    >
                      Send
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button
                      type="button"
                      class="btn btn-outline-danger col-lg-6"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  </template>
<script></script>
<style scoped>
body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 18px;
  background-color: #ccc;
}
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 35px;
  right: 14px;
  background-color: #11baab;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}
.my-float {
  margin-top: 22px;
}
.modal-content {
  background-image: url(https://i.postimg.cc/G3X5xkjQ/gree-contact.jpg);
}
.modal-title {
  font-family: "Playfair Display", serif;
  color: #cc9d18;
  text-shadow: 1px 1px 0px #ff0000;
  font-size: 30pt;
}
img {
  height: 492px;
}
#contact {
  background-color: black;
  /* padding: 50px; */
}
.form-control {
  background-color: #000;
}
.send-btn {
  background-color: black;
}
.fa-phone-flip a {
  color: #444;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}
.fa-phone-flip:hover {
  color: #9d18cc;
}
</style>
