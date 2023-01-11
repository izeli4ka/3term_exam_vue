<template>
    <div class="form-buy">
        <section id="buy" class="section3">
            <h2 class="h2-form">Заполните заявку на покупку нового авто</h2>
            <form action="https://httpbin.org/post" method="post">
                <fieldset class="registration_form">
                    <legend class="personal_information">Персональная информация</legend>
                    <div>
                        <input class="name_form" type="text" id="name" name="name" placeholder="Enter your name" required>
                        <label class="label" for="name">Имя Фамилия</label>
                    </div>
                    <div>
                        <input class="registration_email_form" type="email" name="email" id="email" placeholder="Enter your email" required>
                        <label class="label" for="email">Email</label>
                    </div>
                    <div>
                        <input class="phone_form" type="tel" name="phone_number" id="number" placeholder="Enter your phone number" required>
                        <label class="label" for="number">Номер телефона</label>
                    </div>
                    <div class="time">
                        <label class="convenient_time" for="time_m">Удобное для связи время:</label>
                        <input type="checkbox" name="time" id="time_m" value="morning">
                        <label class="time_label" for="time_m">Утро</label>
                        <input type="checkbox" name="time" id="time_a" value="afternoon">
                        <label class="time_label" for="time_a">День</label>
                        <input type="checkbox" name="time" id="time_e" value="evening">
                        <label class="time_label" for="time_e">Вечер</label>
                    </div>
                </fieldset>
                <div class="buttons_reset_send">
                    <v-btn
                        class="button_Reset"
                        color="white"
                        outlined
                        x-large
                        type="reset"
                        >Сбросить</v-btn>
                    <v-btn
                        class="button_to_send"
                        color="white"
                        outlined
                        x-large
                        type="submit"
                        >Отправить</v-btn>
                    <!-- <button class="button_Reset" type="reset" disabled>Reset</button>
                    <button class="button_to_send" type="submit">to send</button> -->
                </div>
            </form>
        </section> 
    </div>
</template>

<script>
export default {
 
};
</script>