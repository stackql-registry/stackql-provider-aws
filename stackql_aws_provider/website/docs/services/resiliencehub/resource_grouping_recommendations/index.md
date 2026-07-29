--- 
title: resource_grouping_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_grouping_recommendations
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

Creates, updates, deletes, gets or lists a <code>resource_grouping_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_grouping_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.resource_grouping_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_grouping_recommendations"
    values={[
        { label: 'list_resource_grouping_recommendations', value: 'list_resource_grouping_recommendations' }
    ]}
>
<TabItem value="list_resource_grouping_recommendations">

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
    <td><CopyableCode code="confidence_level" /></td>
    <td><code>string</code></td>
    <td>Indicates the confidence level of Resilience Hub on the grouping recommendation. (High, Medium)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the creation time of the grouping recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="grouping_app_component" /></td>
    <td><code>object</code></td>
    <td>Indicates the name of the recommended Application Component (AppComponent).</td>
</tr>
<tr>
    <td><CopyableCode code="grouping_recommendation_id" /></td>
    <td><code>string</code></td>
    <td>Indicates all the reasons available for rejecting a grouping recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_reasons" /></td>
    <td><code>array</code></td>
    <td>Indicates all the reasons available for rejecting a grouping recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="rejection_reason" /></td>
    <td><code>string</code></td>
    <td>Indicates the reason you had selected while rejecting a grouping recommendation. (DistinctBusinessPurpose, SeparateDataConcern, DistinctUserGroupHandling, Other)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Indicates the resources that are grouped in a recommended AppComponent.</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>number (double)</code></td>
    <td>Indicates the confidence level of the grouping recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of grouping resources into AppComponents. (Accepted, Rejected, PendingDecision)</td>
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
    <td><a href="#list_resource_grouping_recommendations"><CopyableCode code="list_resource_grouping_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the resource grouping recommendations suggested by Resilience Hub for your application.</td>
</tr>
<tr>
    <td><a href="#accept_resource_grouping_recommendations"><CopyableCode code="accept_resource_grouping_recommendations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-entries"><code>entries</code></a></td>
    <td></td>
    <td>Accepts the resource grouping recommendations suggested by Resilience Hub for your application.</td>
</tr>
<tr>
    <td><a href="#reject_resource_grouping_recommendations"><CopyableCode code="reject_resource_grouping_recommendations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-entries"><code>entries</code></a></td>
    <td></td>
    <td>Rejects resource grouping recommendations.</td>
</tr>
<tr>
    <td><a href="#start_resource_grouping_recommendation_task"><CopyableCode code="start_resource_grouping_recommendation_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Starts grouping recommendation task.</td>
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
<tr id="parameter-appArn">
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of grouping recommendations to be displayed per Resilience Hub application.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Null, or the token from a previous call to get the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_grouping_recommendations"
    values={[
        { label: 'list_resource_grouping_recommendations', value: 'list_resource_grouping_recommendations' }
    ]}
>
<TabItem value="list_resource_grouping_recommendations">

Lists the resource grouping recommendations suggested by Resilience Hub for your application.

```sql
SELECT
confidence_level,
creation_time,
grouping_app_component,
grouping_recommendation_id,
recommendation_reasons,
rejection_reason,
resources,
score,
status
FROM aws.resiliencehub.resource_grouping_recommendations
WHERE region = '{{ region }}' -- required
AND appArn = '{{ appArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_resource_grouping_recommendations"
    values={[
        { label: 'accept_resource_grouping_recommendations', value: 'accept_resource_grouping_recommendations' },
        { label: 'reject_resource_grouping_recommendations', value: 'reject_resource_grouping_recommendations' },
        { label: 'start_resource_grouping_recommendation_task', value: 'start_resource_grouping_recommendation_task' }
    ]}
>
<TabItem value="accept_resource_grouping_recommendations">

Accepts the resource grouping recommendations suggested by Resilience Hub for your application.

```sql
EXEC aws.resiliencehub.resource_grouping_recommendations.accept_resource_grouping_recommendations 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"entries": "{{ entries }}"
}'
;
```
</TabItem>
<TabItem value="reject_resource_grouping_recommendations">

Rejects resource grouping recommendations.

```sql
EXEC aws.resiliencehub.resource_grouping_recommendations.reject_resource_grouping_recommendations 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"entries": "{{ entries }}"
}'
;
```
</TabItem>
<TabItem value="start_resource_grouping_recommendation_task">

Starts grouping recommendation task.

```sql
EXEC aws.resiliencehub.resource_grouping_recommendations.start_resource_grouping_recommendation_task 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}"
}'
;
```
</TabItem>
</Tabs>
