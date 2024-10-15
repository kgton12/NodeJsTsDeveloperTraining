import chalk from "chalk";

const mainSchema = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramente 1- QRCODE ou 2- PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.yellow.italic("Escolha 1 ou 2"),
        require: true,
    },
];

export default mainSchema;
