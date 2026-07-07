--- 
title: data_set_details
hide_title: false
hide_table_of_contents: false
keywords:
  - data_set_details
  - m2
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

Creates, updates, deletes, gets or lists a <code>data_set_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_set_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.data_set_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_set_details"
    values={[
        { label: 'get_data_set_details', value: 'get_data_set_details' }
    ]}
>
<TabItem value="get_data_set_details">

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
    <td><CopyableCode code="blocksize" /></td>
    <td><code>integer</code></td>
    <td>The size of the block on disk.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the data set. (pattern: &lt;code&gt;^\S&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSetOrg" /></td>
    <td><code>object</code></td>
    <td>The type of data set. The only supported value is VSAM.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSize" /></td>
    <td><code>integer (int64)</code></td>
    <td>File size of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="lastReferencedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the data set was referenced.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the data set was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location where the data set is stored. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recordLength" /></td>
    <td><code>integer</code></td>
    <td>The length of records in the data set.</td>
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
    <td><a href="#get_data_set_details"><CopyableCode code="get_data_set_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-data_set_name"><code>data_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a specific data set.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application that this data set is associated with.</td>
</tr>
<tr id="parameter-data_set_name">
    <td><CopyableCode code="data_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data set.</td>
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
    defaultValue="get_data_set_details"
    values={[
        { label: 'get_data_set_details', value: 'get_data_set_details' }
    ]}
>
<TabItem value="get_data_set_details">

Gets the details of a specific data set.

```sql
SELECT
blocksize,
creationTime,
dataSetName,
dataSetOrg,
fileSize,
lastReferencedTime,
lastUpdatedTime,
location,
recordLength
FROM aws.m2.data_set_details
WHERE application_id = '{{ application_id }}' -- required
AND data_set_name = '{{ data_set_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
