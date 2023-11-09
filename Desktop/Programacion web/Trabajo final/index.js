function showPage(){
  document.querySelectorAll(".pages").forEach((pageElement) => {
    const pageId = pageElement.getAttribute("id")
    console.log(pageId, page)
    if(pageId === page){
      pageElement.style.display = "block"
    } else{
      pageElement.style.display = "none"
    }
  })
}

/*document.getElementsByClassName(".nav-link-active").forEach((element) => {
  element.addEventListener("click", (e) =>{
    showPage(e.target.)
  })
});*/