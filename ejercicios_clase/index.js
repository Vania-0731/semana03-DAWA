//const {Transform} = require('stream');
const fs = require("fs")
console.log(fs)

//const transformStream = new Transform({
//    transform(chunk, encoding, callback){
//        callback(null, chunk.toString().toUpperCase());
//    }
//});

//const readStream = fs.createReadStream('texto.txt');
//const writeStream = fs.createWriteStream('texto_mayúculas.txt');

//readStream.pipe(transformStream).pipe(writeStream);

const readable = fs.createReadStream('datos.txt', {encoding : 'utf8'});
//readable.on('data', chunk => console.log('Fragmento recibido:', chunk));
//readable.on('end', () => console.log('Lectura completa'));
//readable.on('error', err => console.log('Error', err));


const writable = fs.createWriteStream('salida.txt');
//writable.write('Este es un mensaje de prueba\n');
//writable.end('Fin del mensaje.');
//writable.on('finish', () => console.log('Escritura completada'));

//const zlib = require('zlib');
//const readStream = fs.createReadStream('entrada.txt');
//const writeStream = fs.createWriteStream('entrada.txt.gz');
//const gzip = zlib.createGzip();
//readStream.pipe(gzip).pipe(writeStream);

readable.on('data', chunk => {
    if (!writable.write(chunk)){
        readable.pause()
    }
});
writable.on('drain', ()=> readable.resume());