--- 
title: graph_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - graph_snapshots
  - neptune_graph
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

Creates, updates, deletes, gets or lists a <code>graph_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="graph_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune_graph.graph_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_graph_snapshot"
    values={[
        { label: 'get_graph_snapshot', value: 'get_graph_snapshot' },
        { label: 'list_graph_snapshots', value: 'list_graph_snapshots' }
    ]}
>
<TabItem value="get_graph_snapshot">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the graph snapshot. (pattern: &lt;code&gt;gs-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The snapshot name. For example: my-snapshot-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed. (pattern: &lt;code&gt;(?!gs-)&#91;a-z&#93;&#91;a-z0-9&#93;*(-&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the graph snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt and decrypt the snapshot. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="source_graph_id" /></td>
    <td><code>string</code></td>
    <td>The graph identifier for the graph for which a snapshot is to be created. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the graph snapshot. (CREATING, AVAILABLE, DELETING, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_graph_snapshots">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the graph snapshot. (pattern: &lt;code&gt;gs-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The snapshot name. For example: my-snapshot-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed. (pattern: &lt;code&gt;(?!gs-)&#91;a-z&#93;&#91;a-z0-9&#93;*(-&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the graph snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt and decrypt the snapshot. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="source_graph_id" /></td>
    <td><code>string</code></td>
    <td>The graph identifier for the graph for which a snapshot is to be created. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the graph snapshot. (CREATING, AVAILABLE, DELETING, FAILED)</td>
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
    <td><a href="#get_graph_snapshot"><CopyableCode code="get_graph_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-snapshot_identifier"><code>snapshot_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specified graph snapshot.</td>
</tr>
<tr>
    <td><a href="#list_graph_snapshots"><CopyableCode code="list_graph_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists available snapshots of a specified Neptune Analytics graph.</td>
</tr>
<tr>
    <td><a href="#create_graph_snapshot"><CopyableCode code="create_graph_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-snapshotName"><code>snapshotName</code></a></td>
    <td></td>
    <td>Creates a snapshot of the specific graph.</td>
</tr>
<tr>
    <td><a href="#delete_graph_snapshot"><CopyableCode code="delete_graph_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-snapshot_identifier"><code>snapshot_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified graph snapshot.</td>
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
<tr id="parameter-snapshot_identifier">
    <td><CopyableCode code="snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>ID of the graph snapshot to be deleted.</td>
</tr>
<tr id="parameter-graphIdentifier">
    <td><CopyableCode code="graphIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Neptune Analytics graph.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_graph_snapshot"
    values={[
        { label: 'get_graph_snapshot', value: 'get_graph_snapshot' },
        { label: 'list_graph_snapshots', value: 'list_graph_snapshots' }
    ]}
>
<TabItem value="get_graph_snapshot">

Retrieves a specified graph snapshot.

```sql
SELECT
id,
name,
arn,
kms_key_identifier,
snapshot_create_time,
source_graph_id,
status
FROM aws.neptune_graph.graph_snapshots
WHERE snapshot_identifier = '{{ snapshot_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_graph_snapshots">

Lists available snapshots of a specified Neptune Analytics graph.

```sql
SELECT
id,
name,
arn,
kms_key_identifier,
snapshot_create_time,
source_graph_id,
status
FROM aws.neptune_graph.graph_snapshots
WHERE region = '{{ region }}' -- required
AND graphIdentifier = '{{ graphIdentifier }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_graph_snapshot"
    values={[
        { label: 'create_graph_snapshot', value: 'create_graph_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_graph_snapshot">

Creates a snapshot of the specific graph.

```sql
INSERT INTO aws.neptune_graph.graph_snapshots (
graphIdentifier,
snapshotName,
tags,
region
)
SELECT 
'{{ graphIdentifier }}' /* required */,
'{{ snapshotName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
kms_key_identifier,
snapshot_create_time,
source_graph_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: graph_snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the graph_snapshots resource.
    - name: graphIdentifier
      value: "{{ graphIdentifier }}"
    - name: snapshotName
      value: "{{ snapshotName }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_graph_snapshot"
    values={[
        { label: 'delete_graph_snapshot', value: 'delete_graph_snapshot' }
    ]}
>
<TabItem value="delete_graph_snapshot">

Deletes the specified graph snapshot.

```sql
DELETE FROM aws.neptune_graph.graph_snapshots
WHERE snapshot_identifier = '{{ snapshot_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
