

import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Detail } from './components/cards/PropertiesCard';

export interface Property {
  id: number;
  title: string;
  price: string;
  fullDescription: string;
  image: string;
  discoverDescription?: string;
  details?:Detail[];
  btnText: string;
  btnLink: string;
  location?: string;
  propertyType?: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: number;
  buildYear?: number;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: Record<string, string>;
  setFilter: (key: string, value: string) => void;
  searchResults: Property[];
  performSearch: () => void;
  hasSearched: boolean;
  clearFilters: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
  allProperties: Property[];
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children, allProperties }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const setFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
    setSearchResults(allProperties);
    setHasSearched(false);
  };

  const performSearch = () => {
     let results = [...allProperties];
    
     if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(property => 
        property.title.toLowerCase().includes(query) || 
        property.fullDescription.toLowerCase().includes(query) ||
        (property.discoverDescription && property.discoverDescription.toLowerCase().includes(query)) ||
        (property.location && property.location.toLowerCase().includes(query))
      );
    }
    
     Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        switch(key) {
          case "location":
            results = results.filter(property => 
              property.location && property.location.toLowerCase().includes(value.toLowerCase())
            );
            break;
          
          case "property-type":
            results = results.filter(property => 
              property.propertyType && property.propertyType.toLowerCase() === value.toLowerCase()
            );
            break;
          
          case "price-range":
            results = results.filter(property => {
              const priceNum = parseInt(property.price.replace(/[^\d]/g, ''));
              switch(value) {
                case "$100K - $300K":
                  return priceNum >= 100000 && priceNum <= 300000;
                case "$300K - $500K":
                  return priceNum >= 300000 && priceNum <= 500000;
                case "$500K - $1M":
                  return priceNum >= 500000 && priceNum <= 1000000;
                case "$1M+":
                  return priceNum >= 1000000;
                default:
                  return true;
              }
            });
            break;
          
          case "property-size":
             results = results.filter(property => {
              if (!property.size) return false;
              switch(value) {
                case "500 - 1000 sqft":
                  return property.size >= 500 && property.size <= 1000;
                case "1000 - 2000 sqft":
                  return property.size >= 1000 && property.size <= 2000;
                case "2000 - 3000 sqft":
                  return property.size >= 2000 && property.size <= 3000;
                case "3000+ sqft":
                  return property.size >= 3000;
                default:
                  return true;
              }
            });
            break;
          
          case "build-year":
            results = results.filter(property => {
              if (!property.buildYear) return false;
              switch(value) {
                case "2020 - Present":
                  return property.buildYear >= 2020;
                case "2010 - 2020":
                  return property.buildYear >= 2010 && property.buildYear <= 2020;
                case "2000 - 2010":
                  return property.buildYear >= 2000 && property.buildYear <= 2010;
                case "1990 - 2000":
                  return property.buildYear >= 1990 && property.buildYear <= 2000;
                default:
                  return true;
              }
            });
            break;
          
          default:
            results = results.filter(property => 
              property.title.toLowerCase().includes(value.toLowerCase()) ||
              property.fullDescription.toLowerCase().includes(value.toLowerCase())
            );
        }
      }
    });
    
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      filters,
      setFilter,
      searchResults,
      performSearch,
      hasSearched,
      clearFilters
    }}>
      {children}
    </SearchContext.Provider>
  );
};