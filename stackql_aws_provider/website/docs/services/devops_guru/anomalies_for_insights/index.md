--- 
title: anomalies_for_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - anomalies_for_insights
  - devops_guru
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

Creates, updates, deletes, gets or lists an <code>anomalies_for_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomalies_for_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.anomalies_for_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_anomalies_for_insight"
    values={[
        { label: 'list_anomalies_for_insight', value: 'list_anomalies_for_insight' }
    ]}
>
<TabItem value="list_anomalies_for_insight">

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
    <td><CopyableCode code="anomaly_reported_time_range" /></td>
    <td><code>object</code></td>
    <td>An AnomalyReportedTimeRange object that specifies the time range between when the anomaly is opened and the time when it is closed.</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_resources" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_time_range" /></td>
    <td><code>object</code></td>
    <td>A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from AnomalyReportedTimeRange, which specifies the time range when DevOps Guru opens and then closes an anomaly.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_insight_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the insight that contains this anomaly. An insight is composed of related anomalies. (pattern: &lt;code&gt;^&#91;\w-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="causal_anomaly_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`. (pattern: &lt;code&gt;^&#91;\w~.-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the reactive anomaly.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the reactive anomaly. (pattern: &lt;code&gt;^&#91;\w~.-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the reactive anomaly.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_collection" /></td>
    <td><code>object</code></td>
    <td>A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's severity. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="source_details" /></td>
    <td><code>object</code></td>
    <td>Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the reactive anomaly. (ONGOING, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the reactive anomaly. It can be one of the following types. CAUSAL - the anomaly can cause a new insight. CONTEXTUAL - the anomaly contains additional information about an insight or its causal anomaly. (CAUSAL, CONTEXTUAL)</td>
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
    <td><a href="#list_anomalies_for_insight"><CopyableCode code="list_anomalies_for_insight" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-insight_id"><code>insight_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the anomalies that belong to an insight that you specify using its ID.</td>
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
<tr id="parameter-insight_id">
    <td><CopyableCode code="insight_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the insight. The returned anomalies belong to this insight.</td>
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
    defaultValue="list_anomalies_for_insight"
    values={[
        { label: 'list_anomalies_for_insight', value: 'list_anomalies_for_insight' }
    ]}
>
<TabItem value="list_anomalies_for_insight">

Returns a list of the anomalies that belong to an insight that you specify using its ID.

```sql
SELECT
anomaly_reported_time_range,
anomaly_resources,
anomaly_time_range,
associated_insight_id,
causal_anomaly_id,
description,
id,
name,
resource_collection,
severity,
source_details,
status,
type
FROM aws.devops_guru.anomalies_for_insights
WHERE insight_id = '{{ insight_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
