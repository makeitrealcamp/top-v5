const Busboy = require('busboy');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
  formData(req, res, next) {
    const busboy = new Busboy({ headers: req.headers });
    req.body = {};

    busboy.on('field', (key, val) => {
      req.body[key] = val;
    });

    busboy.on('file', (fieldname, file, filename) => {
      const stream = cloudinary.uploader.upload_stream(
        { upload_preset: process.env.CLOUDINARY_PRESET },
        (error, result) => {
          if(error) {
            throw Error('Algo salio mal');
          }

          req.body[fieldname] = result;
          next();
        }
      );

      file.on('data', (data) => {
        stream.write(data);
      });
      file.on('end', () => {
        stream.end();
      });
    });

    // busboy.on('finish', () => {
    //   if(!file) next();
    // });

    req.pipe(busboy);
  },
  uploadImage(req, res, next) {

  }
}
