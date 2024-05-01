import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const nome = await rl.question('Digite seu nome: ');

const experiencia = await rl.question('\nDigite seus pontos de experiência: ');

const calculaExperiencia = (experiencia) => {
  if (experiencia < 1000)
    return "Ferro";
  if (experiencia > 1000 && experiencia <= 2000)
    return "Bronze";
  if (experiencia > 2000 && experiencia <= 5000)
    return "Prata";
  if (experiencia > 5000 && experiencia <= 7000)
    return "Ouro";
  if (experiencia > 7000 && experiencia <= 8000)
    return "Platina";
  if (experiencia > 8000 && experiencia <= 9000)
    return "Ascendente";
  if (experiencia > 9000 && experiencia <= 10000)
    return "Imortal";
  if (experiencia >= 10001)
    return "Radiante";
}

const nivel = calculaExperiencia(experiencia);

console.log(`\nO Herói ${nome} está no nível de ${nivel}.`);

rl.close();
