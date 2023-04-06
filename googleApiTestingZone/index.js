// index.js
const scanFolderForFiles = require('./upload');

scanFolderForFiles('/Users/cs-488-01/Desktop/uploader').then(() => {
  console.log('🔥 All files have been uploaded to Google Drive successfully!');
});

//https://www.labnol.org/google-api-service-account-220404