<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recipe</title>
  
  <style>
    
    .div {
  width:0px;
  border: 15px solid green;
  padding:0px;
  margin:0px;
  
}
/* Recipe Page Styles */
.recipe-page {
  background-color:palegreen;
  padding: 50px;
  text-align:center /* Text aligned left */
  margin: 10px;
}

.recipe-header {
  background-color: #5a9;
  color: rgb(214, 199, 199);
  padding: 30px;
  margin: 30px;
  font-size: 50px;
  text-align: center;
  
}

.recipe-description {
  margin: 20px ;
  padding: 20px;
  font-style: italic;
  background-color:aqua;
  text-align: center;

}
ul{
  text-align: left;
}
ol{
  text-align: left;
}

.recipe-section {
  background-color: #5a9;
  color: rgb(214, 199, 199);
  padding: 10px;
  font-size: 24px;
  text-align: center;
  margin: 15px 0;
}

.recipe-section h2 {
  border: 10px;
  margin: 5px;
  padding: 5px;
  color: #b23;
}

.recipe-footer {
  text-align: right; /* Footer aligned right */
  font-size: 12px;
}

  </style>
</head>
<body>
  <!-- Recipe Page -->
  <div class="recipe-page">
    <header class="recipe-header"> Apple Pie</header>
    <div class="recipe-description">
      This easy apple pie recipe belongs to my mother. I make it all the time when I want a simple homemade pie. <br>
      I love it! I often add a dash of nutmeg to the apple filling.
    </div>
    <section class="recipe-section">
      <h2>Ingredients</h2>
      <ul>
        <li>
          ¾ cup white sugar, or more to taste
          </li>
        <li>
          1 teaspoon ground cinnamon
        </li>
        <li>
          6 cups thinly sliced apples
          </li>
          <li>
            1 tablespoon butter
          </li>
      </ul><br>
    </section>
    <section class="recipe-section">
      <h2>Instructions</h2>
      <ol>
        <li>Preheat oven to 375°F (190°C).</li>
        <li>In a bowl, mix the sugar and cinnamon.</li>
        <li>Toss the apples in the sugar-cinnamon mixture.</li>
      </ol><br>
    </section><br>
    <footer class="recipe-footer">© 2023 by Your Name. All rights reserved.</footer>
  </div>





 

// obj = {
//     'GET' : {
//         '/' : () => {},
//         '/users' : () => {},
//     },
//     'PUT' : {
//         '/' : () => {},
//         '/users' : () => {},
//     },
//     'POST' : {
//         '/' : () => {},
//         '/users' : () => {},
//     },
//     'DELETE' : {
//         '/' : () => {},
//         '/users' : () => {},
//     },

// }

// const obj = {
//     GET: {
//         '/':getdashboardpage, 
//         '/login' : getloginPage,
//         '/profile': getprofilePage,
//     },
//     POST: {
//         '/login': postLoginRequest,
//     }
// }   

// const http = require('http');   
// const url = require('url');

// const getdashboardpage = (req, res) => res.end('Dashboard Page');
// const getloginPage = (req, res) => res.end('Login Page');
// const getprofilePage = (req, res) => res.end('Profile Page');
// const postLoginRequest = (req, res) => res.end('Handling POST Login');


const http = require('http');
const url = require('url');

// Handlers (dummy functions for now)
const getdashboardpage = (req, res) => res.end('Dashboard Page');
const getloginPage = (req, res) => res.end('Login Page');
const getprofilePage = (req, res) => res.end('Profile Page');
const postLoginRequest = (req, res) => res.end('Handling POST Login');

// Route map
const obj = {
    GET: {
        '/': getdashboardpage,
        '/login': getloginPage,
        '/profile': getprofilePage,
    },
    POST: {
        '/login': postLoginRequest,
    }
};

// Server logic
const server = http.createServer((req, res) => {
    const method = req.method;
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    const methodRoutes = obj[method];

    if (methodRoutes && methodRoutes[pathname]) {
        methodRoutes[pathname](req, res); // Call the corresponding handler
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
