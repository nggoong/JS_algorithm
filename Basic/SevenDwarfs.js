(()=> {
    function solution(arr) {
        let answer;
        let sum = 0;
        for(let i = 0; i<arr.length; i++) {
            sum = sum + arr[i];
        }
        console.log(sum);

        for(let i = 0; i<arr.length; i++) {
            for(let j = i + 1; j<arr.length; j++) {
                if((sum - (arr[i] + arr[j])) === 100) {
                    arr.splice(i, 1);
                    arr.splice(j, 1);
                    break;
                }
                break;
            }
        }

        answer = arr.sort(function(a, b) {
            return a - b;
        })
        
        return answer;
    }

    let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
    console.log(solution(arr));
    
})();