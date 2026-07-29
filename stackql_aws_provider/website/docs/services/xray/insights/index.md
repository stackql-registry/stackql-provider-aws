--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
  - xray
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insight"
    values={[
        { label: 'get_insight', value: 'get_insight' }
    ]}
>
<TabItem value="get_insight">

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
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories that label and describe the type of insight.</td>
</tr>
<tr>
    <td><CopyableCode code="client_request_impact_statistics" /></td>
    <td><code>object</code></td>
    <td>The impact statistics of the client side service. This includes the number of requests to the client service and whether the requests were faults or okay.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in Unix seconds, at which the insight ended.</td>
</tr>
<tr>
    <td><CopyableCode code="group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the group that the insight belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group that the insight belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="insight_id" /></td>
    <td><code>string</code></td>
    <td>The insights unique identifier. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;1-5&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;89abAB&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="root_cause_service_id" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="root_cause_service_request_impact_statistics" /></td>
    <td><code>object</code></td>
    <td>The impact statistics of the root cause service. This includes the number of requests to the client service and whether the requests were faults or okay.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in Unix seconds, at which the insight began.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the insight. (ACTIVE, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A brief description of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="top_anomalous_services" /></td>
    <td><code>array</code></td>
    <td>The service within the insight that is most impacted by the incident.</td>
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
    <td><a href="#get_insight"><CopyableCode code="get_insight" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.</td>
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
    defaultValue="get_insight"
    values={[
        { label: 'get_insight', value: 'get_insight' }
    ]}
>
<TabItem value="get_insight">

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

```sql
SELECT
categories,
client_request_impact_statistics,
end_time,
group_arn,
group_name,
insight_id,
root_cause_service_id,
root_cause_service_request_impact_statistics,
start_time,
state,
summary,
top_anomalous_services
FROM aws.xray.insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
