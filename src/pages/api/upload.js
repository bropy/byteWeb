// pages/api/upload.js
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import fs from 'fs';

cloudinary.config({
  cloud_name: 'dy6hbhu72',
  api_key: '276536332263392',
  api_secret: 'Kj1vBpMSceB3IGQP-XV8FmsQF84',
});

const upload = multer({ dest: './public/uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        console.error('Error parsing the file:', err);
        return res.status(500).json({ error: 'Error parsing the file' });
      }

      try {
        const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
          upload_preset: 'bytedata',
        });
        console.log('Cloudinary upload response:', uploadResponse);

        // Delete the uploaded file from the server
        fs.unlinkSync(req.file.path);

        return res.status(200).json({ url: uploadResponse.secure_url });
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
      }
    });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}