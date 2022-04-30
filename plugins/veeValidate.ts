import {  defineRule, configure } from 'vee-validate'

import {
  required,
  email,
  min,
  max,
  length,
  numeric,
  confirmed,
} from '@vee-validate/rules'

import { localize } from '@vee-validate/i18n';

import en from '@vee-validate/i18n/dist/locale/en.json';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';



export default defineNuxtPlugin((nuxtApp) => {
  configure({
    generateMessage: localize({
      en,
      zhTW,
    }),
  })

  defineRule('required', required)
  defineRule('email', email)
  defineRule('length', length)
  defineRule('min', min)
  defineRule('max', max)
  defineRule('numeric', numeric)
  defineRule('confirmed', confirmed)
})
