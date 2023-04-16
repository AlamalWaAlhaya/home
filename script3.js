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
fetch("https://raw.githubusercontent.com/scriptvip/Ramadan/main/all.txt")
  .then((response) => response.text())
  .then((data) => {
    numbers = data.split("\n");
    for (let i = 0; i < numbers.length; i++) {
      let S = numbers[i].split(" ")
      National_numbers.push(S[1])
      National_numbers.push(S[2])
      if (S[0].includes(",")) {
        let j = S[0].replace(",", "");
        new_numbers.push(j);
      } else {
        let j = S[0];
        new_numbers.push(j);
      }
    }
    console.log(new_numbers[299])
  
    document.getElementById("find").addEventListener("click", () => {
       const inputValue = search.value;
      const englishValue = inputValue.replace(
        /[٠١٢٣٤٥٦٧٨٩]/g,
        function (match) {
          return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
        }
      )
      let val;
      let s=1, index=0;
      for (i = 0; i < National_numbers.length; i++) {
        if (englishValue != "") {
          if (englishValue != 0 && (englishValue  == National_numbers[i] || englishValue  == National_numbers[i+1])) {
            val = `<h1 class="green">${new_numbers[index]} كودك هو</h1>`;
            s=0;
            break;
          }
        }
        index++;
        i++;
      }
      if (s) val = `<h1 class = "red">غير صحيح</h1>`
      document.getElementById("message").innerHTML = val ;
    });
    console.log(National_numbers);
  });
