import os

dropdown_active = '''
            <div class="nav-dropdown">
                <a href="investor.html" class="nav-link active">Investors</a>
                <div class="nav-dropdown-menu">
                    <a href="board.html">Board & KMP</a>
                    <a href="committees.html">Committees</a>
                    <a href="policies.html">Policies</a>
                    <a href="financial.html">Financials</a>
                    <a href="ipo.html">IPO</a>
                    <a href="announcements.html">Announcements</a>
                    <a href="shareholding.html">Shareholding</a>
                    <a href="press.html">Press</a>
                    <a href="meetings.html">Meetings</a>
                    <a href="esop.html">ESOP</a>
                    <a href="credit.html">Credit</a>
                    <a href="rta.html">RTA</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
'''.strip()

dropdown_inactive = dropdown_active.replace('nav-link active', 'nav-link')

for file in os.listdir('.'):
    if file.endswith('.html'):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We need to replace the single Investors link with the dropdown
        # The link might be indented differently, so let's be careful.
        
        target_active = '<a href="investor.html" class="nav-link active">Investors</a>'
        target_inactive = '<a href="investor.html" class="nav-link">Investors</a>'
        
        if target_active in content:
            content = content.replace(target_active, dropdown_active)
        elif target_inactive in content:
            content = content.replace(target_inactive, dropdown_inactive)
            
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
print("Updated HTML files.")
