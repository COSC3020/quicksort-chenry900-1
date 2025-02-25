function quicksort(array) {
    var stack = [];

    if(array.length == 0)
        return array;

    stack.push(0);
    stack.push(array.length - 1);
    while (stack.length > 0) {
        var high = stack.pop();
        var low = stack.pop();
        var pivot = sort(array, low, high);
        if (low < pivot - 1) {
            stack.push(low);
            stack.push(pivot - 1);
        }
        if (pivot + 1 < high) {
            stack.push(pivot + 1);
            stack.push(high);
        }
    }
    return array;
}

function sort(array, low, high) {
    var pivot = array[low];
    var left = low + 1;
    var right = high;
    var swap;

    while (true) {
        while (left <= right && array[left] <= pivot)
            left++;
        while (left <= right && array[right] >= pivot) {
            right--;
        }
        if (left > right)
            break;
        swap = array[left];
        array[left] = array[right];
        array[right] = swap;
    }

    swap = array[low];
    array[low] = array[right];
    array[right] = swap;

    return right;
}
