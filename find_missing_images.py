import json
import re

# Load merged_terms.json
with open('merged_terms.json', 'r') as f:
    data = json.load(f)

# Load gen_terms.py to find image_map
with open('gen_terms.py', 'r') as f:
    content = f.read()

# Extract keys from image_map using regex
image_map_match = re.search(r'image_map = \{(.*?)\}', content, re.DOTALL)
if image_map_match:
    image_map_str = image_map_match.group(1)
    # Simple regex to catch quoted keys
    mapped_ids = set(re.findall(r'"([^"]+)"\s*:', image_map_str))
else:
    mapped_ids = set()

missing_terms = []
all_terms_count = 0
mapped_count = 0

for cat in data:
    for term in cat.get('terms', []):
        all_terms_count += 1
        if term['id'] not in mapped_ids:
            missing_terms.append((term['id'], term['name'].get('en')))
        else:
            mapped_count += 1

print(f"Total terms: {all_terms_count}")
print(f"Mapped terms: {mapped_count}")
print(f"Missing terms: {len(missing_terms)}")
print("\nFirst 30 missing terms:")
for tid, name in missing_terms[:30]:
    print(f"- {tid}: {name}")
