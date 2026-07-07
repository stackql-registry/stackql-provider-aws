--- 
title: renewal_pricings
hide_title: false
hide_table_of_contents: false
keywords:
  - renewal_pricings
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

Creates, updates, deletes, gets or lists a <code>renewal_pricings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="renewal_pricings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.renewal_pricings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_renewal_pricing"
    values={[
        { label: 'get_renewal_pricing', value: 'get_renewal_pricing' }
    ]}
>
<TabItem value="get_renewal_pricing">

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
    <td><CopyableCode code="PricingOptions" /></td>
    <td><code>array</code></td>
    <td>The pricing options for the specified Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="PricingResult" /></td>
    <td><code>string</code></td>
    <td>The result of the pricing request. (PRICED, UNABLE_TO_PRICE)</td>
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
    <td><a href="#get_renewal_pricing"><CopyableCode code="get_renewal_pricing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_identifier"><code>outpost_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all available renewal pricing options for the specified Outpost.</td>
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
<tr id="parameter-outpost_identifier">
    <td><CopyableCode code="outpost_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the Outpost.</td>
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
    defaultValue="get_renewal_pricing"
    values={[
        { label: 'get_renewal_pricing', value: 'get_renewal_pricing' }
    ]}
>
<TabItem value="get_renewal_pricing">

Gets all available renewal pricing options for the specified Outpost.

```sql
SELECT
PricingOptions,
PricingResult
FROM aws.outposts.renewal_pricings
WHERE outpost_identifier = '{{ outpost_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
