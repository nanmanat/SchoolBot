const { execute } = require("./reactionRoom");

module.exports = {
    name: "gifted",
    permission: [],
    description: "gifted class",
    async execute(message, args, cmd, client, Discord, profileData){

        const monday = "";
        const tuesday = "";
        const wednesday= "";
        const thursday = "";
        const friday = "";

        let embedA = new Discord.MessageEmbed()
        .setColor('')
        .setTitle('')
        .setDescription('')

        let embedM = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('')
            .addFields(
                {name: 'Peroid 1', value: ''},
                {name: 'Peroid 2', value: ''},
                {name: 'Peroid 3', value: ''},
                {name: 'Peroid 4', value: ''},
                {name: 'Peroid 5', value: ''},
            )
        let embedT = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('')
            .addFields(
                {name: 'Peroid 1', value: ''},
                {name: 'Peroid 2', value: ''},
                {name: 'Peroid 3', value: ''},
                {name: 'Peroid 4', value: ''},
                {name: 'Peroid 5', value: ''},
            )
        let embedW = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('')
            .addFields(
                {name: 'Peroid 1', value: ''},
                {name: 'Peroid 2', value: ''},
                {name: 'Peroid 3', value: ''},
                {name: 'Peroid 4', value: ''},
                {name: 'Peroid 5', value: ''},
            )
        let embedTh = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('')
            .addFields(
                {name: 'Peroid 1', value: ''},
                {name: 'Peroid 2', value: ''},
                {name: 'Peroid 3', value: ''},
                {name: 'Peroid 4', value: ''},
                {name: 'Peroid 5', value: ''},
            )
        let embedF = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('')
            .addFields(
                {name: 'Peroid 1', value: ''},
                {name: 'Peroid 2', value: ''},
                {name: 'Peroid 3', value: ''},
                {name: 'Peroid 4', value: ''},
                {name: 'Peroid 5', value: ''},
            )

        let massageEmbed = await message.channel.send(embed);
        massageEmbed.react(monday);
        massageEmbed.react(tuesday);
        massageEmbed.react(wednesday);
        massageEmbed.react(thursday);
        massageEmbed.react(friday);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === monday) {
                    user.send(embedM);
                }
                if (reaction.emoji.name === tuesday) {
                    user.send(embedT);
                }
                if (reaction.emoji.name === wednesday) {
                    user.send(embedW);
                }
                if (reaction.emoji.name === thursday) {
                    user.send(embedTh);
                }
                if (reaction.emoji.name === friday) {
                    user.send(embedF);
                }
            }
        })
    }
}