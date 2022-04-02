// 공통 원소 구하기
(()=> {
    function solution(arr1, arr2){
        let answer=[];
        for(let i = 0; i < arr1.length; i++) {
            for(let j = 0; j < arr2.length; j++) {
                if(arr1[i] === arr2[j]) answer.push(arr1[i]);
            }
        }

        return answer;
    }

    function solution2(arr1, arr2) {
        let answer = [];
        answer = arr1.filter(element => arr2.includes(element));

        return answer;
    }

    function solution3(arr1, arr2) {
        let answer = [];

        for(let i of arr1) {
            if(arr2.indexOf(i)!==-1) answer.push(i);
        }

        return answer;
    }

    // 투 포인터 알고리즘 풀이
    function solution4(arr1, arr2) {
        let answer = [];
        arr1.sort((a, b) => a - b);
        arr2.sort((a, b) => a - b);
        let p1=p2=0;
        
        while(p1 < arr1.length && p2 < arr2.length) {
            if(arr1[p1] < arr2[p2]) p1++;
            else if(arr1[p1] > arr2[p2]) p2++;
            else if(arr1[p1] === arr2[p2]) {
                answer.push(arr1[p1]);
                p1++;
                p2++;
            }
        }
        
        return answer;
    }
    
    let a=[1, 3, 9, 5, 2];
    let b=[3, 2, 5, 7, 8];
    console.log(solution(a, b));
    console.log(solution2(a, b));
    console.log(solution3(a, b));
    console.log(solution4(a, b));
})();