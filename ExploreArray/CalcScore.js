(()=> {
    function solution(n, arr) {
        let answer = 0;
        let prev = 1;
        let count = 0;

        for(let i = 0; i < n; i++) {
            if(arr[i] === 1) {
                prev = 1;
                if(prev === 1) count++;
                answer = answer + count;
            }
            else if(arr[i] === 0) {
                prev = -1;
                count = 0;
            }
        }

        return answer;
    }
    let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
    console.log(solution(10, arr));
    



    function solution2(n, arr) {
        let answer = 0;
        let count = 0;

        for(let i of arr) {
            if(i === 1) {
                count++;
                answer = answer + count;
            }
            else if(i === 0) {
                count = 0;
            }
        }

        return answer;
    }

    console.log(solution2(10, arr));

})();