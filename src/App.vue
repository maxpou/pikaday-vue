<template>
  <div id="app">

    <section>
      <h2>Example</h2>

      <div class="element">
        <pikaday
          v-bind:defaultDate="datePlusTenDay"
          v-bind:firstDay="2"
          v-bind:format="'LL'"
          :numberOfMonths="2"
          v-bind:calendarIcon=true
          v-on:onSelect="changeDate($event)"
        ></pikaday>
      </div>

      <div class="result">
        <p>Date is {{ printedDate }}</p>
      </div>

      <pre>
        <code>
&lt;pikaday
  v-bind:defaultDate="datePlusTenDay"
  v-bind:firstDay="2"
  v-bind:format="'LL'"
  :numberOfMonths="2"
  v-bind:calendarIcon=true
  v-on:onSelect="changeDate($event)"
>&lt;/pikaday>

// datePlusTenDay = moment().add(10, 'days').toDate()
        </code>
      </pre>


    </section>
  </div>
</template>

<script>
import Pikaday from './components/Pikaday'
import moment from 'moment'

export default {
  name: 'app',
  components: {
    Pikaday
  },
  data () {
    return {
      printedDate: moment().add(10, 'days').toDate(),
      datePlusTenDay: moment().add(10, 'days').toDate()
    }
  },
  methods: {
    changeDate (data) {
      this.printedDate = data
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
