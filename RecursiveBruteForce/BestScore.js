// 최대점수 구하기

(()=> {
    function solution(time, pscore, ptime) {
        let answer = -1;

        function DFS(L, sum, timeSum) {
            if(timeSum > time) return;
            if(L === ptime.length) {
                answer = Math.max(answer, sum);
            }
            else {
                DFS(L + 1, sum + pscore[L], timeSum + ptime[L]);
                DFS(L + 1, sum, timeSum);
            }
        }
        DFS(0, 0, 0);

        return answer;
    }
    let ps=[10, 25, 15, 6, 7];
    let pt=[5, 12, 8, 3, 4]
    console.log(solution(20, ps, pt));
})();