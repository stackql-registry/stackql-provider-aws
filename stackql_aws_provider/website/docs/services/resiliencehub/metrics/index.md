--- 
title: metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics
  - resiliencehub
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_metrics"
    values={[
        { label: 'list_metrics', value: 'list_metrics' }
    ]}
>
<TabItem value="list_metrics">

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
    <td><CopyableCode code="row" /></td>
    <td><code>array</code></td>
    <td>Specifies all the list of metric values for each row of metrics.</td>
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
    <td><a href="#list_metrics"><CopyableCode code="list_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the metrics that can be exported.</td>
</tr>
<tr>
    <td><a href="#start_metrics_export"><CopyableCode code="start_metrics_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates the export task of metrics.</td>
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
    defaultValue="list_metrics"
    values={[
        { label: 'list_metrics', value: 'list_metrics' }
    ]}
>
<TabItem value="list_metrics">

Lists the metrics that can be exported.

```sql
SELECT
row
FROM aws.resiliencehub.metrics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_metrics_export"
    values={[
        { label: 'start_metrics_export', value: 'start_metrics_export' }
    ]}
>
<TabItem value="start_metrics_export">

Initiates the export task of metrics.

```sql
EXEC aws.resiliencehub.metrics.start_metrics_export 
@region='{{ region }}' --required 
@@json=
'{
"bucketName": "{{ bucketName }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
