
let post = document.getElementById("firstPost"); 
let buybutton = document.getElementById("buybutton"); 
let bookBox = document.getElementById("postsBox");
let bookname = document.getElementById("textposg");
let booktext = document.getElementById("textposd");
let firstInput = document.getElementById("firstInput") 
let textim = document.getElementById("textim");
let inputname = document.getElementById("inputName");
let textmail = document.getElementById("textmail");
let inputmail = document.getElementById("inputMail");
let buybuttonreal=document.getElementById("buybuttonreal")
let avatar = [ 
    "https://img.freepik.com/premium-vector/cartoon-round-avatar-picture-vector-art-illustration_1056-4433.jpg", 
    "https://cdn-icons-png.flaticon.com/512/3665/3665909.png", 
    "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-2.jpg", 
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491841211.jpg?k=a53a1242bc91427412a9bf1673c2aef161e81b77310a134f8d921b459328b119&o=&hp=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8j27pjkA9sycgOD1UAA-SEcSKe8CKiq6gipdC-yW-euiGRexanqmA5rBHcJxof7cyHo&usqp=CAU", 
    "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png" 
];

function first() {
    let text = firstInput.value
    if (text=="Гарри"||text == "Гарри Поттер"|| text == "гарри" || text == "Поттер"||text=="Гарри Поттер и филосовкий камень") {
        bookname.innerHTML="Джоан Роулинг"
        booktext.innerHTML = "Гарри Поттер и филосовкий камень";
        buybutton.innerHTML = "4$";
        imgpost.setAttribute("src", "https://avatars.mds.yandex.net/i?id=604223716f3a9b0463d9543c6fc9da8bdbac0e0c-8899294-images-thumbs&n=13");
        imgdude.setAttribute("src", "https://avatars.mds.yandex.net/get-mpic/5139700/img_id1509962501535128170.jpeg/orig"); 
    }
    if(text=="Хоббит"||text=="хоббит"||text=="Туда и обратно"||text=="Хоббит или туда и обратно"){
        bookname.innerHTML="Джон Толкин"
        booktext.innerHTML = "Хоббит или туда и обратно";
        buybutton.innerHTML = "6$";
        imgpost.setAttribute("src", "https://avatars.mds.yandex.net/i?id=74da04d8a4cca31bfd9fc40ad388735f511e9b20-8194355-images-thumbs&n=13");
        imgdude.setAttribute("src", "https://mywishboard.com/thumbs/wish/o/n/i/600x0_emmcbhgfvrirkrxi_jpg_88e3.jpg"); 
    }
    if(text=="война и мир"||text=="Война и мир"){
        bookname.innerHTML="Лев Толстой"
        booktext.innerHTML = "Война и мир";
        buybutton.innerHTML = "10$";
        imgpost.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/L._N._Tolstoy%2C_by_Prokudin-Gorsky_%28cropped%29.jpg/220px-L._N._Tolstoy%2C_by_Prokudin-Gorsky_%28cropped%29.jpg");
        imgdude.setAttribute("src", "https://sun9-30.userapi.com/impg/f4am5FkX5G5fj5dybqtEcg4LGLRsMPKYA3c8ng/nfNixNjPm_0.jpg?size=600x600&quality=95&sign=3cd3466121139f51659cdc73a5c2cf5f&c_uniq_tag=NFRoTzjEj9H1deEThTcszq_U8LSjHfSgM78gh-HOmRs&type=album"); 
    }
}
function kupi(){
    text =firstInput.value
    if(buybutton.innerHTML != ""){
        textim.innerHTML ="Имя фамилия*";
        textmail.innerHTML ="Почта*";
        buybuttonreal.innerHTML = "Отправить";
    }
}