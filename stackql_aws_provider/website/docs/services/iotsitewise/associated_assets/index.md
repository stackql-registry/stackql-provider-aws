--- 
title: associated_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_assets
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

Creates, updates, deletes, gets or lists an <code>associated_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.associated_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_associated_assets"
    values={[
        { label: 'list_associated_assets', value: 'list_associated_assets' }
    ]}
>
<TabItem value="list_associated_assets">

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
    <td>The ID of the asset, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the asset, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:asset/$&#123;AssetId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model used to create the asset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the asset. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="externalId" /></td>
    <td><code>string</code></td>
    <td>The external ID of the asset. For more information, see Using external IDs in the IoT SiteWise User Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchies" /></td>
    <td><code>array</code></td>
    <td>A list of asset hierarchies that each contain a hierarchyId. A hierarchy specifies allowed parent/child asset relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the asset.</td>
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
    <td><a href="#list_associated_assets"><CopyableCode code="list_associated_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-hierarchyId"><code>hierarchyId</code></a>, <a href="#parameter-traversalDirection"><code>traversalDirection</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of associated assets. You can use this operation to do the following: CHILD - List all child assets associated to the asset. PARENT - List the asset's parent asset.</td>
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
<tr id="parameter-asset_id">
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset to query. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-hierarchyId">
    <td><CopyableCode code="hierarchyId" /></td>
    <td><code>string</code></td>
    <td>(Optional) If you don't provide a hierarchyId, all the immediate assets in the traversalDirection will be returned. The ID of the hierarchy by which child assets are associated to the asset. (This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.) For more information, see Asset hierarchies in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-traversalDirection">
    <td><CopyableCode code="traversalDirection" /></td>
    <td><code>string</code></td>
    <td>The direction to list associated assets. Choose one of the following options: CHILD – The list includes all child assets associated to the asset. PARENT – The list includes the asset's parent asset. Default: CHILD</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_associated_assets"
    values={[
        { label: 'list_associated_assets', value: 'list_associated_assets' }
    ]}
>
<TabItem value="list_associated_assets">

Retrieves a paginated list of associated assets. You can use this operation to do the following: CHILD - List all child assets associated to the asset. PARENT - List the asset's parent asset.

```sql
SELECT
id,
name,
arn,
assetModelId,
creationDate,
description,
externalId,
hierarchies,
lastUpdateDate,
status
FROM aws.iotsitewise.associated_assets
WHERE asset_id = '{{ asset_id }}' -- required
AND region = '{{ region }}' -- required
AND hierarchyId = '{{ hierarchyId }}'
AND traversalDirection = '{{ traversalDirection }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
