--- 
title: shipping_labels
hide_title: false
hide_table_of_contents: false
keywords:
  - shipping_labels
  - importexport
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

Creates, updates, deletes, gets or lists a <code>shipping_labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shipping_labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.importexport.shipping_labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_shipping_label"
    values={[
        { label: 'get_shipping_label', value: 'get_shipping_label' }
    ]}
>
<TabItem value="get_shipping_label">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#get_shipping_label"><CopyableCode code="get_shipping_label" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-jobIds"><code>jobIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-company"><code>company</code></a>, <a href="#parameter-phoneNumber"><code>phoneNumber</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-stateOrProvince"><code>stateOrProvince</code></a>, <a href="#parameter-city"><code>city</code></a>, <a href="#parameter-postalCode"><code>postalCode</code></a>, <a href="#parameter-street1"><code>street1</code></a>, <a href="#parameter-street2"><code>street2</code></a>, <a href="#parameter-street3"><code>street3</code></a>, <a href="#parameter-APIVersion"><code>APIVersion</code></a></td>
    <td>This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.</td>
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
<tr id="parameter-jobIds">
    <td><CopyableCode code="jobIds" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-APIVersion">
    <td><CopyableCode code="APIVersion" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-city">
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-company">
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-country">
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-phoneNumber">
    <td><CopyableCode code="phoneNumber" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-postalCode">
    <td><CopyableCode code="postalCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-stateOrProvince">
    <td><CopyableCode code="stateOrProvince" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-street1">
    <td><CopyableCode code="street1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-street2">
    <td><CopyableCode code="street2" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-street3">
    <td><CopyableCode code="street3" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_shipping_label"
    values={[
        { label: 'get_shipping_label', value: 'get_shipping_label' }
    ]}
>
<TabItem value="get_shipping_label">

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

```sql
SELECT
line_items
FROM aws.importexport.shipping_labels
WHERE jobIds = '{{ jobIds }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
AND company = '{{ company }}'
AND phoneNumber = '{{ phoneNumber }}'
AND country = '{{ country }}'
AND stateOrProvince = '{{ stateOrProvince }}'
AND city = '{{ city }}'
AND postalCode = '{{ postalCode }}'
AND street1 = '{{ street1 }}'
AND street2 = '{{ street2 }}'
AND street3 = '{{ street3 }}'
AND APIVersion = '{{ APIVersion }}'
;
```
</TabItem>
</Tabs>
