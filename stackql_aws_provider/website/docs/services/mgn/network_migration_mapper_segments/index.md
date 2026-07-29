--- 
title: network_migration_mapper_segments
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_mapper_segments
  - mgn
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

Creates, updates, deletes, gets or lists a <code>network_migration_mapper_segments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_mapper_segments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_mapper_segments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_network_migration_mapper_segments"
    values={[
        { label: 'list_network_migration_mapper_segments', value: 'list_network_migration_mapper_segments' }
    ]}
>
<TabItem value="list_network_migration_mapper_segments">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the segment. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>object</code></td>
    <td>The checksum of the segment data for integrity verification.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the segment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the segment. (pattern: &lt;code&gt;&#91;^\x00&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job that created this segment. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logical_id" /></td>
    <td><code>string</code></td>
    <td>The logical identifier for the segment in the infrastructure code. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_migration_definition_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration definition. (pattern: &lt;code&gt;nmd-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_migration_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration execution. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_s3_configuration" /></td>
    <td><code>object</code></td>
    <td>The S3 location where segment artifacts are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="referenced_segments" /></td>
    <td><code>array</code></td>
    <td>A list of other segments that this segment depends on or references.</td>
</tr>
<tr>
    <td><CopyableCode code="scope_tags" /></td>
    <td><code>object</code></td>
    <td>Scope tags for the segment.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the segment. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="segment_type" /></td>
    <td><code>string</code></td>
    <td>The type of the segment, such as VPC, subnet, or security group. (WORKLOAD, APPLIANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="target_account" /></td>
    <td><code>string</code></td>
    <td>The target AWS account where this segment will be deployed. (pattern: &lt;code&gt;.*&#91;0-9&#93;&#123;12,&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the segment was last updated.</td>
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
    <td><a href="#list_network_migration_mapper_segments"><CopyableCode code="list_network_migration_mapper_segments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists mapper segments, which represent logical groupings of network resources to be migrated together.</td>
</tr>
<tr>
    <td><a href="#update_network_migration_mapper_segment"><CopyableCode code="update_network_migration_mapper_segment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkMigrationDefinitionID"><code>networkMigrationDefinitionID</code></a>, <a href="#parameter-networkMigrationExecutionID"><code>networkMigrationExecutionID</code></a>, <a href="#parameter-segmentID"><code>segmentID</code></a></td>
    <td></td>
    <td>Updates a mapper segment's configuration, such as changing its scope tags.</td>
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
    defaultValue="list_network_migration_mapper_segments"
    values={[
        { label: 'list_network_migration_mapper_segments', value: 'list_network_migration_mapper_segments' }
    ]}
>
<TabItem value="list_network_migration_mapper_segments">

Lists mapper segments, which represent logical groupings of network resources to be migrated together.

```sql
SELECT
name,
checksum,
created_at,
description,
job_id,
logical_id,
network_migration_definition_id,
network_migration_execution_id,
output_s3_configuration,
referenced_segments,
scope_tags,
segment_id,
segment_type,
target_account,
updated_at
FROM aws.mgn.network_migration_mapper_segments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_migration_mapper_segment"
    values={[
        { label: 'update_network_migration_mapper_segment', value: 'update_network_migration_mapper_segment' }
    ]}
>
<TabItem value="update_network_migration_mapper_segment">

Updates a mapper segment's configuration, such as changing its scope tags.

```sql
UPDATE aws.mgn.network_migration_mapper_segments
SET 
networkMigrationDefinitionID = '{{ networkMigrationDefinitionID }}',
networkMigrationExecutionID = '{{ networkMigrationExecutionID }}',
segmentID = '{{ segmentID }}',
scopeTags = '{{ scopeTags }}'
WHERE 
region = '{{ region }}' --required
AND networkMigrationDefinitionID = '{{ networkMigrationDefinitionID }}' --required
AND networkMigrationExecutionID = '{{ networkMigrationExecutionID }}' --required
AND segmentID = '{{ segmentID }}' --required
RETURNING
name,
checksum,
created_at,
description,
job_id,
logical_id,
network_migration_definition_id,
network_migration_execution_id,
output_s3_configuration,
referenced_segments,
scope_tags,
segment_id,
segment_type,
target_account,
updated_at;
```
</TabItem>
</Tabs>
