--- 
title: workflow_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_runs
  - mwaa_serverless
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

Creates, updates, deletes, gets or lists a <code>workflow_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa_serverless.workflow_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_run"
    values={[
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'list_workflow_runs', value: 'list_workflow_runs' }
    ]}
>
<TabItem value="get_workflow_run">

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
    <td><CopyableCode code="override_parameters" /></td>
    <td><code>object</code></td>
    <td>Parameters that were overridden for this specific workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_detail" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the workflow run execution, including timing, status, and task instances.</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this workflow run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_type" /></td>
    <td><code>string</code></td>
    <td>The type of workflow run. Values are ON_DEMAND (manually triggered) or SCHEDULED (automatically triggered by schedule). (ON_DEMAND, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow that contains this run. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;):(&#91;0-9&#93;&#123;12&#125;):workflow/(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\.\-_&#93;&#123;0,254&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_version" /></td>
    <td><code>string</code></td>
    <td>The version of the workflow that is used for this run. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_runs">

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
    <td><CopyableCode code="run_detail_summary" /></td>
    <td><code>object</code></td>
    <td>Summary details about the workflow run execution.</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_type" /></td>
    <td><code>string</code></td>
    <td>The type of workflow run. (ON_DEMAND, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow that contains this run. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;):(&#91;0-9&#93;&#123;12&#125;):workflow/(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\.\-_&#93;&#123;0,254&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_version" /></td>
    <td><code>string</code></td>
    <td>The version of the workflow used for this run. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#get_workflow_run"><CopyableCode code="get_workflow_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific workflow run, including its status, execution details, and task instances.</td>
</tr>
<tr>
    <td><a href="#list_workflow_runs"><CopyableCode code="list_workflow_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all runs for a specified workflow, with optional pagination and filtering support.</td>
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
    defaultValue="get_workflow_run"
    values={[
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'list_workflow_runs', value: 'list_workflow_runs' }
    ]}
>
<TabItem value="get_workflow_run">

Retrieves detailed information about a specific workflow run, including its status, execution details, and task instances.

```sql
SELECT
override_parameters,
run_detail,
run_id,
run_type,
workflow_arn,
workflow_version
FROM aws.mwaa_serverless.workflow_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_runs">

Lists all runs for a specified workflow, with optional pagination and filtering support.

```sql
SELECT
run_detail_summary,
run_id,
run_type,
workflow_arn,
workflow_version
FROM aws.mwaa_serverless.workflow_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
