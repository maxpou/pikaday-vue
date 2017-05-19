<template>
  <div id="app">
    <demo-simple></demo-simple>
    <hr>
    <demo-advanced></demo-advanced>
  </div>
</template>

<script>
import DemoSimple from './components/example/Simple'
import DemoAdvanced from './components/example/Advanced'

export default {
  name: 'app',
  components: {
    DemoSimple,
    DemoAdvanced
  }
}
</script>

<style>
pre {
  background-color: #eff0f1;
  padding-left: 15px;
}
</style>
