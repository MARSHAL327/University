class ImgAndTitle {
    constructor(img, title) {
        this.img = img;
        this.title = title;
    }
}

function LoadTableImg() {
    var tablePhotos = document.querySelector(".main_block");
    var imgsAndTitlesArray = [new ImgAndTitle("./" + "images/1.png", "Меркурий"),
        new ImgAndTitle("./" + "images/2.jpg", "Венера"),
        new ImgAndTitle("./" + "images/3.png", "Земля"),
        new ImgAndTitle("./" + "images/4.webp", "Марс"),
        new ImgAndTitle("./" + "images/5.webp", "Юпитер"),
        new ImgAndTitle("./" + "images/6.jpg", "Сатурн"),
        new ImgAndTitle("./" + "images/7.jpg", "Юпитер"),
        new ImgAndTitle("./" + "images/8.jfif", "Нептун"),
        new ImgAndTitle("./" + "images/9.webp", "Плутон"),
        new ImgAndTitle("./" + "images/10.jpg", "Ганимед"),
        new ImgAndTitle("./" + "images/11.jpg", "Ио"),
        new ImgAndTitle("./" + "images/12.jpg", "Европа"),
        new ImgAndTitle("./" + "images/13.jpg", "Калисто"),
        new ImgAndTitle("./" + "images/14.webp", "Солнце"),
        new ImgAndTitle("./" + "images/15.jpg", "Луна")
    ];

    CreateImgTable(tablePhotos, 3, 5, imgsAndTitlesArray);
}

function CreateImgTable(parent, rows, cols, imgesAndTitles) {
    var table = document.createElement("table");
    table.classList.add("photos");

    for (let i = 0; i < rows; ++i) {
        var trImg = document.createElement("tr");
        var trTitle = document.createElement("tr");
        trTitle.className = "name_photos";

        for (let j = 0; j < cols; ++j) {
            var td = document.createElement("td");

            var img = document.createElement("img");
            img.className = "img";
            img.src = imgesAndTitles[(i * cols) + j].img;
            img.alt = img.title = imgesAndTitles[(i * cols) + j].title;

            td.appendChild(img);
            trImg.appendChild(td);
        }

        for (let j = 0; j < cols; ++j) {
            var td = document.createElement("td");
            td.innerText = imgesAndTitles[(i * cols) + j].title;
            trTitle.appendChild(td);
        }

        table.appendChild(trImg);
        table.appendChild(trTitle);
    }
    parent.appendChild(table);

    var bigPhotoContainer = document.querySelector(".bigPhoto");
    for (let i of table.querySelectorAll("img")) {
        i.addEventListener("click", function() {
            var temp = document.createElement("img");
            temp.src = i.src;
            bigPhotoContainer.innerHTML = "";
            bigPhotoContainer.style.display = "block";
            bigPhotoContainer.appendChild(temp);
        });
    }

    bigPhotoContainer.addEventListener("click", function() {
        bigPhotoContainer.style.display = "none";
    }), false;
}

function CreateInterestingList(type_of_list) {
    var main_block = document.querySelector(".main_block");
    var n = arguments.length - 1;
    var list = document.createElement(type_of_list);

    for (let i = 1; i < n; ++i) {
        var a = document.createElement("a");
        var li = document.createElement("li");
        li.innerText = arguments[i];
        a.appendChild(li);
        a.href = "#art" + i;
        list.appendChild(a);
    }
    main_block.appendChild(list);

    for (let i = 1; i < n; ++i) {
        var articls = arguments[arguments.length - 1];
        CreatePart("art" + i, arguments[i], articls[i - 1]);
    }

    function CreatePart(id, title, text) {
        document.writeln("<br><br>");

        var h2Title = document.createElement("h2");
        h2Title.className = "title myanchor";
        h2Title.id = id;
        h2Title.innerText = title;
        main_block.appendChild(h2Title);

        document.writeln("<br>");

        var p = document.createElement("p");
        var h3 = document.createElement("h3");
        h3.innerText = text;
        p.appendChild(h3);
        main_block.appendChild(p);
    }
}

function ValidateForms() {
    var inputs = document.querySelectorAll("input[data-rules]");
    var buttonSend = document.querySelector("#submit");
    buttonSend.disabled = true;

    for (let i of inputs) {
        i.addEventListener("blur", function() {
            var valid = Validate(i);
            if (valid === "Valid") {
                i.style.backgroundColor = "lime";
                i.classList.add("valid");
                var id = i.id;
                var d = document.querySelector("label[for={id}]".replace("{id}", "invalid" + id));
                if(d !== null){
                    d.remove();
                }
            } else {
                i.style.backgroundColor = "red";
                i.classList.remove("valid");
                var id = i.id;
                var d = document.querySelector("label[for={id}]".replace("{id}", "invalid" + id));
                if(d === null || d.length < 1){
                    var label = document.createElement("label");
                    label.setAttribute("for", "invalid" + id);
                    label.innerText = " " + valid;
                    i.after(label);
                }
            }
            AnlockButton();
        });
    }

    function AnlockButton() {
        for (let i of inputs) {
            if (!i.classList.contains("valid")) {
                buttonSend.disabled = true;
                return;
            }
        }
        buttonSend.disabled = false;
    }

    function Validate(i) {
        let rule = i.dataset.rules;
        switch (rule) {
            case "fio":
                if (i.value.trim() === "" || i.value.split(" ").length < 3) {
                    return "Введите свое полное ФИО!!!";
                }
                return "Valid";
            case "birthday":
                if (i.value === "") {
                    return "Выберите дату рождения!!!";
                }
                return "Valid"
            case "mail":
                let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i.value);
                if (!valid) {
                    return "Введите email!!!";
                }
                return "Valid";
            case "tel":
                let valid1 = /^((\+3|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{9,11}$/.test(i.value);
                if (!valid1) {
                    return "Введите корректный телефон!!!";
                }
                return "Valid";
            case "otv2":
                if (i.value.trim() === "") {
                    return "Введите ответ!!!";
                }
                if (i.value.split(" ").length >= 20) {
                    return "Вы ввели больше 20 слов. Сократите ответ!!!";
                }
                return "Valid";
        }
    }
}

function InitMenu() {
    var menuItems = document.querySelector(".top_menu");
    menuItems = menuItems.querySelectorAll("a");
    if (document.title !== "Фотоальбом") {
        var subMenu = document.createElement("ul");
        subMenu.classList.add("subMenu");
        subMenu.style.display = "none";
        menuItems[2].querySelector("li").appendChild(subMenu);
        var temp = ["interests.html#art1", "interests.html#art2", "interests.html#art3"];
        var text = ["Хобби", "Фильмы", "Музыка"];
        for (let i = 0; i < temp.length; i++) {
            var a = document.createElement("a");
            var li = document.createElement("li");
            li.innerText = text[i];
            a.appendChild(li);
            a.href = temp[i];
            subMenu.appendChild(a);
        }
        menuItems[2].addEventListener("mouseover", function() {
            subMenu.style.display = "block";
        }, true);
        menuItems[2].addEventListener("mouseout", function() {
            subMenu.style.display = "none";
        }, true);
        subMenu.querySelectorAll("a").forEach(element => {
            element.addEventListener("mouseover", function() {
                element.style.backgroundColor = "red";
            }, true);
            element.addEventListener("mouseout", function() {
                element.style.backgroundColor = "";
            }, true);
        });
    }
    menuItems.forEach(element => {
        console.log(document.title + " " + element.innerText);
        console.log(document.title === element.innerText);
        if (document.title === element.innerText) {
            element.style.backgroundColor = "green";
        } else {
            element.addEventListener("mouseover", function() {
                element.style.backgroundColor = "red";
            }, true);
            element.addEventListener("mouseout", function() {
                element.style.backgroundColor = "";
            }, true);
        }
    });
}

function DateShow() {

    var time = document.createElement("h1");
    time.classList.add("time");
    document.querySelector('nav').appendChild(time);
    Tick();
}

function Tick() {
    var time = document.querySelector(".time");
    var date = new Date();

    var data = date.getDate();
    var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа",
        "Сентября", "Октября", "Ноября", "Декабря"
    ];
    var month = months[date.getMonth() ];

    var year = date.getFullYear();

    data = data < 10 ? "0" + data : data;
    year = year < 10 ? "0" + year : year;

    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    time.innerText = data + " " + month + " " + year + " | " + hours + ":" + minutes + ":" + seconds;

    setTimeout("Tick()", 1000);
}

function GenerateBirthday() {
    var calendar = document.querySelector(".birthdayTable");
    var contaynerDays = document.querySelector("#days");

    var inputBirthday = document.querySelector("#birthday");
    var inputMonth = document.querySelector("#month");
    var inputYear = document.querySelector("#year");

    inputBirthday.value = "01" + "." + "01" + "." + 2001;

    inputBirthday.addEventListener("click", function() {
        calendar.style.display = "block";
        GenerateDays(inputMonth.value - 1, inputYear.value);
    });

    inputMonth.addEventListener("change", function() {
        GenerateDays(inputMonth.value - 1, inputYear.value);
    });

    inputYear.addEventListener("change", function() {
        GenerateDays(inputMonth.value - 1, inputYear.value);
    });

    function GenerateDays(month, year) {

        contaynerDays.innerHTML = "";

        var date = new Date(year, month, 1);

        for (let i = 0; i < date.getDay() - 1; i++) {
            var day = document.createElement("div");
            day.className = "day";
            var h2 = document.createElement("h2");
            h2.innerText = "1";
            h2.style.color = "black";
            day.appendChild(h2);
            contaynerDays.appendChild(day);
        }

        for (let i = 0; i < GetMonthDays(month, year); i++) {
            var day = document.createElement("div");
            day.className = "day";
            var h2 = document.createElement("h2");
            h2.innerText = (i + 1).toString();
            day.appendChild(h2);
            contaynerDays.appendChild(day);
        }

        var arr = contaynerDays.querySelectorAll("div");

        for (let i = date.getDay() - 1; i < GetMonthDays(month, year) + date.getDay() - 1; i++) {
            arr[i].addEventListener("click", function() {
                inputBirthday.value = ((arr[i].innerText < 10) ? "0" + arr[i].innerText : arr[i].innerText) +
                    "." + ((month + 1) < 10 ? "0" + (month + 1) : (month + 1)) + "." + year;
                calendar.style.display = "none";
            });
        }

        for (let i = 0; i < 42 - date.getDay() + 1 - GetMonthDays(month, year); i++) {
            var day = document.createElement("div");
            day.className = "day";
            var h2 = document.createElement("h2");
            h2.innerText = "1";
            h2.style.color = "black";
            day.appendChild(h2);
            contaynerDays.appendChild(day);
        }
    }

    function GetMonthDays(month, year) {
        return 32 - new Date(year, month, 32).getDate();
    }
}

function GenerateHistory(){
    var tableHistory = document.createElement("table");
    tableHistory.className = "border_table";
    var pageItems = document.querySelectorAll(".top_menu > a");

    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var tdTitle1 = document.createElement("td");
    tdTitle1.innerText = "История текущего сеанса";
    var tdTitle2 = document.createElement("td");
    tdTitle2.innerText = "История за все время";
    tr2.appendChild(tdTitle1);
    tr3.appendChild(tdTitle2);
    tr1.appendChild(document.createElement("td"));
    for (let i of pageItems) {
        var td = document.createElement("td");
        td.innerText = i.innerText;
        tr1.appendChild(td);
        
        var td1 = document.createElement("td");
        td1.innerText = get_cookie(i.innerText);
        tr2.appendChild(td1);

        var td2 = document.createElement("td");
        var locHistory = localStorage.getItem("localHistory");
        if(locHistory == null){
            td2.innerText = "NaN";
        }else{
            var start = locHistory.indexOf(i.innerText);
            if(start === -1){
                td2.innerText = "NaN";
            }else{ 
                var valueStart = locHistory.indexOf("=", start);
                var valueEnd = locHistory.indexOf(";", valueStart);
                var ds = locHistory.slice(start, valueEnd);
                var value = locHistory.slice(valueStart+1, valueEnd);
                td2.innerText = value;
                tr3.appendChild(td2);
            }
        }
    }
    tableHistory.appendChild(tr1);
    tableHistory.appendChild(tr2);
    tableHistory.appendChild(tr3);
    document.querySelector(".main_block").appendChild(document.createElement("br"));
    document.querySelector(".main_block").appendChild(document.createElement("br"));
    document.querySelector(".main_block").appendChild(document.createElement("br"));
    document.querySelector(".main_block").appendChild(tableHistory);
}

function AddToHistory(){
    var locHistory = localStorage.getItem("localHistory");
    var glbalHistory = document.cookie;
    var value = get_cookie(document.title);
    if(value === null){
        set_cookie(document.title, 1);
    }else{
        set_cookie(document.title, value - 0 + 1);
    }
    if(locHistory != null){
        var start = locHistory.indexOf(document.title);
        if(start === -1){
            locHistory += document.title + "=" + 1 + ";";
            localStorage.setItem("localHistory", locHistory);
        }
        var valueStart = locHistory.indexOf("=", start);
        var valueEnd = locHistory.indexOf(";", valueStart);
        var ds = locHistory.slice(start, valueEnd);
        var value = locHistory.slice(valueStart+1, valueEnd);
        var newValue = value - 0 + 1;
        var newDs = ds.replace(value, newValue);
        locHistory = locHistory.replace(ds, newDs);
        localStorage.setItem("localHistory", locHistory);
    }else{
        locHistory = "";
        locHistory += document.title + "=" + 1 + ";";
        localStorage.setItem("localHistory", locHistory);
    }
}

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if (results)
    return (unescape (results[2]));
  else
    return null;
}

function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure ){
    var cookie_string = name + "=" + escape (value);
    if (exp_y){
        var expires = new Date ( exp_y, exp_m, exp_d );
        cookie_string += "; expires=" + expires.toGMTString();
    }
    if (path)
        cookie_string += "; path=" + escape (path);
    if (domain)
        cookie_string += "; domain=" + escape (domain);
    if (secure)
        cookie_string += "; secure";
    
    document.cookie = cookie_string;
}