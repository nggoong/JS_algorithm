(()=> {
    function solution(n, arr) {
        let answer = 1;
        let maxTall = arr[0];
        
        for(let i = 1; i<n; i++) {
            if(maxTall < arr[i]) {
                answer++;
                maxTall = arr[i];
            }
        }

        return answer;
    }

    let arr = [130,135,148,140,145,150,150,153]

    console.log(solution(8, arr));
})();