module.exports = {
  port: process.env.PORT || 3040,
  mongo_uri:
    process.env.MONGO_URI ||
    "mongodb+srv://dontz3210:22456842@cluster0-gf1nz.mongodb.net/test?retryWrites=true&w=majority",
  secret: process.env.SECRET || "AintGonnaTellYa"
};
