--- 
title: stack_resource_drifts
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_resource_drifts
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

Creates, updates, deletes, gets or lists a <code>stack_resource_drifts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_resource_drifts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_resource_drifts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stack_resource_drifts"
    values={[
        { label: 'describe_stack_resource_drifts', value: 'describe_stack_resource_drifts' }
    ]}
>
<TabItem value="describe_stack_resource_drifts">

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
    <td><CopyableCode code="actual_properties" /></td>
    <td><code>string</code></td>
    <td>A JSON structure that contains the actual property values of the stack resource. For resources whose StackResourceDriftStatus is DELETED, this structure will not be present.</td>
</tr>
<tr>
    <td><CopyableCode code="drift_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the drift status.</td>
</tr>
<tr>
    <td><CopyableCode code="expected_properties" /></td>
    <td><code>string</code></td>
    <td>A JSON structure that contains the expected property values of the stack resource, as defined in the stack template and any values specified as template parameters. For resources whose StackResourceDriftStatus is DELETED, this structure will not be present.</td>
</tr>
<tr>
    <td><CopyableCode code="logical_resource_id" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource specified in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="module_info" /></td>
    <td><code>string</code></td>
    <td>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</td>
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
    <td>A collection of the resource properties whose actual values differ from their expected values. These will be present only for resources whose StackResourceDriftStatus is MODIFIED.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_resource_drift_status" /></td>
    <td><code>string</code></td>
    <td>Status of the resource's actual configuration compared to its expected configuration. DELETED: The resource differs from its expected template configuration because the resource has been deleted. MODIFIED: One or more resource properties differ from their expected values (as defined in the stack template and any values specified as template parameters). IN_SYNC: The resource's actual configuration matches its expected template configuration. NOT_CHECKED: CloudFormation does not currently return this value. UNKNOWN: CloudFormation could not run drift detection for the resource. See the DriftStatusReason for details.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>Time at which CloudFormation performed drift detection on the stack resource.</td>
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
    <td><a href="#describe_stack_resource_drifts"><CopyableCode code="describe_stack_resource_drifts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackResourceDriftStatusFilters"><code>StackResourceDriftStatusFilters</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift. For a given stack, there will be one StackResourceDrift for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see Resource type support for imports and drift detection. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all supported resources for a given stack.</td>
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
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name of the stack for which you want drift information.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
<tr id="parameter-StackResourceDriftStatusFilters">
    <td><CopyableCode code="StackResourceDriftStatusFilters" /></td>
    <td><code>array</code></td>
    <td>The resource drift status values to use as filters for the resource drift results returned. DELETED: The resource differs from its expected template configuration in that the resource has been deleted. MODIFIED: One or more resource properties differ from their expected template values. IN_SYNC: The resource's actual configuration matches its expected template configuration. NOT_CHECKED: CloudFormation doesn't currently return this value. UNKNOWN: CloudFormation could not run drift detection for the resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stack_resource_drifts"
    values={[
        { label: 'describe_stack_resource_drifts', value: 'describe_stack_resource_drifts' }
    ]}
>
<TabItem value="describe_stack_resource_drifts">

Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift. For a given stack, there will be one StackResourceDrift for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see Resource type support for imports and drift detection. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all supported resources for a given stack.

```sql
SELECT
actual_properties,
drift_status_reason,
expected_properties,
logical_resource_id,
module_info,
physical_resource_id,
physical_resource_id_context,
property_differences,
resource_type,
stack_id,
stack_resource_drift_status,
timestamp
FROM aws.cloudformation.stack_resource_drifts
WHERE StackName = '{{ StackName }}' -- required
AND region = '{{ region }}' -- required
AND StackResourceDriftStatusFilters = '{{ StackResourceDriftStatusFilters }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
