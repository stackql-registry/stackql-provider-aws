--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - pricing_plan_manager
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pricing_plan_manager.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' },
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="get_subscription">

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
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The entity tag for concurrency control. Use this value in the If-Match header for subsequent operations on this subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription" /></td>
    <td><code>object</code></td>
    <td>The details of the requested subscription.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a flat-rate pricing subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the subscription was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The entity tag for concurrency control. Pass this value in the If-Match header when making changes to this subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="plan_family" /></td>
    <td><code>string</code></td>
    <td>The pricing plan family for the subscription, such as CloudFront.</td>
</tr>
<tr>
    <td><CopyableCode code="plan_tier" /></td>
    <td><code>string</code></td>
    <td>The current tier level of the pricing plan.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arns" /></td>
    <td><code>array</code></td>
    <td>A list of 1 to 10 AWS resource ARNs to include in the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_change" /></td>
    <td><code>object</code></td>
    <td>A pending change that will take effect at the end of the current billing period, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the subscription. (PENDING_APPROVAL, ACTIVE, SYNC_IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable explanation of the current status, present when additional context is available.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the subscription was last modified, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_level" /></td>
    <td><code>string</code></td>
    <td>The usage level within the plan tier.</td>
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
    <td><a href="#get_subscription"><CopyableCode code="get_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of a flat-rate pricing subscription, including its current status, associated resources, and any pending scheduled changes.</td>
</tr>
<tr>
    <td><a href="#list_subscriptions"><CopyableCode code="list_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a summary of all flat-rate pricing subscriptions in the calling account.</td>
</tr>
<tr>
    <td><a href="#create_subscription"><CopyableCode code="create_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-planFamily"><code>planFamily</code></a>, <a href="#parameter-planTier"><code>planTier</code></a>, <a href="#parameter-resourceArns"><code>resourceArns</code></a></td>
    <td></td>
    <td>Creates a flat-rate pricing subscription for the specified resources. When approvalMode is set to MANUAL, paid-tier subscriptions are created in PENDING_APPROVAL status and require a separate ApprovePaidSubscription call before billing starts. Free-tier subscriptions are always activated immediately regardless of approval mode. When approvalMode is set to IMMEDIATE or is not specified, the subscription is activated immediately.</td>
</tr>
<tr>
    <td><a href="#associate_resources_to_subscription"><CopyableCode code="associate_resources_to_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-resourceArns"><code>resourceArns</code></a></td>
    <td></td>
    <td>Adds one or more resources to an existing subscription. The subscription must be in an active state that is not pending other changes. For subscriptions in the CloudFront plan family, the associated resources must include exactly one Amazon CloudFront distribution and one AWS WAF web ACL. You can also include other supported resources, such as Amazon Route 53 hosted zones, and CloudFront KeyValueStores.</td>
</tr>
<tr>
    <td><a href="#update_subscription"><CopyableCode code="update_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-planTier"><code>planTier</code></a></td>
    <td></td>
    <td>Changes the plan tier of an existing subscription. Upgrades take effect immediately. Downgrades are scheduled and the current tier remains unchanged until the end of the billing cycle (calendar month). You cannot update a subscription while a scheduled change is pending. To make a new change, first cancel the pending change using CancelSubscriptionChange. This operation replaces the plan tier value. If you omit the optional usageLevel field, it is reset to the default.</td>
</tr>
<tr>
    <td><a href="#cancel_subscription_change"><CopyableCode code="cancel_subscription_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Cancels a pending scheduled change on a subscription, such as a pending downgrade or cancellation. The subscription returns to its state before the change was scheduled. You cannot cancel a scheduled change close to its effective date. If the change is within the processing window, this operation returns an error.</td>
</tr>
<tr>
    <td><a href="#disassociate_resources_from_subscription"><CopyableCode code="disassociate_resources_from_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-resourceArns"><code>resourceArns</code></a></td>
    <td></td>
    <td>Removes one or more resources from an existing subscription. For subscriptions in the CloudFront plan family, the associated resources must always include exactly one Amazon CloudFront distribution and exactly one AWS WAF web ACL. You cannot remove these required resources.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The ETag value from a previous GetSubscription or ListSubscriptions response.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' },
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="get_subscription">

Returns the details of a flat-rate pricing subscription, including its current status, associated resources, and any pending scheduled changes.

```sql
SELECT
e_tag,
subscription
FROM aws.pricing_plan_manager.subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscriptions">

Returns a summary of all flat-rate pricing subscriptions in the calling account.

```sql
SELECT
arn,
created_at,
e_tag,
plan_family,
plan_tier,
resource_arns,
scheduled_change,
status,
status_reason,
updated_at,
usage_level
FROM aws.pricing_plan_manager.subscriptions
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

Creates a flat-rate pricing subscription for the specified resources. When approvalMode is set to MANUAL, paid-tier subscriptions are created in PENDING_APPROVAL status and require a separate ApprovePaidSubscription call before billing starts. Free-tier subscriptions are always activated immediately regardless of approval mode. When approvalMode is set to IMMEDIATE or is not specified, the subscription is activated immediately.

```sql
INSERT INTO aws.pricing_plan_manager.subscriptions (
planFamily,
planTier,
usageLevel,
resourceArns,
approvalMode,
clientToken,
region
)
SELECT 
'{{ planFamily }}' /* required */,
'{{ planTier }}' /* required */,
'{{ usageLevel }}',
'{{ resourceArns }}' /* required */,
'{{ approvalMode }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
e_tag,
subscription
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
    - name: planFamily
      value: "{{ planFamily }}"
    - name: planTier
      value: "{{ planTier }}"
    - name: usageLevel
      value: "{{ usageLevel }}"
    - name: resourceArns
      value:
        - "{{ resourceArns }}"
      description: |
        A list of 1 to 10 AWS resource ARNs to include in the subscription.
    - name: approvalMode
      value: "{{ approvalMode }}"
      description: |
        Determines whether a subscription requires explicit approval before billing starts.
      valid_values: ['MANUAL', 'IMMEDIATE']
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure a request is handled only once.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resources_to_subscription"
    values={[
        { label: 'associate_resources_to_subscription', value: 'associate_resources_to_subscription' },
        { label: 'update_subscription', value: 'update_subscription' }
    ]}
>
<TabItem value="associate_resources_to_subscription">

Adds one or more resources to an existing subscription. The subscription must be in an active state that is not pending other changes. For subscriptions in the CloudFront plan family, the associated resources must include exactly one Amazon CloudFront distribution and one AWS WAF web ACL. You can also include other supported resources, such as Amazon Route 53 hosted zones, and CloudFront KeyValueStores.

```sql
UPDATE aws.pricing_plan_manager.subscriptions
SET 
arn = '{{ arn }}',
resourceArns = '{{ resourceArns }}',
clientToken = '{{ clientToken }}'
WHERE 
`If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
AND resourceArns = '{{ resourceArns }}' --required
RETURNING
e_tag,
subscription;
```
</TabItem>
<TabItem value="update_subscription">

Changes the plan tier of an existing subscription. Upgrades take effect immediately. Downgrades are scheduled and the current tier remains unchanged until the end of the billing cycle (calendar month). You cannot update a subscription while a scheduled change is pending. To make a new change, first cancel the pending change using CancelSubscriptionChange. This operation replaces the plan tier value. If you omit the optional usageLevel field, it is reset to the default.

```sql
UPDATE aws.pricing_plan_manager.subscriptions
SET 
arn = '{{ arn }}',
planTier = '{{ planTier }}',
usageLevel = '{{ usageLevel }}',
clientToken = '{{ clientToken }}'
WHERE 
`If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
AND planTier = '{{ planTier }}' --required
RETURNING
e_tag,
subscription;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_subscription_change"
    values={[
        { label: 'cancel_subscription_change', value: 'cancel_subscription_change' },
        { label: 'disassociate_resources_from_subscription', value: 'disassociate_resources_from_subscription' }
    ]}
>
<TabItem value="cancel_subscription_change">

Cancels a pending scheduled change on a subscription, such as a pending downgrade or cancellation. The subscription returns to its state before the change was scheduled. You cannot cancel a scheduled change close to its effective date. If the change is within the processing window, this operation returns an error.

```sql
EXEC aws.pricing_plan_manager.subscriptions.cancel_subscription_change 
@If-Match='{{ If-Match }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_resources_from_subscription">

Removes one or more resources from an existing subscription. For subscriptions in the CloudFront plan family, the associated resources must always include exactly one Amazon CloudFront distribution and exactly one AWS WAF web ACL. You cannot remove these required resources.

```sql
EXEC aws.pricing_plan_manager.subscriptions.disassociate_resources_from_subscription 
@If-Match='{{ If-Match }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"resourceArns": "{{ resourceArns }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
