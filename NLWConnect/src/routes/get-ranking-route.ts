import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getRanking } from "../functions/get-ranking";

export const getRankingRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/ranking",
		{
			schema: {
				summary: "Get the ranking position of a subscriber",
				tags: ["referral"],
				body: z.object({
					name: z.string(),
					email: z.string().email(),
					referrer: z.string().nullish(),
				}),
				response: {
					200: z.object({
						ranking: z.array(
							z.object({
								id: z.string(),
								name: z.string(),
								score: z.number(),
							}),
						),
					}),
				},
			},
		},
		async (request, reply) => {
			const { rankingWithScore } = await getRanking();

			return reply.status(200).send({ ranking: rankingWithScore });
		},
	);
};
