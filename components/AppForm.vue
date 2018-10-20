<template>
    <form name="introduction" method="post" class="" netlify>
            <input type="hidden" name="subject" id="subject">

            <h3 class="">Some personal information first</h3>

            <div class="form-field">
              <label for="name">Your name</label>
              <div class="">
                <input type="text" class="" name="name" id="name" placeholder="Name" required oninvalid="this.setCustomValidity('Your name is required.')" oninput="this.setCustomValidity('')" />
              </div>
            </div>

            <div class="form-field">
              <label for="pronouns">What <a href="https://blog.cultureamp.com/why-sharing-preferred-gender-pronouns-at-work-matters" target="_blank">pronouns</a> should we use when we refer to you?</label>
              <div class="">
                <input type="text" class="" name="pronouns" id="pronouns" placeholder="Pronouns">
              </div>
            </div>

            <div class="form-field">
              <label for="location">Where do you live?</label>
              <div class="">
                <input type="text" class="" name="location" id="location" placeholder="Location">
              </div>
            </div>

            <h3 class="">Do you use social media?</h3>

            <div class="form-field">
              <label for="twitter">Twitter username</label>
              <div class="">
                <input type="text" class="" name="twitter" id="twitter" placeholder="Twitter username">
              </div>
            </div>

            <div class="form-field">
              <label for="facebook">Facebook username</label>
              <div class="">
                <input type="text" class="" name="facebook" id="facebook" placeholder="Facebook username">
              </div>
            </div>

            <div class="form-field">
              <label for="linkedin">Linkedin username</label>
              <div class="">
                <input type="text" class="" name="linkedin" id="linkedin" placeholder="Linkedin username">
              </div>
            </div>


            <h3 class="">Random questions</h3>

            <div class="form-field">
              <label for="team">Which team are you joining?</label>
              <div class="">
                <input type="text" class="" name="team" id="team" required>
              </div>
            </div>

            <div class="form-field">
              <label for="favourite-place">Where’s your favorite place in the world?</label>
              <div class="">
                <input type="text" class="" name="favorite-place" id="favorite-place">
              </div>
            </div>

            <div class="form-field">
              <label for="last-book">What’s the last book you read?</label>
              <div class="">
                <textarea type="text" class="" name="last-book" id="last-book"></textarea>
              </div>
            </div>

            <div class="form-field">
              <label for="best-meal">What’s the best meal you’ve ever had?</label>
              <div class="">
                <textarea type="text" class="" name="best-meal" id="best-meal"></textarea>
              </div>
            </div>

            <div class="form-field">
              <label for="pet-peeves">What are some of your pet peeves?</label>
              <div class="">
                <textarea class="" name="pet-peeves" id="pet-peeves"></textarea>
              </div>
            </div>

            <div class="form-field">
              <label for="feedback">What’s the most helpful way for you to get feedback?</label>
              <div class="">
                <textarea class="" name="feedback" id="feedback"></textarea>
              </div>
            </div>

            <div class="form-field">
              <label for="random">Do you want to share anything else about yourself?</label>
              <div class="">
                <textarea class="" name="random" id="random"></textarea>
              </div>
            </div>

            <button class="" type="submit">Submit</button>
          </form>
</template>

<style scoped>
.form-field {
  margin: 8px 0;
}

input,
textarea {
  min-width: 30em;
  margin: 8px auto;
  border: 1px black solid;
  border-radius: 2px;
}

input {
  height: 2.5em;
}

textarea {
  height: 6em;
}

::placeholder {
  font-size: 12px;
  padding: 0 2px;
}

h3 {
  margin: 16px 0;
}
</style>
