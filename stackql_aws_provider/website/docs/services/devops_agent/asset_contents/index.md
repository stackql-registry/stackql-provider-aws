--- 
title: asset_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_contents
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

Creates, updates, deletes, gets or lists an <code>asset_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.asset_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset_content"
    values={[
        { label: 'get_asset_content', value: 'get_asset_content' }
    ]}
>
<TabItem value="get_asset_content">

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
    <td>The asset content as a zip file</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The asset version this content belongs to</td>
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
    <td><a href="#get_asset_content"><CopyableCode code="get_asset_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetVersion"><code>assetVersion</code></a></td>
    <td>Gets an asset's content as a zip bundle</td>
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
    <td>The unique identifier of the asset</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assetVersion">
    <td><CopyableCode code="assetVersion" /></td>
    <td><code>integer</code></td>
    <td>The specific asset version to export. If omitted, the latest version is returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_asset_content"
    values={[
        { label: 'get_asset_content', value: 'get_asset_content' }
    ]}
>
<TabItem value="get_asset_content">

Gets an asset's content as a zip bundle

```sql
SELECT
content,
version
FROM aws.devops_agent.asset_contents
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND asset_id = '{{ asset_id }}' -- required
AND region = '{{ region }}' -- required
AND assetVersion = '{{ assetVersion }}'
;
```
</TabItem>
</Tabs>
