// 뒤집은 소수

(()=> {
    function isPrime(num) {
        if(num === 1) return false;
        else if(num === 2) return true;
        
        for(let i = 2; i < num / 2; i++) {
            if(num % i === 0) return false;
        }
        
        return true;
    }

    function solution(n, arr) {
        let answer=[];
        let temp;
        
        for(let i = 0; i < n; i++) {
            temp = Number(String(arr[i]).split('').reverse().join(''));
            console.log(temp);
            
            if(isPrime(temp)) {
                answer.push(temp);
            }
    }
    return answer;
}

    function solution2(n, arr) {
        let answer=[];

        for(let i of arr) {
            let res = 0;
            while(i) {
                let temp = i % 10;
                res = res * 10 + temp;
                i = parseInt(i / 10);
            }
            if(isPrime(res)) answer.push(res);
        }
    }

    console.log(solution(9, [32,55,62,20,250,370,200,30,100]));
})();



