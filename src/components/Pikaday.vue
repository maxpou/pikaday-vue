<template>
  <input
    type="text"
    ref="node"
    class="date-picker"
    v-bind:class="{ 'calendar-icon': calendarIcon }">
</template>

<script>
import Pikaday from 'pikaday'

export default {
  props: {
    minDate: {},
    maxDate: {},
    defaultDate: {},
    firstDay: {
      default: 1,
      type: Number
    },
    numberOfMonths: {
      default: 1,
      type: Number
    },
    format: {
      default: 'MMMM Do YYYY',
      type: String
    },
    calendarIcon: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      htmlNode: {},
      currentDate: {}
    }
  },
  watch: {
    minDate (newMinDate) {
      this.picker.setMinDate(newMinDate)
      if (this.currentDate < newMinDate) {
        this.picker.setDate('1970-01-01', true)
      }
    },
    maxDate (newMaxDate) {
      this.picker.setMaxDate(newMaxDate)
      if (this.currentDate > newMaxDate) {
        this.picker.setDate(newMaxDate)
      }
    }
  },
  mounted () {
    this.htmlNode = this.$refs.node
    let vm = this
    this.picker = new Pikaday({
      field: this.htmlNode,
      format: this.format,
      minDate: this.minDate,
      maxDate: this.maxDate,
      firstDay: this.firstDay,
      defaultDate: this.defaultDate,
      numberOfMonths: this.numberOfMonths,
      setDefaultDate: true,
      onSelect () {
        vm.currentDate = this.getMoment().toDate()
        vm.$emit('onSelect', vm.currentDate)
      }
    })
    this.currentDate = this.defaultDate
  }
}
</script>

<style src="pikaday/css/pikaday.css"></style>
<style scoped>
input.date-picker.calendar-icon {
  background-image: url(/static/calendar.png);
  background-repeat: no-repeat;
  background-position: right;
}
.date-picker {
  width: 150px;
  margin-right: 0;
  margin-left: 0;
  border: 1px solid #ccc;
  padding: 9px 0;
  line-height: 1.1;
  color: #444;
  border-radius: 3px;
  text-indent: 13px;
  cursor: pointer;
}
</style>
