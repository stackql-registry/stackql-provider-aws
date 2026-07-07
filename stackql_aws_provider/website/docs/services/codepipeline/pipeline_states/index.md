--- 
title: pipeline_states
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_states
  - codepipeline
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

Creates, updates, deletes, gets or lists a <code>pipeline_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.pipeline_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline_state"
    values={[
        { label: 'get_pipeline_state', value: 'get_pipeline_state' }
    ]}
>
<TabItem value="get_pipeline_state">

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the pipeline was created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineName" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline for which you want to get the state. (pattern: &lt;code&gt;&#91;A-Za-z0-9.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineVersion" /></td>
    <td><code>integer</code></td>
    <td>The version number of the pipeline. A newly created pipeline is always assigned a version number of 1.</td>
</tr>
<tr>
    <td><CopyableCode code="stageStates" /></td>
    <td><code>array</code></td>
    <td>A list of the pipeline stage output information, including stage name, state, most recent run details, whether the stage is disabled, and other data.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the pipeline was last updated, in timestamp format.</td>
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
    <td><a href="#get_pipeline_state"><CopyableCode code="get_pipeline_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the state of a pipeline, including the stages and actions. Values returned in the revisionId and revisionUrl fields indicate the source revision information, such as the commit ID, for the current state.</td>
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
    defaultValue="get_pipeline_state"
    values={[
        { label: 'get_pipeline_state', value: 'get_pipeline_state' }
    ]}
>
<TabItem value="get_pipeline_state">

Returns information about the state of a pipeline, including the stages and actions. Values returned in the revisionId and revisionUrl fields indicate the source revision information, such as the commit ID, for the current state.

```sql
SELECT
created,
pipelineName,
pipelineVersion,
stageStates,
updated
FROM aws.codepipeline.pipeline_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
