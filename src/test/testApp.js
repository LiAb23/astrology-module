/*
* Copyright (c) [2024] [Liv Åberg]
* Licensed under the MIT License. For full license information, see LICENSE file.
*/

/**
 * File to perform manual tests on the module.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */

import { DateManager } from '../lib/DateManager.js'
import { ZodiacSign } from '../lib/ZodiacSign.js'
import { Modality } from '../lib/Modality.js'
import { Element } from '../lib/Element.js'

/**
 * Tests for the DateManager class
 *
 */
console.log('Tests for the DateManager class:\n')
console.log('TC1: Valid date')
try {
  const validDateTest = new DateManager('2023-03-30')
  console.log('Input: This is the tested input date: 2023-03-30')
  console.log('Expected output: 2023-03-30')

  const validatedValidDate = validDateTest.validateDate()
  console.log('Output: This is the validated date to check astrological data for:', validatedValidDate, '\n')
} catch (error) {
  console.log('Error sent from the validateDate method:', error.message, '\n')
}

console.log('TC2: Invalid format')
try {
  const invalidFormatTest = new DateManager('2023-0-30')
  console.log('Input: This is the tested input date: 2023-0-30')
  console.log('Expected output: an error message')

  const validatedInvalidFormatDate = invalidFormatTest.validateDate()
  console.log('Output: This is the validated date to check astrological data for:', validatedInvalidFormatDate)
} catch (error) {
  console.log('Error sent from the validateDate method:', error.message, '\n')
}

console.log('TC3: Invalid format')
try {
  const invalidFormat2Test = new DateManager('23-01-30')
  console.log('Input: This is the tested input date: 23-01-30')
  console.log('Expected output: an error message')

  const validatedInvalidFormat2Date = invalidFormat2Test.validateDate()
  console.log('Output: This is the validated date to check astrological data for:', validatedInvalidFormat2Date)
} catch (error) {
  console.log('Error sent from the validateDate method:', error.message, '\n')
}

console.log('TC4: Invalid format')
try {
  const invalidFormat3Test = new DateManager('30 jan 2023')
  console.log('Input: This is the tested input date: 30 jan 2023')
  console.log('Expected output: an error message')

  const validatedInvalidFormat3Date = invalidFormat3Test.validateDate()
  console.log('Output: This is the validated date to check astrological data for:', validatedInvalidFormat3Date)
} catch (error) {
  console.log('Error sent from the validateDate method:', error.message, '\n')
}

console.log('TC5: Invalid date')
try {
  const invalidDateTest = new DateManager('2023-02-30')
  console.log('Input: This is the tested input date: 2023-02-30')
  console.log('Expected output: an error message')

  const invalidValidatedDate = invalidDateTest.validateDate()
  console.log('Output: This is the validated date to check astrological data for:', invalidValidatedDate)
} catch (error) {
  console.log('Error sent from the validateDate method:', error.message, '\n')
}

console.log('TC6: Create object with valid date')
try {
  const dateManager = new DateManager('2023-01-30')
  console.log('Input: This is the tested input date: 2023-01-30')
  console.log('Expected output: an object')

  const zodiacSignObject = dateManager.getZodiacSignObject()
  console.log('Output: This is the returned object:', zodiacSignObject, '\n')
} catch (error) {
  console.log('Error sent from the getZodiacSign method:', error.message, '\n')
}

console.log('TC7: Create object with invalid date')
try {
  const dateManager = new DateManager('2023-02-30')
  console.log('Input: This is the tested input date: 2023-02-30')
  console.log('Expected output: an error message')

  const zodiacSignObject = dateManager.getZodiacSignObject()
  console.log('Output: This is the returned object:', zodiacSignObject, '\n')
} catch (error) {
  console.log('Error sent from the getZodiacSign method:', error.message, '\n')
}

/**
 * Tests for the ZodiacSign class
 *
 */
console.log('Tests for the ZodiacSign class:\n')
console.log('TC8: Get the zodiac sign')
try {
  const zodiacSign = new ZodiacSign('2023-03-30')
  console.log('Input: This is the tested input date: 2023-03-30')
  console.log('Expected output: ♈Aries')

  const sign = zodiacSign.getZodiacSign()
  console.log('Output: The zodiac sign for this date is:', sign, '\n')
} catch (error) {
  console.log('Error sent from the getZodiacSign method:', error.message, '\n')
}

console.log('TC9: Get another zodiac sign')
try {
  const zodiacSign = new ZodiacSign('2023-07-22')
  console.log('Input: This is the tested input date: 2023-07-22')
  console.log('Expected output: ♋Cancer')

  const sign = zodiacSign.getZodiacSign()
  console.log('Output: The zodiac sign for this date is:', sign, '\n')
} catch (error) {
  console.log('Error sent from the getZodiacSign method:', error.message, '\n')
}

console.log('TC10: Try invalid zodiac sign')
try {
  const zodiacSign = new ZodiacSign('2023-00-30')
  console.log('Input: This is the tested input date: 2023-00-30')
  console.log('Expected output: an error message')

  const sign = zodiacSign.getZodiacSign()
  console.log('Output: The zodiac sign for this date is:', sign, '\n')
} catch (error) {
  console.log('Error sent from the getZodiacSign method:', error.message, '\n')
}

console.log('TC11: Try invalid zodiac sign')
try {
  const zodiacSign = new ZodiacSign('2023-02-30')
  console.log('Input: This is the tested input date: 2023-02-30')
  console.log('Expected output: an error message')

  const sign = zodiacSign.getZodiacSign()
  console.log('Output: The zodiac sign for this date is:', sign, '\n')
} catch (error) {
  console.log('Error sent from the getZodiacSign method:', error.message, '\n')
}

/**
 * Tests for the Element class
 *
 */
console.log('Tests for the Element class:\n')
console.log('TC12: Get the element for 🔥 Fire sign')
try {
  const elementClass = new Element('♈Aries')
  console.log('Input: This is the tested input sign: ♈Aries')
  console.log('Expected output: 🔥 Fire')

  const element = elementClass.getElement()
  console.log('Output: The element for ♈Aries is:', element, '\n')
} catch (error) {
  console.log('Error sent from the getElement method:', error.message, '\n')
}

console.log('TC13: Get the element for 💨 Air sign')
try {
  const elementClass = new Element('♎Libra')
  console.log('Input: This is the tested input sign: ♎Libra')
  console.log('Expected output: 💨 Air')

  const element = elementClass.getElement()
  console.log('Output: The element for ♎Libra is:', element, '\n')
} catch (error) {
  console.log('Error sent from the getElement method:', error.message, '\n')
}

console.log('TC14: Get the element for an invalid sign')
try {
  const elementClass = new Element('?Invalid sign')
  console.log('Input: This is the tested input sign: ?Invalid sign')
  console.log('Expected output: an error message')

  const element = elementClass.getElement()
  console.log('Output: The element for ?Invalid sign is:', element, '\n')
} catch (error) {
  console.log('Error sent from the getElement method:', error.message, '\n')
}

/**
 * Tests for the Modality class
 *
 */
console.log('Tests for the Modality class:\n')
console.log('TC15: Get the modality for a fixed sign')
try {
  const modalityClass = new Modality('♉Taurus')
  console.log('Input: This is the tested input sign: ♉Taurus')
  console.log('Expected output: Fixed')

  const modality = modalityClass.getModality()
  console.log('Output: The modality for ♉Taurus is:', modality, '\n')
} catch (error) {
  console.log('Error sent from the getModality method:', error.message, '\n')
}

console.log('TC16: Get the modality for a mutable sign')
try {
  const modalityClass = new Modality('♐Sagittarius')
  console.log('Input: This is the tested input sign: ♐Sagittarius')
  console.log('Expected output: Mutable')

  const modality = modalityClass.getModality()
  console.log('Output: The modality for ♐Sagittarius is:', modality, '\n')
} catch (error) {
  console.log('Error sent from the getModality method:', error.message, '\n')
}

console.log('TC17: Get the modality for an invalid sign')
try {
  const modalityClass = new Modality('♎Libro')
  console.log('Input: This is the tested input sign: ♎Libro')
  console.log('Expected output: an error message')

  const modality = modalityClass.getModality()
  console.log('Output: The modality for ♎Libro is:', modality, '\n')
} catch (error) {
  console.log('Error sent from the getModality method:', error.message, '\n')
}
