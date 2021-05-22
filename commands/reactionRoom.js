module.exports = {
    name: 'room',
    description: "Select room",
    permission: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    async execute(message, args, cmd, client, Discord, profileData){
        const channel = '';

        const sixone = '\:one:';
        const twelveA = '🇦';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Classroom')
            .setDescription('เลือกรายการที่ต้องการจะทำ\n\n'
                + `คลิกที่ ${sixone} 6/1\n`
                + `คลิกที่ ${twelveA} 12A`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(sixone);
        messageEmbed.react(twelveA);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === sixone) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Gifted);
                }
                if (reaction.emoji.name === twelveA) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathSci);
                }
            }
            else{
                return;
            }
        });

    }
}