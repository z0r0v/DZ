const log = (name, before, after, coments = "") => {
  console.log(
    `${name} begin: ${before
      .toString()
      .substring(8, 19)} end: ${after.toString().substring(8, 13)}; difference: ${after -
      before};${coments}`
  );
};

export default log;
