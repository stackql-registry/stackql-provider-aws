--- 
title: asset_model_composite_models
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_model_composite_models
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

Creates, updates, deletes, gets or lists an <code>asset_model_composite_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_model_composite_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_model_composite_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset_model_composite_model"
    values={[
        { label: 'describe_asset_model_composite_model', value: 'describe_asset_model_composite_model' },
        { label: 'list_asset_model_composite_models', value: 'list_asset_model_composite_models' }
    ]}
>
<TabItem value="describe_asset_model_composite_model">

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
    <td><CopyableCode code="actionDefinitions" /></td>
    <td><code>array</code></td>
    <td>The available actions for a composite model on this asset model.</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelDescription" /></td>
    <td><code>string</code></td>
    <td>The description for the composite model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelExternalId" /></td>
    <td><code>string</code></td>
    <td>The external ID of a composite model on this asset model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of a composite model on this asset model. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelName" /></td>
    <td><code>string</code></td>
    <td>The unique, friendly name for the composite model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelPath" /></td>
    <td><code>array</code></td>
    <td>The path to the composite model listing the parent composite models.</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelProperties" /></td>
    <td><code>array</code></td>
    <td>The property definitions of the composite model.</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelSummaries" /></td>
    <td><code>array</code></td>
    <td>The list of composite model summaries for the composite model.</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelType" /></td>
    <td><code>string</code></td>
    <td>The composite model type. Valid values are AWS/ALARM, CUSTOM, or AWS/L4E_ANOMALY. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compositionDetails" /></td>
    <td><code>object</code></td>
    <td>Metadata for the composition relationship established by using composedAssetModelId in CreateAssetModelCompositeModel . For instance, an array detailing the path of the composition relationship for this composite model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_model_composite_models">

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
    <td>The ID of the composite model that this summary describes.. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the composite model that this summary describes.. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the composite model that this summary describes.. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="externalId" /></td>
    <td><code>string</code></td>
    <td>The external ID of a composite model on this asset model. For more information, see Using external IDs in the IoT SiteWise User Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>array</code></td>
    <td>The path that includes all the pieces that make up the composite model.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The composite model type. Valid values are AWS/ALARM, CUSTOM, or AWS/L4E_ANOMALY. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_asset_model_composite_model"><CopyableCode code="describe_asset_model_composite_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-asset_model_composite_model_id"><code>asset_model_composite_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetModelVersion"><code>assetModelVersion</code></a></td>
    <td>Retrieves information about an asset model composite model (also known as an asset model component). For more information, see Custom composite models (Components) in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#list_asset_model_composite_models"><CopyableCode code="list_asset_model_composite_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-assetModelVersion"><code>assetModelVersion</code></a></td>
    <td>Retrieves a paginated list of composite models associated with the asset model</td>
</tr>
<tr>
    <td><a href="#create_asset_model_composite_model"><CopyableCode code="create_asset_model_composite_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetModelCompositeModelName"><code>assetModelCompositeModelName</code></a>, <a href="#parameter-assetModelCompositeModelType"><code>assetModelCompositeModelType</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-Match-For-Version-Type"><code>Match-For-Version-Type</code></a></td>
    <td>Creates a custom composite model from specified property and hierarchy definitions. There are two types of custom composite models, inline and component-model-based. Use component-model-based custom composite models to define standard, reusable components. A component-model-based custom composite model consists of a name, a description, and the ID of the component model it references. A component-model-based custom composite model has no properties of its own; its referenced component model provides its associated properties to any created assets. For more information, see Custom composite models (Components) in the IoT SiteWise User Guide. Use inline custom composite models to organize the properties of an asset model. The properties of inline custom composite models are local to the asset model where they are included and can't be used to create multiple assets. To create a component-model-based model, specify the composedAssetModelId of an existing asset model with assetModelType of COMPONENT_MODEL. To create an inline model, specify the assetModelCompositeModelProperties and don't include an composedAssetModelId.</td>
</tr>
<tr>
    <td><a href="#update_asset_model_composite_model"><CopyableCode code="update_asset_model_composite_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-asset_model_composite_model_id"><code>asset_model_composite_model_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetModelCompositeModelName"><code>assetModelCompositeModelName</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-Match-For-Version-Type"><code>Match-For-Version-Type</code></a></td>
    <td>Updates a composite model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide. If you remove a property from a composite asset model, IoT SiteWise deletes all previous data for that property. You can’t change the type or data type of an existing property. To replace an existing composite asset model property with a new one with the same name, do the following: Submit an UpdateAssetModelCompositeModel request with the entire existing property removed. Submit a second UpdateAssetModelCompositeModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id.</td>
</tr>
<tr>
    <td><a href="#delete_asset_model_composite_model"><CopyableCode code="delete_asset_model_composite_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-asset_model_composite_model_id"><code>asset_model_composite_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-Match-For-Version-Type"><code>Match-For-Version-Type</code></a></td>
    <td>Deletes a composite model. This action can't be undone. You must delete all assets created from a composite model before you can delete the model. Also, you can't delete a composite model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.</td>
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
<tr id="parameter-asset_model_composite_model_id">
    <td><CopyableCode code="asset_model_composite_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a composite model on this asset model.</td>
</tr>
<tr id="parameter-asset_model_id">
    <td><CopyableCode code="asset_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model, in UUID format.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using matchForVersionType). The delete request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-If-None-Match">
    <td><CopyableCode code="If-None-Match" /></td>
    <td><code>string</code></td>
    <td>Accepts * to reject the delete request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model.</td>
</tr>
<tr id="parameter-Match-For-Version-Type">
    <td><CopyableCode code="Match-For-Version-Type" /></td>
    <td><code>string</code></td>
    <td>Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the delete operation.</td>
</tr>
<tr id="parameter-assetModelVersion">
    <td><CopyableCode code="assetModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See Asset model versions in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
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
    defaultValue="describe_asset_model_composite_model"
    values={[
        { label: 'describe_asset_model_composite_model', value: 'describe_asset_model_composite_model' },
        { label: 'list_asset_model_composite_models', value: 'list_asset_model_composite_models' }
    ]}
>
<TabItem value="describe_asset_model_composite_model">

Retrieves information about an asset model composite model (also known as an asset model component). For more information, see Custom composite models (Components) in the IoT SiteWise User Guide.

```sql
SELECT
actionDefinitions,
assetModelCompositeModelDescription,
assetModelCompositeModelExternalId,
assetModelCompositeModelId,
assetModelCompositeModelName,
assetModelCompositeModelPath,
assetModelCompositeModelProperties,
assetModelCompositeModelSummaries,
assetModelCompositeModelType,
assetModelId,
compositionDetails
FROM aws.iotsitewise.asset_model_composite_models
WHERE asset_model_id = '{{ asset_model_id }}' -- required
AND asset_model_composite_model_id = '{{ asset_model_composite_model_id }}' -- required
AND region = '{{ region }}' -- required
AND assetModelVersion = '{{ assetModelVersion }}'
;
```
</TabItem>
<TabItem value="list_asset_model_composite_models">

Retrieves a paginated list of composite models associated with the asset model

```sql
SELECT
id,
name,
description,
externalId,
path,
type_
FROM aws.iotsitewise.asset_model_composite_models
WHERE asset_model_id = '{{ asset_model_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND assetModelVersion = '{{ assetModelVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset_model_composite_model"
    values={[
        { label: 'create_asset_model_composite_model', value: 'create_asset_model_composite_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset_model_composite_model">

Creates a custom composite model from specified property and hierarchy definitions. There are two types of custom composite models, inline and component-model-based. Use component-model-based custom composite models to define standard, reusable components. A component-model-based custom composite model consists of a name, a description, and the ID of the component model it references. A component-model-based custom composite model has no properties of its own; its referenced component model provides its associated properties to any created assets. For more information, see Custom composite models (Components) in the IoT SiteWise User Guide. Use inline custom composite models to organize the properties of an asset model. The properties of inline custom composite models are local to the asset model where they are included and can't be used to create multiple assets. To create a component-model-based model, specify the composedAssetModelId of an existing asset model with assetModelType of COMPONENT_MODEL. To create an inline model, specify the assetModelCompositeModelProperties and don't include an composedAssetModelId.

```sql
INSERT INTO aws.iotsitewise.asset_model_composite_models (
assetModelCompositeModelExternalId,
parentAssetModelCompositeModelId,
assetModelCompositeModelId,
assetModelCompositeModelDescription,
assetModelCompositeModelName,
assetModelCompositeModelType,
clientToken,
composedAssetModelId,
assetModelCompositeModelProperties,
asset_model_id,
region,
`If-Match`,
`If-None-Match`,
`Match-For-Version-Type`
)
SELECT 
'{{ assetModelCompositeModelExternalId }}',
'{{ parentAssetModelCompositeModelId }}',
'{{ assetModelCompositeModelId }}',
'{{ assetModelCompositeModelDescription }}',
'{{ assetModelCompositeModelName }}' /* required */,
'{{ assetModelCompositeModelType }}' /* required */,
'{{ clientToken }}',
'{{ composedAssetModelId }}',
'{{ assetModelCompositeModelProperties }}',
'{{ asset_model_id }}',
'{{ region }}',
'{{ If-Match }}',
'{{ If-None-Match }}',
'{{ Match-For-Version-Type }}'
RETURNING
assetModelCompositeModelId,
assetModelCompositeModelPath,
assetModelStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: asset_model_composite_models
  props:
    - name: asset_model_id
      value: "{{ asset_model_id }}"
      description: Required parameter for the asset_model_composite_models resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the asset_model_composite_models resource.
    - name: assetModelCompositeModelExternalId
      value: "{{ assetModelCompositeModelExternalId }}"
    - name: parentAssetModelCompositeModelId
      value: "{{ parentAssetModelCompositeModelId }}"
    - name: assetModelCompositeModelId
      value: "{{ assetModelCompositeModelId }}"
    - name: assetModelCompositeModelDescription
      value: "{{ assetModelCompositeModelDescription }}"
    - name: assetModelCompositeModelName
      value: "{{ assetModelCompositeModelName }}"
    - name: assetModelCompositeModelType
      value: "{{ assetModelCompositeModelType }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: composedAssetModelId
      value: "{{ composedAssetModelId }}"
    - name: assetModelCompositeModelProperties
      value:
        - id: "{{ id }}"
          externalId: "{{ externalId }}"
          name: "{{ name }}"
          dataType: "{{ dataType }}"
          dataTypeSpec: "{{ dataTypeSpec }}"
          unit: "{{ unit }}"
          type_:
            attribute:
              defaultValue: "{{ defaultValue }}"
            measurement:
              processingConfig:
                forwardingConfig:
                  state: "{{ state }}"
            transform:
              expression: "{{ expression }}"
              variables:
                - name: "{{ name }}"
                  value:
                    propertyId: "{{ propertyId }}"
                    hierarchyId: "{{ hierarchyId }}"
                    propertyPath: "{{ propertyPath }}"
              processingConfig:
                computeLocation: "{{ computeLocation }}"
                forwardingConfig:
                  state: "{{ state }}"
            metric:
              expression: "{{ expression }}"
              variables:
                - name: "{{ name }}"
                  value:
                    propertyId: "{{ propertyId }}"
                    hierarchyId: "{{ hierarchyId }}"
                    propertyPath: "{{ propertyPath }}"
              window:
                tumbling:
                  interval: "{{ interval }}"
                  offset: "{{ offset }}"
              processingConfig:
                computeLocation: "{{ computeLocation }}"
    - name: If-Match
      value: "{{ If-Match }}"
      description: The expected current entity tag (ETag) for the asset model’s latest or active version (specified using matchForVersionType). The create request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide.
      description: The expected current entity tag (ETag) for the asset model’s latest or active version (specified using matchForVersionType). The create request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide.
    - name: If-None-Match
      value: "{{ If-None-Match }}"
      description: Accepts * to reject the create request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model.
      description: Accepts * to reject the create request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model.
    - name: Match-For-Version-Type
      value: "{{ Match-For-Version-Type }}"
      description: Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the create operation.
      description: Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the create operation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_asset_model_composite_model"
    values={[
        { label: 'update_asset_model_composite_model', value: 'update_asset_model_composite_model' }
    ]}
>
<TabItem value="update_asset_model_composite_model">

Updates a composite model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide. If you remove a property from a composite asset model, IoT SiteWise deletes all previous data for that property. You can’t change the type or data type of an existing property. To replace an existing composite asset model property with a new one with the same name, do the following: Submit an UpdateAssetModelCompositeModel request with the entire existing property removed. Submit a second UpdateAssetModelCompositeModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id.

```sql
UPDATE aws.iotsitewise.asset_model_composite_models
SET 
assetModelCompositeModelExternalId = '{{ assetModelCompositeModelExternalId }}',
assetModelCompositeModelDescription = '{{ assetModelCompositeModelDescription }}',
assetModelCompositeModelName = '{{ assetModelCompositeModelName }}',
clientToken = '{{ clientToken }}',
assetModelCompositeModelProperties = '{{ assetModelCompositeModelProperties }}'
WHERE 
asset_model_id = '{{ asset_model_id }}' --required
AND asset_model_composite_model_id = '{{ asset_model_composite_model_id }}' --required
AND region = '{{ region }}' --required
AND assetModelCompositeModelName = '{{ assetModelCompositeModelName }}' --required
AND `If-Match` = '{{ If-Match}}'
AND `If-None-Match` = '{{ If-None-Match}}'
AND `Match-For-Version-Type` = '{{ Match-For-Version-Type}}'
RETURNING
assetModelCompositeModelPath,
assetModelStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset_model_composite_model"
    values={[
        { label: 'delete_asset_model_composite_model', value: 'delete_asset_model_composite_model' }
    ]}
>
<TabItem value="delete_asset_model_composite_model">

Deletes a composite model. This action can't be undone. You must delete all assets created from a composite model before you can delete the model. Also, you can't delete a composite model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.

```sql
DELETE FROM aws.iotsitewise.asset_model_composite_models
WHERE asset_model_id = '{{ asset_model_id }}' --required
AND asset_model_composite_model_id = '{{ asset_model_composite_model_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
AND `If-Match` = '{{ If-Match }}'
AND `If-None-Match` = '{{ If-None-Match }}'
AND `Match-For-Version-Type` = '{{ Match-For-Version-Type }}'
;
```
</TabItem>
</Tabs>
