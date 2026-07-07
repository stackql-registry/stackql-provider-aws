--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
  - cloudfront_keyvaluestore
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront_keyvaluestore.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_key"
    values={[
        { label: 'get_key', value: 'get_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="get_key">

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
    <td><CopyableCode code="ItemCount" /></td>
    <td><code>integer</code></td>
    <td>Number of key value pairs in the Key Value Store.</td>
</tr>
<tr>
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>The key of the key value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total size of the Key Value Store in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the key value pair.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_keys">

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
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>The key of the key value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the key value pair.</td>
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
    <td><a href="#get_key"><CopyableCode code="get_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-kvs_arn"><code>kvs_arn</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a key value pair.</td>
</tr>
<tr>
    <td><a href="#list_keys"><CopyableCode code="list_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-kvs_arn"><code>kvs_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Returns a list of key value pairs.</td>
</tr>
<tr>
    <td><a href="#update_keys"><CopyableCode code="update_keys" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-kvs_arn"><code>kvs_arn</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Puts or Deletes multiple key value pairs in a single, all-or-nothing operation.</td>
</tr>
<tr>
    <td><a href="#put_key"><CopyableCode code="put_key" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-kvs_arn"><code>kvs_arn</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new key value pair or replaces the value of an existing key.</td>
</tr>
<tr>
    <td><a href="#delete_key"><CopyableCode code="delete_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-kvs_arn"><code>kvs_arn</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the key value pair specified by the key.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version (ETag) of the Key Value Store that you are deleting keys from, which you can get using DescribeKeyValueStore.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key to delete.</td>
</tr>
<tr id="parameter-kvs_arn">
    <td><CopyableCode code="kvs_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Value Store.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results that are returned per call. The default is 10 and maximum allowed page is 50.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_key"
    values={[
        { label: 'get_key', value: 'get_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="get_key">

Returns a key value pair.

```sql
SELECT
ItemCount,
Key,
TotalSizeInBytes,
Value
FROM aws.cloudfront_keyvaluestore.keys
WHERE kvs_arn = '{{ kvs_arn }}' -- required
AND key = '{{ key }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_keys">

Returns a list of key value pairs.

```sql
SELECT
Key,
Value
FROM aws.cloudfront_keyvaluestore.keys
WHERE kvs_arn = '{{ kvs_arn }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_keys"
    values={[
        { label: 'update_keys', value: 'update_keys' }
    ]}
>
<TabItem value="update_keys">

Puts or Deletes multiple key value pairs in a single, all-or-nothing operation.

```sql
UPDATE aws.cloudfront_keyvaluestore.keys
SET 
Puts = '{{ Puts }}',
Deletes = '{{ Deletes }}'
WHERE 
kvs_arn = '{{ kvs_arn }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
RETURNING
ETag,
ItemCount,
TotalSizeInBytes;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_key"
    values={[
        { label: 'put_key', value: 'put_key' }
    ]}
>
<TabItem value="put_key">

Creates a new key value pair or replaces the value of an existing key.

```sql
REPLACE aws.cloudfront_keyvaluestore.keys
SET 
Value = '{{ Value }}'
WHERE 
key = '{{ key }}' --required
AND kvs_arn = '{{ kvs_arn }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
RETURNING
ETag,
ItemCount,
TotalSizeInBytes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_key"
    values={[
        { label: 'delete_key', value: 'delete_key' }
    ]}
>
<TabItem value="delete_key">

Deletes the key value pair specified by the key.

```sql
DELETE FROM aws.cloudfront_keyvaluestore.keys
WHERE kvs_arn = '{{ kvs_arn }}' --required
AND key = '{{ key }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
