--- 
title: asset_model_interface_relationships
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_model_interface_relationships
  - iotsitewise
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

Creates, updates, deletes, gets or lists an <code>asset_model_interface_relationships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_model_interface_relationships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_model_interface_relationships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset_model_interface_relationship"
    values={[
        { label: 'describe_asset_model_interface_relationship', value: 'describe_asset_model_interface_relationship' }
    ]}
>
<TabItem value="describe_asset_model_interface_relationship">

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
    <td><CopyableCode code="assetModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchyMappings" /></td>
    <td><code>array</code></td>
    <td>A list of hierarchy mappings between the interface asset model and the asset model where the interface is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="interfaceAssetModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the interface asset model. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="propertyMappings" /></td>
    <td><code>array</code></td>
    <td>A list of property mappings between the interface asset model and the asset model where the interface is applied.</td>
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
    <td><a href="#describe_asset_model_interface_relationship"><CopyableCode code="describe_asset_model_interface_relationship" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-interface_asset_model_id"><code>interface_asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an interface relationship between an asset model and an interface asset model.</td>
</tr>
<tr>
    <td><a href="#put_asset_model_interface_relationship"><CopyableCode code="put_asset_model_interface_relationship" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-interface_asset_model_id"><code>interface_asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-propertyMappingConfiguration"><code>propertyMappingConfiguration</code></a></td>
    <td></td>
    <td>Creates or updates an interface relationship between an asset model and an interface asset model. This operation applies an interface to an asset model.</td>
</tr>
<tr>
    <td><a href="#delete_asset_model_interface_relationship"><CopyableCode code="delete_asset_model_interface_relationship" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-interface_asset_model_id"><code>interface_asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an interface relationship between an asset model and an interface asset model.</td>
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
<tr id="parameter-asset_model_id">
    <td><CopyableCode code="asset_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.</td>
</tr>
<tr id="parameter-interface_asset_model_id">
    <td><CopyableCode code="interface_asset_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the interface asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_asset_model_interface_relationship"
    values={[
        { label: 'describe_asset_model_interface_relationship', value: 'describe_asset_model_interface_relationship' }
    ]}
>
<TabItem value="describe_asset_model_interface_relationship">

Retrieves information about an interface relationship between an asset model and an interface asset model.

```sql
SELECT
assetModelId,
hierarchyMappings,
interfaceAssetModelId,
propertyMappings
FROM aws.iotsitewise.asset_model_interface_relationships
WHERE asset_model_id = '{{ asset_model_id }}' -- required
AND interface_asset_model_id = '{{ interface_asset_model_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_asset_model_interface_relationship"
    values={[
        { label: 'put_asset_model_interface_relationship', value: 'put_asset_model_interface_relationship' }
    ]}
>
<TabItem value="put_asset_model_interface_relationship">

Creates or updates an interface relationship between an asset model and an interface asset model. This operation applies an interface to an asset model.

```sql
REPLACE aws.iotsitewise.asset_model_interface_relationships
SET 
propertyMappingConfiguration = '{{ propertyMappingConfiguration }}',
clientToken = '{{ clientToken }}'
WHERE 
asset_model_id = '{{ asset_model_id }}' --required
AND interface_asset_model_id = '{{ interface_asset_model_id }}' --required
AND region = '{{ region }}' --required
AND propertyMappingConfiguration = '{{ propertyMappingConfiguration }}' --required
RETURNING
assetModelArn,
assetModelId,
assetModelStatus,
interfaceAssetModelId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset_model_interface_relationship"
    values={[
        { label: 'delete_asset_model_interface_relationship', value: 'delete_asset_model_interface_relationship' }
    ]}
>
<TabItem value="delete_asset_model_interface_relationship">

Deletes an interface relationship between an asset model and an interface asset model.

```sql
DELETE FROM aws.iotsitewise.asset_model_interface_relationships
WHERE asset_model_id = '{{ asset_model_id }}' --required
AND interface_asset_model_id = '{{ interface_asset_model_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
