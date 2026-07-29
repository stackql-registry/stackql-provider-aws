--- 
title: command_executions_for_sandboxes
hide_title: false
hide_table_of_contents: false
keywords:
  - command_executions_for_sandboxes
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>command_executions_for_sandboxes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="command_executions_for_sandboxes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.command_executions_for_sandboxes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_command_executions_for_sandbox"
    values={[
        { label: 'list_command_executions_for_sandbox', value: 'list_command_executions_for_sandbox' }
    ]}
>
<TabItem value="list_command_executions_for_sandbox">

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
    <td>The ID of the command execution.</td>
</tr>
<tr>
    <td><CopyableCode code="command" /></td>
    <td><code>string</code></td>
    <td>The command that needs to be executed.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the command execution process ended, expressed in Unix time format.</td>
</tr>
<tr>
    <td><CopyableCode code="exit_code" /></td>
    <td><code>string</code></td>
    <td>The exit code to return upon completion.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>object</code></td>
    <td>Information about build logs in CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="sandbox_arn" /></td>
    <td><code>string</code></td>
    <td>A sandboxArn.</td>
</tr>
<tr>
    <td><CopyableCode code="sandbox_id" /></td>
    <td><code>string</code></td>
    <td>A sandboxId.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_err_content" /></td>
    <td><code>string</code></td>
    <td>The text written by the command to stderr.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_output_content" /></td>
    <td><code>string</code></td>
    <td>The text written by the command to stdout.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the command execution process started, expressed in Unix time format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the command execution.</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the command execution process was initially submitted, expressed in Unix time format.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The command type. (SHELL)</td>
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
    <td><a href="#list_command_executions_for_sandbox"><CopyableCode code="list_command_executions_for_sandbox" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of command executions for a sandbox.</td>
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
    defaultValue="list_command_executions_for_sandbox"
    values={[
        { label: 'list_command_executions_for_sandbox', value: 'list_command_executions_for_sandbox' }
    ]}
>
<TabItem value="list_command_executions_for_sandbox">

Gets a list of command executions for a sandbox.

```sql
SELECT
id,
command,
end_time,
exit_code,
logs,
sandbox_arn,
sandbox_id,
standard_err_content,
standard_output_content,
start_time,
status,
submit_time,
type_
FROM aws.codebuild.command_executions_for_sandboxes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
