<template>
  <div class="test-i18n">
    <h1>{{$t('name')}}</h1>
    <lang-switch></lang-switch>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    langSwitch: function () {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
