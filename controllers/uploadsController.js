const { StatusCodes } = require("http-status-codes");
const path = require("path");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
// const uploadProductImage = async (req, res) => {
//   try {
//     if (!req.files) {
//       throw new CustomError.BadRequestError("No file uploaded");
//     }
//     const productImage = req.files.image;
//     if (!productImage.mimetype.startsWith("image")) {
//       throw new CustomError.BadRequestError("Please upload image");
//     }
//     const maxSize = 1024 * 1024;
//     if (productImage.size > maxSize) {
//       throw new CustomError.BadRequestError(
//         "Please upload image smaller than 1kb"
//       );
//     }

//     const imagePath = path.join(
//       __dirname,
//       "../public/uploads/" + `${productImage.name}`
//     );
//     // move the image to the uploads folder
//     await productImage.mv(imagePath);
//     return res.status(StatusCodes.OK).json({
//       image: {
//         name: `${productImage.name}`,
//         src: `/uploads/${productImage.name}`,
//       },
//     });
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: error.message || error });
//   }
// };
const uploadProductImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "image-files",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};
module.exports = {
  uploadProductImage,
};
