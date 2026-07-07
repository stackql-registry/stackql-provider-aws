--- 
title: computation_model_execution_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - computation_model_execution_summaries
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>computation_model_execution_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="computation_model_execution_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.computation_model_execution_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_computation_model_execution_summary"
    values={[
        { label: 'describe_computation_model_execution_summary', value: 'describe_computation_model_execution_summary' }
    ]}
>
<TabItem value="describe_computation_model_execution_summary">

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
    <td><CopyableCode code="computationModelExecutionSummary" /></td>
    <td><code>object</code></td>
    <td>Contains the execution summary of the computation model.</td>
</tr>
<tr>
    <td><CopyableCode code="computationModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the computation model. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resolveTo" /></td>
    <td><code>object</code></td>
    <td>The detailed resource this execution summary resolves to.</td>
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
    <td><a href="#describe_computation_model_execution_summary"><CopyableCode code="describe_computation_model_execution_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-computation_model_id"><code>computation_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resolveToResourceType"><code>resolveToResourceType</code></a>, <a href="#parameter-resolveToResourceId"><code>resolveToResourceId</code></a></td>
    <td>Retrieves information about the execution summary of a computation model.</td>
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
<tr id="parameter-computation_model_id">
    <td><CopyableCode code="computation_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the computation model.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resolveToResourceId">
    <td><CopyableCode code="resolveToResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resolved resource.</td>
</tr>
<tr id="parameter-resolveToResourceType">
    <td><CopyableCode code="resolveToResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the resolved resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_computation_model_execution_summary"
    values={[
        { label: 'describe_computation_model_execution_summary', value: 'describe_computation_model_execution_summary' }
    ]}
>
<TabItem value="describe_computation_model_execution_summary">

Retrieves information about the execution summary of a computation model.

```sql
SELECT
computationModelExecutionSummary,
computationModelId,
resolveTo
FROM aws.iotsitewise.computation_model_execution_summaries
WHERE computation_model_id = '{{ computation_model_id }}' -- required
AND region = '{{ region }}' -- required
AND resolveToResourceType = '{{ resolveToResourceType }}'
AND resolveToResourceId = '{{ resolveToResourceId }}'
;
```
</TabItem>
</Tabs>
