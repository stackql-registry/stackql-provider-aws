--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset"
    values={[
        { label: 'describe_asset', value: 'describe_asset' },
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
<TabItem value="describe_asset">

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
    <td><CopyableCode code="assetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the asset, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:asset/$&#123;AssetId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetCompositeModelSummaries" /></td>
    <td><code>array</code></td>
    <td>The list of the immediate child custom composite model summaries for the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="assetCompositeModels" /></td>
    <td><code>array</code></td>
    <td>The composite models for the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="assetCreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="assetDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the asset. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetExternalId" /></td>
    <td><code>string</code></td>
    <td>The external ID of the asset, if any. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetHierarchies" /></td>
    <td><code>array</code></td>
    <td>A list of asset hierarchies that each contain a hierarchyId. A hierarchy specifies allowed parent/child asset relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetLastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model that was used to create the asset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetName" /></td>
    <td><code>string</code></td>
    <td>The name of the asset. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetProperties" /></td>
    <td><code>array</code></td>
    <td>The list of asset properties for the asset. This object doesn't include properties that you define in composite models. You can find composite model properties in the assetCompositeModels object.</td>
</tr>
<tr>
    <td><CopyableCode code="assetStatus" /></td>
    <td><code>object</code></td>
    <td>The current status of the asset, which contains a state and any error message.</td>
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
    <td>The ID of the asset model used to create this asset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_asset"><CopyableCode code="describe_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-excludeProperties"><code>excludeProperties</code></a></td>
    <td>Retrieves information about an asset.</td>
</tr>
<tr>
    <td><a href="#list_assets"><CopyableCode code="list_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-assetModelId"><code>assetModelId</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Retrieves a paginated list of asset summaries. You can use this operation to do the following: List assets based on a specific asset model. List top-level assets. You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</td>
</tr>
<tr>
    <td><a href="#create_asset"><CopyableCode code="create_asset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetName"><code>assetName</code></a>, <a href="#parameter-assetModelId"><code>assetModelId</code></a></td>
    <td></td>
    <td>Creates an asset from an existing asset model. For more information, see Creating assets in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_assets"><CopyableCode code="associate_assets" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-hierarchyId"><code>hierarchyId</code></a>, <a href="#parameter-childAssetId"><code>childAssetId</code></a></td>
    <td></td>
    <td>Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating assets in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#update_asset"><CopyableCode code="update_asset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetName"><code>assetName</code></a></td>
    <td></td>
    <td>Updates an asset's name. For more information, see Updating assets and models in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_asset"><CopyableCode code="delete_asset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an asset. This action can't be undone. For more information, see Deleting assets and models in the IoT SiteWise User Guide. You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets.</td>
</tr>
<tr>
    <td><a href="#disassociate_assets"><CopyableCode code="disassociate_assets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-hierarchyId"><code>hierarchyId</code></a>, <a href="#parameter-childAssetId"><code>childAssetId</code></a></td>
    <td></td>
    <td>Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.</td>
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
    <td>The ID of the parent asset from which to disassociate the child asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assetModelId">
    <td><CopyableCode code="assetModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model by which to filter the list of assets. This parameter is required if you choose ALL for filter. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-excludeProperties">
    <td><CopyableCode code="excludeProperties" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to exclude asset properties from the response.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>The filter for the requested list of assets. Choose one of the following options: ALL – The list includes all assets for a given asset model ID. The assetModelId parameter is required if you filter by ALL. TOP_LEVEL – The list includes only top-level assets in the asset hierarchy tree. Default: ALL</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_asset"
    values={[
        { label: 'describe_asset', value: 'describe_asset' },
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
<TabItem value="describe_asset">

Retrieves information about an asset.

```sql
SELECT
assetArn,
assetCompositeModelSummaries,
assetCompositeModels,
assetCreationDate,
assetDescription,
assetExternalId,
assetHierarchies,
assetId,
assetLastUpdateDate,
assetModelId,
assetName,
assetProperties,
assetStatus
FROM aws.iotsitewise.assets
WHERE asset_id = '{{ asset_id }}' -- required
AND region = '{{ region }}' -- required
AND excludeProperties = '{{ excludeProperties }}'
;
```
</TabItem>
<TabItem value="list_assets">

Retrieves a paginated list of asset summaries. You can use this operation to do the following: List assets based on a specific asset model. List top-level assets. You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.

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
FROM aws.iotsitewise.assets
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND assetModelId = '{{ assetModelId }}'
AND filter = '{{ filter }}'
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

Creates an asset from an existing asset model. For more information, see Creating assets in the IoT SiteWise User Guide.

```sql
INSERT INTO aws.iotsitewise.assets (
assetName,
assetModelId,
assetId,
assetExternalId,
clientToken,
tags,
assetDescription,
region
)
SELECT 
'{{ assetName }}' /* required */,
'{{ assetModelId }}' /* required */,
'{{ assetId }}',
'{{ assetExternalId }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ assetDescription }}',
'{{ region }}'
RETURNING
assetArn,
assetId,
assetStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assets resource.
    - name: assetName
      value: "{{ assetName }}"
    - name: assetModelId
      value: "{{ assetModelId }}"
    - name: assetId
      value: "{{ assetId }}"
    - name: assetExternalId
      value: "{{ assetExternalId }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
    - name: assetDescription
      value: "{{ assetDescription }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_assets"
    values={[
        { label: 'associate_assets', value: 'associate_assets' },
        { label: 'update_asset', value: 'update_asset' }
    ]}
>
<TabItem value="associate_assets">

Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating assets in the IoT SiteWise User Guide.

```sql
UPDATE aws.iotsitewise.assets
SET 
hierarchyId = '{{ hierarchyId }}',
childAssetId = '{{ childAssetId }}',
clientToken = '{{ clientToken }}'
WHERE 
asset_id = '{{ asset_id }}' --required
AND region = '{{ region }}' --required
AND hierarchyId = '{{ hierarchyId }}' --required
AND childAssetId = '{{ childAssetId }}' --required;
```
</TabItem>
<TabItem value="update_asset">

Updates an asset's name. For more information, see Updating assets and models in the IoT SiteWise User Guide.

```sql
UPDATE aws.iotsitewise.assets
SET 
assetExternalId = '{{ assetExternalId }}',
assetName = '{{ assetName }}',
clientToken = '{{ clientToken }}',
assetDescription = '{{ assetDescription }}'
WHERE 
asset_id = '{{ asset_id }}' --required
AND region = '{{ region }}' --required
AND assetName = '{{ assetName }}' --required
RETURNING
assetStatus;
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

Deletes an asset. This action can't be undone. For more information, see Deleting assets and models in the IoT SiteWise User Guide. You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets.

```sql
DELETE FROM aws.iotsitewise.assets
WHERE asset_id = '{{ asset_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_assets"
    values={[
        { label: 'disassociate_assets', value: 'disassociate_assets' }
    ]}
>
<TabItem value="disassociate_assets">

Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.

```sql
EXEC aws.iotsitewise.assets.disassociate_assets 
@asset_id='{{ asset_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"hierarchyId": "{{ hierarchyId }}", 
"childAssetId": "{{ childAssetId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
