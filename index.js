const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('iata-icao.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        fs.writeFile('iata-icao.json', JSON.stringify(results), (err) => {
            if (err) {
                console.log('Erro ao escrever arquivo JSON: ', err);
            } else {
                console.log('Arquivo JSON criado com sucesso!');
            }
        });
    });
