import json


def get_resultdata(book_name):
    with open("static/data/bookResult.json") as json_file:
        json_data = json.load(json_file)

    data = json_data[f"{book_name}"]
    return data