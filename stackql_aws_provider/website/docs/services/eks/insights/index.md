--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
  - eks
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_insight"
    values={[
        { label: 'describe_insight', value: 'describe_insight' },
        { label: 'list_insights', value: 'list_insights' }
    ]}
>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalInfo" /></td>
    <td><code>object</code></td>
    <td>Links to sources that provide additional context on the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the insight. (UPGRADE_READINESS, MISCONFIGURATION)</td>
</tr>
<tr>
    <td><CopyableCode code="categorySpecificSummary" /></td>
    <td><code>object</code></td>
    <td>Summary information that relates to the category of the insight. Currently only returned with certain insights having category UPGRADE_READINESS.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the insight which includes alert criteria, remediation recommendation, and additional resources (contains Markdown).</td>
</tr>
<tr>
    <td><CopyableCode code="insightStatus" /></td>
    <td><code>object</code></td>
    <td>An object containing more detail on the status of the insight resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The Kubernetes minor version associated with an insight if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time Amazon EKS last successfully completed a refresh of this insight check on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTransitionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the status of the insight last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation" /></td>
    <td><code>string</code></td>
    <td>A summary of how to remediate the finding of this insight if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The details about each resource listed in the insight check result.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the insight. (UPGRADE_READINESS, MISCONFIGURATION)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the insight which includes alert criteria, remediation recommendation, and additional resources (contains Markdown).</td>
</tr>
<tr>
    <td><CopyableCode code="insightStatus" /></td>
    <td><code>object</code></td>
    <td>An object containing more detail on the status of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The Kubernetes minor version associated with an insight if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time Amazon EKS last successfully completed a refresh of this insight check on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTransitionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the status of the insight last changed.</td>
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
    <td><a href="#describe_insight"><CopyableCode code="describe_insight" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about an insight that you specify using its ID.</td>
</tr>
<tr>
    <td><a href="#list_insights"><CopyableCode code="list_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all insights checked for against the specified cluster. You can filter which insights are returned by category, associated Kubernetes version, and status. The default filter lists all categories and every status. The following lists the available categories: UPGRADE_READINESS: Amazon EKS identifies issues that could impact your ability to upgrade to new versions of Kubernetes. These are called upgrade insights. MISCONFIGURATION: Amazon EKS identifies misconfiguration in your EKS Hybrid Nodes setup that could impair functionality of your cluster or workloads. These are called configuration insights.</td>
</tr>
<tr>
    <td><a href="#start_insights_refresh"><CopyableCode code="start_insights_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates an on-demand refresh operation for cluster insights, getting the latest analysis outside of the standard refresh schedule.</td>
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
    <td>The identity of the insight to describe.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster for the refresh insights operation.</td>
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
    defaultValue="describe_insight"
    values={[
        { label: 'describe_insight', value: 'describe_insight' },
        { label: 'list_insights', value: 'list_insights' }
    ]}
>
<TabItem value="describe_insight">

Returns details about an insight that you specify using its ID.

```sql
SELECT
id,
name,
additionalInfo,
category,
categorySpecificSummary,
description,
insightStatus,
kubernetesVersion,
lastRefreshTime,
lastTransitionTime,
recommendation,
resources
FROM aws.eks.insights
WHERE name = '{{ name }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_insights">

Returns a list of all insights checked for against the specified cluster. You can filter which insights are returned by category, associated Kubernetes version, and status. The default filter lists all categories and every status. The following lists the available categories: UPGRADE_READINESS: Amazon EKS identifies issues that could impact your ability to upgrade to new versions of Kubernetes. These are called upgrade insights. MISCONFIGURATION: Amazon EKS identifies misconfiguration in your EKS Hybrid Nodes setup that could impair functionality of your cluster or workloads. These are called configuration insights.

```sql
SELECT
id,
name,
category,
description,
insightStatus,
kubernetesVersion,
lastRefreshTime,
lastTransitionTime
FROM aws.eks.insights
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_insights_refresh"
    values={[
        { label: 'start_insights_refresh', value: 'start_insights_refresh' }
    ]}
>
<TabItem value="start_insights_refresh">

Initiates an on-demand refresh operation for cluster insights, getting the latest analysis outside of the standard refresh schedule.

```sql
EXEC aws.eks.insights.start_insights_refresh 
@name='{{ name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
