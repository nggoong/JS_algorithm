(()=> {
    function solution(m, arr){
        let answer=0;
        let start=end=0;
        let sum = arr[0];


        while(start < arr.length && end < arr.length) {
            if(sum === m) {
                answer++;
            }
            if(sum <= m){
                end++;
                sum += arr[end];
            }
            else if(sum > m) {
                sum-=arr[start];
                start++;
            }
        }

        return answer;
    }
    
    let a=[7, 6, 1, 6, 2, 0, 4, 2];
    console.log(solution(7, a));
})()