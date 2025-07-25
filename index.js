import { REST, Routes,Client, Events, GatewayIntentBits  } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();


const client = new Client({    
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],
    partials: ['CHANNEL'] }
);

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}


client.on(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    const user = await client.users.fetch(process.env.KAITO);
    const teste = Math.random();
    if (message.author.bot) return;
    
    if (message.author.id !== process.env.KAITO) return;
    
    if (message.channel.id !== process.env.CHANNEL_TARGET) return;
    
    if (teste > 0.1) return;

    //console.log(`Message from ${message.author.tag}: ${message.content}`);

    await message.react("✅");
    await message.react("✝️");
    await message.react('🇮');
    await message.react('🇱');
    await message.react('🇹');
    await message.react('🇦');
    await message.react('🇩');
    await message.react('🇴');

});

client.login(process.env.DISCORD_TOKEN);