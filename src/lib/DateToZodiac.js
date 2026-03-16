/*
 * Copyright (c) [2026] [Liv Åberg]
 * Licensed under the MIT License. For full license information, see LICENSE file.
 */

import { ZodiacSign } from './ZodiacSign.js'

/**
 * The class validates the incoming date and stores the validated result. It can then create a zodiac sign object based on the validated date, which can be used to perform more specific astrological operations.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class DateToZodiac {
  #inputDate
  #validatedDate

  /**
   * Sets the input date, validates it, and creates the object if the date is successfully validated.
   *
   * @param {string} inputDate The date sent to the class
   */
  constructor (inputDate) {
    this.#inputDate = inputDate
    this.#validatedDate = this.validateDate()
  }

  /**
   * Validates the incoming date before further processing by checking its format with regex and then comparing it to the JavaScript standard date object to determine if it is a valid date.
   *
   * @returns {string} The validated date in ISO 8601 format
   */
  validateDate () {
    const dateRegex = /^(19|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    try {
      if (!dateRegex.test(this.#inputDate)) {
        throw new Error('The date must be in the following format: YYYY-MM-DD')
      }

      const date = new Date(this.#inputDate)
      if (isNaN(date.getTime())) {
        throw new Error('The date you submitted is not a valid date.')
      }

      const validatedDate = date.toISOString().split('T')[0]

      if (validatedDate !== this.#inputDate) {
        throw new Error('The date you submitted is not a valid date.')
      } else {
        return validatedDate
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Retrieves the validated date.
   *
   * @returns {string} The validated date
   */
  getValidatedDate () {
    return this.#validatedDate
  }

  /**
   * Creates and returns the ZodiacSign object used to perform astrological operations on the validated date.
   *
   * @returns {object} The ZodiacSign object
   */
  getZodiacSignObject () {
    return new ZodiacSign(this.#validatedDate)
  }
}
