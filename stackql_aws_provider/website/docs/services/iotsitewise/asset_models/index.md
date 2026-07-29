--- 
title: asset_models
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_models
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

Creates, updates, deletes, gets or lists an <code>asset_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset_model"
    values={[
        { label: 'describe_asset_model', value: 'describe_asset_model' },
        { label: 'list_asset_models', value: 'list_asset_models' }
    ]}
>
<TabItem value="describe_asset_model">

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
    <td><CopyableCode code="asset_model_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the asset model, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:asset-model/$&#123;AssetModelId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_composite_model_summaries" /></td>
    <td><code>array</code></td>
    <td>The list of the immediate child custom composite model summaries for the asset model.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_composite_models" /></td>
    <td><code>array</code></td>
    <td>The list of built-in composite models for the asset model, such as those with those of type AWS/ALARMS.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset model was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_description" /></td>
    <td><code>string</code></td>
    <td>The asset model's description. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_external_id" /></td>
    <td><code>string</code></td>
    <td>The external ID of the asset model, if any. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_hierarchies" /></td>
    <td><code>array</code></td>
    <td>A list of asset model hierarchies that each contain a childAssetModelId and a hierarchyId (named id). A hierarchy specifies allowed parent/child asset relationships for an asset model.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset model was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_properties" /></td>
    <td><code>array</code></td>
    <td>The list of asset properties for the asset model. This object doesn't include properties that you define in composite models. You can find composite model properties in the assetModelCompositeModels object.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_status" /></td>
    <td><code>object</code></td>
    <td>Contains current status information for an asset model. For more information, see Asset and model states in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_type" /></td>
    <td><code>string</code></td>
    <td>The type of asset model. ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model. COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model. (ASSET_MODEL, COMPONENT_MODEL, INTERFACE)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_version" /></td>
    <td><code>string</code></td>
    <td>The version of the asset model. See Asset model versions in the IoT SiteWise User Guide. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) is a hash of the retrieved version of the asset model. It's used to make concurrent updates safely to the resource. See Optimistic locking for asset model writes in the IoT SiteWise User Guide. See Optimistic locking for asset model writes in the IoT SiteWise User Guide. (pattern: &lt;code&gt;^&#91;\w-&#93;&#123;43&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_details" /></td>
    <td><code>array</code></td>
    <td>A list of interface details that describe the interfaces implemented by this asset model, including interface asset model IDs and property mappings.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_models">

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
    <td>The ID of the asset model (used with IoT SiteWise API operations). (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the asset model, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:asset-model/$&#123;AssetModelId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_type" /></td>
    <td><code>string</code></td>
    <td>The type of asset model. ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model. COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model. (ASSET_MODEL, COMPONENT_MODEL, INTERFACE)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset model was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The asset model description. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The external ID of the asset model. For more information, see Using external IDs in the IoT SiteWise User Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the asset model was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the asset model.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number of the asset model. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
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
    <td><a href="#describe_asset_model"><CopyableCode code="describe_asset_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-excludeProperties"><code>excludeProperties</code></a>, <a href="#parameter-assetModelVersion"><code>assetModelVersion</code></a></td>
    <td>Retrieves information about an asset model. This includes details about the asset model's properties, hierarchies, composite models, and any interface relationships if the asset model implements interfaces.</td>
</tr>
<tr>
    <td><a href="#list_asset_models"><CopyableCode code="list_asset_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetModelTypes"><code>assetModelTypes</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-assetModelVersion"><code>assetModelVersion</code></a></td>
    <td>Retrieves a paginated list of summaries of all asset models.</td>
</tr>
<tr>
    <td><a href="#create_asset_model"><CopyableCode code="create_asset_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetModelName"><code>assetModelName</code></a></td>
    <td></td>
    <td>Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining asset models in the IoT SiteWise User Guide. You can create three types of asset models, ASSET_MODEL, COMPONENT_MODEL, or an INTERFACE. ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model. COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model. INTERFACE – An interface is a type of model that defines a standard structure that can be applied to different asset models.</td>
</tr>
<tr>
    <td><a href="#update_asset_model"><CopyableCode code="update_asset_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetModelName"><code>assetModelName</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-Match-For-Version-Type"><code>Match-For-Version-Type</code></a></td>
    <td>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide. If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. You can’t change the type or data type of an existing property. To replace an existing asset model property with a new one with the same name, do the following: Submit an UpdateAssetModel request with the entire existing property removed. Submit a second UpdateAssetModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id.</td>
</tr>
<tr>
    <td><a href="#delete_asset_model"><CopyableCode code="delete_asset_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-Match-For-Version-Type"><code>Match-For-Version-Type</code></a></td>
    <td>Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.</td>
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
    <td>The ID of the asset model to delete. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
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
<tr id="parameter-assetModelTypes">
    <td><CopyableCode code="assetModelTypes" /></td>
    <td><code>array</code></td>
    <td>The type of asset model. If you don't provide an assetModelTypes, all types of asset models are returned. ASSET_MODEL – An asset model that you can use to create assets. Can't be included as a component in another asset model. COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model. INTERFACE – An interface is a type of model that defines a standard structure that can be applied to different asset models.</td>
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
<tr id="parameter-excludeProperties">
    <td><CopyableCode code="excludeProperties" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to exclude asset model properties from the response.</td>
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
    defaultValue="describe_asset_model"
    values={[
        { label: 'describe_asset_model', value: 'describe_asset_model' },
        { label: 'list_asset_models', value: 'list_asset_models' }
    ]}
>
<TabItem value="describe_asset_model">

Retrieves information about an asset model. This includes details about the asset model's properties, hierarchies, composite models, and any interface relationships if the asset model implements interfaces.

```sql
SELECT
asset_model_arn,
asset_model_composite_model_summaries,
asset_model_composite_models,
asset_model_creation_date,
asset_model_description,
asset_model_external_id,
asset_model_hierarchies,
asset_model_id,
asset_model_last_update_date,
asset_model_name,
asset_model_properties,
asset_model_status,
asset_model_type,
asset_model_version,
e_tag,
interface_details
FROM aws.iotsitewise.asset_models
WHERE asset_model_id = '{{ asset_model_id }}' -- required
AND region = '{{ region }}' -- required
AND excludeProperties = '{{ excludeProperties }}'
AND assetModelVersion = '{{ assetModelVersion }}'
;
```
</TabItem>
<TabItem value="list_asset_models">

Retrieves a paginated list of summaries of all asset models.

```sql
SELECT
id,
name,
arn,
asset_model_type,
creation_date,
description,
external_id,
last_update_date,
status,
version
FROM aws.iotsitewise.asset_models
WHERE region = '{{ region }}' -- required
AND assetModelTypes = '{{ assetModelTypes }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND assetModelVersion = '{{ assetModelVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset_model"
    values={[
        { label: 'create_asset_model', value: 'create_asset_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset_model">

Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining asset models in the IoT SiteWise User Guide. You can create three types of asset models, ASSET_MODEL, COMPONENT_MODEL, or an INTERFACE. ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model. COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model. INTERFACE – An interface is a type of model that defines a standard structure that can be applied to different asset models.

```sql
INSERT INTO aws.iotsitewise.asset_models (
assetModelName,
assetModelType,
assetModelId,
assetModelExternalId,
assetModelDescription,
assetModelProperties,
assetModelHierarchies,
assetModelCompositeModels,
clientToken,
tags,
region
)
SELECT 
'{{ assetModelName }}' /* required */,
'{{ assetModelType }}',
'{{ assetModelId }}',
'{{ assetModelExternalId }}',
'{{ assetModelDescription }}',
'{{ assetModelProperties }}',
'{{ assetModelHierarchies }}',
'{{ assetModelCompositeModels }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
asset_model_arn,
asset_model_id,
asset_model_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: asset_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the asset_models resource.
    - name: assetModelName
      value: "{{ assetModelName }}"
    - name: assetModelType
      value: "{{ assetModelType }}"
      valid_values: ['ASSET_MODEL', 'COMPONENT_MODEL', 'INTERFACE']
    - name: assetModelId
      value: "{{ assetModelId }}"
    - name: assetModelExternalId
      value: "{{ assetModelExternalId }}"
    - name: assetModelDescription
      value: "{{ assetModelDescription }}"
    - name: assetModelProperties
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
    - name: assetModelHierarchies
      value:
        - id: "{{ id }}"
          externalId: "{{ externalId }}"
          name: "{{ name }}"
          childAssetModelId: "{{ childAssetModelId }}"
    - name: assetModelCompositeModels
      value:
        - id: "{{ id }}"
          externalId: "{{ externalId }}"
          name: "{{ name }}"
          description: "{{ description }}"
          type_: "{{ type_ }}"
          properties_: "{{ properties_ }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_asset_model"
    values={[
        { label: 'update_asset_model', value: 'update_asset_model' }
    ]}
>
<TabItem value="update_asset_model">

Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide. If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. You can’t change the type or data type of an existing property. To replace an existing asset model property with a new one with the same name, do the following: Submit an UpdateAssetModel request with the entire existing property removed. Submit a second UpdateAssetModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id.

```sql
UPDATE aws.iotsitewise.asset_models
SET 
assetModelExternalId = '{{ assetModelExternalId }}',
assetModelName = '{{ assetModelName }}',
assetModelDescription = '{{ assetModelDescription }}',
assetModelProperties = '{{ assetModelProperties }}',
assetModelHierarchies = '{{ assetModelHierarchies }}',
assetModelCompositeModels = '{{ assetModelCompositeModels }}',
clientToken = '{{ clientToken }}'
WHERE 
asset_model_id = '{{ asset_model_id }}' --required
AND region = '{{ region }}' --required
AND assetModelName = '{{ assetModelName }}' --required
AND `If-Match` = '{{ If-Match}}'
AND `If-None-Match` = '{{ If-None-Match}}'
AND `Match-For-Version-Type` = '{{ Match-For-Version-Type}}'
RETURNING
asset_model_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset_model"
    values={[
        { label: 'delete_asset_model', value: 'delete_asset_model' }
    ]}
>
<TabItem value="delete_asset_model">

Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.

```sql
DELETE FROM aws.iotsitewise.asset_models
WHERE asset_model_id = '{{ asset_model_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
AND `If-Match` = '{{ If-Match }}'
AND `If-None-Match` = '{{ If-None-Match }}'
AND `Match-For-Version-Type` = '{{ Match-For-Version-Type }}'
;
```
</TabItem>
</Tabs>
