import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    const isSmall = result.type == 2;

    qr.generate(result.link, { small: isSmall }, function (qrcode) {
        console.log(chalk.green("QRCode gerado:"));
        console.log(qrcode);
    });
}

export default handle;
