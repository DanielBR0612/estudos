const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1}

const token = 'MTEyNTU4NTUyMzEwMTE0MzIwMA.GH-wUx.tBjE8WJFen27kVUBj0mBHtYr10Z5Gxbk5DU5aA'
bot.login(token);

bot.on('ready', () => {
    console.log('estou pronto para ser usado')
});

bot.on('message', msg =>{
    if (msg.author.bot){
        return;
    }

    if(msg.content.toLowerCase().startsWith("?play")){
        let VoiceChannel = msg.guild.cahnnels.find ( channel => channel.id === '785594760818982972');

        if(VoiceChannel == null){
            console.log('Canal não foi encontrado');
        }
        if(VoiceChannel !== null){
            console.log('O canal foi encontrado');s

            VoiceChannel.join()
            .then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=pq0OxO2DJQc', {filter:
                'audioonly'});
                
                const DJ = cnnection.playStream(stream, streamOptions);
                DJ.on('end', end => {
                    VoiceChannel.leave();
                });
            })
            .catch(console.error);
        }
    }
})
