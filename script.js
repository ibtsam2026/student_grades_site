// بيانات تجريبية للطالبات حسب رقم السجل المدني
const students = {
    "1234567890": { name: "سارة أحمد", grades: { رياضيات: 95, علوم: 88, لغة: 92 } },
    "9876543210": { name: "نورة محمد", grades: { رياضيات: 85, علوم: 90, لغة: 87 } },
    "1122334455": { name: "هند عبدالله", grades: { رياضيات: 78, علوم: 82, لغة: 80 } }
};

// دالة البحث عن الطالبة وعرض درجاتها
function searchStudent() {
    const id = document.getElementById("student-id").value.trim();
    const resultDiv = document.getElementById("result");
    if (students[id]) {
        const student = students[id];
        let output = `<strong>الاسم:</strong> ${student.name}<br><strong>الدرجات:</strong><ul>`;
        for (const subject in student.grades) {
            output += `<li>${subject}: ${student.grades[subject]}</li>`;
        }
        output += "</ul>";
        resultDiv.innerHTML = output;
    } else {
        resultDiv.innerHTML = "<span style='color:red;'>لم يتم العثور على سجل بهذا الرقم.</span>";
    }
}
