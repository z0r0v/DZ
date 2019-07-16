const log = (name, before, after, coments = "") => {
  console.log(
    `${name} begin: ${before
      .toString()
      .substring(8, 19)} end: ${after.toString().substring(8, 13)};${after -
      before};${coments}`
  );
};

export default log;
