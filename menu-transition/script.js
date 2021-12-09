var open_button = document.getElementsByTagName("svg")
var close_button = document.getElementsByClassName("close-button")
var menu_list_container = document.getElementsByClassName("menu-list-container")

open_button[0].addEventListener("click", ()=>{
    menu_list_container[0].style.width="75%"
})
close_button[0].addEventListener("click", ()=>{
    menu_list_container[0].style.width="0%"
})