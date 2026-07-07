--- 
title: site_address
hide_title: false
hide_table_of_contents: false
keywords:
  - site_address
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

Creates, updates, deletes, gets or lists a <code>site_address</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="site_address" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.site_address" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_site_address"
    values={[
        { label: 'get_site_address', value: 'get_site_address' }
    ]}
>
<TabItem value="get_site_address">

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
    <td><CopyableCode code="Address" /></td>
    <td><code>object</code></td>
    <td>Information about an address.</td>
</tr>
<tr>
    <td><CopyableCode code="AddressType" /></td>
    <td><code>string</code></td>
    <td>The type of the address you receive. (SHIPPING_ADDRESS, OPERATING_ADDRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="SiteId" /></td>
    <td><code>string</code></td>
    <td>The ID of the site. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/)?(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#get_site_address"><CopyableCode code="get_site_address" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-AddressType"><code>AddressType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the site address of the specified site.</td>
</tr>
<tr>
    <td><a href="#update_site_address"><CopyableCode code="update_site_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AddressType"><code>AddressType</code></a></td>
    <td></td>
    <td>Updates the address of the specified site. You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order. You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</td>
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
<tr id="parameter-AddressType">
    <td><CopyableCode code="AddressType" /></td>
    <td><code>string</code></td>
    <td>The type of the address you request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The ID or the Amazon Resource Name (ARN) of the site.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_site_address"
    values={[
        { label: 'get_site_address', value: 'get_site_address' }
    ]}
>
<TabItem value="get_site_address">

Gets the site address of the specified site.

```sql
SELECT
Address,
AddressType,
SiteId
FROM aws.outposts.site_address
WHERE site_id = '{{ site_id }}' -- required
AND AddressType = '{{ AddressType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_site_address"
    values={[
        { label: 'update_site_address', value: 'update_site_address' }
    ]}
>
<TabItem value="update_site_address">

Updates the address of the specified site. You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order. You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.

```sql
UPDATE aws.outposts.site_address
SET 
AddressType = '{{ AddressType }}',
Address = '{{ Address }}'
WHERE 
site_id = '{{ site_id }}' --required
AND region = '{{ region }}' --required
AND AddressType = '{{ AddressType }}' --required
RETURNING
Address,
AddressType;
```
</TabItem>
</Tabs>
