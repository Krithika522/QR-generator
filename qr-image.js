import generateImage  from "qr-image";
import fs from "fs";

// const createFile = fs.writeFile("message.txt","Hello",(err)=>{
//     if(err) throw err;
//     console.log("Created");
// });

fs.readFile("../QR-generator/message.txt","utf8",(err, data)=>{
    if(err) throw err;
    console.log(data);
});


// const qr_svg = generateImage.pipe(fs.writeFile("userMessage.txt"));
// console.log(qr_svg);