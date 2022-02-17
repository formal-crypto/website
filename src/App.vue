<template>
  <div id="__app">
    <sprite />
    <Header />
    <notifications group="app-notifications" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Sprite from '@/components/common/Sprite'

export default {
  name: 'App',
  components: {
    Sprite,
    Header
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
