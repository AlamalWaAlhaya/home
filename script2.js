function list() {
  document.getElementById("arrow").onclick = () => {
    document.getElementById("list").classList.toggle("list-active");
    document.getElementById("arrow").classList.toggle("arrow-anim");
  };
}

list();

let search = document.getElementById("search");

let array1 = [];
let array2 = [];
let National_numbers = [];
let code = [];
let National_numbers2 = [];
let code2 = [];
let message = "";
let chk_list = [];
let chk_list2 = [];

Promise.all([
  fetch("https://raw.githubusercontent.com/AlamalWaAlhaya/home/main/masr.txt"),
  fetch("https://raw.githubusercontent.com/AlamalWaAlhaya/home/main/bags.txt")])
  .then((responses) =>
    Promise.all(responses.map((response) => response.text()))
  )
  .then((texts) => {
    array1 = texts[0].split("\n").flatMap((row) => row.split(","));
    array2 = texts[1].split("\n").flatMap((row) => row.split(","));

    for (let i = 0; i < array1.length; ++i) {
      if (array1[i].length > 10) National_numbers.push(array1[i]);
      else code.push(array1[i]);
    }

    for (let i = 0; i < array2.length; ++i) {
      if (array2[i].length > 10) National_numbers2.push(array2[i]);
      else code2.push(array2[i]);
    }

    

    document.getElementById("find").addEventListener("click", () => {
      message = "";
      const inputValue = search.value;
      const englishValue = inputValue.replace(
        /[٠١٢٣٤٥٦٧٨٩]/g,
        function (match) {
          return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
        }
      );

      if (
        document.getElementById("place").value == "volvo" &&
        englishValue != ""
      ) {

        if (document.getElementById("way").value == "code") {
          chk_list = code;
          chk_list2 = code2;
        } else if (document.getElementById("way").value == "num") {
          chk_list = National_numbers;
          chk_list2 = National_numbers2;
        }

        if (
          chk_list.includes(englishValue) ||
          chk_list.includes(`${englishValue}\r`)
        ) {
          message =
            "تنورنا في جمعية الأمل والحياة لاستلام هديتكم 'كارت مصر الخير' .. كل عام وأنتم بخير";
        }
        
        /*else if (
        chk_list.includes(
          `${englishValue}#` || array1.includes(`'${englishValue}#'`)
        )
      ) {
        message = "تم الاستلام";
      }*/
      
      if (
        chk_list2.includes(englishValue) ||
        chk_list2.includes(`${englishValue}\r`)
      ) {
        message = "تنورنا في جمعية الأمل والحياة لاستلام هديتكم 'شنطة' .. كل عام وأنتم بخير ";
      }
      
      /* else if (
        chk_list2.includes(`${englishValue}#`) ||
        chk_list2.includes(`'${englishValue}#'`)
      ) {
        message = "تم الاستلام";
      }*/

      if (message != "") {
        document.getElementById(
          "message"
        ).innerHTML = `<h1 class = "green">${message}</h1>`;
      } else {
        document.getElementById(
          "message"
        ).innerHTML = `<h1 class = "gray"> كل عام وأنتم بخير ..لا يوجد هدايا حاليا لسيادتكم</h1>`;
      }}
    });
  })
  .catch((error) => console.error(error));

