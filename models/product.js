const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  save() {
    return db.execute(
      "INSERT INTO sponsors (title,imageUrl,description) VALUES ( ?, ?, ?)",
      [this.title, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM sponsors");
  }
};
