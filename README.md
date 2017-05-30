# pikaday-vue

[![Build Status](https://travis-ci.org/maxpou/pikaday-vue.svg?branch=master)](https://travis-ci.org/maxpou/dictionary-game) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


> A Vue.js wrapper for [Pikaday](https://github.com/dbushell/Pikaday)

Demo and examples are available here: [www.maxpou.fr/pikaday-vue/](http://www.maxpou.fr/pikaday-vue/)

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

**Event:**

* `onSelect(dateSelected)`: raise when date change

## Setting up the demo locally

```bash
cd demo
npm install
npm run dev
```

See [demo/README.md](demo/README.md) for more details.

## Contributing

For commits messages, please follow the [gitmoji guideline](https://gitmoji.carloscuesta.me/).
