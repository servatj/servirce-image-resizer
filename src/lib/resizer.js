const sharp = require('sharp')


const resizeImg800 = async (image, outputFilePath) => {
    return sharp(image)
      .resize(800)
      .toFile(`${outputFilePath}_880`);
  }

const resizeImg1024 = async (image, outputFilePath) => {
  return sharp(image)
    .resize(1024)
    .toFile(`${outputFilePath}_1024`);
}

const imgResize = async (image, outputFilePath) => {
    return Promise.all([resizeImg1024(image, outputFilePath), resizeImg800(image, outputFilePath)])
}

module.exports =  {
    imgResize
}