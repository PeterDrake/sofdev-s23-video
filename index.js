const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// service account key file. not on git (sorry hackers)
const KEYFILEPATH = 'auth.json';

// gives full access to google drive account
const SCOPES = ['https://www.googleapis.com/auth/drive'];

// init the auth thingy with the keyfile and the scope
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES
})

async function createAndUploadFile(auth, fileName){

  // init the drive service, it handles calls to the api
  const driveService = google.drive({version:'v3', auth});
  const filePath = ('/output/'+fileName)

  // metadata for the new file on the dive
  let fileMetaData = {
    'name': fileName,
    'parents': ['1gvlj5M577gvG7qU5VQo54xx9fubF0AqN']
  }

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
      console.log('File created, its share link is: https://drive.google.com/file/d/'+response.data.id+'/view?usp=share_link')

      break;
    
    default:
      console.error('Error creating files, ' + response.errors)
      break;
    
  }
}

// call this from other files
function uploadFileToDrive(fileName){
  createAndUploadFile(auth, fileName);
}

uploadFileToDrive("testVid.mp4")