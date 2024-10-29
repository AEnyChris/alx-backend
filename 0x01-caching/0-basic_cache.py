#!/usr/bin/env python3
"""This script implements a basic cache class"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """A basic caching system class"""
    def put(self, key, item):
        """update the cache with given key and item"""
        if key and item:
            self.cache_data.update({key: item})
    
    def get(self, key):
        """
        return value of given key
        if key is None or doesn't exist return None
        """
        if key:
            return self.cache_data.get(key)
