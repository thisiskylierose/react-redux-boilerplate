module.exports = ({ body, title, state }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="./assets/styles/bundle.css" />
  </head>
  <body>
    <div id="root" style="height: 100%;">${body}</div>
  </body>
  <script>window.__API__ = ${state};</script>
  <script src="./assets/scripts/bundle.js"></script>
</html>
`;
