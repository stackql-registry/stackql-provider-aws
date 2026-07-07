--- 
title: outpost_billing_informations
hide_title: false
hide_table_of_contents: false
keywords:
  - outpost_billing_informations
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

Creates, updates, deletes, gets or lists an <code>outpost_billing_informations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outpost_billing_informations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.outpost_billing_informations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_outpost_billing_information"
    values={[
        { label: 'get_outpost_billing_information', value: 'get_outpost_billing_information' }
    ]}
>
<TabItem value="get_outpost_billing_information">

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
    <td><CopyableCode code="BeginDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date your subscription starts.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date your subscription ends.</td>
</tr>
<tr>
    <td><CopyableCode code="MonthlyRecurringPrice" /></td>
    <td><code>number (double)</code></td>
    <td>The amount you are billed each month in the subscription period.</td>
</tr>
<tr>
    <td><CopyableCode code="OrderIds" /></td>
    <td><code>array</code></td>
    <td>The order ID for your subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription that appears on the Amazon Web Services Billing Center console. (pattern: &lt;code&gt;^&#91;\S \n&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of subscription which can be one of the following: INACTIVE - Subscription requests that are inactive. ACTIVE - Subscription requests that are in progress and have an end date in the future. PENDING - Subscription has been created but billing has not yet commenced because the subscription begin date has not been reached. CANCELLED - Subscription requests that are cancelled. (ACTIVE, PENDING, INACTIVE, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionType" /></td>
    <td><code>string</code></td>
    <td>The type of subscription which can be one of the following: ORIGINAL - The first order on the Amazon Web Services Outposts. RENEWAL - Renewal requests, both month to month and longer term. CAPACITY_INCREASE - Capacity scaling orders. (ORIGINAL, RENEWAL, CAPACITY_INCREASE)</td>
</tr>
<tr>
    <td><CopyableCode code="UpfrontPrice" /></td>
    <td><code>number (double)</code></td>
    <td>The amount billed when the subscription is created. This is a one-time charge.</td>
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
    <td><a href="#get_outpost_billing_information"><CopyableCode code="get_outpost_billing_information" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_identifier"><code>outpost_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Gets current and historical billing information about the specified Outpost.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_outpost_billing_information"
    values={[
        { label: 'get_outpost_billing_information', value: 'get_outpost_billing_information' }
    ]}
>
<TabItem value="get_outpost_billing_information">

Gets current and historical billing information about the specified Outpost.

```sql
SELECT
BeginDate,
EndDate,
MonthlyRecurringPrice,
OrderIds,
SubscriptionId,
SubscriptionStatus,
SubscriptionType,
UpfrontPrice
FROM aws.outposts.outpost_billing_informations
WHERE outpost_identifier = '{{ outpost_identifier }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
