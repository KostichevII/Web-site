function Send () {
    const Name= document.getElementById("name")
    if(Name.value==""){
        alert("Введите имя")
        return;
    }


}
function Clear () {
    var rating=document.getElementsByName("score")
    for(var i=0; i<rating.length; i++){
        rating[i].checked=false
    }
    rating[2].checked=true
    const Name= document.getElementById("name")
    const Comment=document.getElementById("commentary")
    Comment.value=""
    Name.value=""
}
function DuckSound(){
    var audio = new Audio('duck.mp3');
    audio.play();
}
