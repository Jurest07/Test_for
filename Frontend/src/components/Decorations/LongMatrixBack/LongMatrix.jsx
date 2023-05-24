import React, { useEffect, useRef } from 'react';
import styles from './LongMatrix.module.css';

const LongMatrix = ({selectColor}) => {
    const CHARACTERS = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const width = window.innerWidth;
        const height = window.innerHeight;
        let fone_color = selectColor;
        canvas.width = width;
        canvas.height = height;

        const fontSize = 16;
        const columns = [];
        const columnsCount = width / fontSize;

        for (let i = 0; i < columnsCount; i++) {
            columns.push({
                x: i * fontSize,
                y: Math.floor(Math.random() * height),
                fontSize: fontSize,
                canvasHeight: height,
                symbol: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
                color: '#009aad'
            });
        }

        function draw() {
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(0, 0, width, height);
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop < height){
                let relative = scrollTop/height;
                fone_color = `rgb(${45 - 45*relative}, ${29*relative+107}, ${154*relative+40})`
            }else if(scrollTop < height*2){
                let relative = scrollTop/height - 1;
                fone_color = `rgb(${255*relative}, ${119*relative + 136}, ${61*relative + 194})`
            }else{
                fone_color = 'white'; 
            }
            columns.forEach(column => {
                column.color = fone_color;
                ctx.fillStyle = column.color;
                ctx.fillText(column.symbol, column.x, column.y);
                column.y += Math.floor(Math.random() * 3) * column.fontSize;
                
                if (column.y > column.canvasHeight) {
                    column.y = 0;
                    column.symbol = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                }
            });
        }

        let intervalId = setInterval(draw, 50);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className={styles.matrix}></canvas>
    );
};

export default LongMatrix;
