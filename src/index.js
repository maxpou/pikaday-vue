module.exports = {

  Pikaday: require('./components/Pikaday.vue'),

  install: function (Vue) {
    Vue.component('Pikaday', module.exports.Pikaday)
  }
}

// var Pikaday = require('./components/Pikaday.vue')
// module.exports = Pikaday
