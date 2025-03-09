import { SubscriberKeyRedis } from "../enums/subscribers";
import { redis } from "../redis/client";

interface GetSubscriberInvitesCountParams {
	subscriberId: string;
}

export async function getSubscriberInvitesCount(params: GetSubscriberInvitesCountParams) {
	const count = await redis.zscore(SubscriberKeyRedis.ACCESS_COUNT, params.subscriberId);

	return { count: count ? Number.parseInt(count) : 0 };
}
