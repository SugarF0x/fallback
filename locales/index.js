import { load } from 'js-yaml'
const fs = require('fs')

const en = fs.readFileSync('./locales/en.yaml')
const ru = fs.readFileSync('./locales/ru.yaml')

export default {
  en: load(en),
  ru: load(ru)
}

