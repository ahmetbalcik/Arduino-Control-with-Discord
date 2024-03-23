// Örnek Discord botu komutu
const Discord = require('discord.js');
const client = new Discord.Client();
const {SerialPort} = require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline');
const port = new SerialPort({path: 'COM7', baudRate: 9600});
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

client.on("ready", () => {
    console.log("Başlatıldı!");
})

parser.on('data', data => {
    console.log('Arduino: ', data);
  });

client.on('message', message => {
  if (message.content === '!ledon') {
    port.write('0', (err) => {
        if (err) {
          return console.log('Error: ', err.message);
        }
      });
    message.channel.send('LED açıldı!');
  } else if (message.content === '!ledoff') {
    port.write('1');
    message.channel.send('LED kapandı!');
  }
});

client.login('BOT_TOKEN'); // Botunuzun Tokenini Girin
