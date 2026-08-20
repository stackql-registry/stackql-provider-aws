--- 
title: asset_files
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_files
  - devops_agent
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

Creates, updates, deletes, gets or lists an <code>asset_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.asset_files" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset_file"
    values={[
        { label: 'get_asset_file', value: 'get_asset_file' },
        { label: 'list_asset_files', value: 'list_asset_files' }
    ]}
>
<TabItem value="get_asset_file">

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
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Content of an individual asset file</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this file was created</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for this file</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path of a file within an asset (pattern: &lt;code&gt;&#91;a-zA-Z0-9_./ ()-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this file was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The asset version this file belongs to</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_files">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this file was created</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for this file</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path of a file within an asset (pattern: &lt;code&gt;&#91;a-zA-Z0-9_./ ()-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this file was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The asset version this file belongs to</td>
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
    <td><a href="#get_asset_file"><CopyableCode code="get_asset_file" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetVersion"><code>assetVersion</code></a></td>
    <td>Gets a file from an asset</td>
</tr>
<tr>
    <td><a href="#list_asset_files"><CopyableCode code="list_asset_files" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetVersion"><code>assetVersion</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists files in an asset</td>
</tr>
<tr>
    <td><a href="#create_asset_file"><CopyableCode code="create_asset_file" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Creates a file in an asset</td>
</tr>
<tr>
    <td><a href="#update_asset_file"><CopyableCode code="update_asset_file" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a file in an asset</td>
</tr>
<tr>
    <td><a href="#delete_asset_file"><CopyableCode code="delete_asset_file" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a file from an asset</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space containing the asset</td>
</tr>
<tr id="parameter-asset_id">
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the asset containing the file</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path of the file within the asset to delete</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assetVersion">
    <td><CopyableCode code="assetVersion" /></td>
    <td><code>integer</code></td>
    <td>The specific asset version to list files from. If omitted, files from the latest version are returned.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single response</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token from a previous response to retrieve the next page of results</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_asset_file"
    values={[
        { label: 'get_asset_file', value: 'get_asset_file' },
        { label: 'list_asset_files', value: 'list_asset_files' }
    ]}
>
<TabItem value="get_asset_file">

Gets a file from an asset

```sql
SELECT
content,
created_at,
metadata,
path,
updated_at,
version
FROM aws.devops_agent.asset_files
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND asset_id = '{{ asset_id }}' -- required
AND path = '{{ path }}' -- required
AND region = '{{ region }}' -- required
AND assetVersion = '{{ assetVersion }}'
;
```
</TabItem>
<TabItem value="list_asset_files">

Lists files in an asset

```sql
SELECT
created_at,
metadata,
path,
updated_at,
version
FROM aws.devops_agent.asset_files
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND asset_id = '{{ asset_id }}' -- required
AND region = '{{ region }}' -- required
AND assetVersion = '{{ assetVersion }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset_file"
    values={[
        { label: 'create_asset_file', value: 'create_asset_file' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset_file">

Creates a file in an asset

```sql
INSERT INTO aws.devops_agent.asset_files (
content,
metadata,
clientToken,
agent_space_id,
asset_id,
path,
region
)
SELECT 
'{{ content }}' /* required */,
'{{ metadata }}',
'{{ clientToken }}',
'{{ agent_space_id }}',
'{{ asset_id }}',
'{{ path }}',
'{{ region }}'
RETURNING
file
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: asset_files
  props:
    - name: agent_space_id
      value: "{{ agent_space_id }}"
      description: Required parameter for the asset_files resource.
    - name: asset_id
      value: "{{ asset_id }}"
      description: Required parameter for the asset_files resource.
    - name: path
      value: "{{ path }}"
      description: Required parameter for the asset_files resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the asset_files resource.
    - name: content
      description: |
        Content of an individual asset file
      value:
        bytes: "{{ bytes }}"
        text: "{{ text }}"
    - name: metadata
      value: "{{ metadata }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_asset_file"
    values={[
        { label: 'update_asset_file', value: 'update_asset_file' }
    ]}
>
<TabItem value="update_asset_file">

Updates a file in an asset

```sql
UPDATE aws.devops_agent.asset_files
SET 
content = '{{ content }}',
metadata = '{{ metadata }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND asset_id = '{{ asset_id }}' --required
AND path = '{{ path }}' --required
AND region = '{{ region }}' --required
RETURNING
file;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset_file"
    values={[
        { label: 'delete_asset_file', value: 'delete_asset_file' }
    ]}
>
<TabItem value="delete_asset_file">

Deletes a file from an asset

```sql
DELETE FROM aws.devops_agent.asset_files
WHERE agent_space_id = '{{ agent_space_id }}' --required
AND asset_id = '{{ asset_id }}' --required
AND path = '{{ path }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
