var student = { id: 123, phone: 1122, name:"noyon"};
var student2 = {id:111, phone:3344, name:"naeem"};
// var phoneNum = student.phone; //first system
 var idNum = student2["id"]; //2nd system
var phonePropNum = "phone"; //3rd system
var phoneNo = student[phonePropNum];
//update value
student2.phone = 44444; //1st system
student2["phone"] = 2112321; // 2nd system
student2[phonePropNum] = 99999999; //3rd system
// new value add
student2.cinema = "agent2"

console.log(phoneNo);
console.log(student2);