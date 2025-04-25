function predict(pages, frames, index) {
    let farthest = index;
    let res = -1;
  
    for (let i = 0; i < frames.length; i++) {
      let j;
      for (j = index; j < pages.length; j++) {
        if (frames[i] === pages[j]) {
          if (j > farthest) {
            farthest = j;
            res = i;
          }
          break;
        }
      }
      if (j === pages.length) return i;
    }
  
    return res === -1 ? 0 : res;
  }
  
  function optimalPageReplacement(pages, frameSize) {
    let frames = [];
    let hits = 0;
  
    for (let i = 0; i < pages.length; i++) {
      let page = pages[i];
  
      if (frames.includes(page)) {
        hits++;
        continue;
      }
  
      if (frames.length < frameSize) {
        frames.push(page);
      } else {
        let pos = predict(pages, frames, i + 1);
        frames[pos] = page;
      }
    }
  
    let misses = pages.length - hits;
    return { hits, misses };
  }
  
  const pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3, 1];
  const frameSize = 4;
  const result = optimalPageReplacement(pages, frameSize);
  console.log("Hits:", result.hits);
  console.log("Misses:", result.misses);
  