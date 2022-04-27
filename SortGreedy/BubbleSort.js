// 버블정렬

(()=> {
    function solution(arr) {
        let answer;
        let temp = 0;

        for(let i = 0; i < arr.length; i++) {
            for(let j = 1; j < arr.length - i; j++) {
                if(arr[j - 1] > arr[j]) {
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        answer = arr;

        return answer;
    }

    console.log(solution([13, 5, 11, 7, 23, 15]));
})();