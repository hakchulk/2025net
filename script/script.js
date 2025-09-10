function writeMainBBS() {
  var aBBS = [
    {
      title: "2024년 기부금품 사용내역",
      content:
        "재단법인 넷마블문화재단 ‘기부금품의 모집 및 사용에 관한 법률 시행령’에 의거하여 기부금품 모집 및 사용내역을 아래와 같이 게시합니다.",
      dt: new Date(2025, 8, 2),
      cate: "공지사항",
    },
    {
      title: "2024년도 결산서류 등의 공시",
      content:
        "재단법인 넷마블문화재단은 ‘상속세 및 증여세법 제50조의3(공익법인등의 결산서류등의 공시의무)’에 의거 결산서류 등을 공시합니다. 해당 내역은 국세청 홈택스(hometax.go.kr) 공익법인결산공시 공개시스템에서도 확인하실 수 있습니다.",
      dt: new Date(2025, 4, 30),
      cate: "공지사항",
    },
    {
      title:
        "[마감] <2025년 게임 탐험대 (구, 넷마블견학프로그램)> 참가 학교 및 기관 모집 공고",
      content:
        "넷마블문화재단은 게임 산업 및 게임 업계 진로에 관심 있는 학생 등을 대상으로 <2025년 게임 탐험대 (구.넷마블견학프로그램)> 참여 학교/기관을 모집합니다.",
      dt: new Date(2025, 4, 18),
      cate: "공지사항",
    },
    {
      title: "2024년 기부금품 모집완료내역 보고",
      content:
        "재단법인 넷마블문화재단은 '기부금품의 모집 및 사용에 관한 법률'에 의거하여 기부금품 모집 내역을 아래와 같이 게시합니다.",
      dt: new Date(2025, 3, 5),
      cate: "공지사항",
    },
  ];

  var str = "";
  for (var i = 0; i < aBBS.length; i++) {
    var item = aBBS[i];
    str += `
            <div class="swiper-slide slide">
              <div class="textWrap">
                <h6 class="tit">${item.title}</h6>
                <p class="txt2 summary">
                  ${item.content}
                </p>
                <p class="txt5">${
                  item.cate
                } &middot; ${item.dt.toLocaleDateString("ko-KR")}</p>
              </div>
            </div>    
    `;
  }
  return str;
}
