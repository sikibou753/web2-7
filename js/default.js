var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数当てゲーム。0～2の数字を入力してください！'));

var message;
if(answer === number){
message='あたり！';
}else if(answer<0&&answer>3){
message='0～3の数字を入力してください';
}else if(answer < number){
message='残念！もっと大きいです';
}else if(number<answer){
message='残念！もっと小さいです';
}

document.getElementById('choice').textContent=message;
