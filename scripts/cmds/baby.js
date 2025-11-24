const axios = require("axios");
const mahmud = [
  "baby",
  "bby",
  "babu",
  "bbu",
  "jan",
  "bot",
  "জান",
  "rafsan",
  "বেবি",
  "jamay",
  "jayan"
];
const baseApiUrl = async () => {
  const base = await axios.get("https://raw.githubusercontent.com/mahmudx7/exe/main/baseApiUrl.json");
  return base.data.jan;
};
module.exports = {
  config: {
    name: "bot",
    version: "1.7",
    author: "MahMUD",
    role: 0,
    category: "ai",
    guide: { en: "just type jan" },
  },
  onStart: async function () {},
  onReply: async function ({ api, event }) {
    if (event.type === "message_reply") {
      const message = event.body?.toLowerCase() || "lol";
      async function getBotResponse(message) {
        try {
          const base = await baseApiUrl();
          const response = await axios.get(`${base}/jan/font3/${encodeURIComponent(message)}`);
          return response.data?.message;
        } catch {
          return "error janu🥹";
        }
      }
      const replyMessage = await getBotResponse(message);
      api.sendMessage(replyMessage, event.threadID, (err, info) => {
        if (!err) {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: "bot",
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            text: replyMessage,
          });
        }
      }, event.messageID);
    }
  },
  onChat: async function ({ api, event }) {
    const responses = [
      "𝐀𝐦𝐚𝐤𝐞 𝐍𝐚 𝐝𝐞𝐤𝐞 𝐚𝐦𝐫 𝐁𝐨𝐬𝐬 𝐑𝐚𝐟𝐬𝐚𝐧 𝐤𝐞 𝐂𝐮𝐦𝐚𝐚 𝐝𝐞𝐮𝐮💋",
      "𝐓𝐮𝐦𝐢 𝐤𝐢 𝐚𝐦𝐫 𝐁𝐨𝐬𝐬 𝐑𝐚𝐟𝐬𝐚𝐧 𝐞𝐫 𝐁𝐨𝐰 𝐡𝐨𝐛𝐞?😋",
      "আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দেবো😘 ",
						" 𝐍𝐚𝐭𝐨𝐤 𝐤𝐨𝐫𝐢𝐬 𝐧𝐚,𝐉𝐚 𝐬𝐨𝐫 𝐭𝐨 Nσʂƚσ😒",
      "𝐓𝐨𝐦𝐚𝐫 𝐒𝐚𝐭𝐡𝐞 𝐚𝐦𝐫 𝐒𝐨𝐦𝐮𝐝𝐫𝐨 𝐃𝐞𝐤𝐡𝐚𝐭𝐚 𝐛𝐚𝐤𝐢🫠💖",
						"𝐓𝐨𝐦𝐚𝐫 𝐜𝐨𝐤𝐡𝐞𝐫 𝐌𝐚𝐲𝐚 𝐚𝐦𝐚𝐫 𝐠𝐡𝐮𝐦 𝐤𝐞𝐫𝐞 𝐧𝐢𝐲𝐞𝐬𝐞🤭",
      "𝙈𝙖𝙮𝙖𝙢𝙞 𝙉𝙤𝙙𝙞𝙩𝙚 𝙜𝙝𝙪𝙧𝙩𝙚 𝙟𝙖𝙗𝙤🫠❤️‍🩹",
      "𝐇𝐥𝐰 𝐆𝐮𝐲𝐬 𝐈 𝐚𝐦 𝐬𝐢𝐧𝐠𝐥𝐞 𝐡𝐞𝐫𝐞🥲",
						"𝐀𝐦𝐢 𝐉𝐚𝐲𝐚𝐧,𝐦𝐚𝐲𝐚𝐦𝐢 𝐞𝐫 𝐨𝐧𝐞 𝐬𝐢𝐝𝐞 𝐥𝐨𝐯𝐞 𝐜𝐡𝐢𝐥𝐚𝐦 𝐧𝐡
𝐀𝐦𝐢𝐨 𝐦𝐚𝐲𝐚𝐦𝐢 𝐤𝐞 𝐯𝐚𝐥𝐨𝐛𝐚𝐬𝐡𝐢🫠🌸",
      "𝐀𝐦𝐫 𝐛𝐢𝐲𝐞 𝐞𝐢 𝐦𝐚𝐬𝐡 𝐞𝐫 𝟑𝟓 𝐭𝐚𝐫𝐢𝐤𝐡 𝐞🐸",
      "ডুবেছি আমি তোমার চোখের অনন্ত মায়ায়🌸",
      "গোলাপ ফুল এর জায়গায় আমি দিলাম তোমায় মেসেজ",
      "বলো কি বলবা, সবার সামনে বলবা নাকি গোপনে?🤭🤏",
      "𝐌𝐚𝐭𝐚𝐥 𝐡𝐨𝐲𝐞 𝐡𝐢𝐬𝐮 𝐤𝐨𝐫𝐛𝐨 𝐝𝐞𝐮𝐚𝐥𝐞,𝐉𝐚 𝐡𝐨𝐛𝐞 𝐭𝐚 𝐝𝐞𝐤𝐡𝐚 𝐣𝐚𝐛𝐞 𝐤𝐚𝐥 𝐬𝐨𝐤𝐚𝐥𝐞💦",
      "তোমাকে যাইত্তা ধরইরা চুমু দিয়ে দিবে কিন্তু আমার বস 𝐑𝐚𝐟𝐬𝐚𝐧 😝",
						"𝐀𝐦𝐚𝐫 𝐁𝐨𝐬𝐬 𝐤𝐞 𝐡𝐚𝐫𝐚𝐥𝐞,𝐊𝐚𝐝𝐭𝐞 𝐡𝐨𝐛𝐞 𝐀𝐫𝐚𝐥𝐞🥹👌",
						"𝐈𝐬𝐬𝐬𝐡 𝐠𝐨𝐥𝐞 𝐉𝐚𝐬𝐬𝐢 𝐭𝐨🫠🍨",
						"𝐄𝐢𝐢𝐢 𝐇𝐮𝐬𝐬𝐬 𝐡𝐮𝐬𝐬...𝐉𝐚𝐰 𝐚𝐦𝐫 𝐁𝐨𝐬𝐬 𝐞𝐫 𝐛𝐮𝐤𝐞𝐫 𝐨𝐩𝐨𝐫 𝐠𝐢𝐲𝐞 𝐩𝐨𝐫𝐨😁👉👈",
						"𝐒𝐡𝐨𝐛𝐚𝐢 𝐤𝐞 𝐁𝐲𝐞 𝐁𝐲𝐞 𝐞𝐤𝐣𝐧 𝐤𝐞 𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐚𝐚𝐡𝐡𝐡💋✨",
					 "𝐀𝐦𝐢 😇💘",
						"বিশ্ব 𝐏𝐫𝐞𝐦𝐞 𝐩𝐨𝐫𝐚𝐫 𝐝𝐢𝐛𝐨𝐬𝐡 𝟏𝟐ই 𝐀𝐮𝐠𝐮𝐬𝐭💯🔥",
      "𝐀𝐦𝐫 𝐛𝐨𝐬𝐬 𝐑𝐚𝐟𝐬𝐚𝐧 ᴋɪɴᴛᴜ ꜱɪɴɢʟᴇ ᴀᴄʜᴇ🌚",
    ];
    const message = event.body?.toLowerCase() || "";
    const words = message.split(" ");
    const wordCount = words.length;
    if (event.type !== "message_reply" && mahmud.some(word => message.startsWith(word))) {
      api.setMessageReaction("🪽", event.messageID, () => {}, true);
      api.sendTypingIndicator(event.threadID, true);
      async function getBotResponse(message) {
        try {
          const base = await baseApiUrl();
          const response = await axios.get(`${base}/jan/font3/${encodeURIComponent(message)}`);
          return response.data?.message;
        } catch {
          return "error janu🥹";
        }
      }
      if (wordCount === 1) {
        const randomMsg = responses[Math.floor(Math.random() * responses.length)];
        api.sendMessage(randomMsg, event.threadID, (err, info) => {
          if (!err) {
            global.GoatBot.onReply.set(info.messageID, {
              commandName: "bot",
              type: "reply",
              messageID: info.messageID,
              author: event.senderID,
              link: randomMsg,
            });
          }
        }, event.messageID);
      } else {
        const userText = words.slice(1).join(" ");
        const botResponse = await getBotResponse(userText);
        api.sendMessage(botResponse, event.threadID, (err, info) => {
          if (!err) {
            global.GoatBot.onReply.set(info.messageID, {
              commandName: "bot",
              type: "reply",
              messageID: info.messageID,
              author: event.senderID,
              text: botResponse,
            });
          }
        }, event.messageID);
      }
    }
  },
};
