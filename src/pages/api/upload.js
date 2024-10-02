import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';

cloudinary.config({
  cloud_name: 'dy6hbhu72',
  api_key: '276536332263392',
  api_secret: 'Kj1vBpMSceB3IGQP-XV8FmsQF84',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './';
    form.keepExtensions = true;
    form.maxFileSize = 10 * 1024 * 1024; // 10MB

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing the file:', err);
        return res.status(500).json({ error: 'Error parsing the file' });
      }

      const filePath = files.image?.filepath;

      if (!filePath) {
        console.error('No file path found!');
        return res.status(400).json({ error: 'No file provided' });
      }

      try {
        const uploadResponse = await cloudinary.uploader.upload(filePath, {
          upload_preset: 'bytedata',
        });
        console.log('Cloudinary upload response:', uploadResponse);

        // Delete the uploaded file from the server
        fs.unlinkSync(filePath);

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