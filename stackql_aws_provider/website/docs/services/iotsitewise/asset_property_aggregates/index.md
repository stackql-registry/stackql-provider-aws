--- 
title: asset_property_aggregates
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_property_aggregates
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

Creates, updates, deletes, gets or lists an <code>asset_property_aggregates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_property_aggregates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.asset_property_aggregates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset_property_aggregates"
    values={[
        { label: 'get_asset_property_aggregates', value: 'get_asset_property_aggregates' },
        { label: 'batch_get_asset_property_aggregates', value: 'batch_get_asset_property_aggregates' }
    ]}
>
<TabItem value="get_asset_property_aggregates">

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
    <td>The quality of the aggregated data. (GOOD, BAD, UNCERTAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the aggregating computations occurred, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>The value of the aggregates.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_asset_property_aggregates">

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
    <td><CopyableCode code="errorEntries" /></td>
    <td><code>array</code></td>
    <td>A list of the errors (if any) associated with the batch request. Each error entry contains the entryId of the entry that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no additional results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+/=&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="skippedEntries" /></td>
    <td><code>array</code></td>
    <td>A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the entryId of the entry that skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="successEntries" /></td>
    <td><code>array</code></td>
    <td>A list of entries that were processed successfully by this batch request. Each success entry contains the entryId of the entry that succeeded and the latest query result.</td>
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
    <td><a href="#get_asset_property_aggregates"><CopyableCode code="get_asset_property_aggregates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aggregateTypes"><code>aggregateTypes</code></a>, <a href="#parameter-resolution"><code>resolution</code></a>, <a href="#parameter-startDate"><code>startDate</code></a>, <a href="#parameter-endDate"><code>endDate</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-propertyId"><code>propertyId</code></a>, <a href="#parameter-propertyAlias"><code>propertyAlias</code></a>, <a href="#parameter-qualities"><code>qualities</code></a>, <a href="#parameter-timeOrdering"><code>timeOrdering</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets aggregated values for an asset property. For more information, see Querying aggregates in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following: The assetId and propertyId of an asset property. A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.</td>
</tr>
<tr>
    <td><a href="#batch_get_asset_property_aggregates"><CopyableCode code="batch_get_asset_property_aggregates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see Querying aggregates in the IoT SiteWise User Guide.</td>
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
<tr id="parameter-aggregateTypes">
    <td><CopyableCode code="aggregateTypes" /></td>
    <td><code>array</code></td>
    <td>The data aggregating function.</td>
</tr>
<tr id="parameter-endDate">
    <td><CopyableCode code="endDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resolution">
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>The time interval over which to aggregate data.</td>
</tr>
<tr id="parameter-startDate">
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</td>
</tr>
<tr id="parameter-assetId">
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset, in UUID format.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first. The size of the result set is equal to 1 MB. The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 2500.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
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
<tr id="parameter-qualities">
    <td><CopyableCode code="qualities" /></td>
    <td><code>array</code></td>
    <td>The quality by which to filter asset data.</td>
</tr>
<tr id="parameter-timeOrdering">
    <td><CopyableCode code="timeOrdering" /></td>
    <td><code>string</code></td>
    <td>The chronological sorting order of the requested information. Default: ASCENDING</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_asset_property_aggregates"
    values={[
        { label: 'get_asset_property_aggregates', value: 'get_asset_property_aggregates' },
        { label: 'batch_get_asset_property_aggregates', value: 'batch_get_asset_property_aggregates' }
    ]}
>
<TabItem value="get_asset_property_aggregates">

Gets aggregated values for an asset property. For more information, see Querying aggregates in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following: The assetId and propertyId of an asset property. A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.

```sql
SELECT
quality,
timestamp,
value
FROM aws.iotsitewise.asset_property_aggregates
WHERE aggregateTypes = '{{ aggregateTypes }}' -- required
AND resolution = '{{ resolution }}' -- required
AND startDate = '{{ startDate }}' -- required
AND endDate = '{{ endDate }}' -- required
AND region = '{{ region }}' -- required
AND assetId = '{{ assetId }}'
AND propertyId = '{{ propertyId }}'
AND propertyAlias = '{{ propertyAlias }}'
AND qualities = '{{ qualities }}'
AND timeOrdering = '{{ timeOrdering }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="batch_get_asset_property_aggregates">

Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see Querying aggregates in the IoT SiteWise User Guide.

```sql
SELECT
errorEntries,
nextToken,
skippedEntries,
successEntries
FROM aws.iotsitewise.asset_property_aggregates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
