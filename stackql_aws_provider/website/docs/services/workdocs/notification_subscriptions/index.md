--- 
title: notification_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_subscriptions
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>notification_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.notification_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notification_subscriptions"
    values={[
        { label: 'describe_notification_subscriptions', value: 'describe_notification_subscriptions' }
    ]}
>
<TabItem value="describe_notification_subscriptions">

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
    <td><CopyableCode code="EndPoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint of the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol of the subscription. (HTTPS, SQS)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_notification_subscriptions"><CopyableCode code="describe_notification_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Lists the specified notification subscriptions.</td>
</tr>
<tr>
    <td><a href="#create_notification_subscription"><CopyableCode code="create_notification_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Endpoint"><code>Endpoint</code></a>, <a href="#parameter-SubscriptionType"><code>SubscriptionType</code></a></td>
    <td></td>
    <td>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription. For more information, see Setting up notifications for an IAM user or role in the Amazon WorkDocs Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_notification_subscription"><CopyableCode code="delete_notification_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subscription_id"><code>subscription_id</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified subscription from the specified organization.</td>
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
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the organization.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-subscription_id">
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_notification_subscriptions"
    values={[
        { label: 'describe_notification_subscriptions', value: 'describe_notification_subscriptions' }
    ]}
>
<TabItem value="describe_notification_subscriptions">

Lists the specified notification subscriptions.

```sql
SELECT
EndPoint,
Protocol,
SubscriptionId
FROM aws.workdocs.notification_subscriptions
WHERE organization_id = '{{ organization_id }}' -- required
AND region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notification_subscription"
    values={[
        { label: 'create_notification_subscription', value: 'create_notification_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notification_subscription">

Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription. For more information, see Setting up notifications for an IAM user or role in the Amazon WorkDocs Developer Guide.

```sql
INSERT INTO aws.workdocs.notification_subscriptions (
Endpoint,
Protocol,
SubscriptionType,
organization_id,
region
)
SELECT 
'{{ Endpoint }}' /* required */,
'{{ Protocol }}',
'{{ SubscriptionType }}' /* required */,
'{{ organization_id }}',
'{{ region }}'
RETURNING
Subscription
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_subscriptions
  props:
    - name: organization_id
      value: "{{ organization_id }}"
      description: Required parameter for the notification_subscriptions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notification_subscriptions resource.
    - name: Endpoint
      value: "{{ Endpoint }}"
    - name: Protocol
      value: "{{ Protocol }}"
      valid_values: ['HTTPS', 'SQS']
    - name: SubscriptionType
      value: "{{ SubscriptionType }}"
      valid_values: ['ALL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notification_subscription"
    values={[
        { label: 'delete_notification_subscription', value: 'delete_notification_subscription' }
    ]}
>
<TabItem value="delete_notification_subscription">

Deletes the specified subscription from the specified organization.

```sql
DELETE FROM aws.workdocs.notification_subscriptions
WHERE subscription_id = '{{ subscription_id }}' --required
AND organization_id = '{{ organization_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
