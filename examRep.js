 let insID="exam1";

fetch('http://classroommonitoring.herokuapp.com/api/user/generate_exam_report', {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        exam_instance_id:insID
    }),
  }).then(res => res.json())
  .then(objectData =>{
let dataSize=objectData.data.cases;
    
    // console.log(objectData.data.cases[i].case_details[0]);

// Create an "li" node:
var theDiv = document.getElementById("cent");
var theDiv2=document.getElementById("cent2");
var theDiv3=document.getElementById("cent3");
var theDiv4=document.getElementById("cent4");
var theDiv5=document.getElementById("cent5");
var theDiv6=document.getElementById("cent6");
var theDiv7=document.getElementById("cent7");




    for (let i = 0; i < dataSize.length; i++) 
    {
      let dataCid=objectData.data.cases[i].case_id;

     var Cid = document.createElement('div');
  Cid.innerHTML = dataCid;
     theDiv.appendChild(Cid);
//#########################################################################################################
     let datainst=objectData.data.cases[i].exam_instance_id;

     var inst = document.createElement('div');
  inst.innerHTML = datainst;
     theDiv2.appendChild(inst);

//#########################################################################################################
     let datastat=objectData.data.cases[i].stat;

     var stat = document.createElement('div');
  stat.innerHTML = datastat;
     theDiv3.appendChild(stat);

// #########################################################################################################

     let confidenceVal=objectData.data.cases[i].confidence;

     var conf = document.createElement('div');
  conf.innerHTML = confidenceVal;
     theDiv4.appendChild(conf);

// ############################################################################################################

let tstamp=objectData.data.cases[i].ts;

var t_s = document.createElement('div');
t_s.innerHTML = tstamp;
theDiv5.appendChild(t_s);

// ##############################################################################################################

let sNum=objectData.data.cases[i].student_number;

var s_n = document.createElement('div');
s_n.innerHTML = sNum;
theDiv6.appendChild(s_n);

// ##############################################################################################################
let cImg=objectData.data.cases[i].case_image;

var cIm = document.createElement('a');
var nl=document.createElement('br');
cIm.innerHTML = "Image Link";
cIm.href=cImg;
theDiv7.appendChild(cIm);
theDiv7.appendChild(nl);

    }

    document.getElementById('logProct').addEventListener("click", function()
{
 
   window.location.href="logOut.html";



 })


   
 });

 
