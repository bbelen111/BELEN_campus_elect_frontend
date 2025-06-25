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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/students`
  );

  const students: StudentType[] = await res.json();

  return (
    <div>
        {students.map((student) => {
<<<<<<< HEAD
            return <p key={'${student}'}>{student.name}</p>;
=======
            return <p key={'${student}_${index}'}>{student.name}</p>;
>>>>>>> e37d86851c90ab828cd8f9608d99c73030613643
        })}
    </div>
    );
};

export default StudentsList;