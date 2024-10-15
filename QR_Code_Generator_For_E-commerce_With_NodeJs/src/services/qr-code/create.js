import prompt from "prompt";
import qrcodeSchema from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(qrcodeSchema, handle);
    prompt.start();
}

export default createQRCode;
