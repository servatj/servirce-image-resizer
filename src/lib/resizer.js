const sharp = require('sharp')


const resizeImg800 = async (image) => {
    return sharp('image')
      .resize(1);
  }

const resizeImg1024 = async (image) => {
  return sharp('image')
    .resize(1);
}

const imgResize = (image) => {
    return Promise.all([resizeImg1024(), resizeImg800()])
}

module.exports =  {
    imgResize
}