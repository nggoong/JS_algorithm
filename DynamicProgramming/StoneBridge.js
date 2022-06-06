// 돌다리 건너기

(()=> {
    function solution(n) {
        let answer;
        let dy = new Array(n+1).fill(0);
        dy[0] = 1;
        dy[1] = 2;

        for(let i = 2; i < dy.length; i++) {
            dy[i] = dy[i - 2] + dy[i - 1];
        }

        answer = dy[dy.length-1];

        return answer;
    }

    console.log(solution(7));
})();