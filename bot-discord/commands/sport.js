const Discord = require('discord.js');
const mySqlConnector = require('../mySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, arguments) => {

    mySqlConnector.connect();

    let sqlSport = 'SELECT * FROM sports WHERE sport_name = ' + "'"+arguments[0]+"'";
    let sport = await mySqlConnector.executeQuery(sqlSport);

    if(sport.length === 0){
        await message.channel.send(`Aucun sport ne porte ce nom.`);

    }else{
        let sqlFirstPlace = 'SELECT * FROM athletes WHERE id = ' + "'"+sport[0].firstPlace+"'";
        let sqlSecondPlace = 'SELECT * FROM athletes WHERE id = ' + "'"+sport[0].secondPlace+"'";
        let sqlThirdPlace = 'SELECT * FROM athletes WHERE id = ' + "'"+sport[0].thirdPlace+"'";
        let firstPlace = await mySqlConnector.executeQuery(sqlFirstPlace);
        let secondPlace = await mySqlConnector.executeQuery(sqlSecondPlace);
        let thirdPlace = await mySqlConnector.executeQuery(sqlThirdPlace);
        await message.channel.send(`${sport[0].sport_name} : - 1er : ${firstPlace[0].name} (${firstPlace[0].country}), - 2eme : ${secondPlace[0].name} (${secondPlace[0].country}), - 3eme : ${thirdPlace[0].name} (${thirdPlace[0].country})` );
    }
};

module.exports.name = 'sport'