/**
 * asyncCount is a function that simulates an asynchronous operation.
 * It returns a Promise that resolves after a random delay with an object containing the count.
 *
 * @param {number} [count=1] - The count value to be returned in the resolved Promise.
 * @returns {Promise} A Promise that resolves with an object containing the count.
 */
const asyncCount = (count = 1) => {
    return new Promise((resolve) =>
        // This function resolves the Promise with an object { data: count },
        // where count is a parameter of the outer function asyncCount.
        setTimeout(() => resolve({ data: count }), Math.random() * 1000)
    );
};

// Exporting asyncCount function
export { asyncCount };