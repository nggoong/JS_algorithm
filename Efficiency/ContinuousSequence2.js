

(()=> {
    function solution(m, arr){
        let answer=0;
        let start=end=0;
        let sum = 0;
        while(end < arr.length) {
            if(sum === 0) {
                sum = arr[end];
            }
            else if(sum <= m){
                answer+=(end-start+1);
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
    
    let a=[1, 3, 1, 2, 3];
    console.log(solution(5, a));
})();