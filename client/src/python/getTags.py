import requests, json
import sys

PAPERQUOTES_API_ENDPOINT = 'https://api.paperquotes.com/apiv1/tags/?limit=50000'
TOKEN = 'f95acdb382c7b0aa5a7723e2e68f1ada66d39875'
response = requests.get(PAPERQUOTES_API_ENDPOINT, headers={'Authorization': 'TOKEN {0}'.format(TOKEN)})

if response.ok:
    tags = json.loads(response.text).get('results')

    tagList = []
    for tag in tags:
	    tagList.append(tag.get('name'))
	
    print(tagList)
