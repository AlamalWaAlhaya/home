function list() {
  document.getElementById("arrow").onclick = () => {
    document.getElementById("list").classList.toggle("list-active");
    document.getElementById("arrow").classList.toggle("arrow-anim");
  };
}

list();

