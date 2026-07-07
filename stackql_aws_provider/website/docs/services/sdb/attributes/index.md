--- 
title: attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes
  - sdb
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

Creates, updates, deletes, gets or lists an <code>attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sdb.attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_attributes"
    values={[
        { label: 'get_attributes', value: 'get_attributes' }
    ]}
>
<TabItem value="get_attributes">

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
    <td><CopyableCode code="AlternateNameEncoding" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="AlternateValueEncoding" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the attribute.</td>
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
    <td><a href="#get_attributes"><CopyableCode code="get_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-ItemName"><code>ItemName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AttributeNames"><code>AttributeNames</code></a>, <a href="#parameter-ConsistentRead"><code>ConsistentRead</code></a></td>
    <td>Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas.</td>
</tr>
<tr>
    <td><a href="#put_attributes"><CopyableCode code="put_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-ItemName"><code>ItemName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attributes"><code>Attributes</code></a>, <a href="#parameter-Expected"><code>Expected</code></a></td>
    <td>The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the Attribute.X.Name and Attribute.X.Value parameters. The client specifies the first attribute by the parameters Attribute.0.Name and Attribute.0.Value, the second attribute by the parameters Attribute.1.Name and Attribute.1.Value, and so on. Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes &#123; "first_name", "first_value" &#125; and &#123; "first_name", second_value" &#125;. However, it cannot have two attribute instances where both the Attribute.X.Name and Attribute.X.Value are the same. Optionally, the requestor can supply the Replace parameter for each individual attribute. Setting this value to true causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes &#123; 'a', '1' &#125;, &#123; 'b', '2'&#125; and &#123; 'b', '3' &#125; and the requestor calls PutAttributes using the attributes &#123; 'b', '4' &#125; with the Replace parameter set to true, the final attributes of the item are changed to &#123; 'a', '1' &#125; and &#123; 'b', '4' &#125;, which replaces the previous values of the 'b' attribute with the new value. You cannot specify an empty string as an attribute name. Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate GetAttributes or Select operation (read) immediately after a PutAttributes or DeleteAttributes operation (write) might not return the updated data. The following limitations are enforced for this operation: 256 total attribute name-value pairs per item One billion attributes per domain 10 GB of total user data storage per domain</td>
</tr>
<tr>
    <td><a href="#delete_attributes"><CopyableCode code="delete_attributes" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-ItemName"><code>ItemName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attributes"><code>Attributes</code></a>, <a href="#parameter-Expected"><code>Expected</code></a></td>
    <td>Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. DeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a GetAttributes or Select operation (read) immediately after a DeleteAttributes or PutAttributes operation (write) might not return updated item data.</td>
</tr>
<tr>
    <td><a href="#batch_delete_attributes"><CopyableCode code="batch_delete_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-Items"><code>Items</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. The following limitations are enforced for this operation: 1 MB request size 25 item limit per BatchDeleteAttributes operation</td>
</tr>
<tr>
    <td><a href="#batch_put_attributes"><CopyableCode code="batch_put_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-Items"><code>Items</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The BatchPutAttributes operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple PutAttribute operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. The client may specify the item name with the Item.X.ItemName parameter. The client may specify new attributes using a combination of the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value parameters. The client may specify the first attribute for the first item using the parameters Item.0.Attribute.0.Name and Item.0.Attribute.0.Value, and for the second attribute for the first item by the parameters Item.0.Attribute.1.Name and Item.0.Attribute.1.Value, and so on. Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes &#123; "first_name", "first_value" &#125; and &#123; "first_name", "second_value" &#125;. However, it cannot have two attribute instances where both the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value are the same. Optionally, the requester can supply the Replace parameter for each individual value. Setting this value to true will cause the new attribute values to replace the existing attribute values. For example, if an item I has the attributes &#123; 'a', '1' &#125;, &#123; 'b', '2'&#125; and &#123; 'b', '3' &#125; and the requester does a BatchPutAttributes of &#123;'I', 'b', '4' &#125; with the Replace parameter set to true, the final attributes of the item will be &#123; 'a', '1' &#125; and &#123; 'b', '4' &#125;, replacing the previous values of the 'b' attribute with the new value. This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. You can execute multiple BatchPutAttributes operations and other operations in parallel. However, large numbers of concurrent BatchPutAttributes calls can result in Service Unavailable (503) responses. The following limitations are enforced for this operation: 256 attribute name-value pairs per item 1 MB request size 1 billion attributes per domain 10 GB of total user data storage per domain 25 item limit per BatchPutAttributes operation</td>
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
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain in which the attributes are being stored.</td>
</tr>
<tr id="parameter-ItemName">
    <td><CopyableCode code="ItemName" /></td>
    <td><code>string</code></td>
    <td>The name of the item. Similar to rows on a spreadsheet, items represent individual objects that contain one or more value-attribute pairs.</td>
</tr>
<tr id="parameter-Items">
    <td><CopyableCode code="Items" /></td>
    <td><code>array</code></td>
    <td>A list of items on which to perform the operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AttributeNames">
    <td><CopyableCode code="AttributeNames" /></td>
    <td><code>array</code></td>
    <td>The names of the attributes.</td>
</tr>
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>array</code></td>
    <td>A list of Attributes. Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items.</td>
</tr>
<tr id="parameter-ConsistentRead">
    <td><CopyableCode code="ConsistentRead" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.</td>
</tr>
<tr id="parameter-Expected">
    <td><CopyableCode code="Expected" /></td>
    <td><code>object</code></td>
    <td>The update condition which, if specified, determines whether the specified attributes will be deleted or not. The update condition must be satisfied in order for this request to be processed and the attributes to be deleted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_attributes"
    values={[
        { label: 'get_attributes', value: 'get_attributes' }
    ]}
>
<TabItem value="get_attributes">

Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas.

```sql
SELECT
AlternateNameEncoding,
AlternateValueEncoding,
Name,
Value
FROM aws.sdb.attributes
WHERE DomainName = '{{ DomainName }}' -- required
AND ItemName = '{{ ItemName }}' -- required
AND region = '{{ region }}' -- required
AND AttributeNames = '{{ AttributeNames }}'
AND ConsistentRead = '{{ ConsistentRead }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_attributes"
    values={[
        { label: 'put_attributes', value: 'put_attributes' }
    ]}
>
<TabItem value="put_attributes">

The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the Attribute.X.Name and Attribute.X.Value parameters. The client specifies the first attribute by the parameters Attribute.0.Name and Attribute.0.Value, the second attribute by the parameters Attribute.1.Name and Attribute.1.Value, and so on. Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes &#123; "first_name", "first_value" &#125; and &#123; "first_name", second_value" &#125;. However, it cannot have two attribute instances where both the Attribute.X.Name and Attribute.X.Value are the same. Optionally, the requestor can supply the Replace parameter for each individual attribute. Setting this value to true causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes &#123; 'a', '1' &#125;, &#123; 'b', '2'&#125; and &#123; 'b', '3' &#125; and the requestor calls PutAttributes using the attributes &#123; 'b', '4' &#125; with the Replace parameter set to true, the final attributes of the item are changed to &#123; 'a', '1' &#125; and &#123; 'b', '4' &#125;, which replaces the previous values of the 'b' attribute with the new value. You cannot specify an empty string as an attribute name. Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate GetAttributes or Select operation (read) immediately after a PutAttributes or DeleteAttributes operation (write) might not return the updated data. The following limitations are enforced for this operation: 256 total attribute name-value pairs per item One billion attributes per domain 10 GB of total user data storage per domain

```sql
REPLACE aws.sdb.attributes
SET 
-- No updatable properties
WHERE 
DomainName = '{{ DomainName }}' --required
AND ItemName = '{{ ItemName }}' --required
AND region = '{{ region }}' --required
AND Attributes = '{{ Attributes}}'
AND Expected = '{{ Expected}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attributes"
    values={[
        { label: 'delete_attributes', value: 'delete_attributes' }
    ]}
>
<TabItem value="delete_attributes">

Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. DeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a GetAttributes or Select operation (read) immediately after a DeleteAttributes or PutAttributes operation (write) might not return updated item data.

```sql
DELETE FROM aws.sdb.attributes
WHERE DomainName = '{{ DomainName }}' --required
AND ItemName = '{{ ItemName }}' --required
AND region = '{{ region }}' --required
AND Attributes = '{{ Attributes }}'
AND Expected = '{{ Expected }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_attributes"
    values={[
        { label: 'batch_delete_attributes', value: 'batch_delete_attributes' },
        { label: 'batch_put_attributes', value: 'batch_put_attributes' }
    ]}
>
<TabItem value="batch_delete_attributes">

Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. The following limitations are enforced for this operation: 1 MB request size 25 item limit per BatchDeleteAttributes operation

```sql
EXEC aws.sdb.attributes.batch_delete_attributes 
@DomainName='{{ DomainName }}' --required, 
@Items='{{ Items }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="batch_put_attributes">

The BatchPutAttributes operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple PutAttribute operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. The client may specify the item name with the Item.X.ItemName parameter. The client may specify new attributes using a combination of the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value parameters. The client may specify the first attribute for the first item using the parameters Item.0.Attribute.0.Name and Item.0.Attribute.0.Value, and for the second attribute for the first item by the parameters Item.0.Attribute.1.Name and Item.0.Attribute.1.Value, and so on. Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes &#123; "first_name", "first_value" &#125; and &#123; "first_name", "second_value" &#125;. However, it cannot have two attribute instances where both the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value are the same. Optionally, the requester can supply the Replace parameter for each individual value. Setting this value to true will cause the new attribute values to replace the existing attribute values. For example, if an item I has the attributes &#123; 'a', '1' &#125;, &#123; 'b', '2'&#125; and &#123; 'b', '3' &#125; and the requester does a BatchPutAttributes of &#123;'I', 'b', '4' &#125; with the Replace parameter set to true, the final attributes of the item will be &#123; 'a', '1' &#125; and &#123; 'b', '4' &#125;, replacing the previous values of the 'b' attribute with the new value. This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. You can execute multiple BatchPutAttributes operations and other operations in parallel. However, large numbers of concurrent BatchPutAttributes calls can result in Service Unavailable (503) responses. The following limitations are enforced for this operation: 256 attribute name-value pairs per item 1 MB request size 1 billion attributes per domain 10 GB of total user data storage per domain 25 item limit per BatchPutAttributes operation

```sql
EXEC aws.sdb.attributes.batch_put_attributes 
@DomainName='{{ DomainName }}' --required, 
@Items='{{ Items }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
