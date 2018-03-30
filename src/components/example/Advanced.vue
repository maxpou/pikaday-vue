<template>
  <section>
    <h2>Demo config advanced</h2>

    <div class="element">
      <pikaday
        v-bind:defaultDate="datePlusTenDay"
        v-bind:firstDay="0"
        v-bind:format="'LL'"
        v-bind:numberOfMonths="2"
        v-bind:options="opts"
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
v-bind:firstDay="1"
v-bind:format="'LL'"
v-bind:numberOfMonths="1"
v-on:onSelect="changeDate($event)"
>&lt;/pikaday&gt;

&lt;p&gt;Date is {{ printedDate }}&lt;/p&gt;

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
      </code>
    </pre>
  </section>
</template>

<script>
import Pikaday from '../Pikaday'
// import Pikaday from '../../dist-lib/Pikaday'
import moment from 'moment'

export default {
  name: 'app',
  components: {
    Pikaday
  },
  data () {
    return {
      printedDate: moment().add(10, 'days').toDate(),
      datePlusTenDay: moment().add(10, 'days').toDate(),
      opts: {
        format: 'DD-MM-YYYY',
        yearRange: [1900, new Date().getFullYear()]
      }
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
