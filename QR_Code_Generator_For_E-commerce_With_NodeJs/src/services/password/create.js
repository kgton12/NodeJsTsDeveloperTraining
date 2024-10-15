import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.green.bold("Creating password..."));
    const password = await handle();
    console.log(chalk.yellow.bold(`Password: ${password}`));
}

export default createPassword;
