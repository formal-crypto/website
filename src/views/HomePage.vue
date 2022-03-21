<template>
  <main class="main">
    <Blank />
    <!--    <Services />-->
    <Company />
    <Projects />
    <Contact />
  </main>
</template>

<script>
import Blank from '@/components/home/Blank'
// import Services from '@/components/home/Services'
import Company from '@/components/home/Company'
import Projects from '@/components/home/Projects'
import Contact from '@/components/home/Contact'

export default {
  name: 'HomePage',
  components: {
    Blank,
    // Services,
    Projects,
    Company,
    Contact
  },
  props: {},
  data() {
    return {}
  },
  metaInfo() {
    return {
      title: this.$route.meta.title
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
