console.time("label");
console.timeLog("label");
console.timeLog("label", "Hello World!");
console.timeLog("label", "a %s b", "c", "d");
console.timeLog("label", 0, -0, 123, -123, 123.567, -123.567, Infinity, -Infinity);
console.timeLog("label", true, false);
console.timeLog("label", null, undefined);
console.timeLog("label", Symbol("Symbol Description"));
console.timeLog("label", new Date(Math.pow(2, 34) * 56));
console.timeLog("label", [123, 456, 789]);
console.timeLog("label", { name: "foo" });
console.timeLog("label", { a: 123, b: 456, c: 789 });
console.timeEnd("label");