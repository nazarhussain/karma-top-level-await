let moduleValue = "uninitialized";

await new Promise((resolve) => {
  setTimeout(() => {
    moduleValue = "initialized";
    resolve();
  }, 200);
});

export default moduleValue;
