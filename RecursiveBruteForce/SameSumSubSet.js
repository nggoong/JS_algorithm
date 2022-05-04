// 합이 같은 부분집합
// 1. 전체 부분집합을 구하기
// 2. 구해진 부분집합마다 계산하기
(()=> {
    function solution(arr) {
        let answer = 'NO';
        let temp = [];
        let arrSum = arr.reduce((a, b) => a + b);
        let ch = new Array(arr.length + 1).fill(0);
        
        function DFS(v) {
            if(v > arr.length - 1) {
                for(let i = 0; i < ch.length - 1; i++) {
                    if(ch[i] === 1) {
                        temp.push(arr[i]);
                    }
                }
                if(temp.length) {
                    let sum = temp.reduce((a, b) => a + b);
                    if(sum === (arrSum - sum)) answer="YES";
                }
                console.log(temp.join(' '))
                temp = [];
            }
            else {
                ch[v] = 1;
                DFS(v + 1);
                ch[v] = 0;
                DFS(v + 1);
            }
        }
        DFS(0);
        return answer;
    }

    let arr=[1, 3, 5, 6, 7, 10];
    console.log(solution(arr));
})();