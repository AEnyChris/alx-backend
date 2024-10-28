#!/usr/bin/env python3
"""
This script defines as function `index_range`:
The function returns a tuple of start and end index
"""
from typing import List, Tuple
import csv
import math


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''
    returns a two sized tuple with the
    start and end of the index range
    '''
    return (page - 1) * page_size, page_size * page


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """retuns page according to index range"""
        assert type(page) == int and type(page_size) == int
        assert page > 0 and page_size > 0
        idxs = index_range(page, page_size)
        data = self.dataset()
        if idxs[0] > len(data) or idxs[1] > len(data):
            return []
        return data[idxs[0]: idxs[1]]
        '''
        try:
            idxs = index_range(page, page_size)
            return self.dataset()[idxs[0]: idxs[1]]
        except IndexError:
            return []
        '''
