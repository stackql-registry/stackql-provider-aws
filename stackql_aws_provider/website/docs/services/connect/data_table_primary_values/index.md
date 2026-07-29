--- 
title: data_table_primary_values
hide_title: false
hide_table_of_contents: false
keywords:
  - data_table_primary_values
  - connect
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

Creates, updates, deletes, gets or lists a <code>data_table_primary_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_table_primary_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.data_table_primary_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_table_primary_values"
    values={[
        { label: 'list_data_table_primary_values', value: 'list_data_table_primary_values' }
    ]}
>
<TabItem value="list_data_table_primary_values">

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
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The value's last modified region. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The value's last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="primary_values" /></td>
    <td><code>array</code></td>
    <td>The value's primary values.</td>
</tr>
<tr>
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td>The value's record ID.</td>
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
    <td><a href="#list_data_table_primary_values"><CopyableCode code="list_data_table_primary_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all primary value combinations for a given data table. Returns the unique combinations of primary attribute values that identify records in the table. Up to 100 records are returned per request.</td>
</tr>
<tr>
    <td><a href="#update_data_table_primary_values"><CopyableCode code="update_data_table_primary_values" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PrimaryValues"><code>PrimaryValues</code></a>, <a href="#parameter-NewPrimaryValues"><code>NewPrimaryValues</code></a>, <a href="#parameter-LockVersion"><code>LockVersion</code></a></td>
    <td></td>
    <td>Updates the primary values for a record. This operation affects all existing values that are currently associated to the record and its primary values. Users that have restrictions on attributes and/or primary values are not authorized to use this endpoint. The combination of new primary values must be unique within the table.</td>
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
<tr id="parameter-data_table_id">
    <td><CopyableCode code="data_table_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data table. Must also accept the table ARN with or without a version alias. If the version is provided as part of the identifier or ARN, the version must be one of the two available system managed aliases, $SAVED or $LATEST.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data table primary values to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_data_table_primary_values"
    values={[
        { label: 'list_data_table_primary_values', value: 'list_data_table_primary_values' }
    ]}
>
<TabItem value="list_data_table_primary_values">

Lists all primary value combinations for a given data table. Returns the unique combinations of primary attribute values that identify records in the table. Up to 100 records are returned per request.

```sql
SELECT
last_modified_region,
last_modified_time,
primary_values,
record_id
FROM aws.connect.data_table_primary_values
WHERE instance_id = '{{ instance_id }}' -- required
AND data_table_id = '{{ data_table_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_table_primary_values"
    values={[
        { label: 'update_data_table_primary_values', value: 'update_data_table_primary_values' }
    ]}
>
<TabItem value="update_data_table_primary_values">

Updates the primary values for a record. This operation affects all existing values that are currently associated to the record and its primary values. Users that have restrictions on attributes and/or primary values are not authorized to use this endpoint. The combination of new primary values must be unique within the table.

```sql
UPDATE aws.connect.data_table_primary_values
SET 
PrimaryValues = '{{ PrimaryValues }}',
NewPrimaryValues = '{{ NewPrimaryValues }}',
LockVersion = '{{ LockVersion }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND data_table_id = '{{ data_table_id }}' --required
AND region = '{{ region }}' --required
AND PrimaryValues = '{{ PrimaryValues }}' --required
AND NewPrimaryValues = '{{ NewPrimaryValues }}' --required
AND LockVersion = '{{ LockVersion }}' --required
RETURNING
lock_version;
```
</TabItem>
</Tabs>
