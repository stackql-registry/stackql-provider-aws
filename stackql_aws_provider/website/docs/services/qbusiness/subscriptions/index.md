--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - qbusiness
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_subscriptions"
    values={[
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="list_subscriptions">

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
    <td><CopyableCode code="currentSubscription" /></td>
    <td><code>object</code></td>
    <td>The type of your current Amazon Q Business subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="nextSubscription" /></td>
    <td><code>object</code></td>
    <td>The type of the Amazon Q Business subscription for the next month.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>object</code></td>
    <td>A user or group in the IAM Identity Center instance connected to the Amazon Q Business application.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q Business subscription that was updated. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business subscription to be updated.</td>
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
    <td><a href="#list_subscriptions"><CopyableCode code="list_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all subscriptions created in an Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#create_subscription"><CopyableCode code="create_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Subscribes an IAM Identity Center user or a group to a pricing tier for an Amazon Q Business application. Amazon Q Business offers two subscription tiers: Q_LITE and Q_BUSINESS. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing. For an example IAM role policy for assigning subscriptions, see Set up required permissions in the Amazon Q Business User Guide.</td>
</tr>
<tr>
    <td><a href="#update_subscription"><CopyableCode code="update_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Updates the pricing tier for an Amazon Q Business subscription. Upgrades are instant. Downgrades apply at the start of the next month. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing.</td>
</tr>
<tr>
    <td><a href="#cancel_subscription"><CopyableCode code="cancel_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Unsubscribes a user or a group from their pricing tier in an Amazon Q Business application. An unsubscribed user or group loses all Amazon Q Business feature access at the start of next month.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application for which the subscription is being cancelled.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-subscription_id">
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business subscription being cancelled.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Amazon Q Business subscriptions to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business subscriptions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_subscriptions"
    values={[
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="list_subscriptions">

Lists all subscriptions created in an Amazon Q Business application.

```sql
SELECT
currentSubscription,
nextSubscription,
principal,
subscriptionArn,
subscriptionId
FROM aws.qbusiness.subscriptions
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Subscribes an IAM Identity Center user or a group to a pricing tier for an Amazon Q Business application. Amazon Q Business offers two subscription tiers: Q_LITE and Q_BUSINESS. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing. For an example IAM role policy for assigning subscriptions, see Set up required permissions in the Amazon Q Business User Guide.

```sql
INSERT INTO aws.qbusiness.subscriptions (
principal,
type,
clientToken,
application_id,
region
)
SELECT 
'{{ principal }}' /* required */,
'{{ type }}' /* required */,
'{{ clientToken }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
currentSubscription,
nextSubscription,
subscriptionArn,
subscriptionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the subscriptions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscriptions resource.
    - name: principal
      description: |
        A user or group in the IAM Identity Center instance connected to the Amazon Q Business application.
      value:
        user: "{{ user }}"
        group: "{{ group }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['Q_LITE', 'Q_BUSINESS']
    - name: clientToken
      value: "{{ clientToken }}"
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

Updates the pricing tier for an Amazon Q Business subscription. Upgrades are instant. Downgrades apply at the start of the next month. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing.

```sql
UPDATE aws.qbusiness.subscriptions
SET 
type = '{{ type }}'
WHERE 
application_id = '{{ application_id }}' --required
AND subscription_id = '{{ subscription_id }}' --required
AND region = '{{ region }}' --required
AND type = '{{ type }}' --required
RETURNING
currentSubscription,
nextSubscription,
subscriptionArn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_subscription"
    values={[
        { label: 'cancel_subscription', value: 'cancel_subscription' }
    ]}
>
<TabItem value="cancel_subscription">

Unsubscribes a user or a group from their pricing tier in an Amazon Q Business application. An unsubscribed user or group loses all Amazon Q Business feature access at the start of next month.

```sql
EXEC aws.qbusiness.subscriptions.cancel_subscription 
@application_id='{{ application_id }}' --required, 
@subscription_id='{{ subscription_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
