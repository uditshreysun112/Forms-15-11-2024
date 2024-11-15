const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() instead of bodyParser.json()

// Check if MONGODB_URI is defined
if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI is not defined in the .env file.");
  process.exit(1);
}

// Connect to MongoDB using the URL from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Define the schema and model for form data
const formSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  phone2: String,
  dob: String,
  place: String,
  bankname: String,
  bankan: String,
  airport: String,
  permanentaddress: String,
  presentaddress: String,

  wfname: String,
  wlname: String,
  wemail: String,
  wdob: String,
  cname1: String,
  cdob1: String,
  cname2: String,
  cdob2: String,
  cname3: String,
  cdob3: String,

  passnumber: String,
  passissueplace: String,
  passissuedate: String,
  passexpiredate: String,
  visanumber: String,
  visaissueplace: String,
  visaissuedate: String,
  visaexpiredate: String,
  ecnrnumber: String,
  ecnrissueplace: String,
  ecnrissuedate: String,
  ecnrexpiredate: String,
  yellowfevernumber: String,
  yellowfeverissueplace: String,
  yellowfeverissuedate: String,
  yellowfeverexpiredate: String,
  indosnumber: String,
  indosissueplace: String,
  indosissuedate: String,
  indosexpiredate: String,

  // grade: String,
  // licencenumber: String,
  // licenceissuedate: String,
  // licenceexpirydate: String,
  // licencerevalidationdate: String,
  // pgrade: String,
  // plicencenumber: String,
  // plicenceissuedate: String,
  // plicenceexpirydate: String,
  // plicencerevalidationdate: String,
  // ograde: String,
  // olicencenumber: String,
  // olicenceissuedate: String,
  // olicenceexpirydate: String,
  // olicencerevalidationdate: String,

  // form-3 data
passnumber: String,
passissueplace: String,
passissuedate: String,
passexpiredate: String,
visanumber: String,
visaissueplace: String,
visaissuedate: String,
visaexpiredate: String,
ecnrnumber: String,
ecnrissueplace: String,
ecnrissuedate: String,
ecnrexpiredate: String,
yellowfevernumber: String,
yellowfeverissueplace: String,
yellowfeverissuedate: String,
yellowfeverexpiredate: String,
indosnumber: String,
indosissueplace: String,
indosissuedate: String,
indosexpiredate: String,


// Officialuse form data
personality: String,
attitude: String,
technicalknowledge: String,
englishknowledge: String,
overall: String,

// STCW form data
certificatenoSTCW: String,
issuedateSTCW: String,
expirydateSTCW: String,
placeofissueSTCW: String,
issuingauthoritySTCW: String,

certificatenoPSSR: String,
issuedatePSSR: String,
expirydatePSSR: String,
placeofissuePSSR: String,
issuingauthorityPSSR: String,

certificatenoPST: String,
issuedatePST: String,
expirydatePST: String,
placeofissuePST: String,
issuingauthorityPST: String,

certificatenoRANSCO: String,
issuedateRANSCO: String,
expirydateRANSCO: String,
placeofissueRANSCO: String,
issuingauthorityRANSCO: String,

certificatenoROC: String,
issuedateROC: String,
expirydateROC: String,
placeofissueROC: String,
issuingauthorityROC: String,

certificatenoCRC: String,
issuedateCRC: String,
expirydateCRC: String,
placeofissueCRC: String,
issuingauthorityCRC: String,

certificatenoECDIS: String,
issuedateECDIS: String,
expirydateECDIS: String,
placeofissueECDIS: String,
issuingauthorityECDIS: String,

certificatenoEFA: String,
issuedateEFA: String,
expirydateEFA: String,
placeofissueEFA: String,
issuingauthorityEFA: String,

certificatenoERS: String,
issuedateERS: String,
expirydateERS: String,
placeofissueERS: String,
issuingauthorityERS: String,

certificatenoICE: String,
issuedateICE: String,
expirydateICE: String,
placeofissueICE: String,
issuingauthorityICE: String,

certificatenoMED: String,
issuedateMED: String,
expirydateMED: String,
placeofissueMED: String,
issuingauthorityMED: String,

company1: String,
company1vessel: String,
company1type: String,
company1flag: String,
company1grt: String,
company1bhp: String,
company1rank: String,
company1from: String,
company1to: String,

company1reasonforsignoff: String,
company2: String,
company2vessel: String,
company2type: String,
company2flag: String,
company2grt: String,
company2bhp: String,
company2rank: String,
company2from: String,
company2to: String,
company2reasonforsignoff: String,

company3: String,
company3vessel: String,
company3type: String,
company3flag: String,
company3grt: String,
company3bhp: String,
company3rank: String,
company3from: String,
company3to: String,
company3reasonforsignoff: String,

company4: String,
company4vessel: String,
company4type: String,
company4flag: String,
company4grt: String,
company4bhp: String,
company4rank: String,
company4from: String,
company4to: String,
company4reasonforsignoff: String,

company5: String,
company5vessel: String,
company5type: String,
company5flag: String,
company5grt: String,
company5bhp: String,
company5rank: String,
company5from: String,
company5to: String,
company5reasonforsignoff: String,

company6: String,
company6vessel: String,
company6type: String,
company6flag: String,
company6grt: String,
company6bhp: String,
company6rank: String,
company6from: String,
company6to: String,
company6reasonforsignoff: String,

chemcogrt: String,
chemcobhp: String,
chemcorank: String,
chemcofrom: String,
chemcoto: String,
chemcoreasonforsignoff: String,

gascogrt: String,
gascobhp: String,
gascorank: String,
gascofrom: String,
gascoto: String,
gascoreasonforsignoff: String,

dcegrt: String,
dcebhp: String,
dcerank: String,
dcefrom: String,
dceto: String,
dcereasonforsignoff: String,

huetgrt: String,
huetbhp: String,
huetrank: String,
huetfrom: String,
huetto: String,
huetreasonsignoff: String,

ssogrt: String,
ssobhp: String,
ssorank: String,
ssofrom: String,
ssoto: String,
ssoreasonforsignoff: String,

socgrt: String,
socbhp: String,
socrank: String,
socfrom: String,
socto: String,
socreasonforsignoff: String,

wcgrt: String,
wcbhp: String,
wcrank: String,
wcfrom: String,
wcto: String,
wcreasonforsignoff: String,

experienceText: String,
indianumber: String,
indiaissueplace: String,
indiaissuedate: String,
indiaexpiredate: String,
panamanumber: String,
panamaissueplace: String,
panamaissuedate: String,
panamaexpiredate: String,
othernumber: String,
otherissueplace: String,
otherissuedate: String,
otherexpiredate: String,

grade: String,
licencenumber: String,
licenceissuedate: String,
licenceexpirydate: String,
licencerevalidationdate: String,
stc95: String,

pgrade: String,
plicencenumber: String,
plicenceissuedate: String,
plicenceexpirydate: String,
plicencerevalidationdate: String,
pstc95: String,

ograde: String,
olicencenumber: String,
olicenceissuedate: String,
olicenceexpirydate: String,
olicencerevalidationdate: String,
ostc95: String,

height: String,
weight: String,
suitsize: String,
shoessize: String,
illness: String,
isChecked: String

});

const FormData = mongoose.model('FormData', formSchema);

// API route to save form data
app.post('/api/saveFormData', async (req, res) => {
  try {
    console.log(req.body)
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: 'Data saved successfully!', formData });
    console.log("data", formData);
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
