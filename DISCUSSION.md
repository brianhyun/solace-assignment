# General

## Performance Improvements
- [ ] Use index-based querying based on frequently queried fields (e.g., `firstName`, `lastName`, `specialties`)
- [ ] Use keyset based pagination based on an ID assigned to each advocate.
- [ ] Instead of searching for the search term in all fields, search for the search term in specific fields (e.g., `firstName`, `lastName`, `specialties`). This would require search and filter functions on each column on the frontend (e.g., dropdown menus with checkboxes for specialties, range UI for years of experience, etc.).
- [ ] If the advocate data is relatively static or changes infrequently, then caching queries could be helpful.