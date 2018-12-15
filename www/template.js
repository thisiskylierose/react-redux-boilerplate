module.exports = ({ body, title }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/assets/styles/bundle.css" />
  </head>
  <body>
    <div id="root">${body}</div>
  </body>
  <script src="/assets/scripts/bundle.js"></script>
</html>
`;
