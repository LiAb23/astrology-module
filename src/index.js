import { AstrologyGenerator } from './lib/AstrologyGenerator.js'
import { DateManager } from './lib/DateManager.js'

const myAstrologyGenerator = new AstrologyGenerator()
myAstrologyGenerator.printZodiac()

const inputDate = '2023-11-02'
const dateManager = new DateManager(inputDate)
try {
  const validatedDate = dateManager.validateDate()
  console.log('Validated date:', validatedDate)
} catch (error) {
  console.error('Validation error:', error.message)
}
