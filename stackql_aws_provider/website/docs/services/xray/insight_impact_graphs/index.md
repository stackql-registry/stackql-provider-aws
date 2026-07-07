--- 
title: insight_impact_graphs
hide_title: false
hide_table_of_contents: false
keywords:
  - insight_impact_graphs
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

Creates, updates, deletes, gets or lists an <code>insight_impact_graphs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insight_impact_graphs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.insight_impact_graphs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insight_impact_graph"
    values={[
        { label: 'get_insight_impact_graph', value: 'get_insight_impact_graph' }
    ]}
>
<TabItem value="get_insight_impact_graph">

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
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The provided end time.</td>
</tr>
<tr>
    <td><CopyableCode code="InsightId" /></td>
    <td><code>string</code></td>
    <td>The insight's unique identifier. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;1-5&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;89abAB&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceGraphEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in Unix seconds, at which the service graph ended.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceGraphStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in Unix seconds, at which the service graph started.</td>
</tr>
<tr>
    <td><CopyableCode code="Services" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services instrumented services related to the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The provided start time.</td>
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
    <td><a href="#get_insight_impact_graph"><CopyableCode code="get_insight_impact_graph" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.</td>
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
    defaultValue="get_insight_impact_graph"
    values={[
        { label: 'get_insight_impact_graph', value: 'get_insight_impact_graph' }
    ]}
>
<TabItem value="get_insight_impact_graph">

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

```sql
SELECT
EndTime,
InsightId,
NextToken,
ServiceGraphEndTime,
ServiceGraphStartTime,
Services,
StartTime
FROM aws.xray.insight_impact_graphs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
