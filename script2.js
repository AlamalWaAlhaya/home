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
let National_numbers = [];
let chk_list=[];
fetch("https://raw.githubusercontent.com/scriptvip/Ramadan/main/test.txt")
  .then((response) => response.text())
  .then((data) => {
    numbers = data.split("\n");
    for (let i = 0; i < numbers.length; i++) {
      let S = numbers[i].split(" ")
      if (S[1]!="0")National_numbers.push(S[1])
      if (S[2]!="0")National_numbers.push(S[2])
      if (S[0].includes(",")) {
        let j = S[0].replace(",", "");
        new_numbers.push(j);
      } else {
        let j = S[0];
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
      
      if (document.getElementById("way").value == "code") chk_list=new_numbers;
      else if(document.getElementById("way").value == "num") chk_list=National_numbers;
      if (document.getElementById("place").value == "volvo") {
        if (
          (chk_list.includes(`${englishValue}`) && englishValue != "") ||
          (chk_list.includes(`"${englishValue}"`) && englishValue != "")
        ) {
          document.getElementById(
            "message"
          ).innerHTML = `<h1 class = "green">تنورنا في جمعية الأمل والحياة لاستلام هديتكم.. كل عام وأنتم بخير</h1>`;
          console.log(`${englishValue}#\r`);
        } else if (
          (chk_list.includes(`${englishValue}#\r`) && englishValue != "") ||
          (chk_list.includes(`"${englishValue}"#\r`) && englishValue != "")
        ) {
          document.getElementById(
            "message"
          ).innerHTML = `<h1 class = "green">تم الاستلام</h1>`;
        } else if (englishValue != "") {
          document.getElementById(
            "message"
          ).innerHTML = `<h1 class = "red"> كل عام وأنتم بخير ..لا يوجد هدايا حاليا لسيادتكم</h1>`;
        }
      }
    });
  })
  .catch((error) => console.error(error));
