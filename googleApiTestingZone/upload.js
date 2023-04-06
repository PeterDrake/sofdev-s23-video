// upload.js
const fs = require('fs');
const getInvoiceFolder = require('./folder');
const drive = require('./service');

const uploadSingleFile = async (fileName, filePath) => {
  const folderId = '1gvlj5M577gvG7qU5VQo54xx9fubF0AqN';
  const { data: { id, name } = {} } = await drive.files.create({
    resource: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType: 'application/pdf',
      body: fs.createReadStream(filePath),
    },
    fields: 'id,name',
  });
  console.log('File Uploaded', name, id);
};

const scanFolderForFiles = async (folderPath) => {
  const folder = await fs.promises.opendir(folderPath);
  for await (const dirent of folder) {
    if (dirent.isFile() && dirent.name.endsWith('.pdf')) {
      await uploadSingleFile(dirent.name, path.join(folderPath, dirent.name));
      await fs.promises.rm(filePath);
    }
  }
};

module.exports = scanFolderForFiles;