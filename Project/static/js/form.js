let num = 1;
const q = {
  1: {
    title: "영화를 보려는데",
    A_type: "action",
    B_type: "mystery",
    A: "스트레스 풀리는 영화",
    B: "스토리 좋은 영화",
  },
  2: {
    title: "여행지를 고르는데",
    A_type: "sf",
    B_type: "history",
    A: "도심지",
    B: "유적지",
  },
  3: {
    title: "집에 들어왔는데",
    A_type: "horror",
    B_type: "romance",
    A: "집에 누가있는지 확인한다",
    B: "드라마를 본다",
  },
  4: {
    title: "국가기밀의 내용은",
    A_type: "mystery",
    B_type: "sf",
    A: "대통령 암살 관련",
    B: "인간 복제 관련",
  },
  5: {
    title: "유해가 마구 발견됐다!",
    A_type: "mystery",
    B_type: "history",
    A: "누구의 시체인가?",
    B: "여기 유적이었나봐!",
  },
  6: {
    title: "친구와의 관계성에서 가장 중요한 것은?",
    A_type: "action",
    B_type: "sf",
    A: "기꺼이 서로 희생할 수 있는 의리",
    B: "최신 정보를 공유할 수 있는",
  },
  7: {
    title: "전생의 나는?",
    A_type: "action",
    B_type: "history",
    A: "나라를 구한 장군",
    B: "나라를 편한케 한 서생",
  },
  8: {
    title:
      "밤 12시, 장롱 틈새 사이에 불빛이 보여서 가까이 가서 몰래 문틈 사이를 보는데,",
    A_type: "horror",
    B_type: "fantasy",
    A: "달빛에 비춘 전기톱칼날",
    B: "다른 세계로 이동하는 트렌트포트",
  },
  9: {
    title: "애인이 나에게 이별통보를 하면서, 오른 손에 들고 있는 물건은?",
    A_type: "romance",
    B_type: "fantasy",
    A: "커플링",
    B: "용의 알",
  },
  10: {
    title: "오랜만에 친구집에 갔다.. 벽에 거무튀튀한 자국이 보이는데",
    A_type: "mystery",
    B_type: "horror",
    A: "핏자국인거 같다",
    B: "악마의 소환 자국인거 같다",
  },
  11: {
    title: "버스를 타고 가고 있는데, 문득 창밖을 봤더니 보이는 광경은?",
    A_type: "mystery",
    B_type: "romance",
    A: "을씨년 스러운 폐가",
    B: "전 남친 (전 여친)이 정류장에 앉아있다",
  },
  12: {
    title:
      "번화가를 지나가는데, 앞에 맨홀 뚜껑이 열려있다. 궁금해서 가서 안을 들여다보니",
    A_type: "mystery",
    B_type: "fantasy",
    A: "지하 감옥으로 가는 통로",
    B: "강력한 빛이 나오는 투명한 돌",
  },
  13: {
    title:
      "동물원에 갔는데, 눈이 슬퍼보이는 흰 백마가 보인다. 그 백마의 숨은 이야기는?",
    A_type: "action",
    B_type: "horror",
    A: "전생에 전장에서 주인을 지키지 못했기 때문에",
    B: "어젯밤 사육사가 몰래 자기 친구를 학대하는 것을 보았기 때문에",
  },
  14: {
    title: "나를 강하게 하는 건",
    A_type: "action",
    B_type: "romance",
    A: "강한 신체",
    B: "굳건한 마음",
  },
  15: {
    title: "과거로 간다면",
    A_type: "action",
    B_type: "fantasy",
    A: "조선시대 무관",
    B: "중세시대 기사",
  },
  16: {
    title: "귀신을 보았다면",
    A_type: "sf",
    B_type: "horror",
    A: "과학적으로 귀신이 어딨냐!",
    B: "무섭지만 왜 익숙하지?",
  },
  17: {
    title: "오늘 꿈을 꿨는데 만난 것은?",
    A_type: "sf",
    B_type: "romance",
    A: "미래의 나",
    B: "미래의 애인",
  },
  18: {
    title: "300년 뒤 세상은?",
    A_type: "sf",
    B_type: "fantasy",
    A: "로봇이 모든것을 도와준다",
    B: "그때는 만능 지팡이가 있을 것이다",
  },
  19: {
    title: "작품 속의 주인공이 된다면?",
    A_type: "history",
    B_type: "horror",
    A: "킹덤",
    B: "워킹데드",
  },
  20: {
    title: "오늘 지인을 만나기로 한 당신",
    A_type: "history",
    B_type: "romance",
    A: "교훈을 얻어가고 싶다",
    B: "편한함을 얻어가고 싶다",
  },
  21: {
    title: "지팡이를 들고있는 저 사람은?",
    A_type: "history",
    B_type: "fantasy",
    A: "산신령",
    B: "마법사",
  },
};

// 취향 테스트
const questionPage = document.querySelector(".question");
const booksPage = document.querySelector(".books");
const A = document.querySelector("#A");
const B = document.querySelector("#B");
const typeA = document.querySelector("#A_type");
const typeB = document.querySelector("#B_type");
const title = document.querySelector("#title");
const progressBar = document.querySelector(".progress-bar");

function clickA() {
  const type = document.querySelector(`#${typeA.value}`);
  type.value = parseInt(type.value) + 1;
  const genre = type.id;
  console.log(genre);
  next(genre);
}
function clickB() {
  const type = document.querySelector(`#${typeB.value}`);
  type.value = parseInt(type.value) + 1;
  const genre = type.id;
  console.log(genre);
  next(genre);
}

function next(genre) {
  if (num == 4) {
    const genreResult1 = {
      mystery: `${document.querySelector("#mystery").value}`,
      sf: `${document.querySelector("#sf").value}`,
    };

    if (genreResult1.mystery == 1 && genreResult1.sf == 1) {
      showQnA(4);
    } else if (genreResult1.mystery == 1 && genreResult1.sf == 0) {
      showQnA(5);
    } else if (genreResult1.mystery == 0 && genreResult1.sf == 1) {
      showQnA(6);
    } else if (genreResult1.mystery == 0 && genreResult1.sf == 0) {
      showQnA(7);
    }
  } else if (num == 5) {
    const genreResult2 = {
      horror: `${document.querySelector("#horror").value}`,
    };

    if (genreResult2.horror == 1) {
      showQnA(8);
    } else if (genreResult2.horror == 0) {
      showQnA(9);
    }
  } else if (num == 6) {
    const genreResult3 = {
      mystery: `${document.querySelector("#mystery").value}`,
      horror: `${document.querySelector("#horror").value}`,
      fantasy: `${document.querySelector("#fantasy").value}`,
      action: `${document.querySelector("#action").value}`,
      sf: `${document.querySelector("#sf").value}`,
      history: `${document.querySelector("#history").value}`,
      romance: `${document.querySelector("#romance").value}`,
    };

    if (genreResult3.mystery == 2 && genreResult3.horror == 2) {
      showQnA(10);
    } else if (genreResult3.mystery == 2 && genreResult3.romance == 2) {
      showQnA(11);
    } else if (genreResult3.mystery == 2 && genreResult3.fantasy == 1) {
      showQnA(12);
    } else if (genreResult3.action == 2 && genreResult3.horror == 2) {
      showQnA(13);
    } else if (genreResult3.action == 2 && genreResult3.romance == 2) {
      showQnA(14);
    } else if (genreResult3.action == 2 && genreResult3.fantasy == 1) {
      showQnA(15);
    } else if (genreResult3.sf == 2 && genreResult3.horror == 2) {
      showQnA(16);
    } else if (genreResult3.sf == 2 && genreResult3.romance == 2) {
      showQnA(17);
    } else if (genreResult3.sf == 2 && genreResult3.fantasy == 1) {
      showQnA(18);
    } else if (genreResult3.history == 2 && genreResult3.horror == 2) {
      showQnA(19);
    } else if (genreResult3.history == 2 && genreResult3.romance == 2) {
      showQnA(20);
    } else if (genreResult3.history == 2 && genreResult3.fantasy == 1) {
      showQnA(21);
    }
  } else if (num == 7) {
    questionPage.classList.add("hide");
    booksPage.classList.remove("hide");
    loadItems(genre);
  } else {
    title.innerHTML = q[num]["title"];
    typeA.value = q[num]["A_type"];
    typeB.value = q[num]["B_type"];
    A.innerHTML = q[num]["A"];
    B.innerHTML = q[num]["B"];
  }
  progressBar.style.width = `${(100 / 6) * num}%`;
  num++;
}

function showQnA(x) {
  title.innerHTML = q[x]["title"];
  typeA.value = q[x]["A_type"];
  typeB.value = q[x]["B_type"];
  A.innerHTML = q[x]["A"];
  B.innerHTML = q[x]["B"];
}

next();
A.addEventListener("click", clickA);
B.addEventListener("click", clickB);

// 책 데이터 가져오기
async function loadItems(genre) {
  let response = await fetch("../static/data/bestBooks.json");
  let json = await response.json();
  let data;

  switch (genre) {
    case "mystery":
      data = await json.mystery;
      break;
    case "horror":
      data = await json.horror;
      break;
    case "fantasy":
      data = await json.fantasy;
      break;
    case "action":
      data = await json.action;
      break;
    case "sf":
      data = await json.sf;
      break;
    case "history":
      data = await json.history;
      break;
    case "romance":
      data = await json.romance;
      break;
  }
  console.log(data);

  const elements = data.map(createElement);
  const container = document.querySelector(".grid");
  container.append(...elements);
}

let bookNum = 1;
function createElement(book) {
  const div = document.createElement("div");
  div.setAttribute("class", "book_container");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `book${bookNum}`);
  input.setAttribute("name", `title${bookNum}`);
  input.setAttribute("value", book.title);

  const label = document.createElement("label");
  label.setAttribute("for", `book${bookNum}`);

  const img = document.createElement("img");
  img.setAttribute("src", book.img);

  label.append(img);
  div.append(input);
  div.append(label);

  bookNum++;
  return div;
}
