# LWCT dictionary data

Bundled Turkish definitions: **English-Turkish FreeDict Dictionary 0.3**.
Copyright (C) 1999–2017 by the authors listed in the supplied TEI header.
Original author Mehmet Ali Vardar; conversion Michael Bunk; subsequent work includes Piotr Bański and Sebastian Humenda.

Source: https://github.com/freedict/fd-dictionaries/tree/master/eng-tur
License: GNU GPL version 2 or any later version. Full terms in DICTIONARY-LICENSE.txt.
The original source, including the complete attribution and license header, is supplied in eng-tur.tei.gz.

Modifications (2026-10-05): convert TEI to JSON; lowercase headwords; collapse whitespace; join translation equivalents within each sense; remove terminal numbered homograph suffixes; split comma-separated spellings; merge duplicate meanings. No machine translation was used. The resulting dictionary-data.json is distributed under GPL-2.0-or-later. Run convert-dictionary.py to regenerate it with Python's standard library.

There are 34,975 distinct normalized headwords. 5,741 of the original 10,000 frequency-list records match directly. Additional LWCT notes and suggested roots cover some other entries; they do not constitute full coverage. Proper names, subtitle fragments and rare forms may have no definition. Morphology suggestions are explicitly labeled as possible roots, not guaranteed translations. The source is an older dictionary and may contain old spellings or imperfectly split senses.

Bundled English definitions: WordNet database from the wordnet-db 3.1.14 distribution, https://wordnet.princeton.edu/ . License and copyright are reproduced in ENGLISH-LICENSE.md. Selected the 7,297 headwords matching the frequency catalogue, retaining parts of speech and sense order from the index files. Parsed quoted usage examples from glosses; normalized underscores to spaces. One additional pronoun entry (you) is an original LWCT note. Total: 7,298 English entries. This dataset is not CEFR-graded. No Webster/adambom dataset is included.

Optional up-to-date English results and audio: https://dictionaryapi.dev/ . Entry-specific source and license links are preserved in results and saved uses. Availability is not guaranteed. Failure never removes bundled definitions. The standard English definitions button uses bundled data, not this external API.

Frequency list: David (hermitdave), FrequencyWords / OpenSubtitles 2018, CC BY-SA 4.0. https://github.com/hermitdave/FrequencyWords . Filtered to letter/apostrophe records, deduplicated, first 10,000 retained. The list is a frequency catalogue, not certified CEFR data.

Offline: the service worker stores the application entry point and both dictionary packages after one successful online load. The UI shows offline readiness only after both dictionaries are cached. Browser storage eviction or clearing site data removes this cache. English pronunciation audio needs connectivity.
