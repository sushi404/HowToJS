console.log("test");

//id指定で要素を取得している
//getElementByIDで取得
const title1=document.getElementById("title");
console.log(title1);

//querySelectorで取得
const title2=document.querySelector("#title");
console.log(title2);

//クラス名からElement取得
//getElementsByClassNameはすべてのコンテナ取得
const containers=document.getElementsByClassName("container");
console.log(containers);

//querySelectorは1つのコンテナのみ
const container=document.querySelector(".container");
console.log(container);

//button作成
const buttonEl=document.createElement("button");
//buttonラベル
buttonEl.textContent="HogeHogeeee";

//エリア1のdivタグ取得
const div1El=document.querySelector(".container");

//buttonタグ追加
div1El.appendChild(buttonEl);