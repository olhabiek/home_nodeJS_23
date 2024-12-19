// Задание 1: Обработка цепочки промисов с async/await
function delay(ms: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Completed after ${ms} ms`), ms)
  );
}

async function processPromisesSequentially() {
  const result1 = await delay(1000); // 1 секунда
  console.log(result1);

  const result2 = await delay(2000); // 2 секунды
  console.log(result2);

  const result3 = await delay(1500); // 1.5 секунды
  console.log(result3);
}

// Задание 2: Асинхронная обработка данных из массива
async function processStrings(strings: string[]): Promise<string[]> {
  const promises = strings.map(
    (str) =>
      new Promise<string>((resolve) => {
        setTimeout(() => resolve(str.toUpperCase()), 1000);
      })
  );
  return await Promise.all(promises);
}

// Задание 3: Обработка ошибки в параллельных промисах
async function handleErrorInPromises() {
  const promise1 = delay(1000);
  const promise2 = delay(2000);
  const promise3 = new Promise<string>((_, reject) =>
    setTimeout(() => reject("Error in Promise 3"), 1500)
  );

  try {
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results);
  } catch (error) {
    console.error(`Caught error: ${error}`);
  }
}

// Задание 4: Асинхронная функция с динамическим временем выполнения
async function dynamicDelay(numbers: number[]) {
  const promises = numbers.map(
    (num) =>
      new Promise<string>((resolve) =>
        setTimeout(() => resolve(`Resolved after ${num} ms`), num)
      )
  );
  const results = await Promise.all(promises);
  console.log(results);
}

// Запуск всех заданий
async function main() {
  console.log("Задание 1:");
  await processPromisesSequentially();

  console.log("\nЗадание 2:");
  const processedStrings = await processStrings([
    "hello",
    "world",
    "typescript",
  ]);
  console.log(processedStrings);

  console.log("\nЗадание 3:");
  await handleErrorInPromises();

  console.log("\nЗадание 4:");
  await dynamicDelay([1000, 2000, 1500]);
}

main();
