/**
 * The class determines the element associated with the zodiac sign from the ZodiacSign class.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */
export class Element {
  /**
   * Sets the zodiac sign and elements.
   *
   * @param {string} zodiacSign The zodiac sign to determine element for
   */
  constructor (zodiacSign) {
    this.zodiacSign = zodiacSign
    this.elements = ['🔥 Fire', '🌍 Earth', '💨 Air', '💧 Water']
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

    const zodiacSign = this.zodiacSign

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].includes(zodiacSign)) {
        return this.elements[i]
      }
    }

    throw new Error(`No matching element found for ${zodiacSign}`)
  }

  /**
   * The presentation of the element of the sign.
   *
   * @returns {string} The element corresponding to the sign
   */
  getElement () {
    const element = this.#decideElement()

    return element
  }
}

// 'These elements represent different facets of personality and how individuals express themselves in the world.

// 'Fire signs are passionate, energetic, and confident. They are often initiators, natural leaders, and risk-takers. Their enthusiasm can sometimes make them impulsive or quick-tempered.'

// 'Earth signs are practical, stable, and reliable. They are grounded, value security, and are good with handling material matters. They prefer long-term plans and stability.'

// 'Air signs are intellectual, communicative, and social. They thrive on mental energy, enjoy exchanging ideas, and tend to think analytically. They are diplomatic and seek balance and fairness.'

// 'Water signs are emotional, intuitive, and creative. They are deeply connected to their own feelings and the emotions of others. They tend to be compassionate and have a strong understanding of human relationships.'
