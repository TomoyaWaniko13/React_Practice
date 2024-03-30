// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved'); // resolved = asynchronous operation has completed successfully.
        }, 2000);
    })
}

async function asyncCall() {
    console.log('calling');

    // await keyword to pause the execution of the function until a Promise is resolved.
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}

asyncCall();

function asyncCall2() {
    console.log('calling');
    resolveAfter2Seconds().then((result) => console.log(result));
    // Expected output: "resolved"
}

asyncCall2();