// 등수 구하기

(()=> {
    function solution(n, arr) {
        let answer = Array(n).fill(1);

        for(let i = 0; i< n; i++) {
            for(let j = 0; j < n; j++) {
                if(i == j) continue;
                else if(arr[i] < arr[j]) {
                    answer[i]++;
                }
            }
        }
        

        return answer;
    }

    let arr = [92,89,92,100,76];

    console.log(solution(5, arr));
})();