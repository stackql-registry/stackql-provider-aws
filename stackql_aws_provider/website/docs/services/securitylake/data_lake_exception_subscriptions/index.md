--- 
title: data_lake_exception_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_lake_exception_subscriptions
  - securitylake
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

Creates, updates, deletes, gets or lists a <code>data_lake_exception_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_lake_exception_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.data_lake_exception_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_lake_exception_subscription"
    values={[
        { label: 'get_data_lake_exception_subscription', value: 'get_data_lake_exception_subscription' }
    ]}
>
<TabItem value="get_data_lake_exception_subscription">

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
    <td><CopyableCode code="exception_time_to_live" /></td>
    <td><code>integer (int64)</code></td>
    <td>The expiration period and time-to-live (TTL). It is the duration of time until which the exception message remains.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_endpoint" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account where you receive exception notifications. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_protocol" /></td>
    <td><code>string</code></td>
    <td>The subscription protocol to which exception notifications are posted. (pattern: &lt;code&gt;^&#91;a-z\-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_data_lake_exception_subscription"><CopyableCode code="get_data_lake_exception_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the protocol and endpoint that were provided when subscribing to Amazon SNS topics for exception notifications.</td>
</tr>
<tr>
    <td><a href="#create_data_lake_exception_subscription"><CopyableCode code="create_data_lake_exception_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationEndpoint"><code>notificationEndpoint</code></a>, <a href="#parameter-subscriptionProtocol"><code>subscriptionProtocol</code></a></td>
    <td></td>
    <td>Creates the specified notification subscription in Amazon Security Lake for the organization you specify. The notification subscription is created for exceptions that cannot be resolved by Security Lake automatically.</td>
</tr>
<tr>
    <td><a href="#update_data_lake_exception_subscription"><CopyableCode code="update_data_lake_exception_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationEndpoint"><code>notificationEndpoint</code></a>, <a href="#parameter-subscriptionProtocol"><code>subscriptionProtocol</code></a></td>
    <td></td>
    <td>Updates the specified notification subscription in Amazon Security Lake for the organization you specify.</td>
</tr>
<tr>
    <td><a href="#delete_data_lake_exception_subscription"><CopyableCode code="delete_data_lake_exception_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.</td>
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
    defaultValue="get_data_lake_exception_subscription"
    values={[
        { label: 'get_data_lake_exception_subscription', value: 'get_data_lake_exception_subscription' }
    ]}
>
<TabItem value="get_data_lake_exception_subscription">

Retrieves the protocol and endpoint that were provided when subscribing to Amazon SNS topics for exception notifications.

```sql
SELECT
exception_time_to_live,
notification_endpoint,
subscription_protocol
FROM aws.securitylake.data_lake_exception_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_lake_exception_subscription"
    values={[
        { label: 'create_data_lake_exception_subscription', value: 'create_data_lake_exception_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_lake_exception_subscription">

Creates the specified notification subscription in Amazon Security Lake for the organization you specify. The notification subscription is created for exceptions that cannot be resolved by Security Lake automatically.

```sql
INSERT INTO aws.securitylake.data_lake_exception_subscriptions (
exceptionTimeToLive,
notificationEndpoint,
subscriptionProtocol,
region
)
SELECT 
{{ exceptionTimeToLive }},
'{{ notificationEndpoint }}' /* required */,
'{{ subscriptionProtocol }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_lake_exception_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_lake_exception_subscriptions resource.
    - name: exceptionTimeToLive
      value: {{ exceptionTimeToLive }}
    - name: notificationEndpoint
      value: "{{ notificationEndpoint }}"
    - name: subscriptionProtocol
      value: "{{ subscriptionProtocol }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_lake_exception_subscription"
    values={[
        { label: 'update_data_lake_exception_subscription', value: 'update_data_lake_exception_subscription' }
    ]}
>
<TabItem value="update_data_lake_exception_subscription">

Updates the specified notification subscription in Amazon Security Lake for the organization you specify.

```sql
UPDATE aws.securitylake.data_lake_exception_subscriptions
SET 
exceptionTimeToLive = {{ exceptionTimeToLive }},
notificationEndpoint = '{{ notificationEndpoint }}',
subscriptionProtocol = '{{ subscriptionProtocol }}'
WHERE 
region = '{{ region }}' --required
AND notificationEndpoint = '{{ notificationEndpoint }}' --required
AND subscriptionProtocol = '{{ subscriptionProtocol }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_lake_exception_subscription"
    values={[
        { label: 'delete_data_lake_exception_subscription', value: 'delete_data_lake_exception_subscription' }
    ]}
>
<TabItem value="delete_data_lake_exception_subscription">

Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.

```sql
DELETE FROM aws.securitylake.data_lake_exception_subscriptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
