const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, user) => {
    let profile = await profileModel.create({
        userID: user.id,
        serverID: user.guild.id,
        work: [],
    });
    profile.save();

}