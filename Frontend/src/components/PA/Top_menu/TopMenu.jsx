import React from 'react'
import styles from './TopMenu.module.css'
import CompanyLogo from '../../Decorations/CL_logo/CompanyLogo'
import CompanyTitle from '../../Decorations/CL_title/CompanyTitle'
const TopMenu = ({outLink}) => {

    const logoStyle = {
        width: 'var(--IC_logo_width)',
        height: 'var(--IC_logo_height)',
        borderRadius: 'var(--IC_logo_border_radius)',
        borderWidth: 'var(--IC_logo_border_width)',
        marginLeft: 'var(--IC_logo_ml)',
        fontSize: 'var(--IC_logo_font_size)',
        lineHeight: '31px',
        color: 'white',
        borderColor: 'white',
    }

    const titleWrapperStyle = {
        marginLeft: 'var(--IC_logo_title_ml)',
        lineHeight: '42px',
        textAlign: 'center',
        flex: 'initial',
        color: 'var(--main_color)',
    }

    const titleTextStyle = {
        fontFamily: "Inconsolata",
        fontStyle: 'normal',
        fontWeight: '700',
        color: 'white',
        fontSize: 'var(--IC_logo_title_font_size)',
    }

    return (
        <div className={styles.header_menu}>
            <CompanyLogo 
                style={logoStyle}
            />
            <CompanyTitle
                wrapperStyle={titleWrapperStyle}
                textStyle={titleTextStyle}
            />
            <div className={styles.header_avatar}></div>
            <div className={styles.header_right}>
                <img className={styles.notific} src="/static/img/icons/notific_2.png" alt=""/>
                    <div className={styles.header_right_content}>
                        <a className={styles.chenge_lang} href="#">RU</a>
                        <a onClick={outLink} className={styles.exit_link} href="#">Выйти</a>
                    </div>
            </div>
        </div>
    )
}

export default TopMenu