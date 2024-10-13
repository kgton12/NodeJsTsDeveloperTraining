const player1 = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    points: 0,
};

const player2 = {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
    points: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(
        `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`,
    );
}

async function playRaceEngine(character1, character2) {
    for (let index = 1; index <= 5; index++) {
        console.log(`🏁 Rodada ${index} 🏁`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.speed;
            totalTestSkill2 = diceResult2 + character2.speed;

            await logRollResult(character1.name, "velocidade", diceResult1, character1.speed);
            await logRollResult(character2.name, "velocidade", diceResult2, character2.speed);
        } else if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.maneuverability;
            totalTestSkill2 = diceResult2 + character2.maneuverability;

            await logRollResult(character1.name, "manobrabilidade", diceResult1, character1.maneuverability);
            await logRollResult(character2.name, "manobrabilidade", diceResult2, character2.maneuverability);
        } else {
            let powerResult1 = diceResult1 + character1.power;
            let powerResult2 = diceResult1 + character2.power;
            console.log(`${character1.name} confrontou com ${character2.name} ! 🥊`);

            await logRollResult(character1.name, "poder", diceResult1, character1.power);
            await logRollResult(character2.name, "poder", diceResult2, character2.power);

            if (powerResult1 > powerResult2 && character2.points > 0) {
                console.log(`🏆 ${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto 🐢`);
                character2.points--;
            } else if (powerResult2 > powerResult1 && character1.points > 0) {
                console.log(`🏆 ${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto 🐢`);
                character1.points--;
            } else {
                console.log(powerResult1 === powerResult2 ? `🏆 Confronto empatado! Nenhum ponto foi perdido` : "");
            }
        }

        if (totalTestSkill1 > totalTestSkill2) {
            character1.points++;
            console.log(`🏆 ${character1.name} venceu a rodada +1 ponto!`);
        } else if (totalTestSkill2 > totalTestSkill1) {
            character2.points++;
            console.log(`🏆 ${character2.name} venceu a rodada +1 ponto!`);
        } else {
            console.log(`🏆 Empate!`);
        }

        console.log("----------------------------------------------------------------------------------");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.name}: ${character1.points} pontos`);
    console.log(`${character2.name}: ${character2.points} pontos`);

    if (character1.points > character2.points) {
        console.log(`🏆🏆🏆 ${character1.name} venceu a corrida! 🏆🏆🏆`);
    } else if (character2.points > character1.points) {
        console.log(`🏆🏆🏆 ${character2.name} venceu a corrida! 🏆🏆🏆`);
    } else {
        console.log(`🏆🏆🏆 A corrida terminou empatada! 🏆🏆🏆`);
    }
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.name} e ${player2.name} començando...`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
