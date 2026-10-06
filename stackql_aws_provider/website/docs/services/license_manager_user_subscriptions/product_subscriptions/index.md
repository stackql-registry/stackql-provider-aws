--- 
title: product_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - product_subscriptions
  - license_manager_user_subscriptions
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

Creates, updates, deletes, gets or lists a <code>product_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_user_subscriptions.product_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_product_subscriptions"
    values={[
        { label: 'list_product_subscriptions', value: 'list_product_subscriptions' }
    ]}
>
<TabItem value="list_product_subscriptions">

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
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name of the Active Directory that contains the user information for the product subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider" /></td>
    <td><code>object</code></td>
    <td>Refers to an identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="license_expiration_date" /></td>
    <td><code>string</code></td>
    <td>The expiration date of the license associated with this subscription, in ISO 8601 UTC format (for example, 2025-03-15T00:00:00Z). This field applies only to subscriptions that use license server endpoints, such as Remote Desktop Services (RDS) Subscriber Access License (SAL). It returns null for products that don't use license-based subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>The name of the user-based subscription product.</td>
</tr>
<tr>
    <td><CopyableCode code="product_user_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for this product user. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;/&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a product for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message for a product for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_end_date" /></td>
    <td><code>string</code></td>
    <td>The end date of a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_start_date" /></td>
    <td><code>string</code></td>
    <td>The start date of a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The user name from the identity provider for this product user.</td>
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
    <td><a href="#list_product_subscriptions"><CopyableCode code="list_product_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the user-based subscription products available from an identity provider.</td>
</tr>
<tr>
    <td><a href="#start_product_subscription"><CopyableCode code="start_product_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityProvider"><code>IdentityProvider</code></a></td>
    <td></td>
    <td>Starts a product subscription for a user with the specified identity provider. Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as Pending billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the Amazon Web Services Billing User Guide.</td>
</tr>
<tr>
    <td><a href="#stop_product_subscription"><CopyableCode code="stop_product_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a product subscription for a user with the specified identity provider.</td>
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
    defaultValue="list_product_subscriptions"
    values={[
        { label: 'list_product_subscriptions', value: 'list_product_subscriptions' }
    ]}
>
<TabItem value="list_product_subscriptions">

Lists the user-based subscription products available from an identity provider.

```sql
SELECT
domain,
identity_provider,
license_expiration_date,
product,
product_user_arn,
status,
status_message,
subscription_end_date,
subscription_start_date,
username
FROM aws.license_manager_user_subscriptions.product_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_product_subscription"
    values={[
        { label: 'start_product_subscription', value: 'start_product_subscription' },
        { label: 'stop_product_subscription', value: 'stop_product_subscription' }
    ]}
>
<TabItem value="start_product_subscription">

Starts a product subscription for a user with the specified identity provider. Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as Pending billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the Amazon Web Services Billing User Guide.

```sql
EXEC aws.license_manager_user_subscriptions.product_subscriptions.start_product_subscription 
@region='{{ region }}' --required 
@@json=
'{
"Username": "{{ Username }}", 
"IdentityProvider": "{{ IdentityProvider }}", 
"Product": "{{ Product }}", 
"Domain": "{{ Domain }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="stop_product_subscription">

Stops a product subscription for a user with the specified identity provider.

```sql
EXEC aws.license_manager_user_subscriptions.product_subscriptions.stop_product_subscription 
@region='{{ region }}' --required 
@@json=
'{
"Username": "{{ Username }}", 
"IdentityProvider": "{{ IdentityProvider }}", 
"Product": "{{ Product }}", 
"ProductUserArn": "{{ ProductUserArn }}", 
"Domain": "{{ Domain }}"
}'
;
```
</TabItem>
</Tabs>
