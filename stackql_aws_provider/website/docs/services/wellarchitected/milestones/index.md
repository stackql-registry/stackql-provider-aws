--- 
title: milestones
hide_title: false
hide_table_of_contents: false
keywords:
  - milestones
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>milestones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="milestones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.milestones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_milestone"
    values={[
        { label: 'get_milestone', value: 'get_milestone' },
        { label: 'list_milestones', value: 'list_milestones' }
    ]}
>
<TabItem value="get_milestone">

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
    <td><CopyableCode code="milestone" /></td>
    <td><code>object</code></td>
    <td>A milestone return object.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_milestones">

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
    <td><CopyableCode code="milestone_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of milestone summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_milestone"><CopyableCode code="get_milestone" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-milestone_number"><code>milestone_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a milestone for an existing workload.</td>
</tr>
<tr>
    <td><a href="#list_milestones"><CopyableCode code="list_milestones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all milestones for an existing workload.</td>
</tr>
<tr>
    <td><a href="#create_milestone"><CopyableCode code="create_milestone" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MilestoneName"><code>MilestoneName</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a milestone for an existing workload.</td>
</tr>
<tr>
    <td><a href="#upgrade_lens_review"><CopyableCode code="upgrade_lens_review" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MilestoneName"><code>MilestoneName</code></a></td>
    <td></td>
    <td>Upgrade lens review for a particular workload.</td>
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
<tr id="parameter-lens_alias">
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-milestone_number">
    <td><CopyableCode code="milestone_number" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_milestone"
    values={[
        { label: 'get_milestone', value: 'get_milestone' },
        { label: 'list_milestones', value: 'list_milestones' }
    ]}
>
<TabItem value="get_milestone">

Get a milestone for an existing workload.

```sql
SELECT
milestone,
workload_id
FROM aws.wellarchitected.milestones
WHERE workload_id = '{{ workload_id }}' -- required
AND milestone_number = '{{ milestone_number }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_milestones">

List all milestones for an existing workload.

```sql
SELECT
milestone_summaries,
next_token,
workload_id
FROM aws.wellarchitected.milestones
WHERE workload_id = '{{ workload_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_milestone"
    values={[
        { label: 'create_milestone', value: 'create_milestone' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_milestone">

Create a milestone for an existing workload.

```sql
INSERT INTO aws.wellarchitected.milestones (
MilestoneName,
ClientRequestToken,
workload_id,
region
)
SELECT 
'{{ MilestoneName }}' /* required */,
'{{ ClientRequestToken }}' /* required */,
'{{ workload_id }}',
'{{ region }}'
RETURNING
milestone_number,
workload_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: milestones
  props:
    - name: workload_id
      value: "{{ workload_id }}"
      description: Required parameter for the milestones resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the milestones resource.
    - name: MilestoneName
      value: "{{ MilestoneName }}"
      description: |
        The name of the milestone in a workload. Milestone names must be unique within a workload.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned. This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upgrade_lens_review"
    values={[
        { label: 'upgrade_lens_review', value: 'upgrade_lens_review' }
    ]}
>
<TabItem value="upgrade_lens_review">

Upgrade lens review for a particular workload.

```sql
EXEC aws.wellarchitected.milestones.upgrade_lens_review 
@workload_id='{{ workload_id }}' --required, 
@lens_alias='{{ lens_alias }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"MilestoneName": "{{ MilestoneName }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
