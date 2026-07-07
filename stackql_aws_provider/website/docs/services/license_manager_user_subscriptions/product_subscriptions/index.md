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
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The domain name of the Active Directory that contains the user information for the product subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityProvider" /></td>
    <td><code>object</code></td>
    <td>Refers to an identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="Product" /></td>
    <td><code>string</code></td>
    <td>The name of the user-based subscription product.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductUserArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for this product user. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;/&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a product for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message for a product for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionEndDate" /></td>
    <td><code>string</code></td>
    <td>The end date of a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionStartDate" /></td>
    <td><code>string</code></td>
    <td>The start date of a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="Username" /></td>
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
Domain,
IdentityProvider,
Product,
ProductUserArn,
Status,
StatusMessage,
SubscriptionEndDate,
SubscriptionStartDate,
Username
FROM aws.license_manager_user_subscriptions.product_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
