import React from 'react';
import styles from './Navigation.module.css'

const Pagination = ({ totalPages, activePage, setNewNamber }) => {
    const ellipsis = '...';
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 3;
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }
        else {
            pageNumbers.push(1);
            let start = Math.max(activePage - 2, 2);
            let end = Math.min(activePage + 2, totalPages - 1);
            if (start > 2) {
                pageNumbers.push(ellipsis);
            }
            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }
            if (end < totalPages - 1) {
                pageNumbers.push(ellipsis);
            }
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div className={styles.container}>
            <span
                key={0}
                className={styles.pageNumber}
                onClick={() => {
                    if (activePage !== 1) {
                        setNewNamber(activePage - 1);
                    }
                }}
            >
                {'<'}
            </span>
            {getPageNumbers().map((pageNumber, index) => (
                <span
                    key={index + 1}
                    className={`${styles.pageNumber} ${pageNumber === activePage ? styles.active : ''}`}
                    onClick={
                        () => {
                            setNewNamber(
                                pageNumber === ellipsis
                                    ? (
                                        activePage < 5
                                            ? Math.ceil(totalPages / 2)
                                            : (activePage < totalPages - 3) && (index === 1)
                                                ? Math.ceil(activePage / 2) - 1
                                                : (activePage < totalPages - 3) 
                                                    ? Math.ceil((totalPages + activePage) / 2) + 1
                                                    : Math.round(activePage / 2)
                                    )
                                    : pageNumber
                            )
                        }
                    }
                >
                    {pageNumber}
                </span>
            ))}
            <span
                key={totalPages + 1}
                className={`${styles.pageNumber} ${activePage === totalPages ? styles.disabled : ''}`}
                onClick={() => {
                    if (activePage !== totalPages) {
                        setNewNamber(activePage + 1);
                    }
                }}
            >
                {'>'}
            </span>
        </div>
    );
};

export default Pagination;
