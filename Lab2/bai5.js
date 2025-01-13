const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error: some bug');
    }, 2000);
});

const getList = async () => {
    return fetch('https://64d8a88c5f9bf5b879ceedd9.mockapi.io/api/v1/moviesNow')
        .then((response) => response.json());
};

Promise.all([firstPromise, secondPromise, getList()])
    .then(results => {
        console.log('All promises resolved:', results);
    })
    .catch(error => {
        console.error('A promise failed:', error);
    });


Promise.allSettled([firstPromise, secondPromise, getList()])
    .then(results => {
        console.log('All promises have been processed:');
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
            } else {
                console.error(`Promise ${index + 1} rejected with reason:`, result.reason);
            }
        });
    })
    .catch(error => {
        console.error('Unexpected error:', error);
    })
    .finally(() => {
        console.log('Processing completed.');
    });
