--- 
title: metric_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_datas
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

Creates, updates, deletes, gets or lists a <code>metric_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.metric_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metric_data"
    values={[
        { label: 'get_metric_data', value: 'get_metric_data' }
    ]}
>
<TabItem value="get_metric_data">

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
    <td><CopyableCode code="collections" /></td>
    <td><code>array</code></td>
    <td>The set of metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="dimensions" /></td>
    <td><code>object</code></td>
    <td>The dimension for the metrics.</td>
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
    <td><a href="#get_metric_data"><CopyableCode code="get_metric_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Metrics definitions in the Amazon Connect Administrator Guide. We recommend using the GetMetricDataV2 API. It provides more flexibility, features, and the ability to query longer time ranges than GetMetricData. Use it to retrieve historical agent and contact metrics for the last 3 months, at varying intervals. You can also use it to build custom dashboards to measure historical queue and agent performance. For example, you can track the number of incoming contacts for the last 7 days, with data split by day, to see how contact volume changed per day of the week.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
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
    defaultValue="get_metric_data"
    values={[
        { label: 'get_metric_data', value: 'get_metric_data' }
    ]}
>
<TabItem value="get_metric_data">

Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Metrics definitions in the Amazon Connect Administrator Guide. We recommend using the GetMetricDataV2 API. It provides more flexibility, features, and the ability to query longer time ranges than GetMetricData. Use it to retrieve historical agent and contact metrics for the last 3 months, at varying intervals. You can also use it to build custom dashboards to measure historical queue and agent performance. For example, you can track the number of incoming contacts for the last 7 days, with data split by day, to see how contact volume changed per day of the week.

```sql
SELECT
collections,
dimensions
FROM aws.connect.metric_datas
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
