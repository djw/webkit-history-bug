export default function handler(request, response) {
  response.setHeader("Content-Type", "text/html");
  response
    .status(200)
    .send(
      '<html lang="en"><body><a href="https://example.com/">Click Me</a></body> </html>'
    );
}
