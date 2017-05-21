# pikaday-vue

[![Build Status](https://travis-ci.org/maxpou/pikaday-vue.svg?branch=master)](https://travis-ci.org/maxpou/dictionary-game) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


> A Vue.js wrapper for [Pikaday](https://github.com/dbushell/Pikaday)

A demo is available here: [www.maxpou.fr/pikaday-vue/](http://www.maxpou.fr/pikaday-vue/)

## Configuration

**Props config:**

* `minDate`: earliest date that can be selected
* `maxDate`: latest date that can be selected
* `defaultDate`: default date set (should be a Date object)
* `setDefaultDate`: make the `defaultDate` the initial selected value
* `firstDay`: first day of the week (0: Sunday, 1: Monday, etc) (default: 1)
* `format`: the default output format ([examples](https://momentjs.com/#format-dates)) (default: MMMM Do YYYY)
* `numberOfMonths`: number of calendars
* `calendarIcon`: set the icon on the div (default: true)
* `disableWeekends` disallow selection of Saturdays or Sundays (default: false)
* `i18n`: Internationalization (see below)

**Event:**

* `onSelect(dateSelected)`: raise when date change

**Internationalization:**

Your i18n property object must follow the following structure:

```js
{
  previousMonth: 'Previous Month',
  nextMonth: 'Next Month',
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
},
```

## Contributing

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
For commits messages, please follow the [gitmoji guideline](https://gitmoji.carloscuesta.me/)


## Publish new version

Todo: test this `vue build ./src/components/Pikaday.vue --config ./build.config.js --dist ./dist-lib/ --prod --lib`
