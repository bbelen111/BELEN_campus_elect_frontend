import React from 'react';

const StudentsList = async () => {

    const students = await fetch('https://crispy-couscous-x5vq4w74j7593g95-3001.app.github.dev/users/students');
    const data = await students.json();

    return <div>{JSON.stringify(data)}</div>;
}

export default StudentsList