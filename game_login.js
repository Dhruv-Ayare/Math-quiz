function addUser(){
    player_1_name=document.getElementById("player_1_name").value;
    player_2_name=document.getElementById("player_2_name").value;
    localStorage.setItem("player 1 name", player_1_name);
    localStorage.setItem("player 2 name", player_2_name);
    window.location="game_page.html";
}