--- 
title: metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics
  - sagemaker_metrics
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

Creates, updates, deletes, gets or lists a <code>metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_metrics.metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_metrics"
    values={[
        { label: 'batch_get_metrics', value: 'batch_get_metrics' }
    ]}
>
<TabItem value="batch_get_metrics">

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
    <td><CopyableCode code="MetricQueryResults" /></td>
    <td><code>array</code></td>
    <td>The results of a query to retrieve training metrics from SageMaker.</td>
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
    <td><a href="#batch_get_metrics"><CopyableCode code="batch_get_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to retrieve training metrics from SageMaker.</td>
</tr>
<tr>
    <td><a href="#batch_put_metrics"><CopyableCode code="batch_put_metrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrialComponentName"><code>TrialComponentName</code></a>, <a href="#parameter-MetricData"><code>MetricData</code></a></td>
    <td></td>
    <td>Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio.</td>
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
    defaultValue="batch_get_metrics"
    values={[
        { label: 'batch_get_metrics', value: 'batch_get_metrics' }
    ]}
>
<TabItem value="batch_get_metrics">

Used to retrieve training metrics from SageMaker.

```sql
SELECT
MetricQueryResults
FROM aws.sagemaker_metrics.metrics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_put_metrics"
    values={[
        { label: 'batch_put_metrics', value: 'batch_put_metrics' }
    ]}
>
<TabItem value="batch_put_metrics">

Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio.

```sql
EXEC aws.sagemaker_metrics.metrics.batch_put_metrics 
@region='{{ region }}' --required 
@@json=
'{
"TrialComponentName": "{{ TrialComponentName }}", 
"MetricData": "{{ MetricData }}"
}'
;
```
</TabItem>
</Tabs>
