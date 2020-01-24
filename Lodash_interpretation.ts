// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
const compact = (array: any[]): any[] =>
  array.filter(element => Boolean(element));

/* Creates an array of array values not included in the other given arrays. 
The order and references of result values are determined by the first array.*/
const difference = (array: any[], values: any[]): any[] =>
  array.filter(element => values.indexOf(element) === -1);

// Creates a slice of array with n elements dropped from the beginning.
const drop = (array: any[], count: number = 1): any[] => array.slice(count);

// Fills elements of array with value from start up to, but not including, end.
const fill = (
  array: any[],
  value: any,
  start: number = 0,
  end: number = array.length
) => {
  end = end <= array.length ? end : array.length;
  for (let i = start; i < end; i++) array[i] = value;
  return array;
};

// Recursively flattens array.
const flatternDeep = (array: any[]) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "object")
      result = [...result, ...flatternDeep(array[i])];
    else result = [...result, array[i]];
  }
  return result;
};
