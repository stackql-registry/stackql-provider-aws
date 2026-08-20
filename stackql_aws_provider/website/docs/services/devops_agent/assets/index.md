--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset"
    values={[
        { label: 'get_asset', value: 'get_asset' },
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
<TabItem value="get_asset">

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
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this asset (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_type" /></td>
    <td><code>string</code></td>
    <td>The type of asset (e.g. skill, artifact)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this asset was created</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for this asset</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this asset was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number of this asset</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_assets">

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
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this asset (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_type" /></td>
    <td><code>string</code></td>
    <td>The type of asset (e.g. skill, artifact)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this asset was created</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for this asset</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this asset was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number of this asset</td>
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
    <td><a href="#get_asset"><CopyableCode code="get_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetVersion"><code>assetVersion</code></a></td>
    <td>Gets an asset from the specified agent space</td>
</tr>
<tr>
    <td><a href="#list_assets"><CopyableCode code="list_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetType"><code>assetType</code></a>, <a href="#parameter-updatedAfter"><code>updatedAfter</code></a>, <a href="#parameter-updatedBefore"><code>updatedBefore</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists assets in the specified agent space</td>
</tr>
<tr>
    <td><a href="#create_asset"><CopyableCode code="create_asset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetType"><code>assetType</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Creates a new asset in the specified agent space</td>
</tr>
<tr>
    <td><a href="#update_asset"><CopyableCode code="update_asset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an asset in the specified agent space</td>
</tr>
<tr>
    <td><a href="#delete_asset"><CopyableCode code="delete_asset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an asset and all its files from the specified agent space</td>
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
    <td>The unique identifier of the asset to delete</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assetType">
    <td><CopyableCode code="assetType" /></td>
    <td><code>string</code></td>
    <td>Filter results to only assets of this type</td>
</tr>
<tr id="parameter-assetVersion">
    <td><CopyableCode code="assetVersion" /></td>
    <td><code>integer</code></td>
    <td>The specific version of the asset to retrieve. If omitted, the latest version is returned.</td>
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
<tr id="parameter-updatedAfter">
    <td><CopyableCode code="updatedAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter results to only assets updated after this timestamp</td>
</tr>
<tr id="parameter-updatedBefore">
    <td><CopyableCode code="updatedBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter results to only assets updated before this timestamp</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_asset"
    values={[
        { label: 'get_asset', value: 'get_asset' },
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
<TabItem value="get_asset">

Gets an asset from the specified agent space

```sql
SELECT
asset_id,
asset_type,
created_at,
metadata,
updated_at,
version
FROM aws.devops_agent.assets
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND asset_id = '{{ asset_id }}' -- required
AND region = '{{ region }}' -- required
AND assetVersion = '{{ assetVersion }}'
;
```
</TabItem>
<TabItem value="list_assets">

Lists assets in the specified agent space

```sql
SELECT
asset_id,
asset_type,
created_at,
metadata,
updated_at,
version
FROM aws.devops_agent.assets
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
AND assetType = '{{ assetType }}'
AND updatedAfter = '{{ updatedAfter }}'
AND updatedBefore = '{{ updatedBefore }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset"
    values={[
        { label: 'create_asset', value: 'create_asset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset">

Creates a new asset in the specified agent space

```sql
INSERT INTO aws.devops_agent.assets (
assetType,
metadata,
content,
clientToken,
agent_space_id,
region
)
SELECT 
'{{ assetType }}' /* required */,
'{{ metadata }}',
'{{ content }}' /* required */,
'{{ clientToken }}',
'{{ agent_space_id }}',
'{{ region }}'
RETURNING
asset
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assets
  props:
    - name: agent_space_id
      value: "{{ agent_space_id }}"
      description: Required parameter for the assets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assets resource.
    - name: assetType
      value: "{{ assetType }}"
      description: |
        The type of asset (e.g. skill, artifact)
    - name: metadata
      value: "{{ metadata }}"
    - name: content
      description: |
        Content for an asset: a single file, a zip bundle, or a source URL to import from
      value:
        file:
          path: "{{ path }}"
          body:
            bytes: "{{ bytes }}"
            text: "{{ text }}"
          metadata: "{{ metadata }}"
        zip:
          zipFile: "{{ zipFile }}"
        sourceUrl:
          url: "{{ url }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_asset"
    values={[
        { label: 'update_asset', value: 'update_asset' }
    ]}
>
<TabItem value="update_asset">

Updates an asset in the specified agent space

```sql
UPDATE aws.devops_agent.assets
SET 
metadata = '{{ metadata }}',
content = '{{ content }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND asset_id = '{{ asset_id }}' --required
AND region = '{{ region }}' --required
RETURNING
asset;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset"
    values={[
        { label: 'delete_asset', value: 'delete_asset' }
    ]}
>
<TabItem value="delete_asset">

Deletes an asset and all its files from the specified agent space

```sql
DELETE FROM aws.devops_agent.assets
WHERE agent_space_id = '{{ agent_space_id }}' --required
AND asset_id = '{{ asset_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
