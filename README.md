<h1> How to use the api ?<h1>
<h3> Register Doctor</h3>
<h4>Api to be used (POST): https://hospital-check.herokuapp.com/api/v1/doctors/register <h4>
<h5> Pass the following in the body { "email" : <"email">, "password" : <"password">, "name" : <"name">}</h5>
<h5> If success { "message": "User Created" } will be returned<h5>

<h3> Login Doctor </h3>
<h4> Api to be used (POST): https://hospital-check.herokuapp.com/api/v1/doctors/login </h4>
<h5> Pass the following in the body {"email" : <"email">,"password" : <"password">}</h5>
<h5> If success { "message": "Token Created Successfully","data": { "token": <"token"> } }</h5>

<h3> Register a Patient </h3>
<h4> Api to be used (POST): https://hospital-check.herokuapp.com/api/v1/patients/register </h4>
<h5> Pass the token as bearer in authorization in header and the details of patient in body {"PhoneNo" :<"PhoneNo">,"name" : <"name"> }</h5>
<h5> if success the message will be returned { "message": "User Created" , data : {"patientId" : <"ID">}} </h5>

<h3> Create Report <h3>
<h4> Api to be used (POST): https://hospital-check.herokuapp.com/api/v1/patients/:id/create_report </h4>
<h5> Pass the token as bearer in authorization in header and the status of patient in body {"status" : <"status">}
and PatientId in params <h5>
<h5> if success { message : "Report Generated Successfully"}<h5>

<h3> All reports of a patient <h3>
<h4> Api to be used (GET): https://hospital-check.herokuapp.com/api/v1/patients/:id/all_reports <h4>
<h5> Pass the token as bearer in authorization in header and PatientId in params <h5>
<h5> if success {message : "All reports generated till date for the user", data : <"PatientReport"> } <h5>

<h3> Report of specific Category <h3>
<h4> Api to be used (GET): https://hospital-check.herokuapp.com/api/v1/reports/:status <h4>
<h5>Pass the token as bearer in authorization in header and status in params</h5>
<h5> if success {message : "All reports with respective to the status generated", data : <"PatientReports"> } <h5>