--- 
title: subscription_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_providers
  - license_manager_linux_subscriptions
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

Creates, updates, deletes, gets or lists a <code>subscription_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_linux_subscriptions.subscription_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#register_subscription_provider"><CopyableCode code="register_subscription_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretArn"><code>SecretArn</code></a>, <a href="#parameter-SubscriptionProviderSource"><code>SubscriptionProviderSource</code></a></td>
    <td></td>
    <td>Register the supported third-party subscription provider for your Bring Your Own License (BYOL) subscription.</td>
</tr>
<tr>
    <td><a href="#deregister_subscription_provider"><CopyableCode code="deregister_subscription_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove a third-party subscription provider from the Bring Your Own License (BYOL) subscriptions registered to your account.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="register_subscription_provider"
    values={[
        { label: 'register_subscription_provider', value: 'register_subscription_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_subscription_provider">

Register the supported third-party subscription provider for your Bring Your Own License (BYOL) subscription.

```sql
INSERT INTO aws.license_manager_linux_subscriptions.subscription_providers (
SecretArn,
SubscriptionProviderSource,
Tags,
region
)
SELECT 
'{{ SecretArn }}' /* required */,
'{{ SubscriptionProviderSource }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
SubscriptionProviderArn,
SubscriptionProviderSource,
SubscriptionProviderStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscription_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscription_providers resource.
    - name: SecretArn
      value: "{{ SecretArn }}"
    - name: SubscriptionProviderSource
      value: "{{ SubscriptionProviderSource }}"
      valid_values: ['RedHat']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_subscription_provider"
    values={[
        { label: 'deregister_subscription_provider', value: 'deregister_subscription_provider' }
    ]}
>
<TabItem value="deregister_subscription_provider">

Remove a third-party subscription provider from the Bring Your Own License (BYOL) subscriptions registered to your account.

```sql
DELETE FROM aws.license_manager_linux_subscriptions.subscription_providers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
