const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const mongoose = require("mongoose");

const fs = require('fs');

const admin = require('firebase-admin');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModigfy: false
})
.then (()=>[
    console.log('Connected to the database')
])
.catch((err) => {
    console.log(err);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'new user');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('841001111821090836').send(`ยินดีต้อนรับ <@${guildMember.user.id}> เข้าสู่เมืองของเรา! อย่าลืมอ่านกฎด้วยน้าาา :smiling_face_with_3_hearts:`)
});


client.login(process.env.TOKEN);
