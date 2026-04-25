import glob, re
for f in glob.glob('WWD*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        c = file.read()
    c = re.sub(r'(<div class="section-8-content[^>]*>\s*)<h3>', r'\1<h3 style="color: #12A594;">', c)
    with open(f, 'w', encoding='utf-8') as file:
        file.write(c)
print('Done')
