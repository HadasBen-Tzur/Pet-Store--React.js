/**
 * @source https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
 * @param arr - array to remove duplicates from
 * @returns array with no duplicates;
 */
export const removeDuplicates = <T extends object>(arr: T[]) => {
  return arr.filter((value, index) => {
    const _value = JSON.stringify(value);
    return (
      index ===
      arr.findIndex((obj) => {
        return JSON.stringify(obj) === _value;
      })
    );
  });
};
