from datetime import date
from pyscript import document

today = date.today()
bday_date = date(today.year, 11, 25)

blessing_lines = [
    "🌟 [Python Tribute Module Active] 🌟",
    "दिनांक: 25 नवंबर — पिताजी के जन्मदिवस और गौरवपूर्ण उपलब्धियों का विशेष समर्पण।",
    "कोटि-कोटि नमन और ढेर सारा प्यार, पापा!"
]

output_div = document.querySelector("#python-tribute-output")
output_div.innerHTML = "<br>".join(blessing_lines)
