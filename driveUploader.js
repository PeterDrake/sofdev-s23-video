const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const sendEmail = require('./emailSender.js');



// service account key file. not on git
const KEYFILEPATH = './security/auth.json';

// gives full access to google drive account
const SCOPES = ['https://www.googleapis.com/auth/drive'];

// init the auth thingy with the keyfile and the scope
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES
})

async function createAndUploadFile(auth, fileName, sendTo){

  // init the drive service, it handles calls to the api
  const driveService = google.drive({version:'v3', auth});

  // path to where the file is stored locally. change as needed
  const filePath = ('./output/'+fileName)

  // link to view and download file. starts empty, updated with value if upload works
  var shareLink = '';

  // metadata for the new file on the dive
  let fileMetaData = {
    'name': fileName,
    'parents': ['1gvlj5M577gvG7qU5VQo54xx9fubF0AqN'] //id of the drive folder the files should get put into
  }

  // making the file to upload
  let media = {
    mimeType: 'video/mp4',
    body: fs.createReadStream(filePath)
  }

  // make a request
  let response = await driveService.files.create({
    resource: fileMetaData,
    media: media,
    fields: 'id'
  })

  // handle the response
  switch(response.status){
    case 200:
      console.log('File created, its share link is: https://drive.google.com/file/d/'+response.data.id+'/view?usp=share_link') // on a success, gives you a shareable link
      shareLink = "https://drive.google.com/file/d/"+response.data.id+"/view?usp=share_link";
      sendEmail(sendTo, shareLink);
      break;
    
    default:
      console.error('Error creating files, ' + response.errors)
      break;
    
  }

  return shareLink;
}

// call this from other files. returns the share link for the uploaded file
module.exports = function uploadFileAndEmail(fileName, sendTo){
  createAndUploadFile(auth, fileName, sendTo);
}