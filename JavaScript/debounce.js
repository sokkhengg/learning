function debounce(callback, delay, immediate = false) {
  let timeID; // declare obove the scope for closure

  return function(...args) {
    clearTimeout(timeID)

    const shouldCallImmediately = timeID == null && immediate;
    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timeID = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timeID = null;
    }, delay);

  }
}

// Do not edit the line below.
exports.debounce = debounce;
