const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Asus\\Downloads\\progenneww';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace ? or âš¡ with ⚡
    let newContent = content.replace(/>Contact Us (\?|âš¡)<\/a>/g, '>Contact Us ⚡</a>');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Fixed ' + file);
    }
});
