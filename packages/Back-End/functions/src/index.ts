import * as functions from 'firebase-functions';
import * as express from 'express';
const cors = require('cors');

//Routes
import businesses from './routes/businesses';

const app = express();

app.use(cors())

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



exports.businesses = functions.https.onRequest(businesses as any)