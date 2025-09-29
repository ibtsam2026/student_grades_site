function searchGrades() {
    var studentId = document.getElementById("studentId").value.trim();
    if (studentId === "") {
        alert("يرجى إدخال رقم السجل المدني");
        return;
    }

    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1-yq9WxgRXR0mCk8igNpYoFYGuQpRITGMZHYUsWQCE-k/edit?usp=sharing',
        simpleSheet: true,
        callback: function(data) {
            var filtered = data.filter(row => row['السجل المدني'] === studentId);
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";

            if (filtered.length === 0) {
                resultDiv.innerHTML = "<p>لم يتم العثور على درجات لهذا السجل المدني.</p>";
                return;
            }

            var studentName = filtered[0]['الاسم'];
            var table = "<h2>الطالبة: " + studentName + "</h2>";
            table += "<table><tr><th>المادة</th><th>الدرجة</th></tr>";

            filtered.forEach(row => {
                table += "<tr><td>" + row['المادة'] + "</td><td>" + row['الدرجة'] + "</td></tr>";
            });

            table += "</table>";
            resultDiv.innerHTML = table;
        }
    });
}
