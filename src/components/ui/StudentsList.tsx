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
            return <p key={'${student}'}>{student.name}</p>;
        })}
    </div>
    );
};

export default StudentsList;