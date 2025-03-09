import { SubscriberKeyRedis } from "../enums/subscribers";
import { redis } from "../redis/client";

interface GetSubscriberRankingPositionParams {
	subscriberId: string;
}

export async function getSubscriberRankingPosition(params: GetSubscriberRankingPositionParams) {
	const rank = await redis.zrevrank(SubscriberKeyRedis.REFERRAL_RANKING, params.subscriberId);

	if (rank === null) {
		return { position: null };
	}

	return { position: rank + 1 };
}
