# Requirements Document

## Introduction

WhichGame (땃쥐) 게임 커뮤니티 플랫폼의 홈페이지 프론트엔드를 Next.js 기반으로 구현합니다. 제공된 HTML 디자인을 기반으로 다크 테마의 현대적인 게임 커뮤니티 UI를 구축하며, 게이머와 게임 제작자가 소통하고 리뷰를 공유할 수 있는 인터랙티브한 사용자 경험을 제공합니다.

## Requirements

### Requirement 1: 상단 네비게이션 헤더 구현

**User Story:** As a 사용자, I want 상단 네비게이션 메뉴를 통해 주요 섹션에 접근할 수 있기를, so that 플랫폼의 다양한 기능을 쉽게 탐색할 수 있습니다

#### Acceptance Criteria

1. WHEN 페이지가 로드되면 THEN 시스템은 SHALL 로고, 로그인 버튼, 알림 아이콘, 실시간 활동 배너, 네비게이션 메뉴를 포함한 헤더를 표시한다
2. WHEN 사용자가 네비게이션 메뉴 항목에 마우스를 올리면 THEN 시스템은 SHALL 해당 항목의 색상을 #00CEFF로 변경한다
3. WHEN 알림 아이콘이 표시되면 THEN 시스템은 SHALL 읽지 않은 알림 개수를 빨간색 배지로 표시한다
4. WHEN 실시간 활동 배너가 표시되면 THEN 시스템은 SHALL 현재 활동 중인 게이머 수를 애니메이션 효과와 함께 표시한다
5. WHEN 로그인 버튼을 클릭하면 THEN 시스템은 SHALL 로그인 페이지로 이동한다

### Requirement 2: 게이머 & 제작자 영업 섹션 구현

**User Story:** As a 게이머 또는 제작자, I want 내 게임 리뷰나 제작 경험을 공유할 수 있기를, so that 커뮤니티와 소통하고 피드백을 받을 수 있습니다

#### Acceptance Criteria

1. WHEN 영업 섹션이 로드되면 THEN 시스템은 SHALL 게이머의 영업, 제작자의 영업, 지난달의 GOAT, 히든 업적 카드를 4열 그리드로 표시한다
2. WHEN 사용자가 카드에 마우스를 올리면 THEN 시스템은 SHALL 카드를 위로 5px 이동시키는 호버 효과를 적용한다
3. WHEN 새로고침 아이콘을 클릭하면 THEN 시스템은 SHALL 180도 회전 애니메이션과 함께 해당 섹션의 콘텐츠를 새로고침한다
4. WHEN 각 카드가 표시되면 THEN 시스템은 SHALL 게임명 배지, 게임 이미지, 좋아요 카운트, 리뷰 작성 영역을 포함한다
5. WHEN "작성하러 가기" 링크를 클릭하면 THEN 시스템은 SHALL 해당 리뷰 작성 페이지로 이동한다

### Requirement 3: 히든 업적 카드 구현

**User Story:** As a 사용자, I want 다른 사용자가 달성한 히든 업적을 확인할 수 있기를, so that 커뮤니티 활동에 동기부여를 받을 수 있습니다

#### Acceptance Criteria

1. WHEN 히든 업적 카드가 표시되면 THEN 시스템은 SHALL 골드 테두리(#FFD700)와 우측 상단 골드 장식을 포함한다
2. WHEN 업적 정보가 표시되면 THEN 시스템은 SHALL 달성자 닉네임(#00CEFF 색상), 업적 아이콘, 업적 이름, 설명을 표시한다
3. WHEN 최초 달성 업적인 경우 THEN 시스템은 SHALL "최초 달성" 배지를 골드 색상으로 표시한다
4. WHEN 사용자가 카드에 마우스를 올리면 THEN 시스템은 SHALL 카드를 위로 5px 이동시키는 호버 효과를 적용한다
5. WHEN "현재까지 달성된 히든 업적 보기" 링크를 클릭하면 THEN 시스템은 SHALL 히든 업적 목록 페이지로 이동한다

### Requirement 4: 게임 추천 섹션 구현

**User Story:** As a 게이머, I want 내 취향에 맞는 게임 추천을 받을 수 있기를, so that 새로운 게임을 발견할 수 있습니다

#### Acceptance Criteria

1. WHEN 게임 추천 섹션이 로드되면 THEN 시스템은 SHALL 4열 그리드로 게임 추천 2개와 광고주 섹션 1개를 표시한다
2. WHEN 새로고침 아이콘을 클릭하면 THEN 시스템은 SHALL 180도 회전 애니메이션과 함께 추천 게임을 새로고침한다
3. WHEN 광고주 섹션이 표시되면 THEN 시스템은 SHALL 좌측에 빨간색(#FF3B30) 테두리를 포함한다
4. WHEN 각 게임 카드가 표시되면 THEN 시스템은 SHALL 게임 이미지, 제목, 부제목을 포함한다
5. WHEN 광고 문의 텍스트가 표시되면 THEN 시스템은 SHALL 빨간색(#FF3B30)으로 강조 표시한다

### Requirement 5: 파트너스 모집 및 디스코드 섹션 구현

**User Story:** As a 커뮤니티 운영자, I want 파트너스를 모집하고 디스코드 서버를 홍보할 수 있기를, so that 커뮤니티를 확장할 수 있습니다

#### Acceptance Criteria

1. WHEN 파트너스 섹션이 로드되면 THEN 시스템은 SHALL 좌측에 파트너스 모집, 우측에 디스코드 서버 버튼을 2열로 표시한다
2. WHEN 파트너스 모집 영역이 표시되면 THEN 시스템은 SHALL 아이콘, 제목(#00CEFF 색상), 설명, 신청 버튼을 포함한다
3. WHEN 디스코드 버튼에 마우스를 올리면 THEN 시스템은 SHALL 배경색을 #4752C4로 변경하고 위로 이동하는 효과를 적용한다
4. WHEN 신청 버튼을 클릭하면 THEN 시스템은 SHALL 파트너스 신청 페이지로 이동한다
5. WHEN 디스코드 버튼을 클릭하면 THEN 시스템은 SHALL 디스코드 서버 초대 링크로 이동한다

### Requirement 6: 다크 테마 및 반응형 디자인 구현

**User Story:** As a 사용자, I want 일관된 다크 테마와 반응형 레이아웃을 경험할 수 있기를, so that 다양한 디바이스에서 편안하게 사용할 수 있습니다

#### Acceptance Criteria

1. WHEN 페이지가 로드되면 THEN 시스템은 SHALL 배경색 #0a0a0a, 텍스트 색상 #e0e0e0의 다크 테마를 적용한다
2. WHEN 강조 색상이 필요한 경우 THEN 시스템은 SHALL 주요 강조색으로 #00CEFF를 사용한다
3. WHEN 카드 컴포넌트가 표시되면 THEN 시스템은 SHALL 배경색 #1E1E1E, 8px 둥근 모서리를 적용한다
4. WHEN 화면 크기가 변경되면 THEN 시스템은 SHALL 그리드 레이아웃을 적절히 조정한다
5. WHEN 호버 효과가 적용되면 THEN 시스템은 SHALL 0.3초 트랜지션 애니메이션을 사용한다

### Requirement 7: 인터랙티브 애니메이션 구현

**User Story:** As a 사용자, I want 부드러운 애니메이션과 인터랙션을 경험할 수 있기를, so that 더 생동감 있는 사용자 경험을 얻을 수 있습니다

#### Acceptance Criteria

1. WHEN 실시간 활동 배너의 상태 점이 표시되면 THEN 시스템은 SHALL 1.5초 주기의 펄스 애니메이션을 적용한다
2. WHEN 새로고침 아이콘에 마우스를 올리면 THEN 시스템은 SHALL 180도 회전 애니메이션을 0.3초 동안 적용한다
3. WHEN 알림 아이콘에 마우스를 올리면 THEN 시스템은 SHALL 1.1배 확대 효과를 적용한다
4. WHEN 카드에 마우스를 올리면 THEN 시스템은 SHALL 위로 5px 이동하는 효과를 0.2초 동안 적용한다
5. WHEN 버튼에 마우스를 올리면 THEN 시스템은 SHALL 배경색 변경과 함께 0.3초 트랜지션을 적용한다

### Requirement 8: 컴포넌트 재사용성 및 타입 안정성

**User Story:** As a 개발자, I want 재사용 가능한 컴포넌트와 타입 안정성을 확보할 수 있기를, so that 유지보수가 용이하고 확장 가능한 코드를 작성할 수 있습니다

#### Acceptance Criteria

1. WHEN 컴포넌트를 작성할 때 THEN 시스템은 SHALL TypeScript 인터페이스로 props를 정의한다
2. WHEN 공통 UI 요소를 구현할 때 THEN 시스템은 SHALL 재사용 가능한 컴포넌트로 분리한다
3. WHEN 스타일을 적용할 때 THEN 시스템은 SHALL Tailwind CSS 클래스를 사용한다
4. WHEN 아이콘을 사용할 때 THEN 시스템은 SHALL lucide-react 라이브러리를 활용한다
5. WHEN 상태 관리가 필요한 경우 THEN 시스템은 SHALL React hooks 또는 Zustand를 사용한다
