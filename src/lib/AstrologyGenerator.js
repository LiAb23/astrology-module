/**
 * A module to generate the zodiac sign and horoscope for a specific given date.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */

export class AstrologyGenerator {
  constructor (validatedDate) {
    this.inputDate = validatedDate
    this.zodiacSigns = [
      '♈ Aries', '♉ Taurus', '♊ Gemini', '♋ Cancer', '♌ Leo', '♍ Virgo', '♎ Libra', '♏ Scorpio', '♐ Sagittarius', '♑ Capricorn', '♒ Aquarius', '♓ Pisces'
    ]
    // this.horoscopes = []
  }

  // Method to decide the sign, based on the date provided.
  #decideZodiacSign () {
    const zodiacSign = {
      '♈Aries': { start: '03-21', end: '04-19' },
      '♉Taurus': { start: '04-20', end: '05-20' },
      '♊Gemini': { start: '05-21', end: '06-20' },
      '♋Cancer': { start: '06-21', end: '07-22' },
      '♌Leo': { start: '07-23', end: '08-22' },
      '♍Virgo': { start: '08-23', end: '09-22' },
      '♎Libra': { start: '09-23', end: '10-22' },
      '♏Scorpio': { start: '10-23', end: '11-21' },
      '♐Sagittarius': { start: '11-22', end: '12-21' },
      '♑Capricorn': [
        { start: '12-22', end: '12-31' },
        { start: '01-01', end: '01-19' }
      ],
      '♒Aquarius': { start: '01-20', end: '02-18' },
      '♓Pisces': { start: '02-19', end: '03-20' }
    }

    const monthDay = this.inputDate.slice(5)

    for (const sign in zodiacSign) {
      const periods = zodiacSign[sign]

      if (Array.isArray(periods)) {
        for (const period of periods) {
          if (monthDay >= period.start && monthDay <= period.end) {
            return sign
          }
        }
      } else {
        const { start, end } = periods
        if (monthDay >= start && monthDay <= end) {
          return sign
        }
      }
    }
    throw new Error('Invalid date: Found no matching sign.')
  }

  // Present the sign.
  getZodiacSign () {
    const sign = this.#decideZodiacSign()
    console.log(`Your zodiac sign is: ${sign}`)
  }
}
