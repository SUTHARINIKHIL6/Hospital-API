const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    PhoneNo : {
        type : String,
        required : true,
    },
    report: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report',
        }
    ],
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'DoctorDetails'
    },
    name : {
        type: String,
        required: true,
    }
});
//Created Schema for PatientDetails

const CollectionReference = mongoose.model('PatientDetails',Schema);
//Named the collection as PatientDetails

module.exports = CollectionReference;