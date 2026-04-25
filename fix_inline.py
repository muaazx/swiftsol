import glob, re
for f in glob.glob('WWD*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        c = file.read()
    c = re.sub(r'<h3 style="color: #12A594;(?: font-size: 32px; margin-bottom: 15px;)?">', '<h3>', c)
    with open(f, 'w', encoding='utf-8') as file:
        file.write(c)
print('Cleaned inline styles')
