--- 
title: asset_model_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_model_properties
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

Creates, updates, deletes, gets or lists an <code>asset_model_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_model_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_model_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_asset_model_properties"
    values={[
        { label: 'list_asset_model_properties', value: 'list_asset_model_properties' }
    ]}
>
<TabItem value="list_asset_model_properties">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the property. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_model_composite_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the composite model that contains the asset model property. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The data type of the property. (STRING, INTEGER, DOUBLE, BOOLEAN, STRUCT)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type_spec" /></td>
    <td><code>string</code></td>
    <td>The data type of the structure for this property. This parameter exists on properties that have the STRUCT data type. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The external ID of the property. For more information, see Using external IDs in the IoT SiteWise User Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of interface summaries that describe which interfaces this property belongs to, including the interface asset model ID and the corresponding property ID in the interface.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>array</code></td>
    <td>The structured path to the property from the root of the asset model.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>object</code></td>
    <td>Contains a property type, which can be one of attribute, measurement, metric, or transform.</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The unit (such as Newtons or RPM) of the property. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_asset_model_properties"><CopyableCode code="list_asset_model_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-assetModelVersion"><code>assetModelVersion</code></a></td>
    <td>Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.</td>
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
    <td>The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assetModelVersion">
    <td><CopyableCode code="assetModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See Asset model versions in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filters the requested list of asset model properties. You can choose one of the following options: ALL – The list includes all asset model properties for a given asset model ID. BASE – The list includes only base asset model properties for a given asset model ID. Default: BASE</td>
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
    defaultValue="list_asset_model_properties"
    values={[
        { label: 'list_asset_model_properties', value: 'list_asset_model_properties' }
    ]}
>
<TabItem value="list_asset_model_properties">

Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

```sql
SELECT
id,
name,
asset_model_composite_model_id,
data_type,
data_type_spec,
external_id,
interface_summaries,
path,
type_,
unit
FROM aws.iotsitewise.asset_model_properties
WHERE asset_model_id = '{{ asset_model_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND filter = '{{ filter }}'
AND assetModelVersion = '{{ assetModelVersion }}'
;
```
</TabItem>
</Tabs>
