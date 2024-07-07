document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const rollNumber = document.getElementById('rollNumber').value;
    const name = document.getElementById('name').value;
    const tamilGrade = Number(document.getElementById('tamil').value);
    const englishGrade = Number(document.getElementById('english').value);
    const mathsGrade = Number(document.getElementById('maths').value);
    const physicsGrade = Number(document.getElementById('physics').value);
    const chemistryGrade = Number(document.getElementById('chemistry').value);
    const biologyGrade = Number(document.getElementById('biology').value);

    // Validate marks
    const marks = [tamilGrade, englishGrade, mathsGrade, physicsGrade, chemistryGrade, biologyGrade];
    const error = document.getElementById('error');
    error.textContent = '';

    for (const mark of marks) {
        if (mark < 0 || mark > 100) {
            error.textContent = 'Marks must be between 0 and 100.';
            return;
        }
    }

    const totalMarks = tamilGrade + englishGrade + mathsGrade + physicsGrade + chemistryGrade + biologyGrade;
    const average = totalMarks / 6;

    const grades = [
        convertToLetterGrade(tamilGrade),
        convertToLetterGrade(englishGrade),
        convertToLetterGrade(mathsGrade),
        convertToLetterGrade(physicsGrade),
        convertToLetterGrade(chemistryGrade),
        convertToLetterGrade(biologyGrade)
    ];

    const hasFailed = grades.includes('F');
    const grade = hasFailed ? 'Fail' : getGrade(average);

    const results = {
        rollNumber: rollNumber,
        name: name,
        Tamil: grades[0],
        English: grades[1],
        Maths: grades[2],
        Physics: grades[3],
        Chemistry: grades[4],
        Biology: grades[5],
        Total: totalMarks,
        Grade: grade
    };

    let storedResults = JSON.parse(localStorage.getItem('students')) || [];
    storedResults.push(results);
    localStorage.setItem('students', JSON.stringify(storedResults));

    // Navigate to results page
    window.location.href = 'results.html'; // Check this line for correctness

});

function convertToLetterGrade(grade) {
    if (grade >= 90) return 'A+';
    else if (grade >= 80) return 'A';
    else if (grade >= 70) return 'B+';
    else if (grade >= 60) return 'B';
    else if (grade >= 50) return 'C';
    else if (grade >= 40) return 'D';
    else return 'F';
}

function getGrade(average) {
    if (average >= 90) return 'A+';
    if (average >= 80) return 'A';
    if (average >= 70) return 'B+';
    if (average >= 60) return 'B';
    if (average >= 50) return 'C';
    if (average >= 40) return 'D';
    return 'Pass';
}
