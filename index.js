import inquirer from "inquirer";
import fs from "fs";
import qrImage from "qr-image";

var images = [];
const userInput = inquirer
  .prompt([{
  name: "URL",
  message: "Type any URL",
  type: "input"
  }
    
  
  ])
  .then((answers) => {

    var link = answers.URL;
    var qr_Svg =  qrImage.image(link);
    qr_Svg.pipe(fs.createWriteStream("qr_img.png"));
   

    // Use user feedback for... whatever!!
      const createFile = fs.writeFile("message.txt",`${link}`,(err)=>{
      if(err) throw err;
      console.log("Created");
 });
    console.log(answers);
    
  });
// console.log(userInput.name);

