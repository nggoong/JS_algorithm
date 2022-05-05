// 중복 순열 구하기

(()=> {
    function solution(n, m) {
        let answer = [];
        let temp = new Array(m).fill(0);

        function DFS(L) {
            if(L === m) {
                answer.push(Array.from(temp));
            }
            else {
                for(let i = 1; i <= n; i++) {
                    temp[L] = i;
                    DFS(L + 1);
                }
            }
        }
        DFS(0)

        return answer;
    }

    console.log(solution(3, 2));
})();