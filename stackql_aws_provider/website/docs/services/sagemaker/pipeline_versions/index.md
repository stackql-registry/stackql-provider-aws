--- 
title: pipeline_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_versions
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

Creates, updates, deletes, gets or lists a <code>pipeline_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.pipeline_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pipeline_versions"
    values={[
        { label: 'list_pipeline_versions', value: 'list_pipeline_versions' }
    ]}
>
<TabItem value="list_pipeline_versions">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the pipeline version.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_pipeline_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the most recent pipeline execution created from this pipeline version. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:pipeline\/.*\/execution\/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:(&#91;0-9&#93;&#123;12&#125;|aws):pipeline/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline version. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the pipeline version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,81&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the pipeline version.</td>
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
    <td><a href="#list_pipeline_versions"><CopyableCode code="list_pipeline_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of all versions of the pipeline.</td>
</tr>
<tr>
    <td><a href="#update_pipeline_version"><CopyableCode code="update_pipeline_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineArn"><code>PipelineArn</code></a>, <a href="#parameter-PipelineVersionId"><code>PipelineVersionId</code></a></td>
    <td></td>
    <td>Updates a pipeline version.</td>
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
    defaultValue="list_pipeline_versions"
    values={[
        { label: 'list_pipeline_versions', value: 'list_pipeline_versions' }
    ]}
>
<TabItem value="list_pipeline_versions">

Gets a list of all versions of the pipeline.

```sql
SELECT
creation_time,
last_execution_pipeline_execution_arn,
pipeline_arn,
pipeline_version_description,
pipeline_version_display_name,
pipeline_version_id
FROM aws.sagemaker.pipeline_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pipeline_version"
    values={[
        { label: 'update_pipeline_version', value: 'update_pipeline_version' }
    ]}
>
<TabItem value="update_pipeline_version">

Updates a pipeline version.

```sql
UPDATE aws.sagemaker.pipeline_versions
SET 
PipelineArn = '{{ PipelineArn }}',
PipelineVersionId = {{ PipelineVersionId }},
PipelineVersionDisplayName = '{{ PipelineVersionDisplayName }}',
PipelineVersionDescription = '{{ PipelineVersionDescription }}'
WHERE 
region = '{{ region }}' --required
AND PipelineArn = '{{ PipelineArn }}' --required
AND PipelineVersionId = '{{ PipelineVersionId }}' --required
RETURNING
pipeline_arn,
pipeline_version_id;
```
</TabItem>
</Tabs>
