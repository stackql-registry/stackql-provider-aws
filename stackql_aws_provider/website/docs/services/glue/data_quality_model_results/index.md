--- 
title: data_quality_model_results
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_model_results
  - glue
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

Creates, updates, deletes, gets or lists a <code>data_quality_model_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_quality_model_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_quality_model_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_quality_model_result"
    values={[
        { label: 'get_data_quality_model_result', value: 'get_data_quality_model_result' }
    ]}
>
<TabItem value="get_data_quality_model_result">

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
    <td><CopyableCode code="completed_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data quality model training completed.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>array</code></td>
    <td>A list of StatisticModelResult</td>
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
    <td><a href="#get_data_quality_model_result"><CopyableCode code="get_data_quality_model_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve a statistic's predictions for a given Profile ID.</td>
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
    defaultValue="get_data_quality_model_result"
    values={[
        { label: 'get_data_quality_model_result', value: 'get_data_quality_model_result' }
    ]}
>
<TabItem value="get_data_quality_model_result">

Retrieve a statistic's predictions for a given Profile ID.

```sql
SELECT
completed_on,
model
FROM aws.glue.data_quality_model_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
