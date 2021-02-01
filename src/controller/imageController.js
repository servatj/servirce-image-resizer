const md5file = require('md5-file');

const processImage = async (req, res) => {
    try {
        res
        .status(200)
        send('ok');
    } catch(error) {
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