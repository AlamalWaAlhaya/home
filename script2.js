function list() {
  document.getElementById("arrow").onclick = () => {
    document.getElementById("list").classList.toggle("list-active");
    document.getElementById("arrow").classList.toggle("arrow-anim");
  };
}

list();

let search = document.getElementById("search");

let numbers = [];
let new_numbers = [];

fetch("https://raw.githubusercontent.com/scriptvip/Ramadan/main/c.txt")
  .then((response) => response.text())
  .then((data) => {
    numbers = data.split("\n");
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].includes(",")) {
        let j = numbers[i].replace(",", "");
        new_numbers.push(j);
      } else {
        let j = numbers[i];
        new_numbers.push(j);
      }
      
    }
console.log(new_numbers)
    document.getElementById("find").addEventListener("click", () => {
      const inputValue = search.value;
      const englishValue = inputValue.replace(
        /[٠١٢٣٤٥٦٧٨٩]/g,
        function (match) {
          return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
        }
      );
      if (document.getElementById("place").value == "volvo") {
        if (
          (new_numbers.includes(`${search.value}`) && search.value != "") ||
          (new_numbers.includes(`"${search.value}"`) && search.value != "")
        ) {
          document.getElementById(
            "message"
          ).innerHTML = `<h1 class = "green">تنورنا في جمعية الأمل والحياة لاستلام هديتكم.. كل عام وأنتم بخير</h1>`;
          console.log(`${search.value}#`);
        } else if (
          (new_numbers.includes(`${search.value}#`) && search.value != "") ||
          (new_numbers.includes(`"${search.value}"#`) && search.value != "")
        ) {
          document.getElementById(
            "message"
          ).innerHTML = `<h1 class = "green">تم الاستلام</h1>`;
        } else if (search.value != "") {
          document.getElementById(
            "message"
          ).innerHTML = `<h1 class = "red"> كل عام وأنتم بخير ..لا يوجد هدايا حاليا لسيادتكم</h1>`;
        }
      }
    });
  })
  .catch((error) => console.error(error));
