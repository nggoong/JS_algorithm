(()=> {
    function solution(n, arr) {
        let answer = 0;

        for(let i = 0; i< arr.length; i++) {
            if((arr[i] - n) % 10 === 0) {
                answer = answer + 1;
            }
        }
        return answer;
    }

    let arr = [25,23,11,47,53,17,33];

    console.log(solution(3, arr));
})();