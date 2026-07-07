--- 
title: blueprint_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - blueprint_runs
  - glue
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

Creates, updates, deletes, gets or lists a <code>blueprint_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blueprint_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.blueprint_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blueprint_run"
    values={[
        { label: 'get_blueprint_run', value: 'get_blueprint_run' },
        { label: 'get_blueprint_runs', value: 'get_blueprint_runs' }
    ]}
>
<TabItem value="get_blueprint_run">

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
    <td><CopyableCode code="BlueprintName" /></td>
    <td><code>string</code></td>
    <td>The name of the blueprint. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the blueprint run completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Indicates any errors that are seen while running the blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>string</code></td>
    <td>The blueprint parameters as a string. You will have to provide a value for each key that is required from the parameter spec that is defined in the Blueprint$ParameterSpec.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The role ARN. This role will be assumed by the Glue service and will be used to create the workflow and other entities of a workflow. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::&#91;0-9&#93;*:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RollbackErrorMessage" /></td>
    <td><code>string</code></td>
    <td>If there are any errors while creating the entities of a workflow, we try to roll back the created entities until that point and delete them. This attribute indicates the errors seen while trying to delete the entities that are created.</td>
</tr>
<tr>
    <td><CopyableCode code="RunId" /></td>
    <td><code>string</code></td>
    <td>The run ID for this blueprint run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the blueprint run started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the blueprint run. Possible values are: Running — The blueprint run is in progress. Succeeded — The blueprint run completed successfully. Failed — The blueprint run failed and rollback is complete. Rolling Back — The blueprint run failed and rollback is in progress. (RUNNING, SUCCEEDED, FAILED, ROLLING_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowName" /></td>
    <td><code>string</code></td>
    <td>The name of a workflow that is created as a result of a successful blueprint run. If a blueprint run has an error, there will not be a workflow created. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_blueprint_runs">

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
    <td><CopyableCode code="BlueprintRuns" /></td>
    <td><code>array</code></td>
    <td>Returns a list of BlueprintRun objects.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A continuation token, if not all blueprint runs have been returned.</td>
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
    <td><a href="#get_blueprint_run"><CopyableCode code="get_blueprint_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a blueprint run.</td>
</tr>
<tr>
    <td><a href="#get_blueprint_runs"><CopyableCode code="get_blueprint_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of blueprint runs for a specified blueprint.</td>
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
    defaultValue="get_blueprint_run"
    values={[
        { label: 'get_blueprint_run', value: 'get_blueprint_run' },
        { label: 'get_blueprint_runs', value: 'get_blueprint_runs' }
    ]}
>
<TabItem value="get_blueprint_run">

Retrieves the details of a blueprint run.

```sql
SELECT
BlueprintName,
CompletedOn,
ErrorMessage,
Parameters,
RoleArn,
RollbackErrorMessage,
RunId,
StartedOn,
State,
WorkflowName
FROM aws.glue.blueprint_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_blueprint_runs">

Retrieves the details of blueprint runs for a specified blueprint.

```sql
SELECT
BlueprintRuns,
NextToken
FROM aws.glue.blueprint_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
