import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import { type ZodTypeProvider, jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { env } from "./env";
import { accessInviteLinkRoute } from "./routes/access-invite-link-route";
import { getRankingRoute } from "./routes/get-ranking-route";
import { getSubscriberInviteClicksRoute } from "./routes/get-subscriber-invite-clicks-route";
import { getSubscriberRankingPositionRoute } from "./routes/get-subscriber-ranking-position-route";
import { getSubscriberInvitesCountRoute } from "./routes/get-subscribers-invites-count-route";
import { subscribeToEventRoute } from "./routes/subscribe-to-event-route";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
	origin: true,
});

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: "My API",
			version: "0.1.0",
		},
	},
	transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
	routePrefix: "/docs",
});

app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);

app.listen({ port: env.PORT }, (_, address) => {
	console.log(`Server listening on ${address}`);
});
