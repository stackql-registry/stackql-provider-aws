--- 
title: stack_drift_detection_status
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_drift_detection_status
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

Creates, updates, deletes, gets or lists a <code>stack_drift_detection_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_drift_detection_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_drift_detection_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stack_drift_detection_status"
    values={[
        { label: 'describe_stack_drift_detection_status', value: 'describe_stack_drift_detection_status' }
    ]}
>
<TabItem value="describe_stack_drift_detection_status">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#describe_stack_drift_detection_status"><CopyableCode code="describe_stack_drift_detection_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackDriftDetectionId"><code>StackDriftDetectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackDrift to initiate a stack drift detection operation. DetectStackDrift returns a StackDriftDetectionId you can use to monitor the progress of the operation using DescribeStackDriftDetectionStatus. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources.</td>
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
<tr id="parameter-StackDriftDetectionId">
    <td><CopyableCode code="StackDriftDetectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the drift detection results of this operation. CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results CloudFormation retains for any given stack, and for how long, may vary.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stack_drift_detection_status"
    values={[
        { label: 'describe_stack_drift_detection_status', value: 'describe_stack_drift_detection_status' }
    ]}
>
<TabItem value="describe_stack_drift_detection_status">

Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackDrift to initiate a stack drift detection operation. DetectStackDrift returns a StackDriftDetectionId you can use to monitor the progress of the operation using DescribeStackDriftDetectionStatus. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources.

```sql
SELECT
line_items
FROM aws.cloudformation.stack_drift_detection_status
WHERE StackDriftDetectionId = '{{ StackDriftDetectionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
