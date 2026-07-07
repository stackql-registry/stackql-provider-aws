--- 
title: portal_product_sharing_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - portal_product_sharing_policies
  - apigatewayv2
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

Creates, updates, deletes, gets or lists a <code>portal_product_sharing_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portal_product_sharing_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.portal_product_sharing_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_portal_product_sharing_policy"
    values={[
        { label: 'get_portal_product_sharing_policy', value: 'get_portal_product_sharing_policy' }
    ]}
>
<TabItem value="get_portal_product_sharing_policy">

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
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The product sharing policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalProductId" /></td>
    <td><code>string</code></td>
    <td>The portal product identifier. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_portal_product_sharing_policy"><CopyableCode code="get_portal_product_sharing_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the sharing policy for a portal product.</td>
</tr>
<tr>
    <td><a href="#put_portal_product_sharing_policy"><CopyableCode code="put_portal_product_sharing_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a></td>
    <td></td>
    <td>Updates the sharing policy for a portal product.</td>
</tr>
<tr>
    <td><a href="#delete_portal_product_sharing_policy"><CopyableCode code="delete_portal_product_sharing_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the sharing policy for a portal product.</td>
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
<tr id="parameter-portal_product_id">
    <td><CopyableCode code="portal_product_id" /></td>
    <td><code>string</code></td>
    <td>The portal product identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_portal_product_sharing_policy"
    values={[
        { label: 'get_portal_product_sharing_policy', value: 'get_portal_product_sharing_policy' }
    ]}
>
<TabItem value="get_portal_product_sharing_policy">

Gets the sharing policy for a portal product.

```sql
SELECT
PolicyDocument,
PortalProductId
FROM aws.apigatewayv2.portal_product_sharing_policies
WHERE portal_product_id = '{{ portal_product_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_portal_product_sharing_policy"
    values={[
        { label: 'put_portal_product_sharing_policy', value: 'put_portal_product_sharing_policy' }
    ]}
>
<TabItem value="put_portal_product_sharing_policy">

Updates the sharing policy for a portal product.

```sql
REPLACE aws.apigatewayv2.portal_product_sharing_policies
SET 
PolicyDocument = '{{ PolicyDocument }}'
WHERE 
portal_product_id = '{{ portal_product_id }}' --required
AND region = '{{ region }}' --required
AND PolicyDocument = '{{ PolicyDocument }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_portal_product_sharing_policy"
    values={[
        { label: 'delete_portal_product_sharing_policy', value: 'delete_portal_product_sharing_policy' }
    ]}
>
<TabItem value="delete_portal_product_sharing_policy">

Deletes the sharing policy for a portal product.

```sql
DELETE FROM aws.apigatewayv2.portal_product_sharing_policies
WHERE portal_product_id = '{{ portal_product_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
