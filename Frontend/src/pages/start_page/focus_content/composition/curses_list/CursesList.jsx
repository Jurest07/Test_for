import React, { useState, useMemo } from 'react';
import styles from './CursesList.module.css';
import HeaderContent from './HeaderContent/HeaderContent';
import HeaderSubmenu from './HeaderSubmenu/HeaderSubmenu';
import MainContent from './MainContent/MainContent';
import { coursesData } from './DataCurse';
import { startPage } from '../../../../../localizationData';
import convertStringToLayout from './switch_char_leng';

const CursesList = ({ selectLang, displayValue}) => {
    const [sortedValue, setSortedValue] = useState(1);
    const [queryRequest, setQueryRequest] = useState('');
    const subMenuPoints = [
        startPage.popular_courses[selectLang[0]],
        startPage.new[selectLang[0]],
        startPage.job_training[selectLang[0]],
        startPage.discounts[selectLang[0]],
    ];
    const sortedCourses = useMemo(() => {
        const query = queryRequest.toLowerCase();

        var filteredCourses = [...coursesData];
        if (queryRequest) {
            filteredCourses = filteredCourses.filter((course) => {
                const queryField = course.queryField.toLowerCase();
                const description1 = course.description[0].toLowerCase();
                const description2 = course.description[1].toLowerCase();
                
                const queryFieldSwitchLeng = convertStringToLayout(queryField);
                const description1SwitchLeng = convertStringToLayout(description1);
                const description2SwitchLeng = convertStringToLayout(description2);
                return (
                    queryField.includes(query) ||
                    description1.includes(query) ||
                    description2.includes(query) ||
                    queryFieldSwitchLeng.includes(query) ||
                    description1SwitchLeng.includes(query) ||
                    description2SwitchLeng.includes(query)
                );
            });
        }

        switch (sortedValue) {
            case 1:
                return filteredCourses.sort((a, b) => b.popularity - a.popularity);
            case 2:
                return filteredCourses.sort((a, b) => a.date - b.date);
            case 3:
                return filteredCourses.filter((course) => course.entity === 'profession');
            case 4:
                return filteredCourses.sort((a, b) => b.discount - a.discount);
            default:
                return filteredCourses;
        }
    }, [sortedValue, queryRequest, selectLang]);

    return (
        <section className={styles.section_wrapepr}>
            <div className={styles.inner_wrapepr}>
                <HeaderContent requestState={[queryRequest, setQueryRequest]} totalCountResult={sortedCourses.length} selectLang={selectLang} />
                <HeaderSubmenu data={subMenuPoints} setSortedValue={setSortedValue} />
                {sortedCourses.length ? (
                    <MainContent data={sortedCourses} selectLang={selectLang} displayValue={displayValue}/>
                ) : (
                    'Курсы не найдены'
                )}
            </div>
        </section>
    );
};

export default CursesList;
