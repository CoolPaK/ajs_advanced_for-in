export function orderByProps(obj, sortOrder) {
    const sortedProps = [];

    // Add properties in the order defined by sortOrder
    for (const key of sortOrder) {
        if (obj.hasOwnProperty(key)) {
            sortedProps.push({ key, value: obj[key] });
        }
    }

    // Sort remaining properties alphabetically
    Object.keys(obj)
        .filter(key => !sortOrder.includes(key))
        .sort()
        .forEach(key => {
            sortedProps.push({ key, value: obj[key] });
        });

    return sortedProps;
}