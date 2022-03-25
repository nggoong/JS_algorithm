// 큰 수 탐색
(()=> {
    function solution(n, arr) {
        let answer = [];
        let temp = -1;

        for(let i of arr) {
            if(i > temp) {
                answer.push(i);
            }
            temp = i;
        }
        return answer.join(' ');
    }

    console.log(solution(6, [7,3,9,5,6,12]));
})();