--- 
title: asset_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_properties
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

Creates, updates, deletes, gets or lists an <code>asset_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset_property"
    values={[
        { label: 'describe_asset_property', value: 'describe_asset_property' },
        { label: 'list_asset_properties', value: 'list_asset_properties' }
    ]}
>
<TabItem value="describe_asset_property">

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
    <td><CopyableCode code="asset_external_id" /></td>
    <td><code>string</code></td>
    <td>The external ID of the asset. For more information, see Using external IDs in the IoT SiteWise User Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_property" /></td>
    <td><code>object</code></td>
    <td>The asset property's definition, alias, and notification state. This response includes this object for normal asset properties. If you describe an asset property in a composite model, this response includes the asset property information in compositeModel.</td>
</tr>
<tr>
    <td><CopyableCode code="composite_model" /></td>
    <td><code>object</code></td>
    <td>The composite model that declares this asset property, if this asset property exists in a composite model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_properties">

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
    <td>The ID of the property. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_composite_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the composite model that contains the asset property. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The external ID of the property. For more information, see Using external IDs in the IoT SiteWise User Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification" /></td>
    <td><code>object</code></td>
    <td>Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see Interacting with other services in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>array</code></td>
    <td>The structured path to the property from the root of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The unit of measure (such as Newtons or RPM) of the asset property. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_asset_property"><CopyableCode code="describe_asset_property" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-property_id"><code>property_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an asset property. When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value. This operation doesn't return the value of the asset property. To get the value of an asset property, use GetAssetPropertyValue.</td>
</tr>
<tr>
    <td><a href="#list_asset_properties"><CopyableCode code="list_asset_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.</td>
</tr>
<tr>
    <td><a href="#associate_time_series_to_asset_property"><CopyableCode code="associate_time_series_to_asset_property" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-propertyId"><code>propertyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a time series (data stream) with an asset property.</td>
</tr>
<tr>
    <td><a href="#update_asset_property"><CopyableCode code="update_asset_property" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-asset_id"><code>asset_id</code></a>, <a href="#parameter-property_id"><code>property_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an asset property's alias and notification state. This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty.</td>
</tr>
<tr>
    <td><a href="#disassociate_time_series_from_asset_property"><CopyableCode code="disassociate_time_series_from_asset_property" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-propertyId"><code>propertyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a time series (data stream) from an asset property.</td>
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
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias that identifies the time series.</td>
</tr>
<tr id="parameter-assetId">
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-asset_id">
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset to be updated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-propertyId">
    <td><CopyableCode code="propertyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-property_id">
    <td><CopyableCode code="property_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset property to be updated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filters the requested list of asset properties. You can choose one of the following options: ALL – The list includes all asset properties for a given asset model ID. BASE – The list includes only base asset properties for a given asset model ID. Default: BASE</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</td>
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
    defaultValue="describe_asset_property"
    values={[
        { label: 'describe_asset_property', value: 'describe_asset_property' },
        { label: 'list_asset_properties', value: 'list_asset_properties' }
    ]}
>
<TabItem value="describe_asset_property">

Retrieves information about an asset property. When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value. This operation doesn't return the value of the asset property. To get the value of an asset property, use GetAssetPropertyValue.

```sql
SELECT
asset_external_id,
asset_id,
asset_model_id,
asset_name,
asset_property,
composite_model
FROM aws.iotsitewise.asset_properties
WHERE asset_id = '{{ asset_id }}' -- required
AND property_id = '{{ property_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_asset_properties">

Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

```sql
SELECT
id,
alias,
asset_composite_model_id,
external_id,
notification,
path,
unit
FROM aws.iotsitewise.asset_properties
WHERE asset_id = '{{ asset_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_time_series_to_asset_property"
    values={[
        { label: 'associate_time_series_to_asset_property', value: 'associate_time_series_to_asset_property' },
        { label: 'update_asset_property', value: 'update_asset_property' }
    ]}
>
<TabItem value="associate_time_series_to_asset_property">

Associates a time series (data stream) with an asset property.

```sql
UPDATE aws.iotsitewise.asset_properties
SET 
clientToken = '{{ clientToken }}'
WHERE 
alias = '{{ alias }}' --required
AND assetId = '{{ assetId }}' --required
AND propertyId = '{{ propertyId }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_asset_property">

Updates an asset property's alias and notification state. This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty.

```sql
UPDATE aws.iotsitewise.asset_properties
SET 
propertyAlias = '{{ propertyAlias }}',
propertyNotificationState = '{{ propertyNotificationState }}',
clientToken = '{{ clientToken }}',
propertyUnit = '{{ propertyUnit }}'
WHERE 
asset_id = '{{ asset_id }}' --required
AND property_id = '{{ property_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_time_series_from_asset_property"
    values={[
        { label: 'disassociate_time_series_from_asset_property', value: 'disassociate_time_series_from_asset_property' }
    ]}
>
<TabItem value="disassociate_time_series_from_asset_property">

Disassociates a time series (data stream) from an asset property.

```sql
EXEC aws.iotsitewise.asset_properties.disassociate_time_series_from_asset_property 
@alias='{{ alias }}' --required, 
@assetId='{{ assetId }}' --required, 
@propertyId='{{ propertyId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
