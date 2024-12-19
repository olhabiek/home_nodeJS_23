var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
// Задание 1: Обработка цепочки промисов с async/await
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve("Completed after ".concat(ms, " ms"));
    }, ms);
  });
}
function processPromisesSequentially() {
  return __awaiter(this, void 0, void 0, function () {
    var result1, result2, result3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, delay(1000)];
        case 1:
          result1 = _a.sent();
          console.log(result1);
          return [4 /*yield*/, delay(2000)];
        case 2:
          result2 = _a.sent();
          console.log(result2);
          return [4 /*yield*/, delay(1500)];
        case 3:
          result3 = _a.sent();
          console.log(result3);
          return [2 /*return*/];
      }
    });
  });
}
// Задание 2: Асинхронная обработка данных из массива
function processStrings(strings) {
  return __awaiter(this, void 0, void 0, function () {
    var promises;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          promises = strings.map(function (str) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                return resolve(str.toUpperCase());
              }, 1000);
            });
          });
          return [4 /*yield*/, Promise.all(promises)];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}
// Задание 3: Обработка ошибки в параллельных промисах
function handleErrorInPromises() {
  return __awaiter(this, void 0, void 0, function () {
    var promise1, promise2, promise3, results, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          promise1 = delay(1000);
          promise2 = delay(2000);
          promise3 = new Promise(function (_, reject) {
            return setTimeout(function () {
              return reject("Error in Promise 3");
            }, 1500);
          });
          _a.label = 1;
        case 1:
          _a.trys.push([1, 3, , 4]);
          return [4 /*yield*/, Promise.all([promise1, promise2, promise3])];
        case 2:
          results = _a.sent();
          console.log(results);
          return [3 /*break*/, 4];
        case 3:
          error_1 = _a.sent();
          console.error("Caught error: ".concat(error_1));
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
}
// Задание 4: Асинхронная функция с динамическим временем выполнения
function dynamicDelay(numbers) {
  return __awaiter(this, void 0, void 0, function () {
    var promises, results;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          promises = numbers.map(function (num) {
            return new Promise(function (resolve) {
              return setTimeout(function () {
                return resolve("Resolved after ".concat(num, " ms"));
              }, num);
            });
          });
          return [4 /*yield*/, Promise.all(promises)];
        case 1:
          results = _a.sent();
          console.log(results);
          return [2 /*return*/];
      }
    });
  });
}
// Запуск всех заданий
function main() {
  return __awaiter(this, void 0, void 0, function () {
    var processedStrings;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.log("Задание 1:");
          return [4 /*yield*/, processPromisesSequentially()];
        case 1:
          _a.sent();
          console.log("\nЗадание 2:");
          return [
            4 /*yield*/,
            processStrings(["hello", "world", "typescript"]),
          ];
        case 2:
          processedStrings = _a.sent();
          console.log(processedStrings);
          console.log("\nЗадание 3:");
          return [4 /*yield*/, handleErrorInPromises()];
        case 3:
          _a.sent();
          console.log("\nЗадание 4:");
          return [4 /*yield*/, dynamicDelay([1000, 2000, 1500])];
        case 4:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
}
main();
