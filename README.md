## Requirements
- Node 8
- MongoDB

## Usage
Start server:
```
npm start
```
Start local NoSQL database:
```
npm run db
```
Execute commands from `cmd` directory.

### Example scenario
```
sh cmd/get-restaurants.sh page=1
sh cmd/get-restaurants.sh page=2
```
Creating empty restaurant:
```
sh cmd/post-restaurants.sh
```
getting `_id`
```
sh cmd/get-restaurant.sh `_id`
```
getting `ETag`
```
sh cmd/put-restaurant.sh `_id` `ETag`
```
updating restaurant

Creating two tables:
```
sh cmd/post-table.sh `restaurantId`
```
getting `_id`
```
sh cmd/get-table.sh `restaurantId` `_id`
```
getting `ETag`
```
sh cmd/put-table.sh `restaurantId` `_id` `ETag`
```
repeat action and check results:
```
sh cmd/get-tables.sh
```