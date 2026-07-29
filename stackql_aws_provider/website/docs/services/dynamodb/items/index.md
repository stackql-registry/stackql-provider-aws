--- 
title: items
hide_title: false
hide_table_of_contents: false
keywords:
  - items
  - dynamodb
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_item"
    values={[
        { label: 'get_item', value: 'get_item' },
        { label: 'batch_get_item', value: 'batch_get_item' }
    ]}
>
<TabItem value="get_item">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="consumed_capacity" /></td>
    <td><code>object</code></td>
    <td>The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the request asked for it. For more information, see Provisioned capacity mode in the Amazon DynamoDB Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="item" /></td>
    <td><code>object</code></td>
    <td>A map of attribute names to AttributeValue objects, as specified by ProjectionExpression.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_item">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="consumed_capacity" /></td>
    <td><code>array</code></td>
    <td>The read capacity units consumed by the entire BatchGetItem operation. Each element consists of: TableName - The table that consumed the provisioned throughput. CapacityUnits - The total number of capacity units consumed.</td>
</tr>
<tr>
    <td><CopyableCode code="responses" /></td>
    <td><code>object</code></td>
    <td>A map of table name or table ARN to a list of items. Each object in Responses consists of a table name or ARN, along with a map of attribute data consisting of the data type and attribute value.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_keys" /></td>
    <td><code>object</code></td>
    <td>A map of tables and their respective keys that were not processed with the current response. The UnprocessedKeys value is in the same form as RequestItems, so the value can be provided directly to a subsequent BatchGetItem operation. For more information, see RequestItems in the Request Parameters section. Each element consists of: Keys - An array of primary key attribute values that define specific items in the table. ProjectionExpression - One or more attributes to be retrieved from the table or index. By default, all attributes are returned. If a requested attribute is not found, it does not appear in the result. ConsistentRead - The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used. If there are no unprocessed keys remaining, the response contains an empty UnprocessedKeys map.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_item"><CopyableCode code="get_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetItem operation returns a set of attributes for the item with the given primary key. If there is no matching item, GetItem does not return any data and there will be no Item element in the response. GetItem provides an eventually consistent read by default. If your application requires a strongly consistent read, set ConsistentRead to true. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</td>
</tr>
<tr>
    <td><a href="#batch_get_item"><CopyableCode code="batch_get_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The BatchGetItem operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. BatchGetItem returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, more than 1MB per partition is requested, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for UnprocessedKeys. You can use this value to retry the operation starting with the next item to get. If you request more than 100 items, BatchGetItem returns a ValidationException with the message "Too many items requested for the BatchGetItem call." For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate UnprocessedKeys value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset. If none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchGetItem returns a ProvisionedThroughputExceededException. If at least one of the items is successfully processed, then BatchGetItem completes successfully, while returning the keys of the unread items in UnprocessedKeys. If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide. By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables. In order to minimize response latency, BatchGetItem may retrieve items in parallel. When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the ProjectionExpression parameter. If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide. BatchGetItem will result in a ValidationException if the same key is specified multiple times.</td>
</tr>
<tr>
    <td><a href="#update_item"><CopyableCode code="update_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-Key"><code>Key</code></a></td>
    <td></td>
    <td>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values). You can also return the item's attribute values in the same UpdateItem operation using the ReturnValues parameter.</td>
</tr>
<tr>
    <td><a href="#put_item"><CopyableCode code="put_item" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the ReturnValues parameter. When you add an item, the primary key attributes are the only required attributes. Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. Invalid Requests with empty values will be rejected with a ValidationException exception. To prevent a new item from replacing an existing item, use a conditional expression that contains the attribute_not_exists function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the attribute_not_exists function will only succeed if no matching item exists. To determine whether PutItem overwrote an existing item, use ReturnValues set to ALL_OLD. If the response includes the Attributes element, an existing item was overwritten. For more information about PutItem, see Working with Items in the Amazon DynamoDB Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_item"><CopyableCode code="delete_item" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value. In addition to deleting an item, you can also return the item's attribute values in the same operation, using the ReturnValues parameter. Unless you specify conditions, the DeleteItem is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</td>
</tr>
<tr>
    <td><a href="#transact_get_items"><CopyableCode code="transact_get_items" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransactItems"><code>TransactItems</code></a></td>
    <td></td>
    <td>TransactGetItems is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A TransactGetItems call can contain up to 100 TransactGetItem objects, each of which contains a Get structure that specifies an item to retrieve from a table in the account and Region. A call to TransactGetItems cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB. DynamoDB rejects the entire TransactGetItems request if any of the following is true: A conflicting operation is in the process of updating an item to be read. There is insufficient provisioned capacity for the transaction to be completed. There is a user error, such as an invalid data format. The aggregate size of the items in the transaction exceeded 4 MB.</td>
</tr>
<tr>
    <td><a href="#transact_write_items"><CopyableCode code="transact_write_items" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransactItems"><code>TransactItems</code></a></td>
    <td></td>
    <td>TransactWriteItems is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both ConditionCheck and Update the same item. The aggregate size of the items in the transaction cannot exceed 4 MB. The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects: Put — Initiates a PutItem operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met. Update — Initiates an UpdateItem operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met. Delete — Initiates a DeleteItem operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met. ConditionCheck — Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met. DynamoDB rejects the entire TransactWriteItems request if any of the following is true: A condition in one of the condition expressions is not met. An ongoing operation is in the process of updating the same item. There is insufficient provisioned capacity for the transaction to be completed. An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction. The aggregate size of the items in the transaction exceeds 4 MB. There is a user error, such as an invalid data format.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_item"
    values={[
        { label: 'get_item', value: 'get_item' },
        { label: 'batch_get_item', value: 'batch_get_item' }
    ]}
>
<TabItem value="get_item">

The GetItem operation returns a set of attributes for the item with the given primary key. If there is no matching item, GetItem does not return any data and there will be no Item element in the response. GetItem provides an eventually consistent read by default. If your application requires a strongly consistent read, set ConsistentRead to true. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.

```sql
SELECT
consumed_capacity,
item
FROM aws.dynamodb.items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_item">

The BatchGetItem operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. BatchGetItem returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, more than 1MB per partition is requested, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for UnprocessedKeys. You can use this value to retry the operation starting with the next item to get. If you request more than 100 items, BatchGetItem returns a ValidationException with the message "Too many items requested for the BatchGetItem call." For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate UnprocessedKeys value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset. If none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchGetItem returns a ProvisionedThroughputExceededException. If at least one of the items is successfully processed, then BatchGetItem completes successfully, while returning the keys of the unread items in UnprocessedKeys. If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide. By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables. In order to minimize response latency, BatchGetItem may retrieve items in parallel. When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the ProjectionExpression parameter. If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide. BatchGetItem will result in a ValidationException if the same key is specified multiple times.

```sql
SELECT
consumed_capacity,
responses,
unprocessed_keys
FROM aws.dynamodb.items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_item"
    values={[
        { label: 'update_item', value: 'update_item' }
    ]}
>
<TabItem value="update_item">

Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values). You can also return the item's attribute values in the same UpdateItem operation using the ReturnValues parameter.

```sql
UPDATE aws.dynamodb.items
SET 
TableName = '{{ TableName }}',
Key = '{{ Key }}',
AttributeUpdates = '{{ AttributeUpdates }}',
Expected = '{{ Expected }}',
ConditionalOperator = '{{ ConditionalOperator }}',
ReturnValues = '{{ ReturnValues }}',
ReturnConsumedCapacity = '{{ ReturnConsumedCapacity }}',
ReturnItemCollectionMetrics = '{{ ReturnItemCollectionMetrics }}',
UpdateExpression = '{{ UpdateExpression }}',
ConditionExpression = '{{ ConditionExpression }}',
ExpressionAttributeNames = '{{ ExpressionAttributeNames }}',
ExpressionAttributeValues = '{{ ExpressionAttributeValues }}',
ReturnValuesOnConditionCheckFailure = '{{ ReturnValuesOnConditionCheckFailure }}'
WHERE 
region = '{{ region }}' --required
AND TableName = '{{ TableName }}' --required
AND Key = '{{ Key }}' --required
RETURNING
attributes,
consumed_capacity,
item_collection_metrics;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_item"
    values={[
        { label: 'put_item', value: 'put_item' }
    ]}
>
<TabItem value="put_item">

Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the ReturnValues parameter. When you add an item, the primary key attributes are the only required attributes. Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. Invalid Requests with empty values will be rejected with a ValidationException exception. To prevent a new item from replacing an existing item, use a conditional expression that contains the attribute_not_exists function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the attribute_not_exists function will only succeed if no matching item exists. To determine whether PutItem overwrote an existing item, use ReturnValues set to ALL_OLD. If the response includes the Attributes element, an existing item was overwritten. For more information about PutItem, see Working with Items in the Amazon DynamoDB Developer Guide.

```sql
REPLACE aws.dynamodb.items
SET 
TableName = '{{ TableName }}',
Item = '{{ Item }}',
Expected = '{{ Expected }}',
ReturnValues = '{{ ReturnValues }}',
ReturnConsumedCapacity = '{{ ReturnConsumedCapacity }}',
ReturnItemCollectionMetrics = '{{ ReturnItemCollectionMetrics }}',
ConditionalOperator = '{{ ConditionalOperator }}',
ConditionExpression = '{{ ConditionExpression }}',
ExpressionAttributeNames = '{{ ExpressionAttributeNames }}',
ExpressionAttributeValues = '{{ ExpressionAttributeValues }}',
ReturnValuesOnConditionCheckFailure = '{{ ReturnValuesOnConditionCheckFailure }}'
WHERE 
region = '{{ region }}' --required
AND TableName = '{{ TableName }}' --required
RETURNING
attributes,
consumed_capacity,
item_collection_metrics;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_item"
    values={[
        { label: 'delete_item', value: 'delete_item' }
    ]}
>
<TabItem value="delete_item">

Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value. In addition to deleting an item, you can also return the item's attribute values in the same operation, using the ReturnValues parameter. Unless you specify conditions, the DeleteItem is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.

```sql
DELETE FROM aws.dynamodb.items
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="transact_get_items"
    values={[
        { label: 'transact_get_items', value: 'transact_get_items' },
        { label: 'transact_write_items', value: 'transact_write_items' }
    ]}
>
<TabItem value="transact_get_items">

TransactGetItems is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A TransactGetItems call can contain up to 100 TransactGetItem objects, each of which contains a Get structure that specifies an item to retrieve from a table in the account and Region. A call to TransactGetItems cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB. DynamoDB rejects the entire TransactGetItems request if any of the following is true: A conflicting operation is in the process of updating an item to be read. There is insufficient provisioned capacity for the transaction to be completed. There is a user error, such as an invalid data format. The aggregate size of the items in the transaction exceeded 4 MB.

```sql
EXEC aws.dynamodb.items.transact_get_items 
@region='{{ region }}' --required 
@@json=
'{
"TransactItems": "{{ TransactItems }}", 
"ReturnConsumedCapacity": "{{ ReturnConsumedCapacity }}"
}'
;
```
</TabItem>
<TabItem value="transact_write_items">

TransactWriteItems is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both ConditionCheck and Update the same item. The aggregate size of the items in the transaction cannot exceed 4 MB. The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects: Put — Initiates a PutItem operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met. Update — Initiates an UpdateItem operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met. Delete — Initiates a DeleteItem operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met. ConditionCheck — Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met. DynamoDB rejects the entire TransactWriteItems request if any of the following is true: A condition in one of the condition expressions is not met. An ongoing operation is in the process of updating the same item. There is insufficient provisioned capacity for the transaction to be completed. An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction. The aggregate size of the items in the transaction exceeds 4 MB. There is a user error, such as an invalid data format.

```sql
EXEC aws.dynamodb.items.transact_write_items 
@region='{{ region }}' --required 
@@json=
'{
"TransactItems": "{{ TransactItems }}", 
"ReturnConsumedCapacity": "{{ ReturnConsumedCapacity }}", 
"ReturnItemCollectionMetrics": "{{ ReturnItemCollectionMetrics }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
