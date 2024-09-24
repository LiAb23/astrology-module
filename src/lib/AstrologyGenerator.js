/**
 * This class takes the validated date from DateManager, and generates various astrological data for that date such as its zodiac sign, element and modality and presents them.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */
export class AstrologyGenerator {
  /**
   * Sets the zodiac signs, elements and modalities.
   *
   * @param {string} validatedDate The validated date
   */
  constructor (validatedDate) {
    this.inputDate = validatedDate
    this.zodiacSigns = [
      '♈Aries', '♉Taurus', '♊Gemini', '♋Cancer', '♌Leo', '♍Virgo', '♎Libra', '♏Scorpio', '♐Sagittarius', '♑Capricorn', '♒Aquarius', '♓Pisces'
    ]
    // this.personalityTraits = []
    this.elements = ['🔥 Fire', '🌍 Earth', '💨 Air', '💧 Water']
    this.modalities = ['Cardinal', 'Fixed', 'Mutable']
    // this.horoscopes = []
  }

  /**
   * Sets the dates for each sign to decide the zodiac sign of the given date.
   *
   * @returns {string} The zodiac sign of the validatedDate
   */
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
    throw new Error('Found no matching sign.')
  }

  /**
   * The presentation of the actual sign.
   *
   * @returns {string} The zodiac sign of the validatedDate
   */
  getZodiacSign () {
    const sign = this.#decideZodiacSign()

    console.log(`Your zodiac sign is: ${sign}`)
    return sign
  }

  /**
   * Decides the element of the sign given.
   *
   * @returns {string} The element corresponding to the sign
   */
  #decideElement () {
    const elements = [
      ['♈Aries', '♌Leo', '♐Sagittarius'],
      ['♉Taurus', '♍Virgo', '♑Capricorn'],
      ['♊Gemini', '♎Libra', '♒Aquarius'],
      ['♋Cancer', '♏Scorpio', '♓Pisces']
    ]

    const sign = this.getZodiacSign()

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].includes(sign)) {
        return this.elements[i]
      }
    }

    throw new Error(`No matching element found for ${sign}`)
  }

  /**
   * The presentation of the actual element to the sign.
   *
   * @returns {string} The element corresponding to the sign
   */
  getElement () {
    const sign = this.getZodiacSign()
    const element = this.#decideElement()

    console.log(`As a ${sign}, your element is: ${element}`)
    console.log(`Your element is: ${element}`)
    return element
  }

  /**
   * Decides the modality of the sign given.
   *
   * @returns {string} The modality corresponding to the sign
   */
  #decideModality () {
    const modalities = {
      Cardinal: ['♈Aries', '♋Cancer', '♎Libra', '♑Capricorn'],
      Fixed: ['♌Leo', '♏Scorpio', '♒Aquarius', '♉Taurus'],
      Mutable: ['♐Sagittarius', '♓Pisces', '♊Gemini', '♍Virgo']
    }

    const sign = this.getZodiacSign()

    for (const modality in modalities) {
      if (modalities[modality].includes(sign)) {
        return modality
      }
    }

    throw new Error(`No matching modality found for ${sign}`)
  }

  /**
   * The presentation of the actual modality to the sign.
   *
   * @returns {string} The modality corresponding to the sign
   */
  getModality () {
    const sign = this.getZodiacSign()
    const modality = this.#decideModality()
    console.log(`As a ${sign}, your modality is: ${modality}`)
    console.log(`Your modality is: ${modality}`)

    return modality
  }
}

// 'These elements represent different facets of personality and how individuals express themselves in the world.

// 'Fire signs are passionate, energetic, and confident. They are often initiators, natural leaders, and risk-takers. Their enthusiasm can sometimes make them impulsive or quick-tempered.'

// 'Earth signs are practical, stable, and reliable. They are grounded, value security, and are good with handling material matters. They prefer long-term plans and stability.'

// 'Air signs are intellectual, communicative, and social. They thrive on mental energy, enjoy exchanging ideas, and tend to think analytically. They are diplomatic and seek balance and fairness.'

// 'Water signs are emotional, intuitive, and creative. They are deeply connected to their own feelings and the emotions of others. They tend to be compassionate and have a strong understanding of human relationships.'

// 'Each modality represents a different way of approaching life and handling challenges.'

// 'Cardinal signs are initiators and leaders. They are action-oriented, often starting new projects or driving change. They thrive in environments where they can take charge and set things in motion.'

// 'Fixed signs are known for their determination, persistence, and reliability. They are steady, focused, and resistant to change, preferring to maintain stability and follow through on what’s already started.'

// 'Mutable signs are adaptable, flexible, and versatile. They are good at adjusting to change and going with the flow. Their open-mindedness makes them skilled at handling transitions and diverse perspectives.'
