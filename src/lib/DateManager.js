/**
 * A module to handle the incoming date and then call on specific classes to perform specific date related operations.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */

export class DateManager {
  constructor (inputDate) {
    this.inputDate = inputDate
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
      return validatedDate
    } catch (error) {
      throw new Error(`Validation failed: ${error.message}`)
    }
  }

  printDate () {
    console.log('Please enter a date (YYYY-MM-DD):')
  }
}
