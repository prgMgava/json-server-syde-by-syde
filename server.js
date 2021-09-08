const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/600/users$1",
  "/products*": "/640/products$1",
  "/markers*": "/640/markers$1",
});

app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
