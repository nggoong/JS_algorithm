// 순열 구하기

(()=> {
    function solution(m, arr) {
        let answer = [];
        let n = arr.length;
        let temp = new Array(m).fill(0);

        function DFS(L) {
            if(L === m) {
                if(temp[0] === temp[1]) return;
                answer.push(Array.from(temp));
            }
            
            else {
                for(let i = 0; i < n; i++) {
                    temp[L] = arr[i];
                    DFS(L + 1);
                }
            }
        }

        DFS(0);

        return answer;
    }

    console.log(solution(2, [3, 6, 9]));
})()