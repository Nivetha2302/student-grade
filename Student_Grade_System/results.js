document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results');
    const storedResults = JSON.parse(localStorage.getItem('students')) || [];
  
    storedResults.forEach((student) => {
        resultsContainer.innerHTML += `
            <h2>Roll Number: ${student.rollNumber}</h2>
            <h2>Name: ${student.name}</h2>
        `;
  
        for (const subject in student) {
            if (subject !== 'name' && subject !== 'rollNumber' && subject !== 'Total' && subject !== 'Grade') {
                resultsContainer.innerHTML += `
                    <p>${subject}: ${student[subject]}</p>
                `;
            }
        }
  
        const totalMarks = student.Total;
        const grade = student.Grade;
  
        resultsContainer.innerHTML += `
            <p><strong>Total Marks: ${totalMarks}</strong></p>
            <p><strong>Grade: ${grade}</strong></p>
            <hr>
        `;
    });
  
    document.getElementById('newEntry').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

