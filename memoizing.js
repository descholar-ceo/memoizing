
// stores data (value) to the cache by key
async function cache_store(key, value) {
  await cache.set(key, value);
}

// retrieves data by key
async function cache_retrieve(key) {
  return await cache.get(key);
}

// fetches data from slow data source
async function slow_function(input) {
  // fetches data from a slow data-source
}

// memoizing slow_function
function memoize(slow_function) {
  async function fast_function(input) {
    const cached_result = await cache_retrieve(input);
    if (!!cached_result) {
      return cached_result;
    }
    const fresh_result = await slow_function(input);
    cache_store(input, fresh_result);
    return fresh_result;
  }
  return fast_function;
}

memoize(slow_function);
