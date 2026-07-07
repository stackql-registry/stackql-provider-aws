--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
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

Creates, updates, deletes, gets or lists an <code>insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_insights"
    values={[
        { label: 'search_insights', value: 'search_insights' },
        { label: 'describe_insight', value: 'describe_insight' },
        { label: 'list_insights', value: 'list_insights' }
    ]}
>
<TabItem value="search_insights">

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
    <td><CopyableCode code="AssociatedResourceArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the proactive insight. (pattern: &lt;code&gt;^&#91;\w-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InsightTimeRange" /></td>
    <td><code>object</code></td>
    <td>A time ranged that specifies when the observed behavior in an insight started and ended.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the proactive insight. (pattern: &lt;code&gt;^&#91;\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PredictionTimeRange" /></td>
    <td><code>object</code></td>
    <td>The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of the names of Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the proactive insight. (ONGOING, CLOSED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_insight">

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
    <td><CopyableCode code="ProactiveInsight" /></td>
    <td><code>object</code></td>
    <td>A ProactiveInsight object that represents the requested insight.</td>
</tr>
<tr>
    <td><CopyableCode code="ReactiveInsight" /></td>
    <td><code>object</code></td>
    <td>A ReactiveInsight object that represents the requested insight.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_insights">

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
    <td><CopyableCode code="AssociatedResourceArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the proactive insight. (pattern: &lt;code&gt;^&#91;\w-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InsightTimeRange" /></td>
    <td><code>object</code></td>
    <td>A time ranged that specifies when the observed behavior in an insight started and ended.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the proactive insight. (pattern: &lt;code&gt;^&#91;\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PredictionTimeRange" /></td>
    <td><code>object</code></td>
    <td>The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of the names of Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the proactive insight. (ONGOING, CLOSED)</td>
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
    <td><a href="#search_insights"><CopyableCode code="search_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.</td>
</tr>
<tr>
    <td><a href="#describe_insight"><CopyableCode code="describe_insight" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a></td>
    <td>Returns details about an insight that you specify using its ID.</td>
</tr>
<tr>
    <td><a href="#list_insights"><CopyableCode code="list_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (ONGOING, CLOSED, or ANY).</td>
</tr>
<tr>
    <td><a href="#delete_insight"><CopyableCode code="delete_insight" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the insight along with the associated anomalies, events and recommendations.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the insight.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccountId">
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the member account in the organization.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_insights"
    values={[
        { label: 'search_insights', value: 'search_insights' },
        { label: 'describe_insight', value: 'describe_insight' },
        { label: 'list_insights', value: 'list_insights' }
    ]}
>
<TabItem value="search_insights">

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

```sql
SELECT
AssociatedResourceArns,
Id,
InsightTimeRange,
Name,
PredictionTimeRange,
ResourceCollection,
ServiceCollection,
Severity,
Status
FROM aws.devops_guru.insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_insight">

Returns details about an insight that you specify using its ID.

```sql
SELECT
ProactiveInsight,
ReactiveInsight
FROM aws.devops_guru.insights
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND AccountId = '{{ AccountId }}'
;
```
</TabItem>
<TabItem value="list_insights">

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (ONGOING, CLOSED, or ANY).

```sql
SELECT
AssociatedResourceArns,
Id,
InsightTimeRange,
Name,
PredictionTimeRange,
ResourceCollection,
ServiceCollection,
Severity,
Status
FROM aws.devops_guru.insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_insight"
    values={[
        { label: 'delete_insight', value: 'delete_insight' }
    ]}
>
<TabItem value="delete_insight">

Deletes the insight along with the associated anomalies, events and recommendations.

```sql
DELETE FROM aws.devops_guru.insights
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
