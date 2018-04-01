<template>
  <span class="lang-switch" @click="langSwitch()">中文</span>
</template>
<script>
    export default {
        name: "langSwitch",
        data: function () {
            return {
                msg: "语言切换"
            }
        },
        methods: {
            langSwitch: function () {
                this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
            }
        }
    }
</script>
<style scoped>
    .lang-switch{
        border: 1px solid red;
        padding: 5px 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    .lang-switch:hover {
        background-color: bisque;
    }
</style>


