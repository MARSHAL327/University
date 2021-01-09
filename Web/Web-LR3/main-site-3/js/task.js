let checkInput = inputValue => { return inputValue.trim() === "" ? true : false}

function generateFields(_num_fields) {
    for (let i = 0; i < _num_fields; i++) {
        let date = new Date();

        all_fields.insertAdjacentHTML("beforeend", 
        `<div class="grid">
            <div>
            <label for="num_fields">Дата измерения</label><br />
            <input name="today_day" class="check_input" value="${date.getFullYear() + "." + date.getDay() + "." + date.getMonth()}">
            <p class="error"></p>
            <br />
            </div>

            <div>
            <label for="num_fields">Время измерения</label><br />
            <input name="time_measure" class="check_input">
            <p class="error"></p>
            <br />
            </div>

            <div>
            <label for="num_fields">Значение измерения</label><br />
            <input name="value_measure" class="check_input">
            <p class="error"></p>
            <br />
            </div>
        </div>`
        );
    }

    all_fields.insertAdjacentHTML("beforeend", 
    `<button
        type="button"
        id="send_btn"
    >
        Отправить
    </button><br><br>`);

    send_btn.addEventListener("click", send);
}

function send() {
    let inputs = document.getElementsByClassName("check_input");
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].nextElementSibling.innerHTML = "";

        if( checkInput(inputs[i].value) === true ){
            inputs[i].nextElementSibling.innerHTML = "Введите поле!";
        }
    }
}