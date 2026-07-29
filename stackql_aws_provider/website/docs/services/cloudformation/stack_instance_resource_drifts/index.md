--- 
title: stack_instance_resource_drifts
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_instance_resource_drifts
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

Creates, updates, deletes, gets or lists a <code>stack_instance_resource_drifts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_instance_resource_drifts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_instance_resource_drifts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_stack_instance_resource_drifts"
    values={[
        { label: 'list_stack_instance_resource_drifts', value: 'list_stack_instance_resource_drifts' }
    ]}
>
<TabItem value="list_stack_instance_resource_drifts">

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
    <td><CopyableCode code="logical_resource_id" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource specified in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="physical_resource_id" /></td>
    <td><code>string</code></td>
    <td>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</td>
</tr>
<tr>
    <td><CopyableCode code="physical_resource_id_context" /></td>
    <td><code>string</code></td>
    <td>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a unique resource that contains the targeted resource.</td>
</tr>
<tr>
    <td><CopyableCode code="property_differences" /></td>
    <td><code>string</code></td>
    <td>Status of the actual configuration of the resource compared to its expected configuration. These will be present only for resources whose StackInstanceResourceDriftStatus is MODIFIED.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Type of resource. For more information, see Amazon Web Services resource and property types reference in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_resource_drift_status" /></td>
    <td><code>string</code></td>
    <td>The drift status of the resource in a stack instance. DELETED: The resource differs from its expected template configuration in that the resource has been deleted. MODIFIED: One or more resource properties differ from their expected template values. IN_SYNC: The resource's actual configuration matches its expected template configuration. NOT_CHECKED: CloudFormation doesn't currently return this value.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>Time at which the stack instance drift detection operation was initiated.</td>
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
    <td><a href="#list_stack_instance_resource_drifts"><CopyableCode code="list_stack_instance_resource_drifts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-StackInstanceAccount"><code>StackInstanceAccount</code></a>, <a href="#parameter-StackInstanceRegion"><code>StackInstanceRegion</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-StackInstanceResourceDriftStatuses"><code>StackInstanceResourceDriftStatuses</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns drift information for resources in a stack instance. ListStackInstanceResourceDrifts returns drift information for the most recent drift detection operation. If an operation is in progress, it may only return partial results.</td>
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
    <td>The unique ID of the drift operation.</td>
</tr>
<tr id="parameter-StackInstanceAccount">
    <td><CopyableCode code="StackInstanceAccount" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services account that you want to list resource drifts for.</td>
</tr>
<tr id="parameter-StackInstanceRegion">
    <td><CopyableCode code="StackInstanceRegion" /></td>
    <td><code>string</code></td>
    <td>The name of the Region where you want to list resource drifts.</td>
</tr>
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that you want to list drifted resources for.</td>
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
<tr id="parameter-StackInstanceResourceDriftStatuses">
    <td><CopyableCode code="StackInstanceResourceDriftStatuses" /></td>
    <td><code>array</code></td>
    <td>The resource drift status of the stack instance. DELETED: The resource differs from its expected template configuration in that the resource has been deleted. MODIFIED: One or more resource properties differ from their expected template values. IN_SYNC: The resource's actual configuration matches its expected template configuration. NOT_CHECKED: CloudFormation doesn't currently return this value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_stack_instance_resource_drifts"
    values={[
        { label: 'list_stack_instance_resource_drifts', value: 'list_stack_instance_resource_drifts' }
    ]}
>
<TabItem value="list_stack_instance_resource_drifts">

Returns drift information for resources in a stack instance. ListStackInstanceResourceDrifts returns drift information for the most recent drift detection operation. If an operation is in progress, it may only return partial results.

```sql
SELECT
logical_resource_id,
physical_resource_id,
physical_resource_id_context,
property_differences,
resource_type,
stack_id,
stack_resource_drift_status,
timestamp
FROM aws.cloudformation.stack_instance_resource_drifts
WHERE StackSetName = '{{ StackSetName }}' -- required
AND StackInstanceAccount = '{{ StackInstanceAccount }}' -- required
AND StackInstanceRegion = '{{ StackInstanceRegion }}' -- required
AND OperationId = '{{ OperationId }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND StackInstanceResourceDriftStatuses = '{{ StackInstanceResourceDriftStatuses }}'
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>
