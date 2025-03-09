import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/tables/subscriptions";

interface SubscribeToEventParams {
	name: string;
	email: string;
}

export async function SubscribeToEvent(params: SubscribeToEventParams) {
	const subscriber = await db
		.insert(subscriptions)
		.values({
			name: params.name,
			email: params.email,
		})
		.returning()[0];

	return {
		subscriberId: subscriber.id,
	};
}
