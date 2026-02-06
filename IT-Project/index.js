// data set for table
const courses = [
  
  {id:1, name:"CSNT 115 A+ Software Essentials", credits:6, coreq:["CSNT 116"]},
  {id:2,name:"CSNT 116 A+ Hardware", credits:6, coreq:["CSNT 115"]},
  {id:3, name:"CMST& 210 Interpersonal Communication", credits:5},
  //Quarter 2
  {id:4, name:"CSNT 124 Open Source Operating Systems", credits:6, prereq:["CSNT 115","CSNT 116"], coreq:["CSNT 125"]},
  {id:5, name: "CSNT 125 Shells and Scripts", credits:6, prereq:["CSNT 115","CSNT 116"]},
  {id:6, name:"CSD 110 Computer Programming Fundamentals with Python", credits:5},
  //Quarter 3
  {id:7, name:"CSNT 231 Network Fundamentals I", credits:6, prereq:["CSNT 124","CSNT 125"]},
  {id:8, name:"CSNT 232 Network Fundamentals II", credits:6, prereq:["CSNT 124","CSNT 125"]},
  {id:9, name:"CS& 141 Computer Science I Java", credits:5, prereq:["CSD 110"]},
  //Quarter 4
  {id:10, name:"CJ& 101 Introduction to Criminal Justice", credits:5},
  {id:11, name:"ENGL& 101 English Composition I", credits:5},
  {id:12, name:"CS 143 Computer Science II Java", credits:5, prereq:["CS& 141"]},
  //Quarter 5
  {id:13, name:"MATH& 141", credits:5},
  {id:14, name:"CSNT 255 Network Administration I", credits:6, prereq:["CSNT 231","CSNT 232","ENGL& 101"]},
  {id:15, name:"CSNT 256 Network Administration II", credits:6, prereq:["CSNT 231","CSNT 232"], coreq:["CSNT 255"]},
  //Quarter6
  {id:16, name:"MATH& 142", credits:5},
  {id:17, name:"CSNT 241 Network Security and Encryption", credits:6, prereq:["CSNT 255","CSNT 256"], coreq:["CSNT 248"]},
  {id:18, name:"CSNT 248 Server Administration", credits:6, prereq:["CSNT 255","CSNT 256"], coreq:["CSNT 241"]},
  //Quarter 7
  {id:19, name:"CSNT 257 Cloud Computing", credits:6},
  {id:20, name:"CSNT 253 Capstone", credits:6, prereq:["CSNT 241","CSNT 248"], coreq:["CSNT 257"]},
  {id:21, name:"MATH& 151 Calculus I", credits:5, prereq:["MATH& 142"]},

];


const container = document.querySelector(".program");

container.innerHTML = `
  <table>
    <thead>
      <tr>
        
        <th>Course Code</th>
        <th>Credits</th>
        <th>Prereqs</th>
        <th>Coreqs</th>
      </tr>
    </thead>
    <tbody>
      ${courses.map(x => `
        <tr>
          
          <td>${x.name}</td>
          <td>${x.credits ?? ""}</td>
          <td>${x.prereq ? x.prereq.join(", ") : ""}</td>
          <td>${x.coreq ? x.coreq.join(", ") : ""}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
`;
      


document.querySelectorAll("tbody tr").forEach((row, index) => {
  const prereqs = courses[index].prereq;
  const hasPrereqs = Array.isArray(prereqs) && prereqs.length > 0;

  row.classList.add(hasPrereqs ? "has-prereq" : "no-prereq");
});

// document.addEventListener("click", function (event) {
//   if (event.target.tagName === "TD") {
//     const row = event.target.parentElement;
//     row.classList.toggle("completed");
//   }
// });











