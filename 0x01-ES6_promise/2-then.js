export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
    console.log('Got a response from the API');
    return Promise.resolve({
      status: 200,
      body: 'success',
    });
  }, () => Promise.reject(new Error()))
}
