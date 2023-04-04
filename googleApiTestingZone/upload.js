// upload.js
import { createReadStream, promises } from 'fs';
import getInvoiceFolder from './folder';
import { files } from './service';

const uploadSingleFile = async (fileName, filePath) => {
  const folderId = 'DRIVE_FOLDER_ID';
  const { data: { id, name } = {} } = await files.create({
    resource: {
      name: fileName,
      parents: "1gvlj5M577gvG7qU5VQo54xx9fubF0AqN",
    },
    media: {
      mimeType: 'application/pdf',
      body: createReadStream(filePath),
    },
    fields: 'id,name',
  });
  console.log('File Uploaded', name, id);
};

const scanFolderForFiles = async (folderPath) => {
  const folder = await promises.opendir(folderPath);
  for await (const dirent of folder) {
    if (dirent.isFile() && dirent.name.endsWith('.pdf')) {
      await uploadSingleFile(dirent.name, path.join(folderPath, dirent.name));
      await promises.rm(filePath);
    }
  }
};

export default scanFolderForFiles;