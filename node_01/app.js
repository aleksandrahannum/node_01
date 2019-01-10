const FS = require('fs');


// const exampleFileText = FS.readFileSync('./toRead.txt').toString()

// console.log(exampleFileText)

// const writteText = FS.writeFileSync('./toRead.txt', "dddd");

// console.log(writteText);



// const arrayOfImages = [];
// const filesInDirectory = FS.readFileSync('./img').toString();
// console.log(filesInDirectory);
const arrayOfimages = []
const filesFolder = './img'

const exampleFileText = FS.readdir(filesFolder, (err, files) => {
    if (err && !files) {
        console.error(err)
        
    }
    

    let regexp = RegExp('.jpg');

    files.forEach(file => {
        
        if(file.match(regexp)) {
            // arrayOfimages.push(file)
            console.log(file)
            
    
        }
    })
  })
console.log(arrayOfimages)
console.log(exampleFileText)
