--- 
title: registered_subscription_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - registered_subscription_providers
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

Creates, updates, deletes, gets or lists a <code>registered_subscription_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registered_subscription_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_linux_subscriptions.registered_subscription_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registered_subscription_provider"
    values={[
        { label: 'get_registered_subscription_provider', value: 'get_registered_subscription_provider' },
        { label: 'list_registered_subscription_providers', value: 'list_registered_subscription_providers' }
    ]}
>
<TabItem value="get_registered_subscription_provider">

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
    <td><CopyableCode code="LastSuccessfulDataRetrievalTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp from the last time License Manager retrieved subscription details from your registered third-party Linux subscription provider.</td>
</tr>
<tr>
    <td><CopyableCode code="SecretArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the third-party access secret stored in Secrets Manager for the BYOL registration resource specified in the request. (pattern: &lt;code&gt;^arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:secretsmanager:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:secret:&#91;^/&#93;&#123;1,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the BYOL registration resource specified in the request. (pattern: &lt;code&gt;^arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,510&#125;/&#91;a-z0-9-\.&#93;&#123;1,510&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderSource" /></td>
    <td><code>string</code></td>
    <td>The subscription provider for the BYOL registration resource specified in the request. (RedHat)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the Linux subscription provider access token from the last successful subscription data request. (ACTIVE, INVALID, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderStatusMessage" /></td>
    <td><code>string</code></td>
    <td>The detailed message from your subscription provider token status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_registered_subscription_providers">

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
    <td><CopyableCode code="LastSuccessfulDataRetrievalTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp from the last time that License Manager accessed third-party subscription data for your account from your registered Linux subscription provider.</td>
</tr>
<tr>
    <td><CopyableCode code="SecretArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Secrets Manager secret that stores your registered Linux subscription provider access token. For RHEL account subscriptions, this is the offline token. (pattern: &lt;code&gt;^arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:secretsmanager:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:secret:&#91;^/&#93;&#123;1,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered. (pattern: &lt;code&gt;^arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,510&#125;/&#91;a-z0-9-\.&#93;&#123;1,510&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderSource" /></td>
    <td><code>string</code></td>
    <td>A supported third-party Linux subscription provider. License Manager currently supports Red Hat subscriptions. (RedHat)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of your registered Linux subscription provider access token from the last time License Manager retrieved subscription data. For RHEL account subscriptions, this is the status of the offline token. (ACTIVE, INVALID, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionProviderStatusMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed message that's associated with your BYOL subscription provider token status.</td>
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
    <td><a href="#get_registered_subscription_provider"><CopyableCode code="get_registered_subscription_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details for a Bring Your Own License (BYOL) subscription that's registered to your account.</td>
</tr>
<tr>
    <td><a href="#list_registered_subscription_providers"><CopyableCode code="list_registered_subscription_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List Bring Your Own License (BYOL) subscription registration resources for your account.</td>
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
    defaultValue="get_registered_subscription_provider"
    values={[
        { label: 'get_registered_subscription_provider', value: 'get_registered_subscription_provider' },
        { label: 'list_registered_subscription_providers', value: 'list_registered_subscription_providers' }
    ]}
>
<TabItem value="get_registered_subscription_provider">

Get details for a Bring Your Own License (BYOL) subscription that's registered to your account.

```sql
SELECT
LastSuccessfulDataRetrievalTime,
SecretArn,
SubscriptionProviderArn,
SubscriptionProviderSource,
SubscriptionProviderStatus,
SubscriptionProviderStatusMessage
FROM aws.license_manager_linux_subscriptions.registered_subscription_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_registered_subscription_providers">

List Bring Your Own License (BYOL) subscription registration resources for your account.

```sql
SELECT
LastSuccessfulDataRetrievalTime,
SecretArn,
SubscriptionProviderArn,
SubscriptionProviderSource,
SubscriptionProviderStatus,
SubscriptionProviderStatusMessage
FROM aws.license_manager_linux_subscriptions.registered_subscription_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
