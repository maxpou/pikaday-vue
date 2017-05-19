<template>
  <section>
    <h2>Demo config simple</h2>

    <div class="element">
      <pikaday></pikaday>
    </div>

    <pre>
      <code>
&lt;pikaday&gt;&lt;/pikaday&gt;
      </code>
    </pre>
  </section>
</template>

<script>
import Pikaday from '../Pikaday'
// import Pikaday from '../../dist-lib/Pikaday'

export default {
  name: 'app',
  components: {
    Pikaday
  }
}
</script>
