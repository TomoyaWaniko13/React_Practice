const asyncCount = (count = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: count }), Math.random() * 2000);
  });
};

export default asyncCount;
