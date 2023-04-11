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

async function createAndUploadFile(auth){

  // init the drive service, it handles calls to the api
  const driveService = google.drive({version:'v3', auth});

  // metadata for the new file on the dive
  let fileMetaData = {
    'name': 'testFile.jpg',
    'parents': ['1gvlj5M577gvG7qU5VQo54xx9fubF0AqN']
  }

  let media = {
    mimeType: 'image/jpg',
    body: fs.createReadStream('testFile.jpg')
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
      console.log('File created, its id is:', response.data.id)
      break;
    
    default:
      console.error('Error creating files, ' + response.errors)
      break;
    
  }
}
//console.log(JSON.parse('{"web":{"client_id":"299953909161-g27a7bs2o612vbk9q3r6s3q22srjp0oc.apps.googleusercontent.com","project_id":"lc-compression-storage","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","javascript_origins":["http://localhost"]}}'));
createAndUploadFile(auth).catch(console.error);