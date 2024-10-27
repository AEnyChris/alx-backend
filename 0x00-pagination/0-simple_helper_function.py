#!/usr/bin/env python3
"""
This script defines as function `index_range`:
The function returns a tuple of start and end index
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''
    returns a two sized tuple with the
    start and end of the index range
    '''
    return (page - 1) * page_size, page_size * page
