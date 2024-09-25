/**
 * This class determines the modality associated with the zodiac sign from the ZodiacSign class.
 *
 * @author Liv <lh224hh@student.lnu.se>
 */
export class Modality {
  /**
   * Sets the zodiac sign and modalities.
   *
   * @param {string} sign The zodiac sign to use
   */
  constructor (sign) {
    this.sign = sign
    this.modalities = ['Cardinal', 'Fixed', 'Mutable']
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

    const sign = this.sign

    for (const modality in modalities) {
      if (modalities[modality].includes(sign)) {
        return modality
      }
    }

    throw new Error(`No matching modality found for ${sign}`)
  }

  /**
   * The presentation of the modality to the sign.
   *
   * @returns {string} The modality corresponding to the sign
   */
  getModality () {
    const modality = this.#decideModality()

    return modality
  }
}
