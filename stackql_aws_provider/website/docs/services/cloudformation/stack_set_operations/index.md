--- 
title: stack_set_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_set_operations
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

Creates, updates, deletes, gets or lists a <code>stack_set_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_set_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_set_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stack_set_operation"
    values={[
        { label: 'describe_stack_set_operation', value: 'describe_stack_set_operation' },
        { label: 'list_stack_set_operations', value: 'list_stack_set_operations' }
    ]}
>
<TabItem value="describe_stack_set_operation">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The type of StackSet operation: CREATE, UPDATE, or DELETE. Create and delete operations affect only the specified stack instances that are associated with the specified StackSet. Update operations affect both the StackSet itself, in addition to all associated stack instances.</td>
</tr>
<tr>
    <td><CopyableCode code="administration_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used to perform this StackSet operation. Use customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see Grant self-managed permissions in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time at which the operation was initiated. Note that the creation times for the stack set operation might differ from the creation time of the individual stacks themselves. This is because CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested Regions, before actually creating the first stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_targets" /></td>
    <td><code>string</code></td>
    <td>The Organizations accounts affected by the stack operation. Valid only if the StackSet uses service-managed permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time at which the StackSet operation ended, across all accounts and Regions specified. Note that this doesn't necessarily mean that the StackSet operation was successful, or even attempted, in each account or Region.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM execution role used to create or update the StackSet. Use customized execution roles to control which stack resources users and groups can include in their StackSets.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of a StackSet operation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_preferences" /></td>
    <td><code>string</code></td>
    <td>The preferences for how CloudFormation performs this StackSet operation.</td>
</tr>
<tr>
    <td><CopyableCode code="retain_stacks" /></td>
    <td><code>boolean</code></td>
    <td>For StackSet operations of action type DELETE, specifies whether to remove the stack instances from the specified StackSet, but doesn't delete the stacks. You can't re-associate a retained stack, or add an existing, saved stack to a new StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_drift_detection_details" /></td>
    <td><code>string</code></td>
    <td>Detailed information about the drift status of the StackSet. This includes information about drift operations currently being performed on the StackSet. This information will only be present for StackSet operations whose Action type is DETECT_DRIFT. For more information, see Performing drift detection on CloudFormation StackSets in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. FAILED: The operation exceeded the specified failure tolerance. The failure tolerance value that you've set for an operation is applied for each Region during stack create and update operations. If the number of failed stacks within a Region exceeds the failure tolerance, the status of the operation in the Region is set to FAILED. This in turn sets the status of the operation as a whole to FAILED, and CloudFormation cancels the operation in any remaining Regions. QUEUED: &#91;Service-managed permissions&#93; For automatic deployments that require a sequence of operations, the operation is queued to be performed. For more information, see the StackSets status codes in the CloudFormation User Guide. RUNNING: The operation is currently being performed. STOPPED: The user has canceled the operation. STOPPING: The operation is in the process of stopping, at user request. SUCCEEDED: The operation completed creating or updating all the specified stacks without exceeding the failure tolerance for the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>Detailed information about the StackSet operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The status of the operation in details.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stack_set_operations">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The type of operation: CREATE, UPDATE, or DELETE. Create and delete operations affect only the specified stack instances that are associated with the specified StackSet. Update operations affect both the StackSet itself and all associated StackSet instances.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time at which the operation was initiated. Note that the creation times for the StackSet operation might differ from the creation time of the individual stacks themselves. This is because CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested Regions, before actually creating the first stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time at which the StackSet operation ended, across all accounts and Regions specified. Note that this doesn't necessarily mean that the StackSet operation was successful, or even attempted, in each account or Region.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the StackSet operation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_preferences" /></td>
    <td><code>string</code></td>
    <td>The user-specified preferences for how CloudFormation performs a StackSet operation. For more information about maximum concurrent accounts and failure tolerance, see StackSet operation options.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the operation. FAILED: The operation exceeded the specified failure tolerance. The failure tolerance value that you've set for an operation is applied for each Region during stack create and update operations. If the number of failed stacks within a Region exceeds the failure tolerance, the status of the operation in the Region is set to FAILED. This in turn sets the status of the operation as a whole to FAILED, and CloudFormation cancels the operation in any remaining Regions. QUEUED: &#91;Service-managed permissions&#93; For automatic deployments that require a sequence of operations, the operation is queued to be performed. For more information, see the StackSet status codes in the CloudFormation User Guide. RUNNING: The operation is currently being performed. STOPPED: The user has canceled the operation. STOPPING: The operation is in the process of stopping, at user request. SUCCEEDED: The operation completed creating or updating all the specified stacks without exceeding the failure tolerance for the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>Detailed information about the StackSet operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The status of the operation in details.</td>
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
    <td><a href="#describe_stack_set_operation"><CopyableCode code="describe_stack_set_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns the description of the specified StackSet operation. This API provides strongly consistent reads meaning it will always return the most up-to-date data.</td>
</tr>
<tr>
    <td><a href="#list_stack_set_operations"><CopyableCode code="list_stack_set_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns summary information about operations performed on a StackSet. This API provides eventually consistent reads meaning it may take some time but will eventually return the most up-to-date data.</td>
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
<tr id="parameter-OperationId">
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the StackSet operation.</td>
</tr>
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that you want to get operation summaries for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stack_set_operation"
    values={[
        { label: 'describe_stack_set_operation', value: 'describe_stack_set_operation' },
        { label: 'list_stack_set_operations', value: 'list_stack_set_operations' }
    ]}
>
<TabItem value="describe_stack_set_operation">

Returns the description of the specified StackSet operation. This API provides strongly consistent reads meaning it will always return the most up-to-date data.

```sql
SELECT
action,
administration_role_arn,
creation_timestamp,
deployment_targets,
end_timestamp,
execution_role_name,
operation_id,
operation_preferences,
retain_stacks,
stack_set_drift_detection_details,
stack_set_id,
status,
status_details,
status_reason
FROM aws.cloudformation.stack_set_operations
WHERE StackSetName = '{{ StackSetName }}' -- required
AND OperationId = '{{ OperationId }}' -- required
AND region = '{{ region }}' -- required
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
<TabItem value="list_stack_set_operations">

Returns summary information about operations performed on a StackSet. This API provides eventually consistent reads meaning it may take some time but will eventually return the most up-to-date data.

```sql
SELECT
action,
creation_timestamp,
end_timestamp,
operation_id,
operation_preferences,
status,
status_details,
status_reason
FROM aws.cloudformation.stack_set_operations
WHERE StackSetName = '{{ StackSetName }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>
