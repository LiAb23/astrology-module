/**
 * File to perform manual tests on the module.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */

import { DateManager } from '../lib/DateManager.js'
import { ZodiacSign } from '../lib/ZodiacSign.js'
import { Modality } from '../lib/Modality.js'
import { Element } from '../lib/Element.js'

const dateManager = new DateManager('2023-01-30')

const validatedDate = dateManager.validatedDate
console.log('Validated date to check astrological data for:', validatedDate)

const zodiacSign = new ZodiacSign('2023-02-30')
const sign = zodiacSign.getZodiacSign()
console.log(`Your zodiac sign is: ${sign}`)

const element = new Element(sign)
element.getElement()
console.log(`As a ${sign}, your element is: ${element.getElement()}`)
console.log(`Your element is: ${element.getElement()}`)

const modality = new Modality(sign)
modality.getModality()
console.log(`As a ${sign}, your modality is: ${modality.getModality()}`)
console.log(`Your modality is: ${modality.getModality()}`)
