# A few handy Python tricks


def swap_variables():
    """Swap two variables without a temporary variable."""
    a, b = 1, 2
    a, b = b, a
    return a, b


def unpack_iterable():
    """Unpack first, middle and last elements of a list."""
    numbers = [1, 2, 3, 4]
    first, *middle, last = numbers
    return first, middle, last


def merge_dictionaries():
    """Merge two dictionaries using the | operator."""
    a = {"x": 1}
    b = {"y": 2}
    return a | b


def list_comprehension():
    """Return squares of even numbers using list comprehension."""
    return [i * i for i in range(10) if i % 2 == 0]


if __name__ == "__main__":
    print("swap_variables:", swap_variables())
    print("unpack_iterable:", unpack_iterable())
    print("merge_dictionaries:", merge_dictionaries())
    print("list_comprehension:", list_comprehension())
