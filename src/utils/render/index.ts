import type { CanvasPoints } from "./interfaces";

const canvas: null | HTMLCanvasElement = document.querySelector('.output-canvas');
const logs = document.querySelector('.output-text');
const width = 200
const height = 150
const outputArray: string[] = []

const clearOutputArray = () => {
    outputArray.length = 0;
}


export const addToOutput = (log: string) => {
    outputArray.push(`${log}<br>`);
}


export const renderOutputText = () => {
    if (logs) {
        logs.innerHTML = outputArray.join('');
    }
    clearOutputArray()
}
const ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext('2d');
if (ctx) {
    ctx.scale(1.95, 1.95)
    ctx.translate(-30,0)
}


export const drawInitCartesianSystem = () => {

    if (ctx) {
        ctx.clearRect(0, 0, width, height);
        //horizontal line
        ctx.beginPath();
        let j = 0
        while (j < width) {
            if (j % 10 === 0) {
                ctx.beginPath();
                ctx.moveTo(width / 4, j);
                ctx.lineTo(width / 4 + 5, j);
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
            j++
        }
        ctx.moveTo(0, height - 80);
        ctx.lineTo(width, height - 80);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        //vertical line
        ctx.beginPath();
        let i = 0
        while (i < width) {
            if (i % 10 === 0) {
                ctx.beginPath();
                ctx.moveTo(i, height - 80);
                ctx.lineTo(i, height - 75);
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
            i++
        }
        ctx.moveTo(width / 4, 0);
        ctx.lineTo(width / 4, height);
        ctx.stroke();
    }
}

export const drawSeparatorLine = (points: CanvasPoints[], line: string) => {
    if (ctx) {
        const sortedPoints = points.sort((a, b) => {
            if (a.color < b.color) return -1;
            if (a.color > b.color) return 1;
            return 0
        })
        const onlyTwoPoints = sortedPoints.filter((item, index) => {
            if (index === 0) return true;
            return item.color !== sortedPoints[index - 1].color;
        });

        ctx.beginPath()
        if (['OR', 'NOR'].includes(line)) {
            ctx.moveTo(onlyTwoPoints[0].x, onlyTwoPoints[0].y + 17)
            ctx.lineTo(5 * 100, 4.5 * 110)
        } else if (line === "AND") {
            ctx.moveTo(onlyTwoPoints[0].x, onlyTwoPoints[0].y + 7)
            ctx.lineTo(5 * 100, 4.5 * 110)
        } else {
            
        }
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
}
export const drawPoints = (points: CanvasPoints[]) => {
    if (ctx) {
        points.forEach(point => {
            ctx.beginPath();
            const x = (point.x / 20) * width - 40;
            const y = height + 10 - (point.y / 15) * height;
            ctx.arc(x, y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = point.color;
            ctx.fill();
        });

    }
};


