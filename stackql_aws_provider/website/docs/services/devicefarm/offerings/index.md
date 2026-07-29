--- 
title: offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - offerings
  - devicefarm
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

Creates, updates, deletes, gets or lists an <code>offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_offerings"
    values={[
        { label: 'list_offerings', value: 'list_offerings' }
    ]}
>
<TabItem value="list_offerings">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that corresponds to a device offering.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A string that describes the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform of the device (for example, ANDROID or IOS). (ANDROID, IOS)</td>
</tr>
<tr>
    <td><CopyableCode code="recurring_charges" /></td>
    <td><code>array</code></td>
    <td>Specifies whether there are recurring charges for the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of offering (for example, RECURRING) for a device. (RECURRING)</td>
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
    <td><a href="#list_offerings"><CopyableCode code="list_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.</td>
</tr>
<tr>
    <td><a href="#purchase_offering"><CopyableCode code="purchase_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-offeringId"><code>offeringId</code></a>, <a href="#parameter-quantity"><code>quantity</code></a></td>
    <td></td>
    <td>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.</td>
</tr>
<tr>
    <td><a href="#renew_offering"><CopyableCode code="renew_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-offeringId"><code>offeringId</code></a>, <a href="#parameter-quantity"><code>quantity</code></a></td>
    <td></td>
    <td>Explicitly sets the quantity of devices to renew for an offering, starting from the effectiveDate of the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.</td>
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
    defaultValue="list_offerings"
    values={[
        { label: 'list_offerings', value: 'list_offerings' }
    ]}
>
<TabItem value="list_offerings">

Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.

```sql
SELECT
id,
description,
platform,
recurring_charges,
type_
FROM aws.devicefarm.offerings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_offering"
    values={[
        { label: 'purchase_offering', value: 'purchase_offering' },
        { label: 'renew_offering', value: 'renew_offering' }
    ]}
>
<TabItem value="purchase_offering">

Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.

```sql
EXEC aws.devicefarm.offerings.purchase_offering 
@region='{{ region }}' --required 
@@json=
'{
"offeringId": "{{ offeringId }}", 
"quantity": {{ quantity }}, 
"offeringPromotionId": "{{ offeringPromotionId }}"
}'
;
```
</TabItem>
<TabItem value="renew_offering">

Explicitly sets the quantity of devices to renew for an offering, starting from the effectiveDate of the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.

```sql
EXEC aws.devicefarm.offerings.renew_offering 
@region='{{ region }}' --required 
@@json=
'{
"offeringId": "{{ offeringId }}", 
"quantity": {{ quantity }}
}'
;
```
</TabItem>
</Tabs>
