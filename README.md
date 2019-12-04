# codesquad_1204
 codesquad_levelTest_Minji
    잦은 야근과 주말출근으로 생각보다 많은 양을 구현하지 못해 아쉽습니다ㅠㅠ
    12월 퇴사 후 마스터즈 코스로 집중하여 공부해보고싶습니다..!
    
# 1단계 관련 함수 _ game.js
## game()
    시작 버튼 클릭 시, "첫 번째 타자가 타석에 입장했습니다." 문구와 함께 게임 메인함수 ranN()를 실행합니다.

## ranN()
    스트라이크~안타를 랜덤으로 뽑아 게임을 진행하며, 3스트라이크 4볼에 대한 처리 및 3아웃 시 게임을 종료합니다.
    - 랜덤숫자를 randomNum 변수에 할당하여 type(스트라이크, 볼, 아웃, 안타)과 record를 p태그로 추가
    - record중, 스트라이크가 3회 누적될 경우 next()로 타자 변경 및 아웃+1
    - record중, 볼이 4회 누적될 경우 next()로 타자 변경 및 안타+1
    - randomNum으로 아웃, 안타가 될 경우 next()로 타자 변경
    - 3아웃으로 게임 종료 시, 최종 안타 수 출력

## next()
    타자 변경 출력 및 스트라이크, 볼 점수를 초기화합니다.

## recordPrint()
    record 배열의 점수를 화면에 출력합니다.

# 2단계 관련 함수 _writeList1.js, writeList2.js, printList.js
1팀/2팀 페이지를 나눠 입력받으며, 전반적인 소스는 동일
  ㄴ to do) 로딩 시 기 입력된 팀명, 선수정보가 있을 경우 input창에 자동으로 뿌려주도록 개선 필요

## teamList1()
    input으로 입력된 선수명, 타율을 ob1객체로 저장합니다.

## emptyValue()
    input입력값에 대하여 유효성 체크를 합니다.
    - 미입력 시 얼럿 노출 및 해당 input으로 포커싱
    - 숫자가 정상적으로 입력된 경우, rangeNumber()로 0.1<h<0.5 외 범위 입력 시 얼럿 노출
      ㄴ to do) 타율 input인 경우, 숫자만 입력가능하도록 onlyNumber()구현하였으나 소수점에 대한 처리가 필요하여 주석처리함

## save.addEventListener
    emptyValue, teamList1을 실행 후 입력된 ob1을 string으로 localStorage에 저장합니다.
      ㄴ to do) 유효하지 않은 입력값일 경우 로컬스토리지에 저장하지 않도록 처리 필요
      ㄴ to do) 유효성 체크 후 이상 없을 경우 alert('등록되었습니다') 처리 필요

## printList()
    localStorage에 저장된 값을 기준으로 선수명, 타율을 table내 td영역의 텍스트로 노출합니다.
    - '1. 선수정보 등록하기' 메뉴에서 미입력 시 빈 칸으로 보여짐
      ㄴ to do) 입력단 유효성체크 개선 필요, 현재 로컬스토리지에 빈 값이 들어가는 등 테이블이 틀어질 수 있는 요소가 있음

