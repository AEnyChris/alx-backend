#!/usr/bin/env python3
"""This script implements a basic cache class"""
from collections import OrderedDict
from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """
    A basic caching system class. The MRU implementation.
    cache must not be more than 4 items
    """
    def __init__(self):
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """update the cache with given key and item"""
        if key and item:
            if key not in self.cache_data:
                if len(self.cache_data) + 1 > self.MAX_ITEMS:
                    lr_key, _ = self.cache_data.popitem()
                    print(f'DISCARD: {lr_key}')
            self.cache_data.update({key: item})
            self.cache_data.move_to_end(key)

    def get(self, key):
        """
        return value of given key.
        if key is None or doesn't exist return None
        """
        if key and key in self.cache_data:
            self.cache_data.move_to_end(key)
            return self.cache_data.get(key)
