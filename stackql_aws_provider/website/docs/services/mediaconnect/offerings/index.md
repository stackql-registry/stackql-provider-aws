--- 
title: offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - offerings
  - mediaconnect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_offering"
    values={[
        { label: 'describe_offering', value: 'describe_offering' },
        { label: 'list_offerings', value: 'list_offerings' }
    ]}
>
<TabItem value="describe_offering">

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
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The length of time that your reservation would be active.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement for the duration of the offering. (MONTHS)</td>
</tr>
<tr>
    <td><CopyableCode code="offering_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_description" /></td>
    <td><code>string</code></td>
    <td>A description of the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="price_per_unit" /></td>
    <td><code>string</code></td>
    <td>The cost of a single unit. This value, in combination with priceUnits, makes up the rate.</td>
</tr>
<tr>
    <td><CopyableCode code="price_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. (HOURLY)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The length of time that your reservation would be active.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement for the duration of the offering. (MONTHS)</td>
</tr>
<tr>
    <td><CopyableCode code="offering_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_description" /></td>
    <td><code>string</code></td>
    <td>A description of the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="price_per_unit" /></td>
    <td><code>string</code></td>
    <td>The cost of a single unit. This value, in combination with priceUnits, makes up the rate.</td>
</tr>
<tr>
    <td><CopyableCode code="price_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. (HOURLY)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.</td>
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
    <td><a href="#describe_offering"><CopyableCode code="describe_offering" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-offering_arn"><code>offering_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#list_offerings"><CopyableCode code="list_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a list of all offerings that are available to this account in the current Amazon Web Services Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.</td>
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
<tr id="parameter-offering_arn">
    <td><CopyableCode code="offering_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the offering.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a ListOfferings request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_offering"
    values={[
        { label: 'describe_offering', value: 'describe_offering' },
        { label: 'list_offerings', value: 'list_offerings' }
    ]}
>
<TabItem value="describe_offering">

Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).

```sql
SELECT
currency_code,
duration,
duration_units,
offering_arn,
offering_description,
price_per_unit,
price_units,
resource_specification
FROM aws.mediaconnect.offerings
WHERE offering_arn = '{{ offering_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_offerings">

Displays a list of all offerings that are available to this account in the current Amazon Web Services Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.

```sql
SELECT
currency_code,
duration,
duration_units,
offering_arn,
offering_description,
price_per_unit,
price_units,
resource_specification
FROM aws.mediaconnect.offerings
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
