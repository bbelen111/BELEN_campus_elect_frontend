import React from "react";

export type StudentType = {
    studentId: string;
    department: string;
    name: string;
    email: string;
    role: "STUDENT" | "ADMIN";
}

const StudentsList = async () => {
  const res = await fetch(
    `https://belen-campus-elect-backend.onrender.com/users/students`
  );

  const students: StudentType[] = await res.json();

  return (
    <div>
        {students.map((student) => {
            return <p key={student.studentId}>{student.name}</p>;
        })}
    </div>
    );
};

export default StudentsList;