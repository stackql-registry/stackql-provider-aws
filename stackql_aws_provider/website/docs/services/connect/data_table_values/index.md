--- 
title: data_table_values
hide_title: false
hide_table_of_contents: false
keywords:
  - data_table_values
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

Creates, updates, deletes, gets or lists a <code>data_table_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_table_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.data_table_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_table_values"
    values={[
        { label: 'list_data_table_values', value: 'list_data_table_values' }
    ]}
>
<TabItem value="list_data_table_values">

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
    <td><CopyableCode code="attribute_id" /></td>
    <td><code>string</code></td>
    <td>The summary's attribute ID.</td>
</tr>
<tr>
    <td><CopyableCode code="attribute_name" /></td>
    <td><code>string</code></td>
    <td>The summary's attribute name. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\-_.:=@'|&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The summary's last modified region. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The summary's last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="lock_version" /></td>
    <td><code>object</code></td>
    <td>The summary's lock version.</td>
</tr>
<tr>
    <td><CopyableCode code="primary_values" /></td>
    <td><code>array</code></td>
    <td>The summary's primary values.</td>
</tr>
<tr>
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td>The summary's record ID.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The summary's value.</td>
</tr>
<tr>
    <td><CopyableCode code="value_type" /></td>
    <td><code>string</code></td>
    <td>The summary's value type. (TEXT, NUMBER, BOOLEAN, TEXT_LIST, NUMBER_LIST)</td>
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
    <td><a href="#list_data_table_values"><CopyableCode code="list_data_table_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists values stored in a data table with optional filtering by record IDs or primary attribute values. Returns the raw stored values along with metadata such as lock versions and modification timestamps.</td>
</tr>
<tr>
    <td><a href="#evaluate_data_table_values"><CopyableCode code="evaluate_data_table_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Evaluates values at the time of the request and returns them. It considers the request's timezone or the table's timezone, in that order, when accessing time based tables. When a value is accessed, the accessor's identity and the time of access are saved alongside the value to help identify values that are actively in use. The term "Batch" is not included in the operation name since it does not meet all the criteria for a batch operation as specified in Batch Operations: Amazon Web Services API Standards.</td>
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
    <td>The unique identifier for the data table. Must also accept the table ARN with or without a version alias.</td>
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
    <td>The maximum number of data table values to return in one page of results.</td>
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
    defaultValue="list_data_table_values"
    values={[
        { label: 'list_data_table_values', value: 'list_data_table_values' }
    ]}
>
<TabItem value="list_data_table_values">

Lists values stored in a data table with optional filtering by record IDs or primary attribute values. Returns the raw stored values along with metadata such as lock versions and modification timestamps.

```sql
SELECT
attribute_id,
attribute_name,
last_modified_region,
last_modified_time,
lock_version,
primary_values,
record_id,
value,
value_type
FROM aws.connect.data_table_values
WHERE instance_id = '{{ instance_id }}' -- required
AND data_table_id = '{{ data_table_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="evaluate_data_table_values"
    values={[
        { label: 'evaluate_data_table_values', value: 'evaluate_data_table_values' }
    ]}
>
<TabItem value="evaluate_data_table_values">

Evaluates values at the time of the request and returns them. It considers the request's timezone or the table's timezone, in that order, when accessing time based tables. When a value is accessed, the accessor's identity and the time of access are saved alongside the value to help identify values that are actively in use. The term "Batch" is not included in the operation name since it does not meet all the criteria for a batch operation as specified in Batch Operations: Amazon Web Services API Standards.

```sql
EXEC aws.connect.data_table_values.evaluate_data_table_values 
@instance_id='{{ instance_id }}' --required, 
@data_table_id='{{ data_table_id }}' --required, 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}', 
@maxResults='{{ maxResults }}' 
@@json=
'{
"Values": "{{ Values }}", 
"TimeZone": "{{ TimeZone }}"
}'
;
```
</TabItem>
</Tabs>
