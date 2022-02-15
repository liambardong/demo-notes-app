export function calculateCost(storage) {

	// if user wants to store 10 or fewer notes, we scharge them $4 per note. 
	// 11 to 100 notes we'll charge $2 and any more is $1. 
	// We multiple by 100 since Stripe expects us to give cost in pennies. 
	const rate = storage <= 10 ? 4 : storage <= 100 ? 2: 1;
	return rate * storage * 100;

}
