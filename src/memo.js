
//追加ボタン押したときの関数
const onClickAdd=()=>{
    //テキストボックスのElement取得
    const textEl=document.getElementById("add-text");
    
    //なぜvalueを付けるか
    console.log(textEl);

    //テキストボックスの値取得
    const text=textEl.value;

    //テキストボックス初期化
    textEl.value="";

    //liタグ生成(list itemの略)
    const li=document.createElement("li");

    //divタグ生成
    const div=document.createElement("div");

    //pタグ生成(テキストボックスの文字設定)
    const p=document.createElement("p");
    p.textContent=text;

    //削除ボタン生成
    const button=document.createElement("button");
    button.textContent="削除";

    //削除ボタンの動作
    button.addEventListener("click",()=>{
        //削除対象のli(行)を取得
        //closestは親要素に一致する文字列を探す
        const deleteTarget=button.closest("li");

        //上で特定したターゲット削除
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    //divタグ配下にpタグとbuttonタグを設定
    div.appendChild(p);
    div.appendChild(button);

    //liタグ配下に上のdivタグ設定
    li.appendChild(div);

    //メモ一覧リストに上のliタグ設定
    document.getElementById("memo-list").appendChild(li);
};

//追加ボタンを押したときにonClickAdd関数を実行する
document.getElementById("add-button").addEventListener("click",()=>onClickAdd());
