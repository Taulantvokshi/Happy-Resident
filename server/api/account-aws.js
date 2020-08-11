const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
  secretAccessKey: process.env.SecretAccessKey,
  accessKeyId: process.env.AccessKeyId,
  region: 'us-east-1',
})

const s3 = new aws.S3()
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true)
  } else {
    cb(
      new Error('Invalid file type, only JPG, JPEG and PNG is allowed!'),
      false
    )
  }
}

const upload = multer({
  fileFilter,
  limits: {
    files: 1, // allow only 1 file per request
    fileSize: 1024 * 1024 * 10, // 10 MB (max file size)
  },

  storage: multerS3({
    s3: s3,
    bucket: 'building-residents',
    acl: 'public-read',
    //contentType: multerS3.AUTO_CONTENT_TYPE,

    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname})
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
})

module.exports = upload
