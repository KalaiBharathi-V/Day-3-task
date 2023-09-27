var Kalai = new XMLHttpRequest();
Kalai.open("GET", "https://restcountries.com/v2/all");
Kalai.send();
Kalai.onload=function(){
    var result = JSON.parse(Kalai.response);
    console.log(result);
}
