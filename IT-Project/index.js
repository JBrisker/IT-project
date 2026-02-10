// data set for table
var courses = [
  
  {id:"no-prereq", name:"CSNT 115 A+ Software Essentials", credits:6, coreq:["CSNT 116"]},
  {id:"no-prereq",name:"CSNT 116 A+ Hardware", credits:6, coreq:["CSNT 115"]},
  {id:"no-prereq", name:"CMST& 210 Interpersonal Communication", credits:5},
  //Quarter 2
  {id:"has-prereq", name:"CSNT 124 Open Source Operating Systems", credits:6, prereq:["CSNT 115","CSNT 116"], coreq:["CSNT 125"]},
  {id:"has-prereq", name: "CSNT 125 Shells and Scripts", credits:6, prereq:["CSNT 115","CSNT 116"]},
  {id:"no-prereq", name:"CSD 110 Computer Programming Fundamentals with Python", credits:5},
  //Quarter 3
  {id:"has-prereq", name:"CSNT 231 Network Fundamentals I", credits:6, prereq:["CSNT 124","CSNT 125"]},
  {id:"has-prereq", name:"CSNT 232 Network Fundamentals II", credits:6, prereq:["CSNT 124","CSNT 125"]},
  {id:"has-prereq", name:"CS& 141 Computer Science I Java", credits:5, prereq:["CSD 110"]},
  //Quarter 4
  {id:"no-prereq", name:"CJ& 101 Introduction to Criminal Justice", credits:5},
  {id:"no-prereq", name:"ENGL& 101 English Composition I", credits:5},
  {id:"has-prereq", name:"CS 143 Computer Science II Java", credits:5, prereq:["CS& 141"]},
  //Quarter 5
  {id:"no-prereq", name:"MATH& 141", credits:5},
  {id:"has-prereq", name:"CSNT 255 Network Administration I", credits:6, prereq:["CSNT 231","CSNT 232","ENGL& 101"]},
  {id:"has-prereq", name:"CSNT 256 Network Administration II", credits:6, prereq:["CSNT 231","CSNT 232"], coreq:["CSNT 255"]},
  //Quarter6
  {id:"no-prereq", name:"MATH& 142", credits:5},
  {id:"has-prereq", name:"CSNT 241 Network Security and Encryption", credits:6, prereq:["CSNT 255","CSNT 256"], coreq:["CSNT 248"]},
  {id:"has-prereq", name:"CSNT 248 Server Administration", credits:6, prereq:["CSNT 255","CSNT 256"], coreq:["CSNT 241"]},
  //Quarter 7
  {id:"no-prereq", name:"CSNT 257 Cloud Computing", credits:6},
  {id:"has-prereq", name:"CSNT 253 Capstone", credits:6, prereq:["CSNT 241","CSNT 248"], coreq:["CSNT 257"]},
  {id:"has-prereq", name:"MATH& 151 Calculus I", credits:5, prereq:["MATH& 142"]},

];


const container = document.querySelector(".program");

container.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Prerequisites</th>
        <th>Course</th>
        <th>Credits</th>
        <th>Prereqs</th>
      </tr>
    </thead>
    <tbody>
      ${courses.map(x => `
        <tr>
          <td>${x.id}</td>
          <td>${x.name}</td>
          <td>${x.credits ?? ""}</td>
          <td>${x.prereq ? x.prereq.join(", ") : ""}</td>
         
        </tr>
      `).join("")}
    </tbody>
  </table>
`;
      
//color cells based on weather is has prerequisites
function colorCells() {
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const idCell = row.querySelector("td"); // check first column for id
    const req = idCell.textContent.trim();

    if (req === "no-prereq") {
      row.style.backgroundColor = "white";
      row.classList.add("no-prereq");
      row.classList.remove("has-prereq");
     
      
    } else {
      row.style.backgroundColor = "gray";
      row.classList.add("has-prereq");
      row.classList.remove("no-prereq");

    }
  });
}
 colorCells();

//function to turn completed courses green
function completeCourse() {
  document.addEventListener("click", (event) => {
    if (event.target.tagName !== "TD") return;

    const row = event.target.closest("tr");

    // Only clickable if available or already completed
    if (!row.classList.contains("no-prereq") &&
        !row.classList.contains("completed")) {
      return;
    }

    // Toggle between no-prereq ↔ completed
    if (row.classList.contains("completed")) {
      row.classList.remove("completed");
      row.classList.add("no-prereq");
    } else {
      row.classList.remove("no-prereq");
      row.classList.toggle("completed");
    }

    updatePrereqs();
  });
}

completeCourse();


function updatePrereqs() {
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row, index) => {
    const prereqs = courses[index].prereq;

    // No prereqs → leave as-is (no-prereq or completed)
    if (!Array.isArray(prereqs) || prereqs.length === 0) return;

    const allCompleted = prereqs.every(code => {
      const prereqIndex = courses.findIndex(c => c.name.startsWith(code));
      if (prereqIndex === -1) return false;

      const prereqRow = rows[prereqIndex];
      return prereqRow.classList.contains("completed");
    });

    if (allCompleted) {
     if(!row.classList.contains("completed")){
      row.classList.add("no-prereq");
     }
      row.classList.remove("has-prereq");
    } else {
      row.classList.add("has-prereq");
      row.classList.remove("no-prereq");
      row.classList.remove("completed");
    }
  
  });
}
