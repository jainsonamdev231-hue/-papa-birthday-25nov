from datetime import date
from pyscript import document

today = date.today()

blessing_lines = [
    "🌟 [Python Tribute Module Active] 🌟",
    "Date: 25 November — Papa ke birthday ka special message.",
    "Aap strict bilkul nahi ho, bas kabhi-kabhi daantte ho! Happy Birthday Papa!"
]

output_div = document.querySelector("#python-tribute-output")
output_div.innerHTML = "<br>".join(blessing_lines)

