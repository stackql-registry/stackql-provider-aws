--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
  - outposts
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assets"
    values={[
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
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
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration. (pattern: &lt;code&gt;^(\w+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_location" /></td>
    <td><code>object</code></td>
    <td>The position of an asset in a rack.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_type" /></td>
    <td><code>string</code></td>
    <td>The type of the asset. (COMPUTE, STORAGE, POWERSHELF, SWITCH, NETWORKING)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_attributes" /></td>
    <td><code>object</code></td>
    <td>Information about compute hardware assets.</td>
</tr>
<tr>
    <td><CopyableCode code="rack_id" /></td>
    <td><code>string</code></td>
    <td>The rack ID of the asset. (pattern: &lt;code&gt;^&#91;\S \n&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_assets"><CopyableCode code="list_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HostIdFilter"><code>HostIdFilter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-StatusFilter"><code>StatusFilter</code></a>, <a href="#parameter-AssetTypeFilter"><code>AssetTypeFilter</code></a></td>
    <td>Lists the hardware assets for the specified Outpost. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</td>
</tr>
<tr>
    <td><a href="#start_connection"><CopyableCode code="start_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetId"><code>AssetId</code></a>, <a href="#parameter-ClientPublicKey"><code>ClientPublicKey</code></a>, <a href="#parameter-NetworkInterfaceDeviceIndex"><code>NetworkInterfaceDeviceIndex</code></a></td>
    <td></td>
    <td>Amazon Web Services uses this action to install Outpost servers. Starts the connection required for Outpost server installation. Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see Amazon Web Services managed policies for Amazon Web Services Outposts and Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail in the Amazon Web Services Outposts User Guide.</td>
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
<tr id="parameter-outpost_id">
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID or the Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssetTypeFilter">
    <td><CopyableCode code="AssetTypeFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by asset type. COMPUTE - Server asset used for customer compute STORAGE - Server asset used by storage services POWERSHELF - Powershelf assets SWITCH - Switch assets NETWORKING - Asset managed by Amazon Web Services for networking purposes</td>
</tr>
<tr id="parameter-HostIdFilter">
    <td><CopyableCode code="HostIdFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by the host ID of a Dedicated Host.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-StatusFilter">
    <td><CopyableCode code="StatusFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_assets"
    values={[
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
<TabItem value="list_assets">

Lists the hardware assets for the specified Outpost. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.

```sql
SELECT
asset_id,
asset_location,
asset_type,
compute_attributes,
rack_id
FROM aws.outposts.assets
WHERE outpost_id = '{{ outpost_id }}' -- required
AND region = '{{ region }}' -- required
AND HostIdFilter = '{{ HostIdFilter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND StatusFilter = '{{ StatusFilter }}'
AND AssetTypeFilter = '{{ AssetTypeFilter }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_connection"
    values={[
        { label: 'start_connection', value: 'start_connection' }
    ]}
>
<TabItem value="start_connection">

Amazon Web Services uses this action to install Outpost servers. Starts the connection required for Outpost server installation. Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see Amazon Web Services managed policies for Amazon Web Services Outposts and Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail in the Amazon Web Services Outposts User Guide.

```sql
EXEC aws.outposts.assets.start_connection 
@region='{{ region }}' --required 
@@json=
'{
"DeviceSerialNumber": "{{ DeviceSerialNumber }}", 
"AssetId": "{{ AssetId }}", 
"ClientPublicKey": "{{ ClientPublicKey }}", 
"NetworkInterfaceDeviceIndex": {{ NetworkInterfaceDeviceIndex }}
}'
;
```
</TabItem>
</Tabs>
