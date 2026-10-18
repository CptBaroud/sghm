"""Extract results for the names in data/athletes.txt from data/openipf/openipf.csv into data/athletes.json."""
import csv
import json
import sys
import unicodedata
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / 'data'


def norm(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if not unicodedata.combining(c)).casefold().strip()


def num(s):
    return float(s) if s else None


def lift(row, name):
    return {**{f'attempt{i}': num(row[f'{name}{i}Kg']) for i in range(1, 5)}, 'best3': num(row[f'Best3{name}Kg'])}


def result(row):
    return {
        'date': row['Date'], 'federation': row['Federation'], 'parentFederation': row['ParentFederation'],
        'meetName': row['MeetName'], 'meetCountry': row['MeetCountry'], 'meetState': row['MeetState'],
        'meetTown': row['MeetTown'], 'country': row['Country'], 'state': row['State'], 'sex': row['Sex'],
        'event': row['Event'], 'equipment': row['Equipment'], 'age': num(row['Age']), 'ageClass': row['AgeClass'],
        'division': row['Division'], 'bodyweightKg': num(row['BodyweightKg']), 'weightClassKg': row['WeightClassKg'],
        'squat': lift(row, 'Squat'), 'bench': lift(row, 'Bench'), 'deadlift': lift(row, 'Deadlift'),
        'totalKg': num(row['TotalKg']), 'place': row['Place'], 'dots': num(row['Dots']), 'wilks': num(row['Wilks']),
        'glossbrenner': num(row['Glossbrenner']), 'goodlift': num(row['Goodlift']),
        'tested': row['Tested'], 'sanctioned': row['Sanctioned'],
    }


lines = (DATA / 'athletes.txt').read_text(encoding='utf-8').splitlines()
wanted = {norm(l): l.strip() for l in lines if l.strip() and not l.startswith('#')}
found = {}
with open(DATA / 'openipf' / 'openipf.csv', newline='', encoding='utf-8') as f:
    for row in csv.DictReader(f):
        key = norm(row['Name'])
        if key in wanted:
            found.setdefault(key, {'name': row['Name'], 'results': []})['results'].append(result(row))

for key, name in wanted.items():
    if key not in found:
        print(f'not found: {name}', file=sys.stderr)
athletes = [found[k] for k in wanted if k in found]
for a in athletes:
    a['results'].sort(key=lambda r: r['date'])
(DATA / 'athletes.json').write_text(json.dumps({'athletes': athletes}, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
print(f'{len(athletes)}/{len(wanted)} athletes, {sum(len(a["results"]) for a in athletes)} results -> data/athletes.json')
