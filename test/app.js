var net = require('net');
var client = new net.Socket();
client.connect(47690, '13.52.37.2', function() {
// client.connect(20332, '193.193.165.165', function() {
    console.log('Connected');
    client.write('#L#867562034365818;NA');
    //client.write('#SD#010120;121212;5544.6025;N;03739.6834;E;10;1;2;NA\r\n');
    client.write('#P#\r\n')
    setInterval(() => {
        console.log('test');
        client.write('00 00 00 00 00 00 00 04 D2 00 00');
        client.write('#L#867562034365818;NA');
        //client.write('#L#;12345;NA');
        //client.write('#SD#NA;NA;5544.6025;N;03739.6834;E;45;NA;NA;NA');
        // crc16\r\n
        client.write('74000000333533393736303133343435343835004B0BFB70000000030BBB000000270102706F73696E666F00A027AFDF5D9848403AC7253383DD4B400000000000805A40003601460B0BBB0000001200047077725F657874002B8716D9CE973B400BBB00000011010361766C5F696E707574730000000001');
        //client.write('234c233b31323334353b4e413b5c725c6e');
        
        client.write('#P#\r\n')
        //client.write('23 50 23 5c 72 5c 6e');
        //client.write('#SD#010120;121212;5544.6025;N;03739.6834;E;10;1;2;NA\r\n');
        //client.write('#SD#140619;173358;NA;N;NA;E;0;0;300;7\r\n');
    }, 500);
    
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    //client.destroy(); // kill client after server's response
});

client.on('close', function() {
    console.log('Connection closed');
});

client.on('error', function(err) {
    console.log(err)
});
