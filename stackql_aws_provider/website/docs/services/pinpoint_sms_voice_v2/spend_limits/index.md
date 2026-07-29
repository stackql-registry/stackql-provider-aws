--- 
title: spend_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - spend_limits
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>spend_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spend_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.spend_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_spend_limits"
    values={[
        { label: 'describe_spend_limits', value: 'describe_spend_limits' }
    ]}
>
<TabItem value="describe_spend_limits">

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
    <td><CopyableCode code="enforced_limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum amount of money, in US dollars, that you want to be able to spend sending messages each month. This value has to be less than or equal to the amount in MaxLimit. To use this custom limit, Overridden must be set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="max_limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum amount of money that you are able to spend to send messages each month, in US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the SpendLimit. (TEXT_MESSAGE_MONTHLY_SPEND_LIMIT, VOICE_MESSAGE_MONTHLY_SPEND_LIMIT, MEDIA_MESSAGE_MONTHLY_SPEND_LIMIT, NOTIFY_MESSAGE_MONTHLY_SPEND_LIMIT)</td>
</tr>
<tr>
    <td><CopyableCode code="overridden" /></td>
    <td><code>boolean</code></td>
    <td>When set to True, the value that has been specified in the EnforcedLimit is used to determine the maximum amount in US dollars that can be spent to send messages each month, in US dollars.</td>
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
    <td><a href="#describe_spend_limits"><CopyableCode code="describe_spend_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the current monthly spend limits for sending voice and text messages. When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see Requesting increases to your monthly SMS, MMS, or Voice spending quota in the End User Messaging SMS User Guide.</td>
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
    defaultValue="describe_spend_limits"
    values={[
        { label: 'describe_spend_limits', value: 'describe_spend_limits' }
    ]}
>
<TabItem value="describe_spend_limits">

Describes the current monthly spend limits for sending voice and text messages. When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see Requesting increases to your monthly SMS, MMS, or Voice spending quota in the End User Messaging SMS User Guide.

```sql
SELECT
enforced_limit,
max_limit,
name,
overridden
FROM aws.pinpoint_sms_voice_v2.spend_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
