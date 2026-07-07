--- 
title: subscribers_for_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - subscribers_for_notifications
  - budgets
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

Creates, updates, deletes, gets or lists a <code>subscribers_for_notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscribers_for_notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.budgets.subscribers_for_notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_subscribers_for_notification"
    values={[
        { label: 'describe_subscribers_for_notification', value: 'describe_subscribers_for_notification' }
    ]}
>
<TabItem value="describe_subscribers_for_notification">

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
    <td><code>string</code></td>
    <td>The address that Amazon Web Services sends budget notifications to, either an SNS topic or an email. When you create a subscriber, the value of Address can't contain line breaks. (pattern: &lt;code&gt;(.*&#91;\n\r\t\f\ &#93;?)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionType" /></td>
    <td><code>string</code></td>
    <td>The type of notification that Amazon Web Services sends to a subscriber. (SNS, EMAIL)</td>
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
    <td><a href="#describe_subscribers_for_notification"><CopyableCode code="describe_subscribers_for_notification" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the subscribers that are associated with a notification.</td>
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
    defaultValue="describe_subscribers_for_notification"
    values={[
        { label: 'describe_subscribers_for_notification', value: 'describe_subscribers_for_notification' }
    ]}
>
<TabItem value="describe_subscribers_for_notification">

Lists the subscribers that are associated with a notification.

```sql
SELECT
Address,
SubscriptionType
FROM aws.budgets.subscribers_for_notifications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
