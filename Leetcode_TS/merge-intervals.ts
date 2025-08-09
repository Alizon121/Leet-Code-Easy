function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals;
   
       // Step 1: Sort by start time
       intervals.sort((a, b) => a[0] - b[0]);
   
       const merged: number[][] = [];
       let current = intervals[0];
   
       for (let i = 1; i < intervals.length; i++) {
           // If overlapping, merge
           if (current[1] >= intervals[i][0]) {
               current[1] = Math.max(current[1], intervals[i][1]);
           } else {
               // No overlap → push current and move to next
               merged.push(current);
               current = intervals[i];
           }
       }
   
       // Push the last interval
       merged.push(current);
   
       return merged;
   };