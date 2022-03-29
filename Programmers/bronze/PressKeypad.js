(()=> {
    function solution(numbers, hand) {
        let answer='';
        let centerLine = [2, 5, 8, 11];
        let currentL = 10;
        let currentR = 12;
        let distanceL = 0;
        let distanceR = 0;
        
        for(let i = 0; i < numbers.length; i++) {
            let value = numbers[i];
            if(numbers[i] === 0) value = 11;
            if(value === 1 || value === 4 || value === 7) {
                answer += 'L';
                currentL = value;
            }
            else if(value === 3 || value === 6 || value === 9) {
                answer += 'R';
                currentR = value;
            }
            else {
                if(centerLine.indexOf(currentR) !== -1) {
                    distanceR = Math.abs(value - currentR) / 3;
                }
                else distanceR = Math.abs(value + 1 - currentR ) / 3 + 1;

                if(centerLine.indexOf(currentL) !== -1) {
                    distanceL = Math.abs(value - currentL) / 3;
                }
                else distanceL = Math.abs(value -1  - currentL ) / 3 + 1;

                if(distanceL == distanceR) {
                    if(hand === 'right') {
                        answer += 'R';
                        currentR = value;
                    }
                    else {
                        answer += 'L';
                        currentL = value;
                    }
                }
                else if(distanceL > distanceR) {
                    answer += 'R';
                    currentR = value;
                }
                else if(distanceL < distanceR) {
                    answer += 'L';
                    currentL = value;
                }
            }
        }

        return answer;
    }

    console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]));
})();