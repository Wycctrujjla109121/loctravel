import React from 'react';

//  STYLE
import s from './Message.module.scss'

const Message = () => {
    return (
        <form className={s.message}>
            <h2 className={s.message__title}>Напишите сообщение пользователю <span className={s.message__name}>Евгений Андреев</span></h2>
            <button className={s.message__close}></button>
            <textarea className={s.message__textarea} name="" id="" cols="30" rows="10" placeholder='Сообщение'></textarea>
            <div className={s.message__button}>
                <button className={s.message__send}>Отправить</button>
                <p className={s.message__cancel}>Отмена</p>
            </div>
        </form>
    );
};

export default Message;