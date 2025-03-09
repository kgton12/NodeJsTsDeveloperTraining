import { SubscriberKeyRedis } from "../enums/subscribers";
import { redis } from "../redis/client";
interface GetSubscriberInviteClicksParams {
	subscriberId: string;
}

export async function getSubscriberInviteClicks(params: GetSubscriberInviteClicksParams) {
	const count = await redis.hget(SubscriberKeyRedis.ACCESS_COUNT, params.subscriberId);

	return { count: count ? Number.parseInt(count) : 0 };
}
