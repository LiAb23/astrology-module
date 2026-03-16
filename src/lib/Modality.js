/*
 * Copyright (c) [2026] [Liv Åberg]
 * Licensed under the MIT License. For full license information, see LICENSE file.
 */

/**
 * The class determines the modality associated with the zodiac sign from the ZodiacSign class.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class Modality {
  #zodiacSign

  /**
   * Initializes the Modality object with a zodiac sign.
   *
   * @param {string} zodiacSign The zodiac sign to determine modality for
   */
  constructor (zodiacSign) {
    this.#zodiacSign = zodiacSign
  }

  /**
   * Maps the zodiac sign to its corresponding modality.
   *
   * @returns {string} The modality corresponding to the sign
   */
  #decideModality () {
    const modalities = {
      Cardinal: ['♈Aries', '♋Cancer', '♎Libra', '♑Capricorn'],
      Fixed: ['♌Leo', '♏Scorpio', '♒Aquarius', '♉Taurus'],
      Mutable: ['♐Sagittarius', '♓Pisces', '♊Gemini', '♍Virgo']
    }

    const zodiacSign = this.#zodiacSign

    for (const modality in modalities) {
      if (modalities[modality].includes(zodiacSign)) {
        return modality
      }
    }

    throw new Error(`No matching modality found for ${zodiacSign}`)
  }

  /**
   * Retrieves the modality of the sign.
   *
   * @returns {string} The modality corresponding to the sign
   */
  getModality () {
    const modality = this.#decideModality()

    return modality
  }
}
