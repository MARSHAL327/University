function resetb() {
    window.alert("reset");
    $("input[name='fio']").css("background-color",  "#CFF4D2");
    $("input[name='birthday']").css("background-color",  "#CFF4D2");
    $("input[name='phone']").css("background-color",  "#CFF4D2");
    $("input[name='replyto']").css("background-color",  "#CFF4D2");
    $("input[name='message']").css("background-color",  "#CFF4D2");
    
}
 
function validate_form() {
    var valid = true;
    if (document.contact.pol[0].checked === false && document.contact.pol[1].checked === false && valid === true) {
        valid = false;
    }
    if (validate_name('ErName') === false)
        valid = false;
    if (validate_date("birthday").value === "") {
        document.getElementById("birthday").style.backgroundColor = "#DF3F46";
        valid = false;
    }
    if (validate_email('ErMail') === false)
        valid === false;
    if (validate_message() === false)
        valid === false;
    if (validate_phone('ErPhone') === false)
        valid = false;
 
    if (valid === false) {
        window.alert("Поля не заполнены или заполнены неверно. Незаполненные отмечены красным.")
    }
    return valid;
}
 
function hideHints() {
    for (var i = 0; i < hideHints.arguments.length; i++) {
        document.getElementById(hideHints.arguments[i]).innerHTML = "";
    }
}
 
var hids = ['ErName', 'ErMail', 'ErPhone'];
var hints = ['ФИО должно содержать 3 слова"', 'Например, name@domen.ru', 'Номер начинается на 7 или 3. Например, 79781122334'];
 
function validate_name(hint) {
    var regExp = /^[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+$/;
    if (!(regExp.test($('[name=fio]').val()))) {
       $("#hint").css("color","#F2A490");
       $('[name=fio]').css("background-color","#F2A490");
       $("#hint").html(" hints[hids.indexOf(hint)]");
        return false;
    } else {
        $('[name=fio]').css("background-color","#CFF4D2");
        $("#hint").css("background-color","#F2A490");
        $("#hint").html("");
        return true;
    }
}
 
function validate_date() {
    if ($("#birthday").val() === "") {
        $('[name=birthday]').css("background-color","#CFF4D2");
        valid === false;
    }
}
 
function validate_email(hint) {
    var regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if (!regExp.test(document.contact.replyto.value)) {
        $("#hint").css("color","#F2A490");
        $('[name=replyto]').css("background-color", "#F2A490");
        $("#hint").html(" hints[hids.indexOf(hint)]");
        return false;
    } else {
        $('[name=replyto]').css("background-color","#CFF4D2");
       
         $("#hint").css("background-color","#F2A490");
         $("#hint").html("");
        return true;
    }
}
 
function validate_phone(hint) {
    var regExp = /^[73]\d{8,10}$/;
    if (!(regExp.test(document.contact.phone.value))) {
        $('[name=phone]').css("background-color","#F2A490");
        $("#hint").html(" hints[hids.indexOf(hint)]");
        $("#hint").css("color","#F2A490");
        return false;
    } else {
        $('[name=phone]').css("background-color","#CFF4D2");
        $("#hint").css("background-color","#F2A490");
        $("#hint").html("");
        return true;
    }
 
 
}
 
function validate_message() {
    if ($('[name=message]').val() === "") { 
        $('[name=message]').css("background-color","#F2A490");
        return false;
    } else {
         $('[name=message]').css("background-color","#CFF4D2");
        return true;
    }
}
 

$('.input_wrapper').hover(function(){
    $(this).find(".popup").toggleClass("active")
});
 
//МОДАЛЬНОЕ ОКНО
$(document).ready(function() {
    $('.modal').click(function(event) {
        event.preventDefault();
        let this_modal = $(this);
 
        $('#overlay').fadeIn(400, // анимируем показ обложки
            function() { // далее показываем мод. окно
                $("#modal_close_YES").attr("type", this_modal.data("type"));
                $('#modal_form p').text(this_modal.data("pouptext"));
                $('#modal_form')
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });
});
 
    // закрытие модального окна
    $('#modal_close_YES, #overlay, #modal_close_NO').click(function() {
        $('#modal_form')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200, // уменьшаем прозрачность
 
                function() { // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });