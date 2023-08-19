const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
const prefix = '!'; // Prefijo para los comandos del bot
const queue = new Map(); // Mapa para almacenar las colas de reproducción

client.once('ready', () => {
    console.log('Bot listo!');
});

client.on('message', async message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'play') {
        execute(message, args);
    } else if (command === 'skip') {
        skip(message);
    } else if (command === 'stop') {
        stop(message);
    }
});

async function execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
        return message.channel.send('Debes estar en un canal de voz para usar este comando.');
    }

    const serverQueue = queue.get(message.guild.id);

    const songInfo = await ytdl.getInfo(args[0]);
    const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
    };

    if (!serverQueue) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
        };

        queue.set(message.guild.id, queueContruct);
        queueContruct.songs.push(song);

        try {
            const connection = await voiceChannel.join();
            queueContruct.connection = connection;
            play(message.guild, queueContruct.songs[0]);
        } catch (err) {
            console.error(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} ha sido añadida a la cola.`);
    }
}

function skip(message) {
    const serverQueue = queue.get(message.guild.id);
    if (!message.member.voice.channel) {
        return message.channel.send('Debes estar en un canal de voz para saltar la canción.');
    }
    if (!serverQueue) {
        return message.channel.send('No hay canciones en la cola para saltar.');
    }
    serverQueue.connection.dispatcher.end();
}

function stop(message) {
    const serverQueue = queue.get(message.guild.id);
    if (!message.member.voice.channel) {
        return message.channel.send('Debes estar en un canal de voz para detener la reproducción.');
    }
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on('finish', () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Reproduciendo: **${song.title}**`);
}

client.login('MTEyNTU4NTUyMzEwMTE0MzIwMA.G0KQgb.Kv4lMRqdP35IM7ztpLQ2Ci5Gr05G5cUnAvuynY');
