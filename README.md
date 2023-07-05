# 4조 오합지존
![화면 캡처 2023-07-05 103748](https://github.com/kongukjae/KDT-2-Project-B-4/assets/124134155/163aa8b3-41d4-4e5a-af45-8fe2d56754e1)
---

> 프로젝트명 : BTS (Bus Tracker System)
> 

---

## 구성인원

| 구성 | 이름 |
| --- | --- |
| 팀장 | 권예준 |
| 팀원 | 정성철 |
|  | 류은이 |
|  | 김은아 |
|  | 이경택 |

---

## 목차

- [프로젝트 소개](#프로젝트-소개)
    - [주제 선정 이유](#1-주제-선정-이유)
    - [서비스 개요](#2-서비스-개요)
    - [서비스](#3-서비스)
    - [필요 기능](#4-주요-기능)
- [애플리케이션 동작 방식](#BTS앱-동작-방식)
    - [실시간 버스 위치 정보](#1-실시간-버스-위치-정보)
    - [맞춤형 정류장 즐겨찾기](#2-맞춤형-정류장-즐겨찾기)
    - [척척! 교통 상황 정보](#3-척척!-교통-상황-정보)
- [진행 상황](#진행-상황)
    - [프로젝트 개발환경 구축](#프로젝트-개발환경-구축)
    - [프로젝트 설계](#프로젝트-설계)
    - [Front-작업](#front-작업)
    - [Back-작업](#back-작업)
---

## 프로젝트 소개

### *1. 주제 선정 이유*

- 대전 지역에서 버스 위치를 실시간으로 확인할 수 있는 서비스가 아직 도입되지 않았습니다. 이러한 서비스는 다른 지역에서 활발하게 이용되고 있지만 대전에는 아직 적용되지 않아, 이를 해결하고자 제안된 주제로 선정되었습니다.

### *2. 서비스 개요*

- 사용자가 궁금한 정류장의 대전 버스를 실시간으로 확인 하여 버스를 놓치는 경우의 수를 줄이자.

### *3.서비스*

- 버스의 실시간 위치를 직관적인 지도화면에 표시하여 사용자들이 쉽게 파악할 수 있습니다.
- 버스 노선 별로 구분되는 색상 표시로, 교통 상황과 노선의 혼잡도를 한눈에 확인하실 수 있도록 도와줍니다.
- 자주 이용하는 정류장을 즐겨찾기에 추가하여, 빠르게 원하는 버스의 위치와 도착 예정 시간을 확인하실 수 있습니다.
- 사용자가 관심 있는 정류장의 버스 도착 정보를 시각화하여, 여행 계획을 보다 효율적으로 세울 수 있도록 지원합니다.

### *4.주요 기능*

- 외부 API 데이터 활용
    - 공공 데이터 API와 카카오맵 API를 통해 실시간 버스 정보와 지도 데이터를 받아옵니다.
    - 외부 데이터 처리 및 지도 데이터 연동 받아온 실시간 버스 정보를 가공한 후, 카카오맵 API와 통합하여 보기 쉽게 표시합니다.
- 즐겨찾기 기능
    - 자주 이용하는 정류장을 간편하게 저장하여 사용자에게 맞춤형 정보 제공이 가능합니다.
- 데이터베이스 구축
    - 각 사용자 별 즐겨찾기 데이터를 데이터베이스에 저장하여 개인화된 정보를 제공합니다.
- 버스 실시간 위치 확인
    - 선택한 정류장으로 진입 중인 버스의 위치 데이터를 실시간으로 확인할 수 있어, 탑승을 보다 수월하게 진행할 수 있습니다.

---

## BTS앱 동작 방식

### *1. 실시간 버스 위치 정보*

- 메인 화면에서 바로 지도를 활용하실 수 있어요.
- 사용자분이 선택한 정류장에 도착 예정인 버스의 데이터가 한눈에 보입니다.
- 진입 중인 버스의 위치 정보를 마커를 통해 실시간으로 쉽게 확인하실 수 있어요.

### *2. 맞춤형 정류장 즐겨찾기*

- 일상에서 자주 이용하는 정류장을 북마크 기능으로 손쉽게 저장하세요.
- 북마크된 정류장의 정보는 빠르게 찾아볼 수 있어 시간을 절약해 줍니다.

### *3. 척척! 교통 상황 정보*

- 지도 상에서 교통 상황 데이터를 제공해 드림으로써, 버스 이용 시간을 정확하게 예측하실 수 있어요.
- 이로 인해 버스 이용이 보다 편리하고 빠르게 진행되도록 도와드립니다.

---
# **진행 상황**

### *프로젝트 개발환경 구축*

> 2023.6.23.
> 
- NestJS 프레임워크와 React(TS)를 CRA로 폴더링하여 기본 개발 환경을 구축했습니다.
- 메인 브랜치가 원격 저장소에 푸시되어 공유 완료했습니다.
- 팀원들이 클라이언트에서 번들링된 파일을 서버에서 성공적으로 불러올 수 있도록 했습니다.


### *프로젝트 설계*

> 2023.6.26.
> 
- 서비스를 완성하기 위해 구현해야 할 기능들을 분석했습니다.
- 애플리케이션의 와이어프레임 및 목업을 준비하며 전반적인 구조 계획을 세웠습니다.작업 진행 일정도 점검하고 예상했습니다.

### *Front-작업*

> 2023.6.27.
> 
- 설계서를 참고하여 개발할 사용자 인터페이스를 구축했습니다.
    - 전체적인 레이아웃 설계 및 제작
    - 상단바(NavBar) 구현
    - 검색창 디자인 및 기능
    - 인트로 화면 작성
      
> 2023.6.30.
> 
- 정류장 데이터 DB에서 조회 하여 클라이언트에 전달 후 마커 표시
- 검색 기능 이벤트 발생 전 작업 

> 2023.7.03.
> 
- 버스 위치 좌표 데이터 클라이언트에서 가공후 마커 표시  

> 2023.7.04.
> 
- 작업 마무리 단계 CSS 작업
- 버스 위치와 정류장 위치를 표시 해주는 마커를 수정 해주었다.

### *Back-작업*

> 2023.6.28.
> 
- 필요한 외부 API를 가져와 데이터를 가공하고 정제했습니다.
- 서버 측의 요청 처리 및 응답 로직을 업데이트하여 기능이 원활하게 작동하도록 했습니다.


> 2023.6.30.
> 
- 정류장 데이터 MongoDB에 저장
- 즐겨찾기 서버에 요청 하여 데이터 베이스 접근 로직 작업

> 2023.7.03.
> 
- 버스 위치 좌표 데이터 서버에서 요청 하여 받아온 값을 클라이언트에 전달 


> 2023.7.04.
> 
- 버스 좌표값 데이터 에러가 발생 하여 다른 api 데이터 찾아 작업 진행 
- 버스 좌표값 데이터 로직 수정
- 검색창 작업
- 북마크 컴포넌트 핸들링 작업
