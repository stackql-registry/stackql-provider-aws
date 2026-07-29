--- 
title: key_value_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - key_value_stores
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

Creates, updates, deletes, gets or lists a <code>key_value_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_value_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront_keyvaluestore.key_value_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_key_value_store"
    values={[
        { label: 'describe_key_value_store', value: 'describe_key_value_store' }
    ]}
>
<TabItem value="describe_key_value_store">

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the Key Value Store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The version identifier for the current version of the Key Value Store.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for Key Value Store creation failure.</td>
</tr>
<tr>
    <td><CopyableCode code="item_count" /></td>
    <td><code>integer</code></td>
    <td>Number of key value pairs in the Key Value Store.</td>
</tr>
<tr>
    <td><CopyableCode code="kvs_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Value Store.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the key value pairs in the Key Value Store was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Key Value Store.</td>
</tr>
<tr>
    <td><CopyableCode code="total_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total size of the Key Value Store in bytes.</td>
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
    <td><a href="#describe_key_value_store"><CopyableCode code="describe_key_value_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-kvs_arn"><code>kvs_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata information about Key Value Store.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_key_value_store"
    values={[
        { label: 'describe_key_value_store', value: 'describe_key_value_store' }
    ]}
>
<TabItem value="describe_key_value_store">

Returns metadata information about Key Value Store.

```sql
SELECT
created,
e_tag,
failure_reason,
item_count,
kvs_arn,
last_modified,
status,
total_size_in_bytes
FROM aws.cloudfront_keyvaluestore.key_value_stores
WHERE kvs_arn = '{{ kvs_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
