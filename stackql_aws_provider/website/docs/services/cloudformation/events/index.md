--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - cloudformation
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

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
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the request that initiated this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="detailed_status" /></td>
    <td><code>string</code></td>
    <td>Additional status information about the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The time when the event ended.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event.</td>
</tr>
<tr>
    <td><CopyableCode code="hook_failure_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies how Hook failures are handled.</td>
</tr>
<tr>
    <td><CopyableCode code="hook_invocation_point" /></td>
    <td><code>string</code></td>
    <td>The point in the operation lifecycle when the Hook was invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="hook_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Hook invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="hook_status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the Hook status.</td>
</tr>
<tr>
    <td><CopyableCode code="hook_type" /></td>
    <td><code>string</code></td>
    <td>The type name of the Hook that was invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="logical_resource_id" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource as specified in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the operation this event belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_type" /></td>
    <td><code>string</code></td>
    <td>The type of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="physical_resource_id" /></td>
    <td><code>string</code></td>
    <td>The name or unique identifier that corresponds to a physical instance ID of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_properties" /></td>
    <td><code>string</code></td>
    <td>The properties used to create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current status of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status_reason" /></td>
    <td><code>string</code></td>
    <td>Success or failure message associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Type of resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID name of the instance of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The time when the event started.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>Time the status was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_failure_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies how validation failures are handled.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_name" /></td>
    <td><code>string</code></td>
    <td>The name of the validation that was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_path" /></td>
    <td><code>string</code></td>
    <td>The path within the resource where the validation was applied.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_status" /></td>
    <td><code>string</code></td>
    <td>The status of the validation.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the validation status.</td>
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
    <td><a href="#describe_events"><CopyableCode code="describe_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-ChangeSetName"><code>ChangeSetName</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns CloudFormation events based on flexible query criteria. Groups events by operation ID, enabling you to focus on individual stack operations during deployment. An operation is any action performed on a stack, including stack lifecycle actions (Create, Update, Delete, Rollback), change set creation, nested stack creation, and automatic rollbacks triggered by failures. Each operation has a unique identifier (Operation ID) and represents a discrete change attempt on the stack. Returns different types of events including: Progress events - Status updates during stack operation execution. Validation errors - Failures from CloudFormation Early Validations. Provisioning errors - Resource creation and update failures. Hook invocation errors - Failures from CloudFormation Hook during stack operations. One of ChangeSetName, OperationId or StackName must be specified as input.</td>
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
<tr id="parameter-ChangeSetName">
    <td><CopyableCode code="ChangeSetName" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the change set for which you want to retrieve events.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>object</code></td>
    <td>Filters to apply when retrieving events.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-OperationId">
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the operation for which you want to retrieve events.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name or unique stack ID for which you want to retrieve events.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

Returns CloudFormation events based on flexible query criteria. Groups events by operation ID, enabling you to focus on individual stack operations during deployment. An operation is any action performed on a stack, including stack lifecycle actions (Create, Update, Delete, Rollback), change set creation, nested stack creation, and automatic rollbacks triggered by failures. Each operation has a unique identifier (Operation ID) and represents a discrete change attempt on the stack. Returns different types of events including: Progress events - Status updates during stack operation execution. Validation errors - Failures from CloudFormation Early Validations. Provisioning errors - Resource creation and update failures. Hook invocation errors - Failures from CloudFormation Hook during stack operations. One of ChangeSetName, OperationId or StackName must be specified as input.

```sql
SELECT
client_request_token,
detailed_status,
end_time,
event_id,
event_type,
hook_failure_mode,
hook_invocation_point,
hook_status,
hook_status_reason,
hook_type,
logical_resource_id,
operation_id,
operation_status,
operation_type,
physical_resource_id,
resource_properties,
resource_status,
resource_status_reason,
resource_type,
stack_id,
start_time,
timestamp,
validation_failure_mode,
validation_name,
validation_path,
validation_status,
validation_status_reason
FROM aws.cloudformation.events
WHERE region = '{{ region }}' -- required
AND StackName = '{{ StackName }}'
AND ChangeSetName = '{{ ChangeSetName }}'
AND OperationId = '{{ OperationId }}'
AND Filters = '{{ Filters }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
