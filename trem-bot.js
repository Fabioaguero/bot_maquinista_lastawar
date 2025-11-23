const venom = require('venom-bot');
const express = require('express');

const app = express();

// Rota de status para manter o serviço ativo
app.get('/status', (req, res) => {
  res.send('Bot ativo 🚂');
});

// Render exige que o servidor escute em uma porta definida pela variável de ambiente PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// Lista de maquinistas com nome e número
const maquinistas = [
  { nome: "Maldiçao", numero: "5511958130549@c.us" },
  { nome: "Bonaparte", numero: "5511970323198@c.us" },
  { nome: "Jiyurio", numero: "5519992630796@c.us" },
  { nome: "PipokArmy", numero: "5521982216427@c.us" },
  { nome: "Fenixtb", numero: "5521964285769@c.us" },
  { nome: "DjTonny", numero: "17867797919@c.us" },
  { nome: "Star", numero: "5524998725855@c.us" },
  { nome: "Ccyraxx", numero: "5545991138190@c.us" },
  { nome: "War Demon Hunter", numero: "5519991662572@c.us" }
];

// Função principal
venom.create().then((client) => start(client));

function start(client) {
  function getMaquinista() {
    const hoje = new Date();
    const diaSemana = hoje.getDay(); // 1 = segunda, 5 = sexta
    if (diaSemana >= 1 && diaSemana <= 5) {
      const diasPassados = Math.floor((hoje - new Date(2025, 0, 6)) / (1000 * 60 * 60 * 24));
      const index = diasPassados % maquinistas.length;
      return maquinistas[index];
    }
    return null;
  }

  setInterval(() => {
    const agora = new Date();
    if (agora.getHours() === 10 && agora.getMinutes() === 30) {
      const maquinista = getMaquinista();
      if (maquinista) {
        client.sendMentioned(
          "120363403242708304@g.us", // substitua pelo ID real do grupo
          `🚂 O maquinista de hoje é: @${maquinista.numero.split('@')[0]}`,
          [maquinista.numero]
        );
      }
    }
  }, 60000);
}