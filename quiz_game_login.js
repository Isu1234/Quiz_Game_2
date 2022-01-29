function addUser()
{
    var user_1 = document.getElementById("Player_1").value;
    var user_2 = document.getElementById("Player_2").value;
    localStorage.setItem("Player_1",user_1);
    localStorage.setItem("player_2",user_2);
    window.location="Quiz_game_page.html";
}