from flask import Flask, render_template, request
from result_data import get_resultdata

app = Flask("BookTest")

book_titles = []


@app.route("/")
def home():
    # 테스트를 다시하는 경우에는 책 제목 리스트를 초기화
    book_titles.clear()
    return render_template("index.html")


@app.route("/form")
def form():
    return render_template("form.html")


@app.route("/result")
def result():
    # url에서 선택한 책 제목 가져오기
    for i in range(1, 11):
        book_title = request.args.get(f"title{i}")
        if book_title:
            book_titles.append(book_title)

    # 책 제목을 통해 선택된 결과 데이터 가져오기
    book_datas = []
    for book_title in book_titles:
        book_datas += get_resultdata(book_title)

    # 정렬을 위해 string -> int 또는 float으로 변경
    for book_data in book_datas:
        book_data["rating"] = float(book_data["rating"])
        book_data["review"] = int(book_data["review"])
        book_data["price"] = book_data["price"].replace(",", "")
        book_data["price"] = int(book_data["price"])

    # 전달되는 url에 따라 정렬해주기
    order_type = "basic"
    order = request.args.get("order_by")
    if order:
        if order == "high_price":  # 높은 가격 순
            order_type = "high_price"
            book_datas.sort(key=(lambda x: -x["price"]))
        elif order == "low_price":  # 낮은 가격 순
            order_type = "low_price"
            book_datas.sort(key=(lambda x: x["price"]))
        elif order == "high_rating":  # 높은 평점 순
            order_type = "high_rating"
            book_datas.sort(key=(lambda x: -x["rating"]))
        elif order == "high_review":  # 리뷰 많은 순
            order_type = "high_review"
            book_datas.sort(key=(lambda x: -x["review"]))

    # 가격 표시는 세자리 단위마다 , 가 있어야 편하므로 표시해주기
    for book_data in book_datas:
        book_data["price"] = format(book_data["price"], ",")

    return render_template("result.html", order_type=order_type, book_datas=book_datas)


app.run(host="0.0.0.0")