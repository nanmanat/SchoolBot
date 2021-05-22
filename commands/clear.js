module.exports = {
    name: "clear",
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "Clear message!",
    async execute(message, args) {
        if(!args[0]) return message.reply("pls enter ther amout of messages that you want to clear");
        if(isNaN(args[0]))return message.reply("pls enter a real number!");

        if(args[0] > 100) return message.reply("you cant delete more than 100 messages");
        if(args[0] < 1) return message.reply("you must delete at least one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}