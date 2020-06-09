<p align="center">
<img src="https://user-images.githubusercontent.com/21411732/77502374-0ec68200-6e9e-11ea-84e1-23aee705d1af.png" >
</p>
<p align="center">RoooM</p>

**RoooM** - Capstone Design Project, 2020 <br/>
[**https://kookmin-sw.github.io/capstone-2020-20/**](https://kookmin-sw.github.io/capstone-2020-20/)

***


# 1. 프로젝트 소개

## 프로젝트 목표

2018년 한 잡지에서 대학생을 대상으로 한 설문에 따르면 80%의 설문자가 **팀(Team) 활동**을 경험했고, 평균 3개의 팀 활동을 동시에 진행했다고 응답했다. 대학생들은 개인 활동에서 벗어나 여러 사람과의 소통이 필요하고, 그들과 협력을 해야 하는 것이 자연스럽게 의무화되고 있다. 이러한 팀 활동에 참여하는 학생들은 '개인과 개인', '개인과 단체' 그리고 '단체와 단체' 사이의 활동 일정을 모두 조절해야 하고 그것이 쉽지 않음을 느끼고 있다. 또한, 적절한 업무 분담에 대한 어려움 그리고 팀 활동 무임승차와 같은 문제들이 발생하고 있다. 

본 프로젝트 'RoooM'은 국민대학교 소프트웨어융합대학 소프트웨어학부 학생들이 'Team-Play'를 진행할 때, 관련 업무를 효율적으로 진행하고 관리할 수 있도록 하는 '웹 서비스(Web Service)' 개발을 목표로 한다. 그리고 추가로 팀 활동에서 발생하는 문제들의 해결책을 제시할 수 있는 기능들을 개발하여 추가하고자 한다. 프로젝트의 이름인 'RoooM'은 'Room : 방, 공간'이라는 것에서 영감을 얻었다. 이는 사용자에게 가상의 공간을 제시해준다는 의미를 가진다. 사용자가 'room'이라는 친숙한 단어에 거리감을 느끼지 않아 접근하기 쉬워지는 것이 프로젝트의 첫 시작이며 또, 'room'처럼 활용도가 높아지기를 바라는 의미도 가지고 있다. 

이처럼 웹 서비스 'RoooM'의 개발 목표 중 비중이 높은 것은 '친숙함'이다. 아무리 좋은 기능이 넘친다고 하더라도 사용자가 접하기 쉽지 않거나, 사용하기 어렵다면 좋은 서비스가 될 수 없다고 생각했다. 그래서 우선 편의성과 쉬운 접근성을 갖추기 위해 전화번호나 주민등록번호와 같은 개인정보 등이 아닌, 국민대학교 종합정보시스템과의 연동을 계획하고 있다. 학교 측 '로그인 API'를 받아 국민대학교 학생이라면 누구나 간편하게 사용할 수 있게 하는 것이 취지이다. 이는 더불어 실제 대학 수업의 팀 활동에서도 활용될 수 있는 가능성을 만들어줄 것이다. 

다음으로는 '효율성'이다. 하나의 팀 활동 안에서는 집중적인 활동을 해야 하고 또 그것이 각각 여러 개로 늘어났을 때, 이들을 효율적으로 운영하고 진행할 수 있어야 한다. 그러나 업무 관리 차원에서 복합적인 이벤트가 발생한다면, 이를 적절하게 배분하고 해결하는 것이 큰 어려움이 될 수 있다. 이러한 문제를 해결하는 것에 도움이 되는 서비스를 제공하고자 한다. 

마지막으로 '차별성'이다. 이는 우리 프로젝트의 핵심이라고 할 수 있다. 기존의 다른 협업 툴과의 차별화된 기능 제공이 필요하다. 개발 초기 당시 계획하였던 사용자 target이 일반인에서 소프트웨어학부 학부생으로 특정화된 만큼 이에 따른 차별화된 기능이 필요하다. 이에 대한 아이디어와 개발 여부에 대한 것은 지속해서 진행할 예정이다.




## 프로젝트 개발 도구 계획도
![KakaoTalk_20200315_161750692](https://user-images.githubusercontent.com/21411732/77322149-9dc88280-6d56-11ea-85bd-d31b47489a24.png)

## 프로젝트 시스템 구조
  ![시스템 구조](https://user-images.githubusercontent.com/21411732/79990747-603d4d80-84ec-11ea-9fdd-92c7a44b50a1.png)
  

  
***
<br/><br/>
# 2. Abstract

**The project 'RoooM' is to develop a web service that provides a 'space' for people involved in team activities.**

The goal is to provide teams with free, yet highly available services to multiple users, while also improving team efficiency.
- Free 'room' creation and member organization - Make it simple and easy between teams without complicated procedures

- Highly usable functions - Real-time chat (file sharing, mention function, department-specific chat), meeting place recommendation (optimized place tracking through Google Maps), scheduling and coordination among members

- 'Friendly' service that can gather without unnecessary personal information, provides services with high utilization and accessibility, and does not want a high level for users



***
<br/><br/>
# 3. 팀 소개

### 지도 교수님 - 윤성혜 교수님 :kr:

### 팀 구성

Front-end | back-end
----------|---------
윤수민|한준호
이지훈|허민
<br/>

<img align="left" width="15%" height="15%" src="https://user-images.githubusercontent.com/21411732/77316722-4540b780-6d4d-11ea-80e8-7937acef284b.jpg">

### 허민  (팀장) :kr:
 > * 학번 : 20153241 <br/>
 > * 역할 : 팀장 및 Web back-end(Spring Boot with REST API, mysql, JDBC, JPA) 담당
 > * 이메일 : huhmin9094@kookmin.ac.kr
<br/>

<img align="left" width="15%" height="15%" src="https://user-images.githubusercontent.com/48545651/77557038-9cd15580-6efc-11ea-81bd-5d7584e38719.jpg">

### 윤수민 :kr:

> * 학번 : 20162791 
> * 역할 : Front-end(React)
> * 이메일 : sumin9497@gmail.com
<br/>

<img align="left" width="15%" height="15%" src="https://user-images.githubusercontent.com/12928638/77510075-48ed4f00-6eb1-11ea-999e-59a554f7ca00.jpg">

### 이지훈 :kr:

> * 학번 : 20153215
> * 역할 : Front-end(React)
> * 이메일 :wlgnssla311@gmail.com
<br/>

<img align="left" width="15%" height="15%" src="https://user-images.githubusercontent.com/58366036/77721070-1c5e4200-702d-11ea-8cbc-9082ef56dc2f.jpg">

### 한준호 :kr:

> * 학번 : 20153239
> * 역할 : Web back-end(Spring Boot with REST API, mysql, JDBC, JPA) 담당
> * 이메일 : karryone@kookmin.ac.kr

***
<br/><br/>
# 4. 소개 영상 (계획 발표 영상)

[![Watch the video](https://user-images.githubusercontent.com/21411732/77678654-cf4e8180-6fd4-11ea-8d3b-c7ce10a1f699.png)](https://youtu.be/XjlExIf-6DQ)

***
<br/><br/>

# 5. 1차 중간 발표 영상 (중간 자문 평가)

[![제목 없음](https://user-images.githubusercontent.com/12928638/80109903-0eaec480-85b9-11ea-8433-7a7fde8ba8fa.png)](https://www.youtube.com/watch?v=hzdG9PkrjIs)

***
<br/><br/>

# 6. 2차 중간  영상 (중간 자문 평가)

[![main](https://user-images.githubusercontent.com/21411732/83165789-f9ddc780-a148-11ea-91c5-7466c553bd75.png)](https://youtu.be/2ybCKdMyfU4)


***
<br/><br/>

# 7. 결과 영상

[![main](https://user-images.githubusercontent.com/48545651/84160004-ace2e500-aaa8-11ea-9900-5ad5f07e3f96.png)](https://youtu.be/S-x6tcbN4Fg)

***
