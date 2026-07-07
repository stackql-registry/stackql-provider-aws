--- 
title: network_migration_code_generation_segments
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_code_generation_segments
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

Creates, updates, deletes, gets or lists a <code>network_migration_code_generation_segments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_code_generation_segments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_code_generation_segments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_network_migration_code_generation_segments"
    values={[
        { label: 'list_network_migration_code_generation_segments', value: 'list_network_migration_code_generation_segments' }
    ]}
>
<TabItem value="list_network_migration_code_generation_segments">

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
    <td><CopyableCode code="artifacts" /></td>
    <td><code>array</code></td>
    <td>A list of artifacts generated for this segment.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the segment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="jobID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code generation job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logicalID" /></td>
    <td><code>string</code></td>
    <td>The logical identifier for the segment. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mapperSegmentID" /></td>
    <td><code>string</code></td>
    <td>The ID of the mapper segment that this code generation segment was created from. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="networkMigrationDefinitionID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration definition. (pattern: &lt;code&gt;nmd-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="networkMigrationExecutionID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration execution. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="referencedSegments" /></td>
    <td><code>array</code></td>
    <td>A list of other segments that this segment depends on or references.</td>
</tr>
<tr>
    <td><CopyableCode code="segmentID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the segment. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="segmentType" /></td>
    <td><code>string</code></td>
    <td>The type of the segment. (WORKLOAD, APPLIANCE, NETWORK)</td>
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
    <td><a href="#list_network_migration_code_generation_segments"><CopyableCode code="list_network_migration_code_generation_segments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists code generation segments, which represent individual infrastructure components generated as code templates.</td>
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
    defaultValue="list_network_migration_code_generation_segments"
    values={[
        { label: 'list_network_migration_code_generation_segments', value: 'list_network_migration_code_generation_segments' }
    ]}
>
<TabItem value="list_network_migration_code_generation_segments">

Lists code generation segments, which represent individual infrastructure components generated as code templates.

```sql
SELECT
artifacts,
createdAt,
jobID,
logicalID,
mapperSegmentID,
networkMigrationDefinitionID,
networkMigrationExecutionID,
referencedSegments,
segmentID,
segmentType
FROM aws.mgn.network_migration_code_generation_segments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
