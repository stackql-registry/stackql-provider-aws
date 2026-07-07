--- 
title: sync_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - sync_jobs
  - iottwinmaker
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

Creates, updates, deletes, gets or lists a <code>sync_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sync_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.sync_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sync_job"
    values={[
        { label: 'get_sync_job', value: 'get_sync_job' },
        { label: 'list_sync_jobs', value: 'list_sync_jobs' }
    ]}
>
<TabItem value="get_sync_job">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The sync job ARN. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;\/a-zA-Z0-9_\-\.:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>supports epoch seconds value</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The SyncJob response status.</td>
</tr>
<tr>
    <td><CopyableCode code="syncRole" /></td>
    <td><code>string</code></td>
    <td>The sync IAM role. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iam::&#91;0-9&#93;&#123;12&#125;:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="syncSource" /></td>
    <td><code>string</code></td>
    <td>The sync soucre. Currently the only supported syncSource is SITEWISE . (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>supports epoch seconds value</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace that contains the sync job. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sync_jobs">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The string that specifies the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="syncJobSummaries" /></td>
    <td><code>array</code></td>
    <td>The listed SyncJob summaries.</td>
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
    <td><a href="#get_sync_job"><CopyableCode code="get_sync_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sync_source"><code>sync_source</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-workspace"><code>workspace</code></a></td>
    <td>Gets the SyncJob.</td>
</tr>
<tr>
    <td><a href="#list_sync_jobs"><CopyableCode code="list_sync_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all SyncJobs.</td>
</tr>
<tr>
    <td><a href="#create_sync_job"><CopyableCode code="create_sync_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-sync_source"><code>sync_source</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-syncRole"><code>syncRole</code></a></td>
    <td></td>
    <td>This action creates a SyncJob.</td>
</tr>
<tr>
    <td><a href="#delete_sync_job"><CopyableCode code="delete_sync_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-sync_source"><code>sync_source</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the SyncJob.</td>
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
<tr id="parameter-sync_source">
    <td><CopyableCode code="sync_source" /></td>
    <td><code>string</code></td>
    <td>The sync source. Currently the only supported syncSource is SITEWISE .</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The workspace ID.</td>
</tr>
<tr id="parameter-workspace">
    <td><CopyableCode code="workspace" /></td>
    <td><code>string</code></td>
    <td>The workspace ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sync_job"
    values={[
        { label: 'get_sync_job', value: 'get_sync_job' },
        { label: 'list_sync_jobs', value: 'list_sync_jobs' }
    ]}
>
<TabItem value="get_sync_job">

Gets the SyncJob.

```sql
SELECT
arn,
creationDateTime,
status,
syncRole,
syncSource,
updateDateTime,
workspaceId
FROM aws.iottwinmaker.sync_jobs
WHERE sync_source = '{{ sync_source }}' -- required
AND region = '{{ region }}' -- required
AND workspace = '{{ workspace }}'
;
```
</TabItem>
<TabItem value="list_sync_jobs">

List all SyncJobs.

```sql
SELECT
nextToken,
syncJobSummaries
FROM aws.iottwinmaker.sync_jobs
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sync_job"
    values={[
        { label: 'create_sync_job', value: 'create_sync_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sync_job">

This action creates a SyncJob.

```sql
INSERT INTO aws.iottwinmaker.sync_jobs (
syncRole,
tags,
workspace_id,
sync_source,
region
)
SELECT 
'{{ syncRole }}' /* required */,
'{{ tags }}',
'{{ workspace_id }}',
'{{ sync_source }}',
'{{ region }}'
RETURNING
arn,
creationDateTime,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sync_jobs
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the sync_jobs resource.
    - name: sync_source
      value: "{{ sync_source }}"
      description: Required parameter for the sync_jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sync_jobs resource.
    - name: syncRole
      value: "{{ syncRole }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sync_job"
    values={[
        { label: 'delete_sync_job', value: 'delete_sync_job' }
    ]}
>
<TabItem value="delete_sync_job">

Delete the SyncJob.

```sql
DELETE FROM aws.iottwinmaker.sync_jobs
WHERE workspace_id = '{{ workspace_id }}' --required
AND sync_source = '{{ sync_source }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
