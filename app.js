console.log('🚀 Starting the random Node.js script...')

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const randomNumber = getRandomNumber(1, 100)
console.log(`🎲 Random number generated: ${randomNumber}`)

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map(num => num * 2)
console.log('🔢 Doubled numbers:', doubledNumbers)

const user = {
	name: 'John Doe',
	age: getRandomNumber(18, 50),
	location: 'Earth'
}

console.log('👤 Random User:', user)

const asyncTask = async () => {
	console.log('⏳ Simulating async operation...')
	await new Promise(resolve => setTimeout(resolve, 2000))
	console.log('✅ Async operation completed!')
}

asyncTask()

console.log('🎉 End of script!')
