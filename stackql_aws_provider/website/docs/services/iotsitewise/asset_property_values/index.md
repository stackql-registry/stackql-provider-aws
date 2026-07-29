--- 
title: asset_property_values
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_property_values
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

Creates, updates, deletes, gets or lists an <code>asset_property_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_property_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_property_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_asset_property_value"
    values={[
        { label: 'batch_get_asset_property_value', value: 'batch_get_asset_property_value' },
        { label: 'get_asset_property_value', value: 'get_asset_property_value' }
    ]}
>
<TabItem value="batch_get_asset_property_value">

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
    <td><CopyableCode code="error_entries" /></td>
    <td><code>array</code></td>
    <td>A list of the errors (if any) associated with the batch request. Each error entry contains the entryId of the entry that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no additional results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+/=&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="skipped_entries" /></td>
    <td><code>array</code></td>
    <td>A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the entryId of the entry that skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="success_entries" /></td>
    <td><code>array</code></td>
    <td>A list of entries that were processed successfully by this batch request. Each success entry contains the entryId of the entry that succeeded and the latest query result.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_asset_property_value">

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
    <td><CopyableCode code="quality" /></td>
    <td><code>string</code></td>
    <td>The quality of the asset property value. (GOOD, BAD, UNCERTAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>object</code></td>
    <td>The timestamp of the asset property value.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>The value of the asset property (see Variant).</td>
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
    <td><a href="#batch_get_asset_property_value"><CopyableCode code="batch_get_asset_property_value" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the current value for one or more asset properties. For more information, see Querying current values in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#get_asset_property_value"><CopyableCode code="get_asset_property_value" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-propertyId"><code>propertyId</code></a>, <a href="#parameter-propertyAlias"><code>propertyAlias</code></a></td>
    <td>Gets an asset property's current value. For more information, see Querying current values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following: The assetId and propertyId of an asset property. A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assetId">
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset, in UUID format.</td>
</tr>
<tr id="parameter-propertyAlias">
    <td><CopyableCode code="propertyAlias" /></td>
    <td><code>string</code></td>
    <td>The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-propertyId">
    <td><CopyableCode code="propertyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset property, in UUID format.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_asset_property_value"
    values={[
        { label: 'batch_get_asset_property_value', value: 'batch_get_asset_property_value' },
        { label: 'get_asset_property_value', value: 'get_asset_property_value' }
    ]}
>
<TabItem value="batch_get_asset_property_value">

Gets the current value for one or more asset properties. For more information, see Querying current values in the IoT SiteWise User Guide.

```sql
SELECT
error_entries,
next_token,
skipped_entries,
success_entries
FROM aws.iotsitewise.asset_property_values
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_asset_property_value">

Gets an asset property's current value. For more information, see Querying current values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following: The assetId and propertyId of an asset property. A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.

```sql
SELECT
quality,
timestamp,
value
FROM aws.iotsitewise.asset_property_values
WHERE region = '{{ region }}' -- required
AND assetId = '{{ assetId }}'
AND propertyId = '{{ propertyId }}'
AND propertyAlias = '{{ propertyAlias }}'
;
```
</TabItem>
</Tabs>
