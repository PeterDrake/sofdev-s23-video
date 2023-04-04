// service.js
import { google } from 'googleapis';
import { join } from 'path';

let key = getKey();

const getDriveService = () => {
  const KEYFILEPATH = join(__dirname, key);
  const SCOPES = ['https://www.googleapis.com/auth/drive'];

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });
  const driveService = google.drive({ version: 'v3', auth });
  return driveService;
};

export default getDriveService;