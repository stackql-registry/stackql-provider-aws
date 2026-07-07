--- 
title: send_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - send_quotas
  - ses
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

Creates, updates, deletes, gets or lists a <code>send_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="send_quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.send_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_send_quota"
    values={[
        { label: 'get_send_quota', value: 'get_send_quota' }
    ]}
>
<TabItem value="get_send_quota">

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
    <td><CopyableCode code="Max24HourSend" /></td>
    <td><code>number</code></td>
    <td>The maximum number of emails the user is allowed to send in a 24-hour interval. A value of -1 signifies an unlimited quota.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxSendRate" /></td>
    <td><code>number</code></td>
    <td>The maximum number of emails that Amazon SES can accept from the user's account per second. The rate at which Amazon SES accepts the user's messages might be less than the maximum send rate.</td>
</tr>
<tr>
    <td><CopyableCode code="SentLast24Hours" /></td>
    <td><code>number</code></td>
    <td>The number of emails sent during the previous 24 hours.</td>
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
    <td><a href="#get_send_quota"><CopyableCode code="get_send_quota" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the sending limits for the Amazon SES account. You can execute this operation no more than once per second.</td>
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
    defaultValue="get_send_quota"
    values={[
        { label: 'get_send_quota', value: 'get_send_quota' }
    ]}
>
<TabItem value="get_send_quota">

Provides the sending limits for the Amazon SES account. You can execute this operation no more than once per second.

```sql
SELECT
Max24HourSend,
MaxSendRate,
SentLast24Hours
FROM aws.ses.send_quotas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
