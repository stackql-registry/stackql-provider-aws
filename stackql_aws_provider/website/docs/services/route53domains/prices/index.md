--- 
title: prices
hide_title: false
hide_table_of_contents: false
keywords:
  - prices
  - route53domains
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

Creates, updates, deletes, gets or lists a <code>prices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53domains.prices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_prices"
    values={[
        { label: 'list_prices', value: 'list_prices' }
    ]}
>
<TabItem value="list_prices">

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
    <td><CopyableCode code="ChangeOwnershipPrice" /></td>
    <td><code>object</code></td>
    <td>The price for changing domain ownership.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the TLD for which the prices apply.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationPrice" /></td>
    <td><code>object</code></td>
    <td>The price for domain registration with Route 53.</td>
</tr>
<tr>
    <td><CopyableCode code="RenewalPrice" /></td>
    <td><code>object</code></td>
    <td>The price for renewing domain registration with Route 53.</td>
</tr>
<tr>
    <td><CopyableCode code="RestorationPrice" /></td>
    <td><code>object</code></td>
    <td>The price for restoring the domain with Route 53.</td>
</tr>
<tr>
    <td><CopyableCode code="TransferPrice" /></td>
    <td><code>object</code></td>
    <td>The price for transferring the domain registration to Route 53.</td>
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
    <td><a href="#list_prices"><CopyableCode code="list_prices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD: Registration Transfer Owner change Domain renewal Domain restoration</td>
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
    defaultValue="list_prices"
    values={[
        { label: 'list_prices', value: 'list_prices' }
    ]}
>
<TabItem value="list_prices">

Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD: Registration Transfer Owner change Domain renewal Domain restoration

```sql
SELECT
ChangeOwnershipPrice,
Name,
RegistrationPrice,
RenewalPrice,
RestorationPrice,
TransferPrice
FROM aws.route53domains.prices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
