function countPageHitsAndMisses(pages, frameSize) {
    let queue = [];
    let set = new Set();
    let hits = 0;
    let misses = 0;
  
    for (let page of pages) {
      if (set.has(page)) {
        hits++;
      } else {
        misses++;
        if (queue.length === frameSize) {
          let oldest = queue.shift();
          set.delete(oldest);
        }
        queue.push(page);
        set.add(page);
      }
    }
  
    return { hits, misses };
  }
  
  const pages = [1, 3, 0, 3, 5, 6, 3];
  const frameSize = 3;
  const result = countPageHitsAndMisses(pages, frameSize);
  console.log("Hits:", result.hits);
  console.log("Misses:", result.misses);
  