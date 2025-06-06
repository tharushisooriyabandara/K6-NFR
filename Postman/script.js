import "./libs/shim/core.js";
import "./libs/shim/urijs.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
const courseURL = "http://127.0.0.1:83/webservice/rest/server.php";
const token = "585a5e34abe199537fec2640b8252ef7";

// ✅ Use timestamp to make shortname unique on each run
const uniqueShortname = "mycourses" + Date.now();
let createdCourseId = "";

export default function () {
  // ✅ CREATE COURSE
  postman[Request]({
    name: "CREATE COURSE",
    id: "create-course",
    method: "POST",
    address: `${courseURL}?wstoken=${token}&moodlewsrestformat=json&wsfunction=core_course_create_courses&courses[0][fullname]=MyTestCourse&courses[0][shortname]=${uniqueShortname}&courses[0][categoryid]=1`,
    data: {},
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    post(response) {
      pm.test("Create course - Status code is 200", function () {
        pm.response.to.have.status(200);
        const res = JSON.parse(responseBody);
        if (res && res[0] && res[0].id) {
          createdCourseId = res[0].id;
          console.log("✅ Created course ID:", createdCourseId);
        } else {
          console.error("❌ Create failed: No course ID found", responseBody);
        }
      });
    }
  });

  // ✅ GET COURSE
  postman[Request]({
    name: "GET COURSE",
    id: "get-course",
    method: "GET",
    address: `${courseURL}?wstoken=${token}&wsfunction=core_course_get_courses&options[ids][0]=${createdCourseId}&moodlewsrestformat=json`,
    post(response) {
      pm.test("Get course - Status code is 200", function () {
        pm.response.to.have.status(200);
        const data = JSON.parse(responseBody);
        if (data && data.length > 0) {
          console.log("✅ Fetched course ID:", data[0].id);
        } else {
          console.error("❌ Get failed: No course data found", responseBody);
        }
      });
    }
  });

  // ✅ DELETE COURSE
  postman[Request]({
    name: "DELETE COURSE",
    id: "delete-course",
    method: "DELETE",
    address: `${courseURL}?wstoken=${token}&moodlewsrestformat=json&wsfunction=core_course_delete_courses&courseids[0]=${createdCourseId}`,
    post(response) {
      pm.test("Delete course - Status code is 200", function () {
        pm.response.to.have.status(200);
        console.log("✅ Deleted course ID:", createdCourseId);
      });
    }
  });
}
