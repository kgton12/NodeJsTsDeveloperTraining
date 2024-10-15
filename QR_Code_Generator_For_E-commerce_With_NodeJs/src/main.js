import prompt from "prompt";
import mainSchema from "./prompts-schema/schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainSchema, async (err, result) => {
        if (result.select == 1) {
            await createQRCode();
        } else if (result.select == 2) {
            await createPassword();
        }
    });
    prompt.start();
}

main();
