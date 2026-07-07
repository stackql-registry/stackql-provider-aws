--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - kinesis
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

Creates, updates, deletes, gets or lists an <code>account_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_settings"
    values={[
        { label: 'describe_account_settings', value: 'describe_account_settings' }
    ]}
>
<TabItem value="describe_account_settings">

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
    <td><CopyableCode code="EarliestAllowedEndAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest timestamp when the commitment can be ended.</td>
</tr>
<tr>
    <td><CopyableCode code="EndedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the commitment was ended.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the commitment was started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the minimum throughput billing commitment. (ENABLED, DISABLED, ENABLED_UNTIL_EARLIEST_ALLOWED_END)</td>
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
    <td><a href="#describe_account_settings"><CopyableCode code="describe_account_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the account-level settings for Amazon Kinesis Data Streams. This operation returns information about the minimum throughput billing commitments and other account-level configurations. This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the LimitExceededException.</td>
</tr>
<tr>
    <td><a href="#update_account_settings"><CopyableCode code="update_account_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MinimumThroughputBillingCommitment"><code>MinimumThroughputBillingCommitment</code></a></td>
    <td></td>
    <td>Updates the account-level settings for Amazon Kinesis Data Streams. Updating account settings is a synchronous operation. Upon receiving the request, Kinesis Data Streams will return immediately with your account’s updated settings. API limits Certain account configurations have minimum commitment windows. Attempting to update your settings prior to the end of the minimum commitment window might have certain restrictions. This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the LimitExceededException.</td>
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
    defaultValue="describe_account_settings"
    values={[
        { label: 'describe_account_settings', value: 'describe_account_settings' }
    ]}
>
<TabItem value="describe_account_settings">

Describes the account-level settings for Amazon Kinesis Data Streams. This operation returns information about the minimum throughput billing commitments and other account-level configurations. This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the LimitExceededException.

```sql
SELECT
EarliestAllowedEndAt,
EndedAt,
StartedAt,
Status
FROM aws.kinesis.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_settings"
    values={[
        { label: 'update_account_settings', value: 'update_account_settings' }
    ]}
>
<TabItem value="update_account_settings">

Updates the account-level settings for Amazon Kinesis Data Streams. Updating account settings is a synchronous operation. Upon receiving the request, Kinesis Data Streams will return immediately with your account’s updated settings. API limits Certain account configurations have minimum commitment windows. Attempting to update your settings prior to the end of the minimum commitment window might have certain restrictions. This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the LimitExceededException.

```sql
UPDATE aws.kinesis.account_settings
SET 
MinimumThroughputBillingCommitment = '{{ MinimumThroughputBillingCommitment }}'
WHERE 
region = '{{ region }}' --required
AND MinimumThroughputBillingCommitment = '{{ MinimumThroughputBillingCommitment }}' --required
RETURNING
MinimumThroughputBillingCommitment;
```
</TabItem>
</Tabs>
