// console.log("Hello World")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // 'text/html => html type backend'
// putting html type file in backend site 
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Before and after pseudo selector</title>
      <link href="https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" rel="stylesheet">
      <style>
          body {
              margin: 0;
              padding: 0;
              background-color: black;
              color: white;
          }
  
          header::before {
  
              /* IMP Techniques */
              /* To Add Images Randomly on Background */
              background: url('https://source.unsplash.com/collection/190727/1600x900') no-repeat center center/cover;
              content: "";
  
              /* position is set absolute so that we can set its position according to our choice */
              position: absolute;
  
              /* Setting top and left equal to 0 removes space/gap in top and left */
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
  
              /* z-index set as -1 as this CSS should be stacked below the other CSS */
              z-index: -1;
  
              /* Make bg image light */
              opacity: 0.3;
          }
  
          .navigation {
              font-family: 'Bree Serif', serif;
              font-size: 20px;
              display: flex;
          }
  
          li {
              list-style: none;
              padding: 20px 23px;
          }
  
          section {
              height: 344px;
              font-family: 'Bree Serif', serif;
              margin: 3px 230px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
          }
  
          h1 {
              font-size: 4rem;
          }
  
          p {
              text-align: center;
          }
  
          /* section::after{
          content:"this is a content"
      } */
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contact Us</li>
              </ul>
          </nav>
      </header>
      <section>
          <h1> Welcome to Coding World</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error ratione doloribus sed dolorum,
              ipsum cumque reprehenderit dignissimos architecto veniam optio sint aliquam consectetur corrupti vero
              similique velit. Possimus eum consequatur delectus quia magni.</p>
      </section>
  
  </body>
  
  </html>   `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});