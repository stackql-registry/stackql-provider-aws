--- 
title: route_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - route_analysis
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>route_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.route_analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_route_analysis"
    values={[
        { label: 'get_route_analysis', value: 'get_route_analysis' }
    ]}
>
<TabItem value="get_route_analysis">

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
    <td><CopyableCode code="Destination" /></td>
    <td><code>object</code></td>
    <td>The destination.</td>
</tr>
<tr>
    <td><CopyableCode code="ForwardPath" /></td>
    <td><code>object</code></td>
    <td>The forward path.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IncludeReturnPath" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to analyze the return path. The return path is not analyzed if the forward path analysis does not succeed.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AWS account that created the route analysis. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReturnPath" /></td>
    <td><code>object</code></td>
    <td>The return path.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteAnalysisId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route analysis. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>object</code></td>
    <td>The source.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the route analysis. (RUNNING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="UseMiddleboxes" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include the location of middlebox appliances in the route analysis.</td>
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
    <td><a href="#get_route_analysis"><CopyableCode code="get_route_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-route_analysis_id"><code>route_analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified route analysis.</td>
</tr>
<tr>
    <td><a href="#start_route_analysis"><CopyableCode code="start_route_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Destination"><code>Destination</code></a></td>
    <td></td>
    <td>Starts analyzing the routing path between the specified source and destination. For more information, see Route Analyzer.</td>
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
<tr id="parameter-global_network_id">
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-route_analysis_id">
    <td><CopyableCode code="route_analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the route analysis.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_route_analysis"
    values={[
        { label: 'get_route_analysis', value: 'get_route_analysis' }
    ]}
>
<TabItem value="get_route_analysis">

Gets information about the specified route analysis.

```sql
SELECT
Destination,
ForwardPath,
GlobalNetworkId,
IncludeReturnPath,
OwnerAccountId,
ReturnPath,
RouteAnalysisId,
Source,
StartTimestamp,
Status,
UseMiddleboxes
FROM aws.networkmanager.route_analysis
WHERE global_network_id = '{{ global_network_id }}' -- required
AND route_analysis_id = '{{ route_analysis_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_route_analysis"
    values={[
        { label: 'start_route_analysis', value: 'start_route_analysis' }
    ]}
>
<TabItem value="start_route_analysis">

Starts analyzing the routing path between the specified source and destination. For more information, see Route Analyzer.

```sql
EXEC aws.networkmanager.route_analysis.start_route_analysis 
@global_network_id='{{ global_network_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Source": "{{ Source }}", 
"Destination": "{{ Destination }}", 
"IncludeReturnPath": {{ IncludeReturnPath }}, 
"UseMiddleboxes": {{ UseMiddleboxes }}
}'
;
```
</TabItem>
</Tabs>
