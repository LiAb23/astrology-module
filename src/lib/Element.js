/*
* Copyright (c) [2026] [Liv Åberg]
* Licensed under the MIT License. For full license information, see LICENSE file.
*/

/**
 * The class determines the element associated with the zodiac sign from the ZodiacSign class.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
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
