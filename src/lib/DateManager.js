import { ZodiacSign } from './ZodiacSign.js'

/**
 * This class handles (validates) the incoming date and then creates a zodiac sign object based on it to perform specific astrological operations.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */
export class DateManager {
  /**
   * Sets the input date and creates the object if the date is successfully validated.
   *
   * @param {string} inputDate The date sent to the class
   */
  constructor (inputDate) {
    this.inputDate = inputDate

    try {
      this.validatedDate = this.validateDate()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Validates the incoming date before further processing by checking its format and then comparing it to the date object.
   *
   * @returns {string} The validated date in ISO 8610 format
   */
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

      return validatedDate
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Creates an instance of the ZodiacSign class to perform astrological operations on the validated date.
   *
   * @returns {object} The ZodiacSign object
   */
  getZodiacSign () {
    const zodiacSign = new ZodiacSign(this.validatedDate)
    return zodiacSign
  }
}
