// 재귀함수와 스택프레임

(()=> {
    function solution(n) {
        function DFS(Level) {
            if(Level == 0) return;
            else {
                console.log(Level); // 3 2 1
                DFS(Level - 1);
                console.log(Level) //  1 2 3
            }
        }
        DFS(n)
    }

    console.log(solution(3));
})();