"""Regenerate dictionary-data.json from eng-tur.tei.gz; Python standard library only.
Data: FreeDict eng-tur 0.3, GPL-2.0-or-later. Converter: CC0-1.0.
Run: python convert-dictionary.py
"""
import gzip, json, re, xml.etree.ElementTree as ET
from pathlib import Path
root=Path(__file__).resolve().parent
ns={'t':'http://www.tei-c.org/ns/1.0'}
tree=ET.fromstring(gzip.decompress((root/'eng-tur.tei.gz').read_bytes()))
entries={}
for entry in tree.findall('.//t:entry',ns):
    word=entry.find('t:form/t:orth',ns)
    if word is None: continue
    key=''.join(word.itertext()).strip().lower()
    meanings=[]
    for sense in entry.findall('.//t:sense',ns):
        value=', '.join(re.sub(r'\s+',' ',''.join(q.itertext())).strip() for q in sense.findall('.//t:quote',ns))
        if value: meanings.append(value)
    for spelling in re.split(r'\s*,\s*',re.sub(r'\s*\(\d+\)\s*$','',key)):
        if spelling: entries[spelling]=list(dict.fromkeys(entries.get(spelling,[])+meanings))
(root/'dictionary-data.json').write_text(json.dumps(entries,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
