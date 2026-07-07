--- 
title: sol_network_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - sol_network_operations
  - tnb
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

Creates, updates, deletes, gets or lists a <code>sol_network_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sol_network_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.tnb.sol_network_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sol_network_operation"
    values={[
        { label: 'get_sol_network_operation', value: 'get_sol_network_operation' },
        { label: 'list_sol_network_operations', value: 'list_sol_network_operations' }
    ]}
>
<TabItem value="get_sol_network_operation">

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
    <td>ID of this network operation occurrence. (pattern: &lt;code&gt;^no-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network operation ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(network-operation/no-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error related to this specific network operation occurrence.</td>
</tr>
<tr>
    <td><CopyableCode code="lcmOperationType" /></td>
    <td><code>string</code></td>
    <td>Type of the operation represented by this occurrence. (INSTANTIATE, UPDATE, TERMINATE)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata of this network operation occurrence.</td>
</tr>
<tr>
    <td><CopyableCode code="nsInstanceId" /></td>
    <td><code>string</code></td>
    <td>ID of the network operation instance. (pattern: &lt;code&gt;^ni-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operationState" /></td>
    <td><code>string</code></td>
    <td>The state of the network operation. (PROCESSING, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</td>
</tr>
<tr>
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td>All tasks associated with this operation occurrence.</td>
</tr>
<tr>
    <td><CopyableCode code="updateType" /></td>
    <td><code>string</code></td>
    <td>Type of the update. Only present if the network operation lcmOperationType is UPDATE. (MODIFY_VNF_INFORMATION, UPDATE_NS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sol_network_operations">

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
    <td>ID of this network operation. (pattern: &lt;code&gt;^no-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network operation ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(network-operation/no-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error related to this specific network operation.</td>
</tr>
<tr>
    <td><CopyableCode code="lcmOperationType" /></td>
    <td><code>string</code></td>
    <td>Type of lifecycle management network operation. (INSTANTIATE, UPDATE, TERMINATE)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata related to this network operation.</td>
</tr>
<tr>
    <td><CopyableCode code="nsInstanceId" /></td>
    <td><code>string</code></td>
    <td>ID of the network instance related to this operation. (pattern: &lt;code&gt;^ni-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operationState" /></td>
    <td><code>string</code></td>
    <td>The state of the network operation. (PROCESSING, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateType" /></td>
    <td><code>string</code></td>
    <td>Type of the update. Only present if the network operation lcmOperationType is UPDATE. (MODIFY_VNF_INFORMATION, UPDATE_NS)</td>
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
    <td><a href="#get_sol_network_operation"><CopyableCode code="get_sol_network_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ns_lcm_op_occ_id"><code>ns_lcm_op_occ_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a network operation, including the tasks involved in the network operation and the status of the tasks. A network operation is any operation that is done to your network, such as network instance instantiation or termination.</td>
</tr>
<tr>
    <td><a href="#list_sol_network_operations"><CopyableCode code="list_sol_network_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-nextpage_opaque_marker"><code>nextpage_opaque_marker</code></a>, <a href="#parameter-nsInstanceId"><code>nsInstanceId</code></a></td>
    <td>Lists details for a network operation, including when the operation started and the status of the operation. A network operation is any operation that is done to your network, such as network instance instantiation or termination.</td>
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
<tr id="parameter-ns_lcm_op_occ_id">
    <td><CopyableCode code="ns_lcm_op_occ_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the network operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response.</td>
</tr>
<tr id="parameter-nextpage_opaque_marker">
    <td><CopyableCode code="nextpage_opaque_marker" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-nsInstanceId">
    <td><CopyableCode code="nsInstanceId" /></td>
    <td><code>string</code></td>
    <td>Network instance id filter, to retrieve network operations associated to a network instance.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sol_network_operation"
    values={[
        { label: 'get_sol_network_operation', value: 'get_sol_network_operation' },
        { label: 'list_sol_network_operations', value: 'list_sol_network_operations' }
    ]}
>
<TabItem value="get_sol_network_operation">

Gets the details of a network operation, including the tasks involved in the network operation and the status of the tasks. A network operation is any operation that is done to your network, such as network instance instantiation or termination.

```sql
SELECT
id,
arn,
error,
lcmOperationType,
metadata,
nsInstanceId,
operationState,
tags,
tasks,
updateType
FROM aws.tnb.sol_network_operations
WHERE ns_lcm_op_occ_id = '{{ ns_lcm_op_occ_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sol_network_operations">

Lists details for a network operation, including when the operation started and the status of the operation. A network operation is any operation that is done to your network, such as network instance instantiation or termination.

```sql
SELECT
id,
arn,
error,
lcmOperationType,
metadata,
nsInstanceId,
operationState,
updateType
FROM aws.tnb.sol_network_operations
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND nextpage_opaque_marker = '{{ nextpage_opaque_marker }}'
AND nsInstanceId = '{{ nsInstanceId }}'
;
```
</TabItem>
</Tabs>
