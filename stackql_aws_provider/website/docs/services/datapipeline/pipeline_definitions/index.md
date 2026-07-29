--- 
title: pipeline_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_definitions
  - datapipeline
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

Creates, updates, deletes, gets or lists a <code>pipeline_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datapipeline.pipeline_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline_definition"
    values={[
        { label: 'get_pipeline_definition', value: 'get_pipeline_definition' }
    ]}
>
<TabItem value="get_pipeline_definition">

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
    <td><CopyableCode code="parameter_objects" /></td>
    <td><code>array</code></td>
    <td>The parameter objects used in the pipeline definition.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_values" /></td>
    <td><code>array</code></td>
    <td>The parameter values used in the pipeline definition.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_objects" /></td>
    <td><code>array</code></td>
    <td>The objects defined in the pipeline.</td>
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
    <td><a href="#get_pipeline_definition"><CopyableCode code="get_pipeline_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the definition of the specified pipeline. You can call GetPipelineDefinition to retrieve the pipeline definition that you provided using PutPipelineDefinition.</td>
</tr>
<tr>
    <td><a href="#put_pipeline_definition"><CopyableCode code="put_pipeline_definition" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a>, <a href="#parameter-pipelineObjects"><code>pipelineObjects</code></a></td>
    <td></td>
    <td>Adds tasks, schedules, and preconditions to the specified pipeline. You can use PutPipelineDefinition to populate a new pipeline. PutPipelineDefinition also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. An object is missing a name or identifier field. A string or reference field is empty. The number of objects in the pipeline exceeds the maximum allowed objects. The pipeline is in a FINISHED state. Pipeline object definitions are passed to the PutPipelineDefinition action and returned by the GetPipelineDefinition action.</td>
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
    defaultValue="get_pipeline_definition"
    values={[
        { label: 'get_pipeline_definition', value: 'get_pipeline_definition' }
    ]}
>
<TabItem value="get_pipeline_definition">

Gets the definition of the specified pipeline. You can call GetPipelineDefinition to retrieve the pipeline definition that you provided using PutPipelineDefinition.

```sql
SELECT
parameter_objects,
parameter_values,
pipeline_objects
FROM aws.datapipeline.pipeline_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_pipeline_definition"
    values={[
        { label: 'put_pipeline_definition', value: 'put_pipeline_definition' }
    ]}
>
<TabItem value="put_pipeline_definition">

Adds tasks, schedules, and preconditions to the specified pipeline. You can use PutPipelineDefinition to populate a new pipeline. PutPipelineDefinition also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. An object is missing a name or identifier field. A string or reference field is empty. The number of objects in the pipeline exceeds the maximum allowed objects. The pipeline is in a FINISHED state. Pipeline object definitions are passed to the PutPipelineDefinition action and returned by the GetPipelineDefinition action.

```sql
REPLACE aws.datapipeline.pipeline_definitions
SET 
pipelineId = '{{ pipelineId }}',
pipelineObjects = '{{ pipelineObjects }}',
parameterObjects = '{{ parameterObjects }}',
parameterValues = '{{ parameterValues }}'
WHERE 
region = '{{ region }}' --required
AND pipelineId = '{{ pipelineId }}' --required
AND pipelineObjects = '{{ pipelineObjects }}' --required
RETURNING
errored,
validation_errors,
validation_warnings;
```
</TabItem>
</Tabs>
