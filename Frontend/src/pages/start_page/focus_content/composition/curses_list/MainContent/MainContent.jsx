import React, { useState } from 'react'
import styles from './MainContent.module.css'
import Course from './Course'
import Navigation from './Navigation'

const MainContent = ({ data, selectLang, displayValue }) => {

    const [namberCursesList, setNamberCursesList] = useState(1);

    const additionalStyleWrapper = {
        justifyContent: 'left',
    }

    const additionalStyleCourse = {
        marginBottom: '5vh',
    }

    const contentSlise = data.length > 4 ? data.slice((namberCursesList - 1) * 4, namberCursesList * 4) : data


    const content = contentSlise.map((course) => {
        return <Course
            displayValue={displayValue}
            data={course}
            selectLang={selectLang}
            additionalStyle={contentSlise.length < 4 ? additionalStyleCourse : {}}
        />
    })


    return (
        <div className={styles.wrapper} style={contentSlise.length < 4 ? additionalStyleWrapper : {}}>
            {content}
            {data.length > 4 && <Navigation
                totalPages={Math.ceil(data.length / 4)}
                activePage={namberCursesList}
                setNewNamber={setNamberCursesList}
            />}
        </div>
    )
}

export default MainContent