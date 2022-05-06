// 팩토리얼

(() => {
    function solution(n) {
        let answer;

        function factorial(num) {
            if(num === 1) return 1;
            else return num * factorial(num - 1);
        }
        answer = factorial(n);
        return answer;
    }
    console.log(solution(5));
})();

// 조합수
(()=> {
    function solution(n, r) {
        let answer;

        function DFS(n, r) {
            if(n===r || r === 0) return 1;
            else return DFS(n-1, r-1) + DFS(n-1, r);
        }

        return answer;
    }
})();