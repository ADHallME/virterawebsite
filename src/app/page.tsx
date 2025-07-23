'use client'

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Virtera Energy</title>
          <style>
            body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
          </style>
        </head>
        <body>
          <div id="root">
            <!-- The exact index.html content will be loaded here -->
          </div>
          <script>
            // Load the index.html content
            fetch('/index.html')
              .then(response => response.text())
              .then(html => {
                document.getElementById('root').innerHTML = html;
              })
              .catch(error => {
                console.error('Error loading index.html:', error);
                document.getElementById('root').innerHTML = '<h1>Virtera Energy</h1><p>Loading...</p>';
              });
          </script>
        </body>
        </html>
      `
    }} />
  );
}
