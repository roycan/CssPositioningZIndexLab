from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)

    def end_headers(self):
        # Enable CORS for the Replit webview
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run(server_class=HTTPServer, handler_class=Handler):
    server_address = ('0.0.0.0', 8000)
    httpd = server_class(server_address, handler_class)
    print('Server running at http://0.0.0.0:8000/')
    httpd.serve_forever()

if __name__ == '__main__':
    run()