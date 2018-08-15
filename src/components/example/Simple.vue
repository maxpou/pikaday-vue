<template>
  <section>
    <h2>Demo config simple</h2>

    <div class="element">
      <pikaday :default-date="new Date(1984,3,27)" :set-default-date="true"></pikaday>
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

export default {
  name: 'app',
  components: {
    Pikaday
  }
}
</script>
