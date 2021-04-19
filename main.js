//testing
let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"]

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"]
]

//List all the teachers with an even index number (including 0)
let evenIndex = () => {
  teachers.forEach((teacher, index) => {
    if (index % 2 === 0){
      console.log(teacher)
    }
  })
}
evenIndex()
console.log(" ")

//List all of the teachers with the letter i in their name
let iInName = () => {
  teachers.forEach((teacher) => {
    if (teacher.includes("i")){
      console.log(teacher)
    }
  })
}
iInName()
console.log(" ")


//Return the number of teachers
let teacherCount = () => {
  return teachers.length
}
console.log(teacherCount() + "\n ")


//Return the number of rooms of students
let roomCount = () => {
  return rooms.length
}
console.log(roomCount() + "\n ")


//Return the number of students in all the rooms
let studentCount = () => {
  //count how filled each room is and build an array with those numbers
  let peopleInEachClassRoom = rooms.map(room => room.length)
  //now reduce that array
  let totalPeopleInRooms = peopleInEachClassRoom.reduce((total, current) => (total + current))
  return totalPeopleInRooms
}
console.log(studentCount())


//Return the students who have an i in their names
let whichStudents = () => {
  let allStudentsArray = []
  let studentsWithI = []
  //make a single list of all students
  for (i = 0 ; i < rooms.length; i++){
    allStudentsArray = allStudentsArray.concat(rooms[i])
  }
  //console.log(allStudentsArray)
  //create new array if "i" in name and return that list
  allStudentsArray.forEach((student) => {
    if (student.includes("i")){
      studentsWithI.push(student)
    }
  })
  return studentsWithI.join(", ")
}

/* 
//ALTERNATIVE COOL WAY TO take a lists of lists and make it one list of all elements
let whichStudents = (roomsArray) => {
  let flatArray = roomsArray.flat()
  let withI = flatArray.map((room)=>{
    if (room.includes("i")){
      return room
    }
  })
  return withI
}
 */
console.log(`
The students who have an 'i' in their name are ${whichStudents(rooms)}.
 `)



//Return the teacher who has the given student in their room
let whichTeacher = (student) => {
  let indexOfRoom = -1
  //find index of list that contains student
  for (i = 0; i< rooms.length; i++){
    if (rooms[i].includes(student)){
      indexOfRoom = i
    }
  }
  //console.log(indexOfRoom)

  //match that to teacher
  return teachers[indexOfRoom]
}

console.log(`The teacher who has Jorge is ${whichTeacher("Jorge")}.`)
console.log(`The teacher who has Alexa is ${whichTeacher("Alexa")}.`)
