<p align="center">
<img src="https://user-images.githubusercontent.com/21411732/77502374-0ec68200-6e9e-11ea-84e1-23aee705d1af.png" >
</p>
<p align="center">RoooM</p>

**RoooM** - Capstone Design Project, 2020 <br/>


***


# 1. 프로젝트 소개

## 프로젝트 시작 배경과 기획 의도

2018년 한 매거진에서 대학생을 대상으로 한 설문에 따르면 80%의 설문자가 **팀(Team) 활동**을 경험했고, 평균 3개의 팀 활동을 동시에 진행했다고 응답했습니다.
대학생을 비롯한 현대인들은 개인 활동에서 벗어나 여러 사람과의 소통이 필요하고, 그들과 협력을 해야 하는 것이 자연스럽게 의무화되고 있습니다.
이러한 팀 활동에 참여하는 사람들은 **개인과 개인**, **개인과 단체** 그리고 **단체와 단체** 사이의 활동 일정을 모두 조절해야 하는 필요성과 그것이 쉽지 않음을 느끼고 있습니다.
그래서 저희는 이들에게 **공간**을 제공하고 적극적으로 활용할 수 있는 서비스를 개발하고 싶습니다.

하나의 팀 활동 안에서는 집중적인 활동을 해야 하고 그것이 각각 여러 개로 늘어났을 때, 이들을 효율적으로 운영하고 진행할 수 있어야 합니다.
또한 이러한 팀 활동은 경우에 따라 **장기적**일 수 있고, 혹은 **단기적**일 수도 있습니다.
장기적인 활동에 있어서는 공간에 대한 지속적인 유지 및 관리 서비스가 필요합니다.
또한 제공되는 공간 속에서 소통되었던 자료의 보안에 대한 신뢰도가 높은 서비스를 제공해야 합니다.
대조적으로 '일회성 모임'의 성질을 띄면서 참여하는 단기적인 활동에서는
개인에게는 최소화된 개인정보 공유 환경을 제공하여, 원하지 않는 사생활 노출을 방지하는 것이 필요합니다. 

따라서 저희 프로젝트는 우선적으로 팀 활동에 대한 웹 기반 협업 툴(공간)을 제공하고, 
이를 통해 서로의 소통은 물론, 협력 업무의 효율성을 극대화하는 것이 목표입니다.
또한 부가적으로 일정을 취합하거나, 편리한 자료 공유 시스템, 모임 장소 추천 등 사용자에게 최적화된 서비스를 통해 활용도를 높일 것입니다. 
마지막으로 직관적인 정보 제공을 통해 접근성을 높이고, 사용자의 '편의성'과 '활용성'에 초점을 둔 서비스를 개발하고자 합니다. 
이는 결과적으로 단순히 특정 목적(학업, 기업 등)을 가진 팀 활동뿐만 아니라 여러 단체 활동, 사교 모임, 조직 등 에서 다방면으로 활용될 것이라 생각합니다.

## 프로젝트 개발 도구 예상도
![KakaoTalk_20200315_161750692](https://user-images.githubusercontent.com/21411732/77322149-9dc88280-6d56-11ea-85bd-d31b47489a24.png)

- framework(spring boot), library(reactJS), IDE(Intellij, VSCode)의 선택 이유
  - 실무에서 최신 기술로 분류되는 react와 spring boot를 사용해보고자하는 취지.
  - Intellij와 VSCode는 가장 많이 사용되며, 편의성이 두드러지기 때문에 사용하게 됨.

- ReactJs의 장점
  - SPA(Single Page Application)으로 기존 JS언어들과 달리, 렌더링 시 Virtual DOM이라는 가상 영역에 렌더링이 먼저 수행되며, UI에 렌더링된 페이지와 Virtual DOM에 렌더링된 페이지를 비교해, 수정이 된 부분만 빠르게 렌더링이 들어가 페이지 로딩같은 UX 부분에서 강점을 갖는다.
  - Create-react-app이라는 npm tool을 이용해 프로젝트를 쉽게 구성할 수 있으며 많은 오픈소스 라이브러리 또한 장점이다.

- 유저 세션 체크 부분 -> Front-end에서 Cookie의 사용 이유
  - 유저 세션을 체크하기 위해선 Front-end 영역에서는 대개 cookie, localstorage를 이용한다. localstorage의 경우 브라우저가 닫혀도 데이터가 남아있다는 특이성을 갖는다. 우리팀은 localstorage와 cookie의 특성을 고려해 브라우저가 닫히면 데이터가 사라지지만, 브라우저 탭 간에는 데이터가 공유되는 cookie를 선택했다. 서비스 특성 상 다중 탭을 지원해야 한다고 생각했기 떄문이다.
 
 - JWT Token(JSON Web Token)의 사용 이유
   - 우리팀은 JWT Token을 유저 세션체크를 위해 이용한다. JWT는 토큰 발행 시 validation time, Claim등을 지정할 수 있으며 Base64로 인코딩하여 암호화된다. JWT의 장점은 따로 데이터베이스에 해당 값을 저장하지 않고도 토큰 값을 검사하면 이 토큰이 유효한지(validation time이 지나지 않았는지), 이 토큰의 발행자가 누구며(Issuer) 이 토큰의 소유자는 누구인지(보통 Claim에 해당 정보를 넣는다)를 알 수 있다는 점이다. 따라서 하나의 Back-end 서버를 여러 서버로 확장시킬 때 용이하다.

- Spring Boot의 선택 이유
  - Spring Boot를 선택한 이유는 단순하다. 지원해주는 기술이 매우 많기 때문이다. 보안관련(Spring Security), 데이터베이스 연결(JDBC, Hibernate, JPA, MyBatis, ...), 디버그 테스트(junit), Spring Web, Thymeleaf, Java Mail Sender,HikariPool 등등 셀 수 없이 많은 기술이 접근이 용이하게 만들어졌다.
  - 또한 IntelliJ에서 스프링 프로젝트를 다루기 쉽기 때문에 더더욱 spring boot를 선택하게 됐다.

- JPA 사용 이유
  - Mybatis와 같은 xml mapper를 이용한 데이터베이스 보조도구와 달리 JPA의 경우 자바 ORM 구조를 따라 테이블 구조를 클래스 형태로 추상화시키면 된다. JPA의 가장 큰 장점으로는 이러한 클래스 형태의 추상화에서 오는 개발 코드의 라인 수가 줄어들고, 개발 속도가 빨라질 수 있다는 점이다. 우리는 이러한 점을 고려해 JPA, Hibernate를 선택하게 됐다.

- Gradle 선택 이유
  - Spring Boot의 경우 Maven build, Gradle build가 존재한다. Maven의 경우 pom.xml이라는 파일로 라이브러리 관리를 하며, root context.xml, security context.xml 등 XML 파일을 이용해 프로젝트 전반적인 설정을 관리한다. Gradle의 경우 build.gradle 파일에 라이브러리를 관리하며, xml보다 훨씬 편하고 가독성이 더 좋다는 장점이 있다.
  - 또한, gradle로 build했을 경우 maven build보다 초기에는 조금 느리지만, 한 번 build된 이후에는 maven build보다 훨씬 더 빠르다. 이러한 점에서 gradle build를 선택하게 됐다.

- Spring MVC vs Spring Boot
  - Spring Framework의 경우 기존 MVC와 최신 Boot가 존재한다. MVC의 경우 configuration을 xml 파일에서 관리하지만, Boot의 경우 쉽게 @(annotation) 하나로 관리가 가능하다. 또한 기본적으로 지원해주는 다양한 서비스도 Spring Boot가 더 많다. 이에 Boot을 선택하게 됐다.

***
<br/><br/>
# 2. Abstract

**The project 'RoooM' is to develop a web service that provides a 'space' for people involved in team activities.**

The goal is to provide teams with free, yet highly available services to multiple users, while also improving team efficiency.
- Sign up & login by Google account linkage - Improve accessibility through simple member management and linkage with Google

- Free 'room' creation and member organization - Make it simple and easy between teams without complicated procedures

- Highly usable functions - Real-time chat (file sharing, mention function, department-specific chat), meeting place recommendation (optimized place tracking through Google Maps), scheduling and coordination among members

- 'Friendly' service that can gather without unnecessary personal information, provides services with high utilization and accessibility, and does not want a high level for users

***
<br/><br/>
# 3. 팀 소개

### 지도 교수님 - 윤성혜 교수님
<br/>

### 허민 (팀장) 
 > * 학번 : 20153241 <br/>
 > * 역할 : 팀장 및 Web back-end(Spring Boot with REST API, mysql, JDBC, JPA) 담당
 > * 이메일 : huhmin9094@kookmin.ac.kr
<br/>

### 윤수민 

> * 학번 : 20162791 
> * 역할 : Front-end(React) 담당
> * 이메일 : sumin9497@gmail.com
<br/>

### 이지훈 

> * 학번 : 20153215
> * 역할 : Front-end(React) 담당
> * 이메일 :wlgnssla311@gmail.com
<br/>

### 한준호 

> * 학번 : 20153239
> * 역할 : Web back-end(Spring Boot with REST API, mysql, JDBC, JPA) 담당
> * 이메일 : karryone@kookmin.ac.kr

***
<br/><br/>
# 4. 소개 영상

[![Watch the video](https://user-images.githubusercontent.com/21411732/77678654-cf4e8180-6fd4-11ea-8d3b-c7ce10a1f699.png)](https://youtu.be/XjlExIf-6DQ)


***
<br/><br/>

# 5 결과 영상

추후 업로드 예정

