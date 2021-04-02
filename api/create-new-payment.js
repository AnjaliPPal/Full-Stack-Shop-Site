const stripe = require("stripe")(
  "sk_test_51HdsPRE4K4vYNE8JEi4JDfF8DfhTpXPe30FZ1MYld0rQmVfol6oDA2lsS6V6SDMvIDf4j8SJvRs7faqrH1Miy8zD00MlX3Dyee"
);

export default async (request, response) => {
	if (request.method !== 'POST') {
		return response.status(400).send('400 Bad Request');
	}
	const total = request.query.total;
	const desc = request.query.desc;
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "inr",
		description: `Amazon-ish Order for ${(total / 100).toFixed(2)} INR: ${desc}`
	});
	console.log(paymentIntent);
	return response.status(201).json({
		clientSecret: paymentIntent.client_secret,
		id: paymentIntent.created
	})
}