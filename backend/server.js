const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var md5 = require("md5");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/PostsDB", {
  useNewUrlParser: true,
});
// declare the schema for the posts.
const postsSchema = {
  title: String,
  content: String,
};
const Post = new mongoose.model("Post", postsSchema);

// declare the schema for the users along with the posts.
const UsersSchema = {
  name: String,
  email: String,
  password: String,
  posts: [postsSchema],
};
const User = mongoose.model("User", UsersSchema);

app.post("/register", (req, res) => {
  const name = req.body.title;
  const email = req.body.email;
  const password = md5(req.body.password);

  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  user.save((err) => {
    if (!err) res.send("Success!");
    else res.send(err);
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = md5(req.body.password);
  User.findOne({ email: email }, (err, founduser) => {
    if (!err) {
      if (founduser.password == password) res.send(founduser);
      else res.send("passkey doesn't match");
    } else res.send(err);
  });
});

app.post("/compose", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
  });
  User.findOne({ _id: id }, (err, foundUser) => {
    if (!err) {
      foundUser.posts.push(post);
      foundUser.save();
      res.send(foundUser);
    } else res.send(err);
  });
});
app.get("/", (req, res) => {
  res.send("This site is working!");
});

app.listen(3000, console.log("the server is live!"));
