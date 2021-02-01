const fs = require('fs');
const md5file = require('md5-file');
const appRoot = require('app-root-path');
const { imgResize } = require('../lib/resizer');
const { storeTask, storeImage, getTask } = require('../store/index')
 
const processImage = async (req, res) => {
    try {
        const { body } = req;
        const { image } = body;
        await imgResize(`${appRoot}/img/${image}`, `${appRoot}/output/temp/tempfile`);
        const name1024 = await md5file.sync(`${appRoot}/output/temp/tempfile_1024`);
        const name880 = await md5file.sync(`${appRoot}/output/temp/tempfile_880`);
        const dest1 = `${appRoot}/output/${image.replace('.jpg', '')}/1024/${name1024}.jpg`;
        const dest2 = `${appRoot}/output/${image.replace('.jpg','')}/880/${name880}.jpg`;
        fs.mkdirSync(`${appRoot}/output/${image.replace('.jpg', '')}/1024`, { recursive: true });
        fs.mkdirSync(`${appRoot}/output/${image.replace('.jpg', '')}/880`, { recursive: true });
        fs.copyFileSync(`${appRoot}/output/temp/tempfile_1024`, dest1); 
        fs.copyFileSync(`${appRoot}/output/temp/tempfile_880`, dest2); 

        res
          .status(200)
          .send('ok');
    } catch(error) {
        console.log('error', error)
        res
          .status(500)
          .send(error);
    }
}

const statusProcess = async (req, res) => {
    res
      .status(200)
      .send('ok');
}

module.exports =  {
    processImage,
    statusProcess
}