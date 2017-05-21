<template>
  <div id="app">
    <demo-simple></demo-simple>
    <hr>
    <demo-advanced></demo-advanced>
    <hr>
    <demo-i18n></demo-i18n>
  </div>
</template>

<script>
import DemoSimple from './components/example/Simple'
import DemoAdvanced from './components/example/Advanced'
import DemoI18n from './components/example/I18n'

export default {
  name: 'app',
  components: {
    DemoSimple,
    DemoAdvanced,
    DemoI18n
  }
}
</script>

<style>
pre {
  background-color: #eff0f1;
  padding-left: 15px;
}
</style>
