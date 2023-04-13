const PatientReference = require('../../../models/PatientSchema');

const ReportReference = require('../../../models/Report');

module.exports.createReport =async function(req,res){
    try{
        let patient = await PatientReference.findById(req.params.id);
        console.log(patient);
        let reports = await ReportReference.create({status : req.body.status , date : `${new Date(Date.now()).toLocaleDateString().toString()}` , patient : req.params.id});
        console.log('lessee',reports);
        await patient.report.push(reports);
        //report reference added to the patient's database
        await patient.save();
        return res.status(200).json({
            message : "Report Generated Successfully"
        });
    }
    catch(err){
        res.status(500).json({
            message : err
        });
    }
}
//Controller added to create report

module.exports.allReports = async function(req,res){
    try{
        let patient = await PatientReference.findById(req.params.id).populate('report').exec();
        return res.status(200).json({
            message : "All reports generated till date for the user",
            data : patient.report,
        })
    }
    catch(err){
        return res.status(500).json({
            message: err
        });
    }
}
//Controller to get all report of a specific patient

module.exports.statusVise = async function(req,res){
    try{
        let reports = await ReportReference.find({ status: req.params.status }).populate('patient').exec();
        return res.status(200).json({
            message : "All reports with respective to the status generated",
            data : reports
        });
    }
    catch(err){
        return res.status(500).json({
            message: err
        });
    }
}
//Controller to get the report of all the patients with respect to status