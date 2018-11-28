var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "hermione@hogwarts.edu",
    name: "hermione grandger"
});

newUser.posts.push({
    title: "How to brew polyjuice portion",
    content: "just kidding, go to portion class."
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

User.findOne({name: "hermione grandger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things i hate",
            content: "voldmort, voldmort, voldmort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        })
    };