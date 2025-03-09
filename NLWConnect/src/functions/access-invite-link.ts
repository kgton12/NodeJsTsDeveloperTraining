import { redis } from "../redis/client";

interface AccessInviteLinkParams {
	subscriberId: string;
}

export async function AccessInviteLink(params: AccessInviteLinkParams) {
	await redis.hincrby("referral:access-count", params.subscriberId, 1);
}
