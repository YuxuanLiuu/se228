function alertInfo(){
    var name = document.getElementById("userName").value;
    if (name === ""){
        alert("请输入用户名");
    } else {
        alert("您的用户名是"+name);
    }
}