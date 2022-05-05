// 동전 교환
(()=> {
    function solution(m, arr) {
        let answer = 100;
        let n = arr.length;


        function DFS(L, sum) {
            if(sum > m) return;
            if(L >= answer) return;
            if(sum === m) {
                answer = Math.min(answer, L);
            }
            else {
                for(let i = 0; i < n; i++) {
                    DFS(L + 1, sum + arr[i]);
                }
            }
        }
        DFS(0, 0);

        return answer;
    }

    
    let arr = [1, 2, 5];
    let maximum = 15;
    console.log(solution(maximum, arr));
})();