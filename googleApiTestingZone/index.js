// index.js
import scanFolderForFiles from './scan';

scanFolderForFiles('local-folder').then(() => {
  console.log('🔥 All files have been uploaded to Google Drive successfully!');
});

//https://www.labnol.org/google-api-service-account-220404