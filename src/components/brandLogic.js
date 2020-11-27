const brandLogic = (items, currentPage, itemsPerPage) => {
  // final result
  const sorted = {
    items: [],
    totalItems: 0,
  };
  //   total number per category
  const perCategory = 12;
  //  checking if array length > than 1 and assigning values based on that to get index of last element
  const indexOfLastItem =
    items.length > 1 ? currentPage * perCategory : currentPage * itemsPerPage;
  //  checking if array length > than 1 and assigning values based on that to get index of first element
  const indexOfFirstItem =
    items.length > 1
      ? indexOfLastItem - perCategory
      : indexOfLastItem - itemsPerPage;

  items.forEach((element, index) => {
    // empty object
    const obj = {};
    // setting current items
    const currentItems = items[index].brands.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    // assigning obj category name to array object property name
    obj.categoryName = element.categoryName;
    // setting obj brands property to currentItems
    obj.brands = currentItems;
    // adding total value of all objects in every category together
    sorted.totalItems = sorted.totalItems + items[index].brands.length;
    // adding created object to sorted property  called item
    sorted.items.push(obj);
  });

  return sorted;
};

export default brandLogic;
