<template>
  <section>
    <h2>Example2: Internationalization</h2>
    <p><i>(Example in French)</i></p>

    <div class="element">
      <pikaday
      v-bind:calendarIcon=false
      v-bind:i18n="i18nFr"
      ></pikaday>
    </div>

    <pre>
      <code>
&lt;pikaday
  v-bind:calendarIcon=false
  v-bind:i18n=i18nFr
>&lt;/pikaday&gt;

import Pikaday from '../Pikaday'
import * as i18nFr from '../../i18n/Fr'

export default {
  name: 'app',
  components: {
    Pikaday
  },
  data () {
    return {
      i18nFr: i18nFr.default
    }
  }
}

// i18n/Fr.js
export default {
  previousMonth: 'Mois Précédent',
  nextMonth: 'Mois Suivant',
  months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
}
      </code>
    </pre>
  </section>
</template>

<script>
import Pikaday from '../Pikaday'
import * as i18nFr from '../../i18n/Fr'

export default {
  name: 'app',
  components: {
    Pikaday
  },
  data () {
    return {
      i18nFr: i18nFr.default
    }
  }
}
</script>
<style>
pre {
  background-color: #eff0f1;
  padding-left: 15px;
}
</style>
