import { inArray } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/tables/subscriptions";
import { SubscriberKeyRedis } from "../enums/subscribers";
import { redis } from "../redis/client";

export async function getRanking() {
	const ranking = await redis.zrevrange(SubscriberKeyRedis.REFERRAL_RANKING, 0, 2, "WITHSCORES");

	const subscribersIdAndScore: Record<string, number> = {};

	for (let index = 0; index < ranking.length; index += 2) {
		subscribersIdAndScore[ranking[index]] = Number(ranking[index + 1]);
	}

	const subscribers = await db
		.select()
		.from(subscriptions)
		.where(inArray(subscriptions.id, Object.keys(subscribersIdAndScore)));

	const rankingWithScore = subscribers
		.map((subscriber) => ({
			id: subscriber.id,
			name: subscriber.name,
			score: subscribersIdAndScore[subscriber.id],
		}))
		.sort((a, b) => b.score - a.score);

	return { rankingWithScore };
}
