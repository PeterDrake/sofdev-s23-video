import { getId } from './pass.js'; //security, info is stored in seperate file
let CLIENT_ID = getId();
import { getSecret } from './pass.js';
let CLIENT_SECRET = getSecret();
import { getUri } from './pass.js';
let REDIRECT_URI = getUri();
import { getRefresh } from './pass.js';
let REFRESH_TOKEN = getRefresh(); 

//googleapis
const { google } = require('googleapis');

//path module
const path = require('path');

//file system module
const fs = require('fs');
const { PassThrough } = require('stream');

//intialize auth client
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

//setting our auth credentials
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//initialize google drive
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

//file path for out file
const filePath = path.join(__dirname, 'filename.format'); // note to self: 'filename.format' should be replaced with a variable contaning the file name

//function to upload the file
async function uploadFile(fineName) {
    try{
      const response = await drive.files.create({
            requestBody: {
                name: filename, //file name
                mimeType: 'video/mp4',
            },
            media: {
                mimeType: 'video/mp4',
                body: fs.createReadStream(filePath),
            },
        });  
        // report the response from the request
        console.log(response.data);
    }catch (error) {
        //report the error message
        console.log(error.message);
    }
}  

// //delete file function
// async function deleteFile() {
//     try {
//         const response = await drive.files.delete({
//             fileId: 'File_id',// file id
//         });
//         console.log(response.data, response.status);
//     } catch (error) {
//         console.log(error.message);
//     }
//   }

//   //create a public url
// async function generatePublicUrl() {
//     try {
//         const fileId = '19VpEOo3DUJJgB0Hzj58E6aZAg10MOgmv';
//         //change file permisions to public.
//         await drive.permissions.create({
//             fileId: fileId,
//             requestBody: {
//             role: 'reader',
//             type: 'anyone',
//             },
//         });

//         //obtain the webview and webcontent links
//         const result = await drive.files.get({
//             fileId: fileId,
//             fields: 'webViewLink, webContentLink',
//         });
//       console.log(result.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }