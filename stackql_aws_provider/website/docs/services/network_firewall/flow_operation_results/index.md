--- 
title: flow_operation_results
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_operation_results
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>flow_operation_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_operation_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.flow_operation_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_flow_operation_results"
    values={[
        { label: 'list_flow_operation_results', value: 'list_flow_operation_results' }
    ]}
>
<TabItem value="list_flow_operation_results">

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
    <td><CopyableCode code="age" /></td>
    <td><code>integer</code></td>
    <td>Returned as info about age of the flows identified by the flow operation.</td>
</tr>
<tr>
    <td><CopyableCode code="byte_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Returns the number of bytes received or transmitted in a specific flow.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_address" /></td>
    <td><code>object</code></td>
    <td>A single IP address specification. This is used in the MatchAttributes source and destination specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_port" /></td>
    <td><code>string</code></td>
    <td>The destination port to inspect for. You can specify an individual port, for example 1994 and you can specify a port range, for example 1990:1994. To match with any port, specify ANY. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="packet_count" /></td>
    <td><code>integer</code></td>
    <td>Returns the total number of data packets received or transmitted in a flow.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocols to inspect for, specified using the assigned internet protocol number (IANA) for each protocol. If not specified, this matches with any protocol. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_address" /></td>
    <td><code>object</code></td>
    <td>A single IP address specification. This is used in the MatchAttributes source and destination specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="source_port" /></td>
    <td><code>string</code></td>
    <td>The source port to inspect for. You can specify an individual port, for example 1994 and you can specify a port range, for example 1990:1994. To match with any port, specify ANY. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
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
    <td><a href="#list_flow_operation_results"><CopyableCode code="list_flow_operation_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the results of a specific flow operation. Flow operations let you manage the flows tracked in the flow table, also known as the firewall table. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.</td>
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
    defaultValue="list_flow_operation_results"
    values={[
        { label: 'list_flow_operation_results', value: 'list_flow_operation_results' }
    ]}
>
<TabItem value="list_flow_operation_results">

Returns the results of a specific flow operation. Flow operations let you manage the flows tracked in the flow table, also known as the firewall table. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.

```sql
SELECT
age,
byte_count,
destination_address,
destination_port,
packet_count,
protocol,
source_address,
source_port
FROM aws.network_firewall.flow_operation_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
