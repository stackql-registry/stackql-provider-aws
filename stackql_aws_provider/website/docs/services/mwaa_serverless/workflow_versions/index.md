--- 
title: workflow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_versions
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

Creates, updates, deletes, gets or lists a <code>workflow_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa_serverless.workflow_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workflow_versions"
    values={[
        { label: 'list_workflow_versions', value: 'list_workflow_versions' }
    ]}
>
<TabItem value="list_workflow_versions">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow version was created, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="DefinitionS3Location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of the workflow definition file for this version.</td>
</tr>
<tr>
    <td><CopyableCode code="IsLatestVersion" /></td>
    <td><code>boolean</code></td>
    <td>Boolean flag that indicates whether this is the latest version of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow version was last modified, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleConfiguration" /></td>
    <td><code>object</code></td>
    <td>The schedule configuration for this workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="TriggerMode" /></td>
    <td><code>string</code></td>
    <td>The trigger mode for the workflow execution. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow that contains this version. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;):(&#91;0-9&#93;&#123;12&#125;):workflow/(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\.\-_&#93;&#123;0,254&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowVersion" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the workflow version. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_workflow_versions"><CopyableCode code="list_workflow_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all versions of a specified workflow, with optional pagination support.</td>
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
    defaultValue="list_workflow_versions"
    values={[
        { label: 'list_workflow_versions', value: 'list_workflow_versions' }
    ]}
>
<TabItem value="list_workflow_versions">

Lists all versions of a specified workflow, with optional pagination support.

```sql
SELECT
CreatedAt,
DefinitionS3Location,
IsLatestVersion,
ModifiedAt,
ScheduleConfiguration,
TriggerMode,
WorkflowArn,
WorkflowVersion
FROM aws.mwaa_serverless.workflow_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
