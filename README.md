### Q.No.1 => Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

#### Ans=> We have two different table 'Product' and 'Product_Category'. Product table has 'category_id' which represent 'id' of particular category of that product. This 'category_id' in 'Product' table match with '_id' of 'Product_Category'.

### Q.No.2 => How could you ensure that each product in the "Product" table has a valid category assigned to it?

#### Ans=> We have an unique '_id' key in every entities for identification. We take this unique '_id' for valid entity. According to this, we can take '_id' of 'Product_Category' in 'Product' table as a key 'category_id'. When adding a new product, ensure that the 'category_id' match an existing 'category_id'.