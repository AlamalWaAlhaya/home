
function list() { 
    document.getElementById("arrow").onclick = () => { 
      document.getElementById("list").classList.toggle("list-active"); 
      document.getElementById("arrow").classList.toggle("arrow-anim"); 
    }; 
  } 
   
  list();

const button = document.getElementById("find");
const select = document.getElementById('way');
let search = document.getElementById("search"); 

let file;
let row ;
let value;

let messages = ["تنورنا لاستلام هديتك من مقر الجمعية" ];
let msg = [];
let final_msg = "";

let searchTerm = search.value;





button.addEventListener("click", function() {

  // init values for new search ...
  msg = [];
  searchTerm = search.value;

  // replaceing arabic numbers
  searchTerm = searchTerm.replace(
    /[٠١٢٣٤٥٦٧٨٩]/g,
    function (match) {
      return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
    }
  );

  // making sure the select is True : 
    const length = search.value.length;

    if (length < 5) {
      select.selectedIndex = 0;
    } else {
      select.selectedIndex = 1;
    }

  // fetching data ...
  Promise.all([
      fetch("https://raw.githubusercontent.com/AlamalWaAlhaya/home/main/sheets/1.txt"),
      // fetch('https://example.com/data3.txt')
    ])
      .then(responses => Promise.all(responses.map(response => response.text())))
      .then((files) => {
      
      // getting every file out of files array ; file_c == file counter
      for (let file_c = 0 ; file_c < files.length; file_c++){
          file = files[file_c].split("\n");

          // looping throw the file rows ; row_c == row counter
          for (let row_c = 0 ; row_c < file.length ; row_c ++){
              row = file[row_c].split(",");
              // looping throw each value in the row ; row_c == row counter
              for(let value_c = 0 ; value_c < row.length ; value_c++){
                  value = row[value_c];
                  value =  value.replace(/\r/g, "");

                  // checking if we found the searching term
                  if (value == searchTerm & value != ""){
                    msg.push(messages[file_c]) ;  
                    console.log(msg , value , searchTerm);
                    
                  } 
                  
              }
          }
          
      }
      final_msg = msg.join("");
      if (final_msg != ""){
      document.getElementById(
          "message"
        ).innerHTML = `<h1 class = "green" >"${msg}" .. كل عام وأنتم بخير </h1>`;
      }else{
        document.getElementById(
          "message"
        ).innerHTML = `<h1 class = "gray"> كل عام وأنتم بخير ..لا يوجد هدايا حاليا لسيادتكم</h1>`;
      }
      console.log(msg);
  }
  )
  

  .catch(error => console.error(error));


});

