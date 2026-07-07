--- 
title: distributions_by_connection_modes
hide_title: false
hide_table_of_contents: false
keywords:
  - distributions_by_connection_modes
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

Creates, updates, deletes, gets or lists a <code>distributions_by_connection_modes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distributions_by_connection_modes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.distributions_by_connection_modes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_distributions_by_connection_mode"
    values={[
        { label: 'list_distributions_by_connection_mode', value: 'list_distributions_by_connection_mode' }
    ]}
>
<TabItem value="list_distributions_by_connection_mode">

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
    <td><a href="#list_distributions_by_connection_mode"><CopyableCode code="list_distributions_by_connection_mode" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connection_mode"><code>connection_mode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the distributions by the connection mode that you specify.</td>
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
<tr id="parameter-connection_mode">
    <td><CopyableCode code="connection_mode" /></td>
    <td><code>string</code></td>
    <td>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of distributions to retrieve.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of distributions to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_distributions_by_connection_mode"
    values={[
        { label: 'list_distributions_by_connection_mode', value: 'list_distributions_by_connection_mode' }
    ]}
>
<TabItem value="list_distributions_by_connection_mode">

Lists the distributions by the connection mode that you specify.

```sql
SELECT
IsTruncated,
Items,
Marker,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.distributions_by_connection_modes
WHERE connection_mode = '{{ connection_mode }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
