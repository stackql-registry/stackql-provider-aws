--- 
title: distributions_by_realtime_log_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - distributions_by_realtime_log_configs
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>distributions_by_realtime_log_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distributions_by_realtime_log_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.distributions_by_realtime_log_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_distributions_by_realtime_log_config"
    values={[
        { label: 'list_distributions_by_realtime_log_config', value: 'list_distributions_by_realtime_log_config' }
    ]}
>
<TabItem value="list_distributions_by_realtime_log_config">

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
    <td><CopyableCode code="IsTruncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The value you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The value you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of distributions that were created by the current Amazon Web Services account.</td>
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
    <td><a href="#list_distributions_by_realtime_log_config"><CopyableCode code="list_distributions_by_realtime_log_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration. You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_distributions_by_realtime_log_config"
    values={[
        { label: 'list_distributions_by_realtime_log_config', value: 'list_distributions_by_realtime_log_config' }
    ]}
>
<TabItem value="list_distributions_by_realtime_log_config">

Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration. You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
IsTruncated,
Items,
Marker,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.distributions_by_realtime_log_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
