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
  #zodiacSign
  #elements

  /**
   * Initializes the Element object with a zodiac sign and prepares the list of elements.
   *
   * @param {string} zodiacSign The zodiac sign to determine element for
   */
  constructor (zodiacSign) {
    this.#zodiacSign = zodiacSign
    this.#elements = ['🔥 Fire', '🌍 Earth', '💨 Air', '💧 Water']
  }

  /**
   * Maps the zodiac sign to its corresponding element.
   *
   * @returns {string} The element corresponding to the sign
   */
  #decideElement () {
    const signsForElement = [
      ['♈Aries', '♌Leo', '♐Sagittarius'],
      ['♉Taurus', '♍Virgo', '♑Capricorn'],
      ['♊Gemini', '♎Libra', '♒Aquarius'],
      ['♋Cancer', '♏Scorpio', '♓Pisces']
    ]

    for (let i = 0; i < signsForElement.length; i++) {
      if (signsForElement[i].includes(this.#zodiacSign)) {
        return this.#elements[i]
      }
    }

    throw new Error(`No matching element found for ${this.#zodiacSign}`)
  }

  /**
   * Retrieves the element of the sign.
   *
   * @returns {string} The element corresponding to the sign
   */
  getElement () {
    const element = this.#decideElement()

    return element
  }
}
