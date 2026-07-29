--- 
title: flow_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_operations
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

Creates, updates, deletes, gets or lists a <code>flow_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.flow_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow_operation"
    values={[
        { label: 'describe_flow_operation', value: 'describe_flow_operation' },
        { label: 'list_flow_operations', value: 'list_flow_operations' }
    ]}
>
<TabItem value="describe_flow_operation">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone where the firewall is located. For example, us-east-2a. Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_operation" /></td>
    <td><code>object</code></td>
    <td>Returns key information about a flow operation, such as related statuses, unique identifiers, and all filters defined in the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_operation_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_operation_status" /></td>
    <td><code>string</code></td>
    <td>Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands. If the status is COMPLETED_WITH_ERRORS, results may be returned with any number of Flows missing from the response. If the status is FAILED, Flows returned will be empty. (COMPLETED, IN_PROGRESS, FAILED, COMPLETED_WITH_ERRORS)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_operation_type" /></td>
    <td><code>string</code></td>
    <td>Defines the type of FlowOperation. (FLOW_FLUSH, FLOW_CAPTURE)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_request_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating when the Suricata engine identified flows impacted by an operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>If the asynchronous operation fails, Network Firewall populates this with the reason for the error or failure. Options include Flow operation error and Flow timeout. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9- &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a VPC endpoint association. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the primary endpoint associated with a firewall. (pattern: &lt;code&gt;^vpce-&#91;a-zA-Z0-9&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flow_operations">

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
    <td><CopyableCode code="flow_operation_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_operation_status" /></td>
    <td><code>string</code></td>
    <td>Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands. If the status is COMPLETED_WITH_ERRORS, results may be returned with any number of Flows missing from the response. If the status is FAILED, Flows returned will be empty. (COMPLETED, IN_PROGRESS, FAILED, COMPLETED_WITH_ERRORS)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_operation_type" /></td>
    <td><code>string</code></td>
    <td>Defines the type of FlowOperation. (FLOW_FLUSH, FLOW_CAPTURE)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_request_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating when the Suricata engine identified flows impacted by an operation.</td>
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
    <td><a href="#describe_flow_operation"><CopyableCode code="describe_flow_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns key information about a specific flow operation.</td>
</tr>
<tr>
    <td><a href="#list_flow_operations"><CopyableCode code="list_flow_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all flow operations ran in a specific firewall. You can optionally narrow the request scope by specifying the operation type or Availability Zone associated with a firewall's flow operations. Flow operations let you manage the flows tracked in the flow table, also known as the firewall table. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.</td>
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
    defaultValue="describe_flow_operation"
    values={[
        { label: 'describe_flow_operation', value: 'describe_flow_operation' },
        { label: 'list_flow_operations', value: 'list_flow_operations' }
    ]}
>
<TabItem value="describe_flow_operation">

Returns key information about a specific flow operation.

```sql
SELECT
availability_zone,
firewall_arn,
flow_operation,
flow_operation_id,
flow_operation_status,
flow_operation_type,
flow_request_timestamp,
status_message,
vpc_endpoint_association_arn,
vpc_endpoint_id
FROM aws.network_firewall.flow_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flow_operations">

Returns a list of all flow operations ran in a specific firewall. You can optionally narrow the request scope by specifying the operation type or Availability Zone associated with a firewall's flow operations. Flow operations let you manage the flows tracked in the flow table, also known as the firewall table. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.

```sql
SELECT
flow_operation_id,
flow_operation_status,
flow_operation_type,
flow_request_timestamp
FROM aws.network_firewall.flow_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
