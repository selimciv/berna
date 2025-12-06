import os
import datetime
import base64
import re

def get_base64_mime(filepath):
    ext = os.path.splitext(filepath)[1].lower()
    if ext == '.png': return 'image/png'
    if ext == '.jpg' or ext == '.jpeg': return 'image/jpeg'
    if ext == '.gif': return 'image/gif'
    if ext == '.svg': return 'image/svg+xml'
    if ext == '.ttf': return 'font/ttf'
    if ext == '.woff': return 'font/woff'
    if ext == '.woff2': return 'font/woff2'
    return 'application/octet-stream'

def file_to_base64(filepath):
    with open(filepath, 'rb') as f:
        encoded = base64.b64encode(f.read()).decode('utf-8')
    mime = get_base64_mime(filepath)
    return f"data:{mime};base64,{encoded}"

def process_css(css_content, base_dir):
    # Matches url('path/to/file') or url("path/to/file") or url(path/to/file)
    # We need to be careful with capturing groups
    pattern = re.compile(r'url\(([\'"]?)(.*?)\1\)')
    
    def replace_url(match):
        quote = match.group(1)
        url = match.group(2)
        
        # Skip data URLs
        if url.startswith('data:'):
            return match.group(0)
            
        # Resolve path
        # CSS is usually relative to the CSS file, but here we assume style.css is in root for simplicty,
        # OR we handle the fact that style.css references assets/fonts/...
        # The base_dir passed here is the root of the project.
        
        # If url starts with ../ it refers to parent. 
        # But in our structure: style.css is in root.
        # url('school_bg.png') -> ./school_bg.png
        # url('assets/fonts/...') -> ./assets/fonts/...
        
        full_path = os.path.join(base_dir, url.split('?')[0].split('#')[0]) # remove query/hash
        
        if os.path.exists(full_path):
            print(f"Embedding: {url}")
            b64_data = file_to_base64(full_path)
            return f'url({quote}{b64_data}{quote})'
        else:
            print(f"Warning: Asset not found: {full_path}")
            return match.group(0)

    return pattern.sub(replace_url, css_content)

def build():
    root_dir = os.getcwd()
    index_path = os.path.join(root_dir, 'index.html')
    
    with open(index_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Automatic Version Update
    now = datetime.datetime.now()
    # Format: VDD.MM.YYYY.HH.MM
    new_version = f"V{now.strftime('%d.%m.%Y.%H.%M')}"
    
    # Update version in HTML content (looking for existing V...)
    # Pattern matches: <div class="app-info"> V...
    version_pattern = re.compile(r'(<div class="app-info">\s*)(V[\d\.]+)')
    
    if version_pattern.search(html_content):
        # Update the HTML content in memory
        html_content = version_pattern.sub(fr'\g<1>{new_version}', html_content)
        
        # Write back to index.html to persist the change check
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
            
        print(f"Updated index.html version to: {new_version}")
        version = new_version
        output_filename = f'Berna_VGC_{version}.html'
    else:
        print("Warning: Version not found, using default name.")
        output_filename = 'Berna_VGC_Game.html'

    output_path = os.path.join(root_dir, output_filename)
        
    # 1. Inline CSS
    # Find <link rel="stylesheet" href="style.css">
    # We assume standard format
    css_link_pattern = re.compile(r'<link\s+rel="stylesheet"\s+href="style.css"\s*>')
    
    if os.path.exists('style.css'):
        with open('style.css', 'r', encoding='utf-8') as f:
            css_content = f.read()
        
        print("Processing CSS assets...")
        processed_css = process_css(css_content, root_dir)
        style_block = f'<style>\n{processed_css}\n</style>'
        
        html_content = css_link_pattern.sub(style_block, html_content)
    else:
        print("Error: style.css not found")

    # 2. Inline Javascript
    # scripts to inline: settings.js, script.js
    scripts = ['settings.js', 'script.js']
    
    for script_name in scripts:
        pattern = re.compile(f'<script\s+src="{script_name}"\s*></script>')
        if os.path.exists(script_name):
            with open(script_name, 'r', encoding='utf-8') as f:
                js_content = f.read()
            
            print(f"Inlining {script_name}...")
            # Wrap in script tag
            js_block = f'<script>\n{js_content}\n</script>'
            
            # Use string replacement instead of re.sub to avoid escaping issues
            match = pattern.search(html_content)
            if match:
                html_content = html_content[:match.start()] + js_block + html_content[match.end():]
        else:
            print(f"Error: {script_name} not found")

    # 3. Write Output
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
        
    print(f"Build Complete! Output: {output_path}")
    print(f"Size: {os.path.getsize(output_path) / 1024 / 1024:.2f} MB")

if __name__ == '__main__':
    build()
