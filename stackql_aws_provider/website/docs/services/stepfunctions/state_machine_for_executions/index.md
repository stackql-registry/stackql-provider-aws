--- 
title: state_machine_for_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machine_for_executions
  - stepfunctions
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

Creates, updates, deletes, gets or lists a <code>state_machine_for_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="state_machine_for_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.state_machine_for_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_state_machine_for_execution"
    values={[
        { label: 'describe_state_machine_for_execution', value: 'describe_state_machine_for_execution' }
    ]}
>
<TabItem value="describe_state_machine_for_execution">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the state machine associated with the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The Amazon States Language definition of the state machine. See Amazon States Language.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>Settings to configure server-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>A user-defined or an auto-generated string that identifies a Map state. This field is returned only if the executionArn is a child workflow execution that was started by a Distributed Map state.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_configuration" /></td>
    <td><code>object</code></td>
    <td>The LoggingConfiguration data type is used to set CloudWatch Logs options.</td>
</tr>
<tr>
    <td><CopyableCode code="map_run_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This field is returned only if the executionArn is a child workflow execution that was started by a Distributed Map state.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The revision identifier for the state machine. The first revision ID when you create the state machine is null. Use the state machine revisionId parameter to compare the revision of a state machine with the configuration of the state machine used for executions without performing a diff of the properties, such as definition and roleArn.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="state_machine_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state machine associated with the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="tracing_configuration" /></td>
    <td><code>object</code></td>
    <td>Selects whether X-Ray tracing is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the state machine associated with an execution was updated. For a newly created state machine, this is the creation date.</td>
</tr>
<tr>
    <td><CopyableCode code="variable_references" /></td>
    <td><code>object</code></td>
    <td>A map of state name to a list of variables referenced by that state. States that do not use variable references will not be shown in the response.</td>
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
    <td><a href="#describe_state_machine_for_execution"><CopyableCode code="describe_state_machine_for_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.</td>
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
    defaultValue="describe_state_machine_for_execution"
    values={[
        { label: 'describe_state_machine_for_execution', value: 'describe_state_machine_for_execution' }
    ]}
>
<TabItem value="describe_state_machine_for_execution">

Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.

```sql
SELECT
name,
definition,
encryption_configuration,
label,
logging_configuration,
map_run_arn,
revision_id,
role_arn,
state_machine_arn,
tracing_configuration,
update_date,
variable_references
FROM aws.stepfunctions.state_machine_for_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
