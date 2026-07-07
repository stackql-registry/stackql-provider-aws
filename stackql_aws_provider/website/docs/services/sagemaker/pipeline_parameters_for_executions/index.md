--- 
title: pipeline_parameters_for_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_parameters_for_executions
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>pipeline_parameters_for_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_parameters_for_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.pipeline_parameters_for_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pipeline_parameters_for_execution"
    values={[
        { label: 'list_pipeline_parameters_for_execution', value: 'list_pipeline_parameters_for_execution' }
    ]}
>
<TabItem value="list_pipeline_parameters_for_execution">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter to assign a value to. This parameter name must match a named parameter in the pipeline definition. (pattern: &lt;code&gt;&#91;A-Za-z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The literal value for the parameter.</td>
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
    <td><a href="#list_pipeline_parameters_for_execution"><CopyableCode code="list_pipeline_parameters_for_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of parameters for a pipeline execution.</td>
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
    defaultValue="list_pipeline_parameters_for_execution"
    values={[
        { label: 'list_pipeline_parameters_for_execution', value: 'list_pipeline_parameters_for_execution' }
    ]}
>
<TabItem value="list_pipeline_parameters_for_execution">

Gets a list of parameters for a pipeline execution.

```sql
SELECT
Name,
Value
FROM aws.sagemaker.pipeline_parameters_for_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
