(()=> {
    function solution(n, arr1, arr2) {
        let answer = [];
        for(let i = 0; i < n; i++) {
            if(arr1[i] === arr2[i]) answer.push('D');
            if((arr1[i] === 1 && arr2[i] === 2) || (arr1[i] === 2 && arr2[i] === 3) || (arr1[i] === 3 && arr2[i] === 1)) answer.push('B');
            else if((arr2[i] === 1 && arr1[i] === 2) || (arr2[i] === 2 && arr1[i] === 3) || (arr2[i] === 3 && arr1[i] === 1)) answer.push('A');
        }

        return answer;
    }

    let arr1 = [2,3,3,1,3];
    let arr2 = [1,1,2,2,3];
    console.log(solution(5 ,arr1, arr2))
})();