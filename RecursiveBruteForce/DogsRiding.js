// 바둑이 승차

(()=> {
    function solution(num, arr) {
        let answer = 0;
        let check = new Array(arr.length).fill(0);
        let temp = [];
        
        function DFS(index) {
            if(index > arr.length) {
                let sum;
                for(let i = 0; i < check.length; i++) {
                    if(check[i]) {
                        temp.push(arr[i]);
                    }
                }
                if(temp.length) {
                    sum = temp.reduce((a, b) => a + b);
                    if(sum <= num) {
                        if(answer < sum) answer = sum;
                    }
                }

                temp = [];
            }
            else {
                check[index] = 1;
                DFS(index + 1);
                check[index] = 0;
                DFS(index + 1);
            } 

        }

        DFS(0);
        return answer;
    }

    let arr=[81, 58, 42, 33, 61];
    console.log(solution(259, arr));
})();