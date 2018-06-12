function login(username, password, callback) {
  var connection = mysql({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'users'
  });

  connection.connect();

  var query = "SELECT id, username, password " +
    "FROM users WHERE username = ?";

  connection.query(query, [username], function (err, results) {
    if (err) return callback(err);
    if (results.length === 0) return callback(new WrongUsernameOrPasswordError(email));
    var user = results[0];

    bcrypt.compare(password, user.password, function (err, isValid) {
      if (err) {
        callback(err);
      } else if (!isValid) {
        callback(new WrongUsernameOrPasswordError(username));
      } else {
        callback(null, {
          id: user.id.toString(),
          username: user.username,
        });
      }
    });

  });
}