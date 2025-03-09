import { eq } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/tables/subscriptions";
import { SubscriberKeyRedis } from "../enums/subscribers";
import { redis } from "../redis/client";

interface SubscribeToEventParams {
	name: string;
	email: string;
	referrerId?: string | null;
}

export async function SubscribeToEvent(params: SubscribeToEventParams) {
	const existingSubscriber = await db.select().from(subscriptions).where(eq(subscriptions.email, params.email))[0];

	if (existingSubscriber.length > 0) {
		return {
			subscriberId: existingSubscriber.id,
		};
	}

	const subscriber = await db
		.insert(subscriptions)
		.values({
			name: params.name,
			email: params.email,
		})
		.returning()[0];

	if (params.referrerId) {
		await redis.zincrby(SubscriberKeyRedis.REFERRAL_RANKING, 1, params.referrerId);
	}

	return {
		subscriberId: subscriber.id,
	};
}
