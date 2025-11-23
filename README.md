# bot_maquinista_lastawar

# 🚂 Trem Bot para WhatsApp

Bot automatizado que envia lembretes diários no WhatsApp informando quem será o **maquinista do trem** do dia. Funciona de segunda a sexta-feira, às 10h30 da manhã, marcando diretamente o membro responsável no grupo.

---

## 📌 Funcionalidades

- Envia mensagem automática no grupo do WhatsApp todos os dias úteis às 10h30.
- Informa o nome do maquinista do dia, seguindo uma lista cíclica.
- Menciona diretamente o membro no grupo usando o número de telefone.
- Pode ser hospedado gratuitamente na nuvem usando [Render](https://render.com).

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [venom-bot](https://github.com/orkestral/venom) — biblioteca para automação do WhatsApp Web

---

## 📦 Instalação local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/trem-bot.git
cd trem-bot

# Instale as dependências
npm install

# Inicie o bot
node index.js