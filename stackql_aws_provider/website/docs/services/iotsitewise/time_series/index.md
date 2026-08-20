--- 
title: time_series
hide_title: false
hide_table_of_contents: false
keywords:
  - time_series
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

Creates, updates, deletes, gets or lists a <code>time_series</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="time_series" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.time_series" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_time_series"
    values={[
        { label: 'describe_time_series', value: 'describe_time_series' }
    ]}
>
<TabItem value="describe_time_series">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias that identifies the time series. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset in which the asset property was created. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The data type of the time series. If you specify STRUCT, you must also specify dataTypeSpec to identify the type of the structure for this time series. (STRING, INTEGER, DOUBLE, BOOLEAN, STRUCT, VIDEO, ANNOTATION, JSON)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type_spec" /></td>
    <td><code>string</code></td>
    <td>The data type of the structure for this time series. This parameter is required for time series that have the STRUCT data type. The options for this parameter depend on the type of the composite model in which you created the asset property that is associated with your time series. Use AWS/ALARM_STATE for alarm state in alarm composite models. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="property_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset property, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the time series, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:time-series/$&#123;TimeSeriesId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the time series was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the time series.</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the time series was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_time_series"><CopyableCode code="describe_time_series" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-propertyId"><code>propertyId</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a></td>
    <td>Retrieves information about a time series (data stream). To identify a time series, do one of the following: If the time series isn't associated with an asset property, specify the alias of the time series. If the time series is associated with an asset property, specify one of the following: The alias of the time series. The assetId and propertyId that identifies the asset property.</td>
</tr>
<tr>
    <td><a href="#delete_time_series"><CopyableCode code="delete_time_series" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-propertyId"><code>propertyId</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a></td>
    <td>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property. You can't delete a time series until all of its data segments have been deleted from session datasets. To identify a time series, do one of the following: If the time series isn't associated with an asset property, specify the alias of the time series. If the time series is associated with an asset property, specify one of the following: The alias of the time series. The assetId and propertyId that identifies the asset property.</td>
</tr>
<tr>
    <td><a href="#list_time_series"><CopyableCode code="list_time_series" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-aliasPrefix"><code>aliasPrefix</code></a>, <a href="#parameter-timeSeriesType"><code>timeSeriesType</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a></td>
    <td>Retrieves a paginated list of time series (data streams).</td>
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
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias that identifies the time series.</td>
</tr>
<tr id="parameter-aliasPrefix">
    <td><CopyableCode code="aliasPrefix" /></td>
    <td><code>string</code></td>
    <td>The alias prefix of the time series.</td>
</tr>
<tr id="parameter-assetId">
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-propertyId">
    <td><CopyableCode code="propertyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-timeSeriesType">
    <td><CopyableCode code="timeSeriesType" /></td>
    <td><code>string</code></td>
    <td>The type of the time series. The time series type can be one of the following values: ASSOCIATED – The time series is associated with an asset property. DISASSOCIATED – The time series isn't associated with any asset property.</td>
</tr>
<tr id="parameter-workspaceName">
    <td><CopyableCode code="workspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_time_series"
    values={[
        { label: 'describe_time_series', value: 'describe_time_series' }
    ]}
>
<TabItem value="describe_time_series">

Retrieves information about a time series (data stream). To identify a time series, do one of the following: If the time series isn't associated with an asset property, specify the alias of the time series. If the time series is associated with an asset property, specify one of the following: The alias of the time series. The assetId and propertyId that identifies the asset property.

```sql
SELECT
alias,
asset_id,
data_type,
data_type_spec,
property_id,
time_series_arn,
time_series_creation_date,
time_series_id,
time_series_last_update_date,
workspace_name
FROM aws.iotsitewise.time_series
WHERE region = '{{ region }}' -- required
AND alias = '{{ alias }}'
AND assetId = '{{ assetId }}'
AND propertyId = '{{ propertyId }}'
AND workspaceName = '{{ workspaceName }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_time_series"
    values={[
        { label: 'delete_time_series', value: 'delete_time_series' }
    ]}
>
<TabItem value="delete_time_series">

Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property. You can't delete a time series until all of its data segments have been deleted from session datasets. To identify a time series, do one of the following: If the time series isn't associated with an asset property, specify the alias of the time series. If the time series is associated with an asset property, specify one of the following: The alias of the time series. The assetId and propertyId that identifies the asset property.

```sql
DELETE FROM aws.iotsitewise.time_series
WHERE region = '{{ region }}' --required
AND alias = '{{ alias }}'
AND assetId = '{{ assetId }}'
AND propertyId = '{{ propertyId }}'
AND workspaceName = '{{ workspaceName }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_time_series"
    values={[
        { label: 'list_time_series', value: 'list_time_series' }
    ]}
>
<TabItem value="list_time_series">

Retrieves a paginated list of time series (data streams).

```sql
EXEC aws.iotsitewise.time_series.list_time_series 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}', 
@maxResults='{{ maxResults }}', 
@assetId='{{ assetId }}', 
@aliasPrefix='{{ aliasPrefix }}', 
@timeSeriesType='{{ timeSeriesType }}', 
@workspaceName='{{ workspaceName }}'
;
```
</TabItem>
</Tabs>
