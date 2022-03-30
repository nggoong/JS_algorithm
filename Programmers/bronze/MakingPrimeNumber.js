// 소수 만들기

(()=> {
    function isPrime(num) {
        if(num === 2) return true;
        
        for(let i = 2; i < num/2; i++) {
            if(num % i === 0) return false;
        }
        
        return true;
    }
    
    function solution(nums) {
        var answer = 0;
        nums = nums.sort((a, b) => a - b);
        
       for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
            if (isPrime(nums[i] + nums[j] + nums[k])) answer++;
          }
        }
      }
        
        return answer;
    }

    console.log(solution([1,2,7,6,4]));
})();