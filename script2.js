function list() {
  document.getElementById("arrow").onclick = () => {
    document.getElementById("list").classList.toggle("list-active");
    document.getElementById("arrow").classList.toggle("arrow-anim");
  };
}

list();

let numbers = [
  '13', '43', '62', '71', '102', '137', '150', '162', '236', '316', '323', '330', '336', '359', '390', '397',
  '427', '854', '860', '952', '1235', '1289', '1410', '1515', '1549', '1556', '2311', '2319', '2451',
  '2537', '358', '320', '2376', '185', '312', '90', '1639'
];
let search = document.getElementById("search");

document.getElementById("find").addEventListener("click", () => {
  if (numbers.includes(search.value) && search.value != "") {
    document.getElementById(
      "message"
    ).innerHTML = `<h1 class = "green">يرجي التوجه الي جمعية الأمل و الحياة بالزرقا لاستلام أمانتك</h1>`;
  } else if (search.value != "") {
    document.getElementById(
      "message"
    ).innerHTML = `<h1 class = "red">سوف يتم اعلامكم في وقت قريب عند توافر أمانتكم</h1>`;
  }
});

