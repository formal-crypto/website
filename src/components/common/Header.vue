<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <h1 class="header__logo" tabindex="1">
          <svg width="185" height="22">
            <use xlink:href="#logo"></use>
          </svg>
        </h1>
        <ul v-if="$root.isMobile" class="header__nav">
          <li class="header__item">
            <a class="header__link" tabindex="2" href="#" @click.prevent="$root.goTo('#contact')">
              contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  beforeDestroy() {},
  created() {},
  methods: {}
}
</script>
