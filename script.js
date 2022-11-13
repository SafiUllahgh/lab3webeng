const Name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const person = document.getElementById.value;

const auth = () => {
  window.alert("Login Successfully");
  window.open("profile.html");
};
function addNewCourse() {
  const body = document.querySelector("tbody");
  const row = document.createElement("tr");
  const tdCourseID = document.createElement("td");
  const tdCourseName = document.createElement("td");
  const tdYearTaken = document.createElement("td");
  const courseId = Math.round(Math.random() * 100) + 4;
  const courseName = Math.round(Math.random() * 500) + 50;
  const yearTaken = Math.round(Math.random() * 2020) + 2020;
  row.id = "row" + courseId;
  tdCourseID.innerHTML = "Course " + courseId;
  tdCourseName.innerHTML = "Course - DOM - " + courseName;
  tdYearTaken.innerHTML = yearTaken;
  row.appendChild(tdCourseID);
  row.appendChild(tdCourseName);
  row.appendChild(tdYearTaken);
  body.appendChild(row);
}
function deleteCourse() {
  const courseId = prompt("Please enter course#");
  if (courseId) {
    const row = document.getElementById("row" + courseId);
    if (row) {
      const body = document.querySelector("tbody");
      body.removeChild(row);
    }
  }
}

function updateCourse() {
  const newCourseYear = prompt(
    "Please enter course# and new year delimited by comma"
  );
  if (newCourseYear) {
    const courseId = newCourseYear.split(",")[0];
    const courseYear = newCourseYear.split(",")[1];
    const row = document.getElementById("row" + courseId);
    if (row) {
      const tdYearTaken = row.querySelector(
        "#row" + courseId + ">td:nth-child(3)"
      );
      tdYearTaken.innerHTML = courseYear;
    }
  }
}

function removeAllCourse() {
  const body = document.querySelector("tbody");
  const lstElement = Array.from(body.children);
  lstElement.forEach((element) => {
    body.removeChild(element);
  });
}
