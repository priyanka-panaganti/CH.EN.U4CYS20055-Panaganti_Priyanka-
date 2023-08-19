import asyncio
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

async def fetch_numbers(url):
    try:
        response = await asyncio.to_thread(requests.get, url, timeout=0.5)
        if response.status_code == 200:
            data = response.json()
            return data.get("numbers", [])
    except requests.exceptions.Timeout:
        pass  # Ignore URLs that take too long to respond
    except requests.exceptions.RequestException:
        pass  # Ignore any other request errors

    return []

async def fetch_all_numbers(urls):
    tasks = [fetch_numbers(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    try:
        numbers = loop.run_until_complete(fetch_all_numbers(urls))
    finally:
        loop.close()

    merged_numbers = sorted(set(number for sublist in numbers for number in sublist))
    response_data = {"numbers": merged_numbers}

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8008)
