/**
 * A module to generate the zodiac sign and horoscope for a specific date.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */

export class AstrologyGenerator {
  constructor (validatedDate) {
    this.inputDate = validatedDate
    this.zodiacSigns = [
      '♈ Aries', '♉ Taurus', '♊ Gemini', '♋ Cancer', '♌ Leo', '♍ Virgo', '♎ Libra', '♏ Scorpio', '♐ Sagittarius', '♑ Capricorn', '♒ Aquarius', '♓ Pisces'
    ]
    this.horoscopes = []
  }

  printZodiac () {
    for (const zodiacSign of this.zodiacSigns) {
      console.log(zodiacSign)
    }
  }
}
