class Logger{
constructor(name, before, after, coments = ""){
  this.name = name;
  this.before = before;
  this.after = after;
  this.coments = coments;
};

logInfo = () =>{
  console.log(
    `${this.name} begin: ${this.before
      .toString()
      .substring(8, 13)} end: ${this.after.toString()
        .substring(8, 13)}; difference: ${this.after - this.before}; ${this.coments}`
  );
};
};

export { Logger };
