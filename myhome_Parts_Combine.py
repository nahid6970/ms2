import re

main_file = "C:\\ms2\\myhome_input.html"  # change this to your actual main file
output_file = "C:\\ms2\\myhome.html"

# Regex to match: <!-- import path -->
import_pattern = re.compile(r'<!--\s*import\s+([^\s]+)\s*-->')

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"<!-- ERROR: File '{path}' not found -->"

def process_main_file():
    with open(main_file, 'r', encoding='utf-8') as f:
        content = f.read()

    def replace_import(match):
        path = match.group(1)
        included_html = read_file(path)
        return f"\n<!-- Start of {path} -->\n{included_html}\n<!-- End of {path} -->\n"

    final_content = re.sub(import_pattern, replace_import, content)

    with open(output_file, 'w', encoding='utf-8') as out:
        out.write(final_content)

    print(f"Combined file saved as '{output_file}'.")

if __name__ == "__main__":
    process_main_file()
