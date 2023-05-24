import React, { useEffect, useRef } from 'react';
import styles from './Matrix.module.css';

const Matrix = () => {
    const CHARACTERS = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const width = window.innerWidth;
        const height = window.innerHeight;

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

            columns.forEach(column => {
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

export default Matrix;
