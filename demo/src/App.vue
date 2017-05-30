<template>
  <div id="app">
    <demo-simple></demo-simple>
    <hr>
  </div>
</template>

<script>
import DemoSimple from './components/Simple'
// import DemoAdvanced from './components/Advanced' <demo-advanced></demo-advanced>

export default {
  name: 'app',
  components: {
    DemoSimple
    // DemoAdvanced
  }
}
</script>

<style>
pre {
  background-color: #eff0f1;
  padding-left: 15px;
}
</style>
