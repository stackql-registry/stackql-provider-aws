--- 
title: connector_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_operations
  - kafkaconnect
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

Creates, updates, deletes, gets or lists a <code>connector_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafkaconnect.connector_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connector_operation"
    values={[
        { label: 'describe_connector_operation', value: 'describe_connector_operation' },
        { label: 'list_connector_operations', value: 'list_connector_operations' }
    ]}
>
<TabItem value="describe_connector_operation">

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
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_operation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector operation.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_operation_state" /></td>
    <td><code>string</code></td>
    <td>The state of the connector operation. (PENDING, UPDATE_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_FAILED, ROLLBACK_IN_PROGRESS, ROLLBACK_FAILED, ROLLBACK_COMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_operation_type" /></td>
    <td><code>string</code></td>
    <td>The type of connector operation performed. (UPDATE_WORKER_SETTING, UPDATE_CONNECTOR_CONFIGURATION, ISOLATE_CONNECTOR, RESTORE_CONNECTOR)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the operation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the operation ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>Details about the state of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_steps" /></td>
    <td><code>array</code></td>
    <td>The array of operation steps taken.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_connector_configuration" /></td>
    <td><code>object</code></td>
    <td>The origin connector configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_worker_setting" /></td>
    <td><code>object</code></td>
    <td>The origin worker setting.</td>
</tr>
<tr>
    <td><CopyableCode code="target_connector_configuration" /></td>
    <td><code>object</code></td>
    <td>The target connector configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="target_worker_setting" /></td>
    <td><code>object</code></td>
    <td>The target worker setting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connector_operations">

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
    <td><CopyableCode code="connector_operation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector operation.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_operation_state" /></td>
    <td><code>string</code></td>
    <td>The state of the connector operation. (PENDING, UPDATE_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_FAILED, ROLLBACK_IN_PROGRESS, ROLLBACK_FAILED, ROLLBACK_COMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_operation_type" /></td>
    <td><code>string</code></td>
    <td>The type of connector operation performed. (UPDATE_WORKER_SETTING, UPDATE_CONNECTOR_CONFIGURATION, ISOLATE_CONNECTOR, RESTORE_CONNECTOR)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when operation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when operation ended.</td>
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
    <td><a href="#describe_connector_operation"><CopyableCode code="describe_connector_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_operation_arn"><code>connector_operation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified connector's operations.</td>
</tr>
<tr>
    <td><a href="#list_connector_operations"><CopyableCode code="list_connector_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists information about a connector's operation(s).</td>
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
<tr id="parameter-connector_arn">
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector for which to list operations.</td>
</tr>
<tr id="parameter-connector_operation_arn">
    <td><CopyableCode code="connector_operation_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the connector operation to be described.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of connector operations to fetch in one get request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, it includes a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_connector_operation"
    values={[
        { label: 'describe_connector_operation', value: 'describe_connector_operation' },
        { label: 'list_connector_operations', value: 'list_connector_operations' }
    ]}
>
<TabItem value="describe_connector_operation">

Returns information about the specified connector's operations.

```sql
SELECT
connector_arn,
connector_operation_arn,
connector_operation_state,
connector_operation_type,
creation_time,
end_time,
error_info,
operation_steps,
origin_connector_configuration,
origin_worker_setting,
target_connector_configuration,
target_worker_setting
FROM aws.kafkaconnect.connector_operations
WHERE connector_operation_arn = '{{ connector_operation_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connector_operations">

Lists information about a connector's operation(s).

```sql
SELECT
connector_operation_arn,
connector_operation_state,
connector_operation_type,
creation_time,
end_time
FROM aws.kafkaconnect.connector_operations
WHERE connector_arn = '{{ connector_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
