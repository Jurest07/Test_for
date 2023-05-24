const bacgroundDiv = document.getElementById('animatedBackground');

export const animatedBacgroundCreate = () => {
    bacgroundDiv.style.display = 'Block';
    setTimeout(() => {
        bacgroundDiv.style.opacity = '1';
    }, 100);
}

export const animatedBacgroundDelete = () => {
    bacgroundDiv.style.opacity = '0';
    setTimeout(() => {
        bacgroundDiv.style.display = 'none';
    }, 1000);
}



const generateFunctionTransfer = (history, paths) => {
    animatedBacgroundDelete();
    const generateFunction = onePath => {
        return event => {
            event.preventDefault();
            window.onresize = null;
            animatedBacgroundCreate();
            setTimeout(function () {
                history(onePath, { replace: true });
            }, 1000);
            
        }
    }
    if (typeof paths === 'string') {
        return generateFunction(paths);
    } else {
        const buffer = [];
        for (let path of paths) {
            buffer.push(generateFunction(path));
        }
        return buffer;
    }
}

export default generateFunctionTransfer;