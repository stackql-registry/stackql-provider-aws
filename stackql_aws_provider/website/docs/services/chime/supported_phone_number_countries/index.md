--- 
title: supported_phone_number_countries
hide_title: false
hide_table_of_contents: false
keywords:
  - supported_phone_number_countries
  - chime
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

Creates, updates, deletes, gets or lists a <code>supported_phone_number_countries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="supported_phone_number_countries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.supported_phone_number_countries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_supported_phone_number_countries"
    values={[
        { label: 'list_supported_phone_number_countries', value: 'list_supported_phone_number_countries' }
    ]}
>
<TabItem value="list_supported_phone_number_countries">

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
    <td><CopyableCode code="phone_number_countries" /></td>
    <td><code>array</code></td>
    <td>The supported phone number countries.</td>
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
    <td><a href="#list_supported_phone_number_countries"><CopyableCode code="list_supported_phone_number_countries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-product-type"><code>product-type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists supported phone number countries.</td>
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
<tr id="parameter-product-type">
    <td><CopyableCode code="product-type" /></td>
    <td><code>string</code></td>
    <td>The phone number product type.</td>
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
    defaultValue="list_supported_phone_number_countries"
    values={[
        { label: 'list_supported_phone_number_countries', value: 'list_supported_phone_number_countries' }
    ]}
>
<TabItem value="list_supported_phone_number_countries">

Lists supported phone number countries.

```sql
SELECT
phone_number_countries
FROM aws.chime.supported_phone_number_countries
WHERE `product-type` = '{{ product-type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
