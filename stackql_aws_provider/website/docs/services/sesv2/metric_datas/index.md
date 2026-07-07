--- 
title: metric_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_datas
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>metric_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.metric_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_metric_data"
    values={[
        { label: 'batch_get_metric_data', value: 'batch_get_metric_data' }
    ]}
>
<TabItem value="batch_get_metric_data">

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
    <td><CopyableCode code="Errors" /></td>
    <td><code>array</code></td>
    <td>A list of MetricDataError encountered while processing your metric data batch request.</td>
</tr>
<tr>
    <td><CopyableCode code="Results" /></td>
    <td><code>array</code></td>
    <td>A list of successfully retrieved MetricDataResult.</td>
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
    <td><a href="#batch_get_metric_data"><CopyableCode code="batch_get_metric_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves batches of metric data collected based on your sending activity. You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</td>
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
    defaultValue="batch_get_metric_data"
    values={[
        { label: 'batch_get_metric_data', value: 'batch_get_metric_data' }
    ]}
>
<TabItem value="batch_get_metric_data">

Retrieves batches of metric data collected based on your sending activity. You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).

```sql
SELECT
Errors,
Results
FROM aws.sesv2.metric_datas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
