import re
import json

input_path = '/Users/ysc/Documents/Projelerim/BernaFlash/bernaflash-next/data/ydt-vocabulary-data.js'
output_path = '/Users/ysc/Documents/Projelerim/BernaFlash/bernaflash-next/data/ydt-vocabulary-data.js'

def parse_unit_data(content):
    units = {}
    # Regex to find assignments like: gameData.levelData['YDT_Unit1'] = [ ... ];
    # We will match the key and the list content.
    # Since the list content spans multiple lines, we use dotall.
    # We assume the array ends with ];
    
    # Actually, simpler approach:
    # The file consists of blocks like:
    # gameData.levelData['YDT_Unit1'] = [
    #    ...
    # ];
    
    # We can search for `gameData.levelData['(YDT_Unit\d+)'] = (` and capture until `];`
    
    pattern = re.compile(r"gameData\.levelData\['(YDT_Unit\d+)'\]\s*=\s*(\[\s*\{.*?\}\s*\]);", re.DOTALL)
    
    matches = pattern.findall(content)
    
    for unit_name, json_str in matches:
        # The content inside is JS object literal, not strictly JSON (keys might not be quoted, strings might use single quotes)
        # But looking at the file, it uses double quotes for keys? No, keys `answer: "..."` are unquoted.
        # So we can't parse as JSON directly.
        # However, we just need to Preserve the string!
        units[unit_name] = json_str
        
    return units

with open(input_path, 'r', encoding='utf-8') as f:
    content = f.read()

units = parse_unit_data(content)

# Construct new file content
new_content = """export const ydtGameData = {
    title: "11th Grade Vocabulary Challenge",
    preparedBy: "Berna Hoca",
    answerTime: 25,
    defaultGroup: 2,
    groupNames: ["Team A", "Team B", "Team C", "Team D"],
    levelData: {
"""

for i in range(1, 11):
    unit_key = f"YDT_Unit{i}"
    if unit_key in units:
        new_content += f"        '{unit_key}': {units[unit_key]},\n"
    else:
        print(f"Warning: {unit_key} not found in file.")

new_content += """    }
};
"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully rewrote {output_path} with {len(units)} units.")
