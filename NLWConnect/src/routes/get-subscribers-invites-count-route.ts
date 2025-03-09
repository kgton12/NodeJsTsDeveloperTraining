import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberInvitesCount } from "../functions/get-subscribers-invites-count";

export const getSubscriberInvitesCountRoute: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/subscribers/:subscriberId/ranking/count",
		{
			schema: {
				summary: "Get subscriber invite count",
				tags: ["referrals"],
				params: z.object({
					subscriberId: z.string(),
				}),
				response: {
					200: z.object({
						count: z.number(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { subscriberId } = request.params;

			const { count } = await getSubscriberInvitesCount({ subscriberId });

			return reply.status(200).send({ count });
		},
	);
};
