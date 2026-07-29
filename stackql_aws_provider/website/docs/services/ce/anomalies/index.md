--- 
title: anomalies
hide_title: false
hide_table_of_contents: false
keywords:
  - anomalies
  - ce
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

Creates, updates, deletes, gets or lists an <code>anomalies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomalies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.anomalies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_anomalies"
    values={[
        { label: 'get_anomalies', value: 'get_anomalies' }
    ]}
>
<TabItem value="get_anomalies">

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
    <td><CopyableCode code="anomaly_end_date" /></td>
    <td><code>string</code></td>
    <td>The last day the anomaly is detected. (pattern: &lt;code&gt;(\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;)(T\d&#123;2&#125;:\d&#123;2&#125;:\d&#123;2&#125;Z)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the anomaly. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_score" /></td>
    <td><code>object</code></td>
    <td>The latest and maximum score for the anomaly.</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_start_date" /></td>
    <td><code>string</code></td>
    <td>The first day the anomaly is detected. (pattern: &lt;code&gt;(\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;)(T\d&#123;2&#125;:\d&#123;2&#125;:\d&#123;2&#125;Z)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dimension_value" /></td>
    <td><code>string</code></td>
    <td>The dimension for the anomaly (for example, an Amazon Web Services service in a service monitor). (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="feedback" /></td>
    <td><code>string</code></td>
    <td>The feedback value. (YES, NO, PLANNED_ACTIVITY)</td>
</tr>
<tr>
    <td><CopyableCode code="impact" /></td>
    <td><code>object</code></td>
    <td>The dollar impact for the anomaly.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the cost monitor that generated this anomaly. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="root_causes" /></td>
    <td><code>array</code></td>
    <td>The list of identified root causes for the anomaly.</td>
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
    <td><a href="#get_anomalies"><CopyableCode code="get_anomalies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all of the cost anomalies detected on your account during the time period that's specified by the DateInterval object. Anomalies are available for up to 90 days.</td>
</tr>
<tr>
    <td><a href="#provide_anomaly_feedback"><CopyableCode code="provide_anomaly_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AnomalyId"><code>AnomalyId</code></a></td>
    <td></td>
    <td>Modifies the feedback property of a given cost anomaly.</td>
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
    defaultValue="get_anomalies"
    values={[
        { label: 'get_anomalies', value: 'get_anomalies' }
    ]}
>
<TabItem value="get_anomalies">

Retrieves all of the cost anomalies detected on your account during the time period that's specified by the DateInterval object. Anomalies are available for up to 90 days.

```sql
SELECT
anomaly_end_date,
anomaly_id,
anomaly_score,
anomaly_start_date,
dimension_value,
feedback,
impact,
monitor_arn,
root_causes
FROM aws.ce.anomalies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="provide_anomaly_feedback"
    values={[
        { label: 'provide_anomaly_feedback', value: 'provide_anomaly_feedback' }
    ]}
>
<TabItem value="provide_anomaly_feedback">

Modifies the feedback property of a given cost anomaly.

```sql
EXEC aws.ce.anomalies.provide_anomaly_feedback 
@region='{{ region }}' --required 
@@json=
'{
"AnomalyId": "{{ AnomalyId }}", 
"Feedback": "{{ Feedback }}"
}'
;
```
</TabItem>
</Tabs>
