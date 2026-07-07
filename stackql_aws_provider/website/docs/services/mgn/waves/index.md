--- 
title: waves
hide_title: false
hide_table_of_contents: false
keywords:
  - waves
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

Creates, updates, deletes, gets or lists a <code>waves</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="waves" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.waves" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_waves"
    values={[
        { label: 'list_waves', value: 'list_waves' }
    ]}
>
<TabItem value="list_waves">

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
    <td>Wave name. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Wave ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string</code></td>
    <td>Wave creation dateTime. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Wave description. (pattern: &lt;code&gt;&#91;^\x00&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isArchived" /></td>
    <td><code>boolean</code></td>
    <td>Wave archival status.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDateTime" /></td>
    <td><code>string</code></td>
    <td>Wave last modified dateTime. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Wave tags.</td>
</tr>
<tr>
    <td><CopyableCode code="waveAggregatedStatus" /></td>
    <td><code>object</code></td>
    <td>Wave aggregated status.</td>
</tr>
<tr>
    <td><CopyableCode code="waveID" /></td>
    <td><code>string</code></td>
    <td>Wave ID. (pattern: &lt;code&gt;wave-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_waves"><CopyableCode code="list_waves" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all waves or multiple waves by ID.</td>
</tr>
<tr>
    <td><a href="#create_wave"><CopyableCode code="create_wave" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create wave.</td>
</tr>
<tr>
    <td><a href="#update_wave"><CopyableCode code="update_wave" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-waveID"><code>waveID</code></a></td>
    <td></td>
    <td>Update wave.</td>
</tr>
<tr>
    <td><a href="#delete_wave"><CopyableCode code="delete_wave" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete wave.</td>
</tr>
<tr>
    <td><a href="#archive_wave"><CopyableCode code="archive_wave" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-waveID"><code>waveID</code></a></td>
    <td></td>
    <td>Archive wave.</td>
</tr>
<tr>
    <td><a href="#unarchive_wave"><CopyableCode code="unarchive_wave" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-waveID"><code>waveID</code></a></td>
    <td></td>
    <td>Unarchive wave.</td>
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
    defaultValue="list_waves"
    values={[
        { label: 'list_waves', value: 'list_waves' }
    ]}
>
<TabItem value="list_waves">

Retrieves all waves or multiple waves by ID.

```sql
SELECT
name,
arn,
creationDateTime,
description,
isArchived,
lastModifiedDateTime,
tags,
waveAggregatedStatus,
waveID
FROM aws.mgn.waves
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_wave"
    values={[
        { label: 'create_wave', value: 'create_wave' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_wave">

Create wave.

```sql
INSERT INTO aws.mgn.waves (
name,
description,
tags,
accountID,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ accountID }}',
'{{ region }}'
RETURNING
name,
arn,
creationDateTime,
description,
isArchived,
lastModifiedDateTime,
tags,
waveAggregatedStatus,
waveID
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: waves
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the waves resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: accountID
      value: "{{ accountID }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_wave"
    values={[
        { label: 'update_wave', value: 'update_wave' }
    ]}
>
<TabItem value="update_wave">

Update wave.

```sql
UPDATE aws.mgn.waves
SET 
waveID = '{{ waveID }}',
name = '{{ name }}',
description = '{{ description }}',
accountID = '{{ accountID }}'
WHERE 
region = '{{ region }}' --required
AND waveID = '{{ waveID }}' --required
RETURNING
name,
arn,
creationDateTime,
description,
isArchived,
lastModifiedDateTime,
tags,
waveAggregatedStatus,
waveID;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_wave"
    values={[
        { label: 'delete_wave', value: 'delete_wave' }
    ]}
>
<TabItem value="delete_wave">

Delete wave.

```sql
DELETE FROM aws.mgn.waves
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="archive_wave"
    values={[
        { label: 'archive_wave', value: 'archive_wave' },
        { label: 'unarchive_wave', value: 'unarchive_wave' }
    ]}
>
<TabItem value="archive_wave">

Archive wave.

```sql
EXEC aws.mgn.waves.archive_wave 
@region='{{ region }}' --required 
@@json=
'{
"waveID": "{{ waveID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="unarchive_wave">

Unarchive wave.

```sql
EXEC aws.mgn.waves.unarchive_wave 
@region='{{ region }}' --required 
@@json=
'{
"waveID": "{{ waveID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
</Tabs>
