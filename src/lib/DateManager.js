/**
 * A module to handle (validate) the incoming date and then call on specific classes to perform specific date related operations.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */

import { AstrologyGenerator } from './AstrologyGenerator.js'

export class DateManager {
  constructor (validatedDate) {
    this.inputDate = validatedDate
  }

  validateDate () {
    const re = /^(19|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    try {
      if (!re.test(this.inputDate)) {
        throw new Error('The date must be in the following format: YYYY-MM-DD')
      }

      const date = new Date(this.inputDate)
      if (isNaN(date.getTime())) {
        throw new Error('The date is not a valid date.')
      }

      const validatedDate = date.toISOString().split('T')[0]
      console.log('Validated date to check sign for:', validatedDate)
      return validatedDate
    } catch (error) {
      throw new Error(`Validation failed: ${error.message}`)
    }
  }

  callAstrologyGenerator () {
    const validatedDate = this.validateDate()
    if (validatedDate) {
      const astrologyGenerator = new AstrologyGenerator(validatedDate)
      astrologyGenerator.getZodiacSign()
    } else {
      console.error('Validation failed')
    }
  }
}
