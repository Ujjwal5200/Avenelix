import re
html = open('index.html', encoding='utf-8').read()
tags = ['section','div','nav','header','footer','main','script','style','body','html']
o = sum(len(re.findall(r'<%s\b' % t, html)) for t in tags)
c = sum(len(re.findall(r'</%s>' % t, html)) for t in tags)
print('open(approx):', o, 'close:', c)
for k in ['id="skeleton"','id="dotnav"','id="toTop"','class="marquee"','id="cursorGlow"','Space+Grotesk']:
    print(k, k in html)
print('total bytes', len(html))
