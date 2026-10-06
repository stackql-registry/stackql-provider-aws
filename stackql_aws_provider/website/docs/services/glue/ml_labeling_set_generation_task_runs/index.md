--- 
title: ml_labeling_set_generation_task_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_labeling_set_generation_task_runs
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

Creates, updates, deletes, gets or lists a <code>ml_labeling_set_generation_task_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_labeling_set_generation_task_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.ml_labeling_set_generation_task_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#start_ml_labeling_set_generation_task_run"><CopyableCode code="start_ml_labeling_set_generation_task_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransformId"><code>TransformId</code></a>, <a href="#parameter-OutputS3Path"><code>OutputS3Path</code></a></td>
    <td></td>
    <td>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels. When the StartMLLabelingSetGenerationTaskRun finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer. In the case of the FindMatches transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, you can upload your labels with a call to StartImportLabelsTaskRun. After StartImportLabelsTaskRun finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation. Note: The role used to write the generated labeling set to the OutputS3Path is the role associated with the Machine Learning Transform, specified in the CreateMLTransform API.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_ml_labeling_set_generation_task_run"
    values={[
        { label: 'start_ml_labeling_set_generation_task_run', value: 'start_ml_labeling_set_generation_task_run' }
    ]}
>
<TabItem value="start_ml_labeling_set_generation_task_run">

Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels. When the StartMLLabelingSetGenerationTaskRun finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer. In the case of the FindMatches transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, you can upload your labels with a call to StartImportLabelsTaskRun. After StartImportLabelsTaskRun finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation. Note: The role used to write the generated labeling set to the OutputS3Path is the role associated with the Machine Learning Transform, specified in the CreateMLTransform API.

```sql
EXEC aws.glue.ml_labeling_set_generation_task_runs.start_ml_labeling_set_generation_task_run 
@region='{{ region }}' --required 
@@json=
'{
"TransformId": "{{ TransformId }}", 
"OutputS3Path": "{{ OutputS3Path }}"
}'
;
```
</TabItem>
</Tabs>
