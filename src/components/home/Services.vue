<template>
  <section ref="services" class="services">
    <div class="container">
      <h2 tabindex="4">Services</h2>
      <div class="services__list">
        <div v-for="(item, i) in items" :key="i" class="services__item">
          <div class="services__video">
            <img :src="item.poster" alt="item.text" />
          </div>
          <p class="services__text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      videoPlayed: false,
      items: [
        {
          poster: require('@/assets/img/smart.png'),
          text: 'Smart contracts'
        },
        {
          poster: require('@/assets/img/blockchain.png'),
          text: 'Blockchain'
        },
        {
          poster: require('@/assets/img/audit.png'),
          text: 'Audit and verification'
        }
      ]
    }
  },
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
