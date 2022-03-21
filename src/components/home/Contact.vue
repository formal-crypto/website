<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 tabindex="8">Contact Us</h2>
      <div class="contact__inner">
        <div class="contact__picture">
          <img src="@/assets/img/map.png" alt="map" />
        </div>
        <form
          v-if="!formSuccess"
          id="form"
          action="#"
          class="form callback__form"
          @submit.prevent="onSubmit()"
        >
          <p class="form__text">
            Our team is happy to answer your questions.<br />Fill out the&nbsp;form or contact us
            via <a href="https://t.me/formalcrypto" target="blank">Telegram</a>.
          </p>
          <div class="form__inputs">
            <div class="form__field">
              <input
                id="name"
                v-model="form.name.value"
                class="form__input"
                :class="{ error: form.name.error }"
                name="email"
                :type="form.name.type"
                size="20"
                placeholder=" "
              />
              <label class="form__label" for="name">{{ form.name.label }}</label>
              <template v-if="form.name.error">
                <p class="form__error">{{ form.name.error }}</p>
              </template>
            </div>
            <!--            <div class="form__field">-->
            <!--              <input-->
            <!--                id="email"-->
            <!--                v-model="form.email.value"-->
            <!--                class="form__input"-->
            <!--                :class="{ error: form.email.error }"-->
            <!--                name="email"-->
            <!--                :type="form.email.type"-->
            <!--                size="20"-->
            <!--                placeholder=" "-->
            <!--              />-->
            <!--              <label class="form__label" for="email">{{ form.email.label }}</label>-->
            <!--              <template v-if="form.email.error">-->
            <!--                <p class="form__error">{{ form.email.error }}</p>-->
            <!--              </template>-->
            <!--            </div>-->
            <div class="form__message">
              <div class="form__field">
                <textarea
                  id="message"
                  v-model="form.message.value"
                  class="form__message-textarea"
                  :class="{ error: form.message.error }"
                  name="message"
                  :type="form.message.type"
                  size="20"
                  placeholder=" "
                  :maxlength="maxLength"
                ></textarea>
                <label class="form__label" for="message">{{ form.message.label }}</label>
              </div>
            </div>
          </div>
          <button type="submit" class="button button--submit" @click.prevent="onSubmit()">
            Send
          </button>
          <template v-if="preloader">
            <loader
              object="#0F1110"
              color1="#0F1110"
              color2="#00FFC5"
              size="21"
              speed="2"
              bg="#3E2F56"
              objectbg="#00FFC5"
              opacity="80"
              name="spinning"
              z-index="0"
            ></loader>
          </template>
        </form>

        <div v-if="formSuccess" class="contact__success">
          <p>Thanks for contacting us! We will contact with you as soon as possible.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { sendTG } from '@/api'

export default {
  name: 'Contact',
  data() {
    return {
      preloader: false,
      maxLength: 140,
      formSuccess: false,
      form: {
        name: {
          value: '',
          label: 'Name',
          type: 'text',
          error: ''
        },
        email: {
          value: '',
          label: 'Phone number or e-mail',
          type: 'text',
          error: ''
        },
        message: {
          value: '',
          label: 'Comment',
          type: 'text',
          error: ''
        }
      }
    }
  },
  computed: {},
  methods: {
    showMessage() {
      this.formSuccess = true
      setTimeout(() => {
        this.formSuccess = false
      }, 4000)
    },
    async onSubmit() {
      if (!this.$validate(this.form)) {
        return
      }
      this.preloader = true

      const formData = new FormData()
      for (const key in this.form) {
        if (typeof this.form[key].value !== 'undefined') {
          formData.append(key, this.form[key].value)
        }
      }

      const response = await sendTG(formData)

      if (response.status === 200) {
        this.showMessage()

        this.$showNotification(this.$notify, {
          text: 'Your message was sent successfully, Thanks!',
          type: 'success'
        })

        setTimeout(() => {
          for (const key in this.form) {
            if (typeof this.form[key].value !== 'undefined') {
              this.form[key].value = ''
            }
          }
        }, 3000)
      } else {
        this.$showNotification(this.$notify, {
          text: 'An error occurred. Please try again later.',
          type: 'error'
        })
      }

      this.preloader = false
    }
  }
}
</script>
