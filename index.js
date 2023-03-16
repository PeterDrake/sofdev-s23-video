//googleapis
const { google } = require('googleapis');

//path module
const path = require('path');

//file system module
const fs = require('fs');

//client id
const CLIENT_ID = '299953909161-q0lpk7u63j953daudlr6nj7te7veijrt.apps.googleusercontent.com'

//client secret
const CLIENT_SECRET = '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';

//redirect URL
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

//refresh token
const REFRESH_TOKEN = '1//04gXF1PQwvJHICgYIARAAGAQSNwF-L9Irp-XJ8k8oLp9unsd6DKSnQ5hutu2qGlt8MBjRfJwOmgJWtUyygxJ4J83YiTFIhLO_GjU'

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
const filePath = path.join(__dirname, 'filename.format');

//function to upload the file
async function uploadFile() {
    try{
      const response = await drive.files.create({
            requestBody: {
                name: 'hero.png', //file name
                mimeType: 'image/png',
            },
            media: {
                mimeType: 'image/png',
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

//delete file function
async function deleteFile() {
    try {
        const response = await drive.files.delete({
            fileId: 'File_id',// file id
        });
        console.log(response.data, response.status);
    } catch (error) {
        console.log(error.message);
    }
  }

  //create a public url
async function generatePublicUrl() {
    try {
        const fileId = '19VpEOo3DUJJgB0Hzj58E6aZAg10MOgmv';
        //change file permisions to public.
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
            role: 'reader',
            type: 'anyone',
            },
        });

        //obtain the webview and webcontent links
        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink',
        });
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  }