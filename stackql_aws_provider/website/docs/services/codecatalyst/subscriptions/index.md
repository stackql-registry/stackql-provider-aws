--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - codecatalyst
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' }
    ]}
>
<TabItem value="get_subscription">

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
    <td><CopyableCode code="aws_account_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the Amazon Web Services account used for billing for the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_subscription_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The day and time the pending change will be applied to the space, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_subscription_type" /></td>
    <td><code>string</code></td>
    <td>The type of the billing plan that the space will be changed to at the start of the next billing cycle. This applies only to changes that reduce the functionality available for the space. Billing plan changes that increase functionality are applied immediately. For more information, see Pricing.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_type" /></td>
    <td><code>string</code></td>
    <td>The type of the billing plan for the space.</td>
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
    <td><a href="#get_subscription"><CopyableCode code="get_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.</td>
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
<tr id="parameter-space_name">
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' }
    ]}
>
<TabItem value="get_subscription">

Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.

```sql
SELECT
aws_account_name,
pending_subscription_start_time,
pending_subscription_type,
subscription_type
FROM aws.codecatalyst.subscriptions
WHERE space_name = '{{ space_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
