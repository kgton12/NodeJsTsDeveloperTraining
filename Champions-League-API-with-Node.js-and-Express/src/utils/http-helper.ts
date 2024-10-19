import { HttpResponse } from "../models/http-response-model";
import { HttpCodes } from "./http-codes";

export const buildPlayersResponse = async (data: any, isCreated: boolean = false, messageError: string = ""): Promise<HttpResponse> => {
    let statusCode: number;
    let body;

    switch (true) {
        case !!messageError:
            statusCode = HttpCodes.BAD_REQUEST;
            body = { message: messageError };
            break;
        case isCreated:
            statusCode = HttpCodes.CREATED;
            body = data;
            break;
        case data === undefined:
            statusCode = HttpCodes.NOT_FOUND;
            body = { message: "No data found" };
            break;
        default:
            statusCode = HttpCodes.OK;
            body = data;
            break;
    }

    return {
        statusCode,
        body,
    };
};
