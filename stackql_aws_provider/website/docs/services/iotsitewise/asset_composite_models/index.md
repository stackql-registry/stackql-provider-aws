--- 
title: asset_composite_models
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_composite_models
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

Creates, updates, deletes, gets or lists an <code>asset_composite_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_composite_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_composite_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset_composite_model"
    values={[
        { label: 'describe_asset_composite_model', value: 'describe_asset_composite_model' }
    ]}
>
<TabItem value="describe_asset_composite_model">

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
    <td><CopyableCode code="action_definitions" /></td>
    <td><code>array</code></td>
    <td>The available actions for a composite model on this asset.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_description" /></td>
    <td><code>string</code></td>
    <td>A description for the composite model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_external_id" /></td>
    <td><code>string</code></td>
    <td>An external ID to assign to the asset model. If the composite model is a component-based composite model, or one nested inside a component model, you can only set the external ID using UpdateAssetModelCompositeModel and specifying the derived ID of the model or property from the created model it's a part of. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a composite model on this asset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_name" /></td>
    <td><code>string</code></td>
    <td>The unique, friendly name for the composite model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_path" /></td>
    <td><code>array</code></td>
    <td>The path to the composite model listing the parent composite models.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_properties" /></td>
    <td><code>array</code></td>
    <td>The property definitions of the composite model that was used to create the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_summaries" /></td>
    <td><code>array</code></td>
    <td>The list of composite model summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_type" /></td>
    <td><code>string</code></td>
    <td>The composite model type. Valid values are AWS/ALARM, CUSTOM, or AWS/L4E_ANOMALY. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset, in UUID format. This ID uniquely identifies the asset within IoT SiteWise and can be used with other IoT SiteWise APIs. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_asset_composite_model"><CopyableCode code="describe_asset_composite_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-asset_composite_model_id"><code>asset_composite_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an asset composite model (also known as an asset component). An AssetCompositeModel is an instance of an AssetModelCompositeModel. If you want to see information about the model this is based on, call DescribeAssetModelCompositeModel.</td>
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
<tr id="parameter-asset_composite_model_id">
    <td><CopyableCode code="asset_composite_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a composite model on this asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-asset_id">
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_asset_composite_model"
    values={[
        { label: 'describe_asset_composite_model', value: 'describe_asset_composite_model' }
    ]}
>
<TabItem value="describe_asset_composite_model">

Retrieves information about an asset composite model (also known as an asset component). An AssetCompositeModel is an instance of an AssetModelCompositeModel. If you want to see information about the model this is based on, call DescribeAssetModelCompositeModel.

```sql
SELECT
action_definitions,
asset_composite_model_description,
asset_composite_model_external_id,
asset_composite_model_id,
asset_composite_model_name,
asset_composite_model_path,
asset_composite_model_properties,
asset_composite_model_summaries,
asset_composite_model_type,
asset_id
FROM aws.iotsitewise.asset_composite_models
WHERE asset_id = '{{ asset_id }}' -- required
AND asset_composite_model_id = '{{ asset_composite_model_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
