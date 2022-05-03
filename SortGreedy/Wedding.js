// 결혼식

(()=> {
    function solution(arr) {
        let answer = 0;
        let count = 0;
        let timeLine = [];

        for(let i of arr) {
            timeLine.push([i[0], 's']);
            timeLine.push([i[1], 'e']);
        }

        timeLine.sort((a, b) => {
            if(a[0] === b[0]) return a[1].charCodeAt(0) - b[1].charCodeAt(0);
            return a[0] - b[0];
        })

        for(let i of timeLine) {
            if(i[1] === 's') {
                count++;
                if(answer < count) answer = count;
            }
            else if(i[1] === 'e') {
                count--;
            }
        }

        return answer;
    }

    let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
    let arr2 = [[1, 3], [4, 8], [5, 9], [6, 10]];
    console.log(solution(arr));
    console.log(solution(arr2));
})();