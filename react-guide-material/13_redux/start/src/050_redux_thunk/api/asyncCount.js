const asyncCount = (count = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: count }), Math.random() * 1000, 1000);
  });
};

export default asyncCount;
