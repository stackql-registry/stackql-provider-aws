--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - shield
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_subscription"
    values={[
        { label: 'describe_subscription', value: 'describe_subscription' }
    ]}
>
<TabItem value="describe_subscription">

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
    <td><CopyableCode code="AutoRenew" /></td>
    <td><code>string</code></td>
    <td>If ENABLED, the subscription will be automatically renewed at the end of the existing subscription period. When you initally create a subscription, AutoRenew is set to ENABLED. You can change this by submitting an UpdateSubscription request. If the UpdateSubscription request does not included a value for AutoRenew, the existing value for AutoRenew remains unchanged. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time your subscription will end.</td>
</tr>
<tr>
    <td><CopyableCode code="Limits" /></td>
    <td><code>array</code></td>
    <td>Specifies how many protections of a given type you can create.</td>
</tr>
<tr>
    <td><CopyableCode code="ProactiveEngagementStatus" /></td>
    <td><code>string</code></td>
    <td>If ENABLED, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support. If PENDING, you have requested proactive engagement and the request is pending. The status changes to ENABLED when your request is fully processed. If DISABLED, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support. (ENABLED, DISABLED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the subscription, in Unix time in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the subscription. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionLimits" /></td>
    <td><code>object</code></td>
    <td>Limits settings for your subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeCommitmentInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The length, in seconds, of the Shield Advanced subscription for the account.</td>
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
    <td><a href="#describe_subscription"><CopyableCode code="describe_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about the Shield Advanced subscription for an account.</td>
</tr>
<tr>
    <td><a href="#create_subscription"><CopyableCode code="create_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Activates Shield Advanced for an account. For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an UpdateSubscription request.</td>
</tr>
<tr>
    <td><a href="#update_subscription"><CopyableCode code="update_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated. For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed.</td>
</tr>
<tr>
    <td><a href="#delete_subscription"><CopyableCode code="delete_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.</td>
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
    defaultValue="describe_subscription"
    values={[
        { label: 'describe_subscription', value: 'describe_subscription' }
    ]}
>
<TabItem value="describe_subscription">

Provides details about the Shield Advanced subscription for an account.

```sql
SELECT
AutoRenew,
EndTime,
Limits,
ProactiveEngagementStatus,
StartTime,
SubscriptionArn,
SubscriptionLimits,
TimeCommitmentInSeconds
FROM aws.shield.subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subscription"
    values={[
        { label: 'create_subscription', value: 'create_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subscription">

Activates Shield Advanced for an account. For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an UpdateSubscription request.

```sql
INSERT INTO aws.shield.subscriptions (
region
)
SELECT 
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscriptions resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_subscription"
    values={[
        { label: 'update_subscription', value: 'update_subscription' }
    ]}
>
<TabItem value="update_subscription">

Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated. For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed.

```sql
UPDATE aws.shield.subscriptions
SET 
AutoRenew = '{{ AutoRenew }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subscription"
    values={[
        { label: 'delete_subscription', value: 'delete_subscription' }
    ]}
>
<TabItem value="delete_subscription">

Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.

```sql
DELETE FROM aws.shield.subscriptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
