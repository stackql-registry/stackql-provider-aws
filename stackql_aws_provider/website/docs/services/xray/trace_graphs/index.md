--- 
title: trace_graphs
hide_title: false
hide_table_of_contents: false
keywords:
  - trace_graphs
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

Creates, updates, deletes, gets or lists a <code>trace_graphs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trace_graphs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.trace_graphs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trace_graph"
    values={[
        { label: 'get_trace_graph', value: 'get_trace_graph' }
    ]}
>
<TabItem value="get_trace_graph">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the Amazon Web Services account in which the service runs.</td>
</tr>
<tr>
    <td><CopyableCode code="DurationHistogram" /></td>
    <td><code>array</code></td>
    <td>A histogram that maps the spread of service durations.</td>
</tr>
<tr>
    <td><CopyableCode code="Edges" /></td>
    <td><code>array</code></td>
    <td>Connections to downstream services.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the last segment that the service generated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The canonical name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="Names" /></td>
    <td><code>array</code></td>
    <td>A list of names for the service, including the canonical name.</td>
</tr>
<tr>
    <td><CopyableCode code="ReferenceId" /></td>
    <td><code>integer</code></td>
    <td>Identifier for the service. Unique within the service map.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseTimeHistogram" /></td>
    <td><code>array</code></td>
    <td>A histogram that maps the spread of service response times.</td>
</tr>
<tr>
    <td><CopyableCode code="Root" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the service was the first service to process a request.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the first segment that the service generated.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The service's state.</td>
</tr>
<tr>
    <td><CopyableCode code="SummaryStatistics" /></td>
    <td><code>object</code></td>
    <td>Aggregated statistics for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of service. Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, AWS::EC2::Instance for an application running on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used. Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table. client - Represents the clients that sent requests to a root service. remote - A downstream service of indeterminate type.</td>
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
    <td><a href="#get_trace_graph"><CopyableCode code="get_trace_graph" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a service graph for one or more specific trace IDs.</td>
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
    defaultValue="get_trace_graph"
    values={[
        { label: 'get_trace_graph', value: 'get_trace_graph' }
    ]}
>
<TabItem value="get_trace_graph">

Retrieves a service graph for one or more specific trace IDs.

```sql
SELECT
AccountId,
DurationHistogram,
Edges,
EndTime,
Name,
Names,
ReferenceId,
ResponseTimeHistogram,
Root,
StartTime,
State,
SummaryStatistics,
Type
FROM aws.xray.trace_graphs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
