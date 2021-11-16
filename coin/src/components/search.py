import requests

searching = '합정 스타벅스'
url = 'https://dapi.kakao.com/v2/local/search/keyword.json?query={}'.format(searching)
headers = {
    "Authorization": "KakaoAK bc169a9178b92c18334854ca31bf871f"
}
req = requests.get(url, headers = headers)
places = requests.get(url, headers = headers).json()['documents']

places
print(req.status_code)
print("오류", str(req.json()))