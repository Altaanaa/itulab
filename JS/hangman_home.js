//tovch oruulah
const useg = "абвгдеёжкзийклмноөпрстуүфхцчшщъыьэюя";
document.getElementById("keyboard").insertAdjacentHTML("beforeend", useg.split("").map(j => "<button class='button' onclick='send(`" + j + "`)'>" + j + "</button>").join(""));
//asuult, hariult
var asuult = ["Саруулын ээж 3 хүүхэдтэй, хоёрыг нь Номин, Намуун гэдэг. Гурав дах хүүхдийг нь хэн гэдэг вэ?","Эверест уулыг олж нээхээс өмнө ямар уулын оргил дэлхий дээрх хамгийн өндөр байсан бэ?","2 залхуу зөвхөн нэг хүнийг зөөх чадалтай завиар гол гатлах болжээ. Гэсэн ч тэд 2-уул амжилттай гаталж чадсан. Хэрхэн гатлах вэ?","Олсыг юунаас гаргаж авдаг вэ?","Олон удаа барих тусам улам олон үлдэнэ. Энэ юу вэ?","Намайг хоолонд зориулж авдаг ч хэзээ ч идддэггүй.","Ямар хотод Чилийн 1/3, Гондурасын 1/3 байдаг вэ?"];
var asuultbox;
var hariult = ["саруул","эверест","өөр эрэг дээр байсан","ургамал","хурууны хээ","таваг","чикаго"];
var dugaar;
var ami = 5;
//build
function start() {
    dugaar = Math.floor(Math.random() * asuult.length);
    document.getElementById("question").innerHTML = asuult[dugaar];
    asuultbox = new Array(hariult[dugaar].length).fill("_");
    document.getElementById("answer").innerHTML = asuultbox.join(" ");
}
start();
//shalgah
function send(useg) {
    var zovEseh = 0;
    for(var i = 0; i < hariult[dugaar].length; i++) {
        if(useg == hariult[dugaar][i] && asuultbox[i] == "_") {
            asuultbox[i] = useg;
            document.getElementById("answer").innerHTML = asuultbox.join(" ");
            if(asuultbox.indexOf("_") == -1) {
                document.getElementById("question").innerHTML = 'Та яллаа💖!';
                document.getElementById("answer").innerHTML = '3 сек дараа автоматаар refresh хийх гэж байна...';
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
            zovEseh = 1;
            break;
        }
    }
    if(zovEseh == 0) {
        ami--;
        document.getElementById("life").innerHTML = ami;
        document.getElementById("man").src = "./img/" + (5 - ami) + ".png";
    }
    if(ami == 0) {
        document.getElementById("question").innerHTML = 'Та хожигдлоо😥!';
        document.getElementById("answer").innerHTML = '3 сек дараа автоматаар refresh хийх гэж байна...';
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}