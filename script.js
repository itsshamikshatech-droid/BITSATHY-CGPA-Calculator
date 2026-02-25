function calculateCGPA() {

    let subjects = [
        { id: "maths", credit: 4 },
        { id: "physics", credit: 3 },
        { id: "chemistry", credit: 3 },
        { id: "computing", credit: 3 },
        { id: "english", credit: 2 },
        { id: "electronics", credit: 3 },
        { id: "startup", credit: 2 },
        { id: "tamil", credit: 1 }
    ];

    let totalCredits = 21;
    let totalPoints = 0;

    for (let sub of subjects) {
        let grade = parseFloat(document.getElementById(sub.id).value);

        if (isNaN(grade)) {
            document.getElementById("result").innerHTML =
                "⚠️ Please select all grades!";
            return;
        }

        totalPoints += grade * sub.credit;
    }

    let cgpa = totalPoints / totalCredits;

    let message = "";

    if (cgpa >= 9) {
        message = "🔥 Outstanding Performance! University Rank Level! 🌟";
    }
    else if (cgpa >= 8) {
        message = "💎 Excellent Work! Keep Shining! ✨";
    }
    else if (cgpa >= 7) {
        message = "👍 Good Job! Aim for 9+ Next Sem 🚀";
    }
    else {
        message = "📚 Keep Working Hard! You Can Improve 💪";
    }

    document.getElementById("result").innerHTML =
        "🎓 Your CGPA: <span style='color:#00ffcc'>" +
        cgpa.toFixed(2) +
        "</span><br><br>" +
        message;
}