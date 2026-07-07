--- 
title: max_record_sizes
hide_title: false
hide_table_of_contents: false
keywords:
  - max_record_sizes
  - kinesis
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

Creates, updates, deletes, gets or lists a <code>max_record_sizes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="max_record_sizes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.max_record_sizes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_max_record_size"><CopyableCode code="update_max_record_size" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MaxRecordSizeInKiB"><code>MaxRecordSizeInKiB</code></a></td>
    <td></td>
    <td>This allows you to update the MaxRecordSize of a single record that you can write to, and read from a stream. You can ingest and digest single records up to 10240 KiB.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update_max_record_size"
    values={[
        { label: 'update_max_record_size', value: 'update_max_record_size' }
    ]}
>
<TabItem value="update_max_record_size">

This allows you to update the MaxRecordSize of a single record that you can write to, and read from a stream. You can ingest and digest single records up to 10240 KiB.

```sql
UPDATE aws.kinesis.max_record_sizes
SET 
StreamARN = '{{ StreamARN }}',
StreamId = '{{ StreamId }}',
MaxRecordSizeInKiB = {{ MaxRecordSizeInKiB }}
WHERE 
region = '{{ region }}' --required
AND MaxRecordSizeInKiB = '{{ MaxRecordSizeInKiB }}' --required;
```
</TabItem>
</Tabs>
