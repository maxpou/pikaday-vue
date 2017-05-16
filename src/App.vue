<template>
  <div id="app">
    <pikaday
      v-bind:defaultDate="datePlusTenDay"
      v-bind:firstDay="2"
      v-bind:format="'LL'"
      :numberOfMonths="2"
      v-bind:calendarIcon=true
      v-on:onSelect="changeDate($event)"
    ></pikaday>
    <p>{{ printedDate }}</p>
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
      printedDate: '',
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
