function Logger(name, before, after, coments = "") {
  this.name = name;
  this.before = before;
  this.after = after;
  this.coments = coments;
}

Logger.prototype.logInfo = function() {
  console.log(
    `${this.name} begin: ${this.before.toString().substing(8, 13)} end: ${
      this.after
    } difference: ${this.after - this.before}; ${this.coments}`
  );
};
export { Logger };
