--- 
title: network_migration_analysis_results
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_analysis_results
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

Creates, updates, deletes, gets or lists a <code>network_migration_analysis_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_analysis_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_analysis_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_network_migration_analysis_results"
    values={[
        { label: 'list_network_migration_analysis_results', value: 'list_network_migration_analysis_results' }
    ]}
>
<TabItem value="list_network_migration_analysis_results">

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
    <td><CopyableCode code="analysisResult" /></td>
    <td><code>string</code></td>
    <td>The detailed analysis findings and recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="analyzerType" /></td>
    <td><code>string</code></td>
    <td>The type of analyzer that generated this result. (REACHABILITY_ANALYZER)</td>
</tr>
<tr>
    <td><CopyableCode code="jobID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the analysis job that generated this result. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source resource that was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis result. (PENDING, STARTED, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The target resource in the analysis.</td>
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
    <td><a href="#list_network_migration_analysis_results"><CopyableCode code="list_network_migration_analysis_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the results of network migration analyses, showing connectivity and compatibility findings for migrated resources.</td>
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
    defaultValue="list_network_migration_analysis_results"
    values={[
        { label: 'list_network_migration_analysis_results', value: 'list_network_migration_analysis_results' }
    ]}
>
<TabItem value="list_network_migration_analysis_results">

Lists the results of network migration analyses, showing connectivity and compatibility findings for migrated resources.

```sql
SELECT
analysisResult,
analyzerType,
jobID,
networkMigrationDefinitionID,
networkMigrationExecutionID,
source,
status,
target
FROM aws.mgn.network_migration_analysis_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
