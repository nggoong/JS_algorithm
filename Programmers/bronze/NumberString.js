// 프로그래머스 문제  >> 2021 카카오 채용연계형 인턴쉽 숫자 문자열과 영단어
function solution(s) {
    var answer = [];
    let string = []; // 문자(알파벳)을 잠시 보관할 배열
    let alpha = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let strArr = s.split(''); // 받은 문자열을 배열로 전환하기

    // 배열 순회
    for(let i of strArr) {
        let temp;
        let tempIndex;
        // 형변환을 했는데 NOT A NUMBER가 나온다면 문자.
        if(isNaN(Number(i))) {
            string.push(i); // 알파벳 잠시 보관
            temp = string.join(''); // 배열을 문자열로 변경
            tempIndex = alpha.indexOf(temp); // 알파벳 배열에 존재하는지 확인

            // 알파벳 배열에 있다면
            if(tempIndex !== -1) {
                answer.push(tempIndex); // 그 인덱스를  그대로 answer배열에 push
                string = []; // 임시 보관 배열 초기화
            }
        }
        else {
            answer.push(i);
        }
    }
    answer = parseInt(answer.join(''));
    return answer;
}

console.log(solution('one4seveneight'));