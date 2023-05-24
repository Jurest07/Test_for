import React from 'react'
import styles from './SideMenu.module.css'

const SideMenu = () => {
    return (
        <nav className={styles.wrapper_navigation}>
            <div id="user_avatar"></div>
            <span className={styles.user_full_name}>Мария Добренко</span>
            <a id="focus_point" href="#">Главная</a>
            <a href="#">Расписание</a>
            <a href="#">Мои курсы</a>
            <a href="#">Мои проекты</a>
            <a href="#">Кодревью</a>
            <a href="#">Записи уроков</a>
            <a href="#">Мессенджер</a>
            <a href="#">Каталог курсов</a>
            <a href="#">Мои бонусы</a>
            <a href="#">Сертификаты</a>
            <a href="#">Настройки</a>
        </nav>
    )
}

export default SideMenu