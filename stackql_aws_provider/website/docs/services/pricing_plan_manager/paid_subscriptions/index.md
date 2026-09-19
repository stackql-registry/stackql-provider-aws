--- 
title: paid_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - paid_subscriptions
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

Creates, updates, deletes, gets or lists a <code>paid_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="paid_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pricing_plan_manager.paid_subscriptions" /></td></tr>
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
    <td><a href="#approve_paid_subscription"><CopyableCode code="approve_paid_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Approves a subscription that is in PENDING_APPROVAL status, activating it and starting billing. This operation requires the current ETag value for concurrency control. Retrieve it from a previous GetSubscription or ListSubscriptions response.</td>
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
    <td>The ETag value from a previous GetSubscription or ListSubscriptions response. This ensures you are approving the expected version of the subscription.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="approve_paid_subscription"
    values={[
        { label: 'approve_paid_subscription', value: 'approve_paid_subscription' }
    ]}
>
<TabItem value="approve_paid_subscription">

Approves a subscription that is in PENDING_APPROVAL status, activating it and starting billing. This operation requires the current ETag value for concurrency control. Retrieve it from a previous GetSubscription or ListSubscriptions response.

```sql
EXEC aws.pricing_plan_manager.paid_subscriptions.approve_paid_subscription 
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
</Tabs>
