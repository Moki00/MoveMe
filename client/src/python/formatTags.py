import json

with open("tags.txt", 'r') as file:
    for line in file:
        tags = line.strip('][').split("', '")
        result = []
        for tag in tags:
            formatted_tag = tag.replace("-", " ")
            temp = {"label" : formatted_tag}
            result.append(temp)

        output = json.dumps(result)
        # print(output)

with open('formatTags.txt', "w") as output_file:
    output_file.write(output)