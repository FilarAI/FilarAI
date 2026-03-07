const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.js') || file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // We don't want to replace bg-white inside globals.css or if it already has dark:bg-dark-bg
    if (content.includes('bg-white') && !content.includes('dark:bg-dark-bg') && !file.includes('layout.js')) {
        content = content.replace(/bg-white/g, 'bg-white dark:bg-dark-bg');
        changed = true;
    }

    // Add text color adjustments
    if (content.includes('text-text-primary') && !content.includes('dark:text-white') && !file.includes('layout.js')) {
        content = content.replace(/text-text-primary/g, 'text-text-primary dark:text-white');
        changed = true;
    }

    if (content.includes('bg-gray-light') && !content.includes('dark:bg-[#1A1A1A]')) {
        content = content.replace(/bg-gray-light/g, 'bg-gray-light dark:bg-[#1A1A1A]');
        changed = true;
    }

    if (content.includes('border-gray-border') && !content.includes('dark:border-white/10')) {
        content = content.replace(/border-gray-border/g, 'border-gray-border dark:border-white/10');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated:', file);
    }
});
