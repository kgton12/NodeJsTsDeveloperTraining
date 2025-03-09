import { SubscriberKeyRedis } from "../enums/subscribers";
import { redis } from "../redis/client";

interface AccessInviteLinkParams {
	subscriberId: string;
}

export async function AccessInviteLink(params: AccessInviteLinkParams) {
	await redis.hincrby(SubscriberKeyRedis.ACCESS_COUNT, params.subscriberId, 1);
}
