#!/usr/bin/env python3
"""This script implements a basic cache class"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """
    A basic caching system class. The FIFO implementation.
    cache must not be more than 4 items
    """
    def put(self, key, item):
        """update the cache with given key and item"""
        if key and item:
            self.cache_data.update({key: item})
        if len(self.cache_data) > self.MAX_ITEMS:
            print(f"DISCARD: {list(self.cache_data.keys())[0]}")
            self.cache_data.pop(list(self.cache_data.keys())[0])

    def get(self, key):
        """
        return value of given key
        if key is None or doesn't exist return None
        """
        if key:
            return self.cache_data.get(key)
