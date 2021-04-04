const copyBtn = document.querySelector(".copy_btn");
const facebookShare = document.querySelector(".facebook_share");
const kakaoShare = document.querySelector(".kakao_share");

Kakao.init("80e9e707c4ddf5dd540af237711c4879");
// Kakao.isInitialized();

function sendLink() {
  let result_url = window.location.href;
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "나의 소설 취향은?",
      description: "나랑 잘 어울리는 추천 소설을 알아보자!!",
      // 이미지 주소추가하기, url주소 변경하기
      imageUrl:
        "https://github.com/2dowon/Project-StackLibrary/blob/web/static/img/kakao_share_img.png?raw=true",
      link: {
        mobileWebUrl: "http://3.35.151.193:5000/",
        webUrl: "http://3.35.151.193:5000/",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "결과 보러가기",
        link: {
          webUrl: result_url,
          mobileWebUrl: result_url,
        },
      },
      {
        title: "테스트 하러가기",
        link: {
          // url주소 변경하기
          webUrl: "http://3.35.151.193:5000/",
          mobileWebUrl: "http://3.35.151.193:5000/",
        },
      },
    ],
  });
}

$(function () {
  let url = window.location.href;
  let img = $(".result_img img").attr("src");

  $("meta[property='og\\:url']").attr("content", url);
  $("meta[property='og\\:image']").attr("content", img);
});

function copyUrl() {
  let tmp = document.createElement("input");
  let url = location.href;

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);

  alert("URL이 복사되었습니다");
}

function sharefacebook() {
  let url = window.location.href;
  let facebook = "http://www.facebook.com/sharer/sharer.php?u=";
  let link = facebook + url;
  window.open(link);
}

copyBtn.addEventListener("click", copyUrl);
facebookShare.addEventListener("click", sharefacebook);
kakaoShare.addEventListener("click", sendLink);
