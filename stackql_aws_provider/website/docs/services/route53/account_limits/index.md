--- 
title: account_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - account_limits
  - route53
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

Creates, updates, deletes, gets or lists an <code>account_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.account_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_limit"
    values={[
        { label: 'get_account_limit', value: 'get_account_limit' }
    ]}
>
<TabItem value="get_account_limit">

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
    <td><CopyableCode code="Count" /></td>
    <td><code>integer</code></td>
    <td>The current number of entities that you have created of the specified type. For example, if you specified MAX_HEALTH_CHECKS_BY_OWNER for the value of Type in the request, the value of Count is the current number of health checks that you have created using the current account.</td>
</tr>
<tr>
    <td><CopyableCode code="Limit" /></td>
    <td><code>string</code></td>
    <td>The current setting for the specified limit. For example, if you specified MAX_HEALTH_CHECKS_BY_OWNER for the value of Type in the request, the value of Limit is the maximum number of health checks that you can create using the current account.</td>
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
    <td><a href="#get_account_limit"><CopyableCode code="get_account_limit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified limit for the current account, for example, the maximum number of health checks that you can create using the account. For the default limit, see Limits in the Amazon Route 53 Developer Guide. To request a higher limit, open a case. You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to the Amazon Web Services Management Console and open the Trusted Advisor console at https:​//console.aws.amazon.com/trustedadvisor/. Then choose Service limits in the navigation pane.</td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The limit that you want to get. Valid values include the following: MAX_HEALTH_CHECKS_BY_OWNER: The maximum number of health checks that you can create using the current account. MAX_HOSTED_ZONES_BY_OWNER: The maximum number of hosted zones that you can create using the current account. MAX_REUSABLE_DELEGATION_SETS_BY_OWNER: The maximum number of reusable delegation sets that you can create using the current account. MAX_TRAFFIC_POLICIES_BY_OWNER: The maximum number of traffic policies that you can create using the current account. MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER: The maximum number of traffic policy instances that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the Amazon Route 53 console.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account_limit"
    values={[
        { label: 'get_account_limit', value: 'get_account_limit' }
    ]}
>
<TabItem value="get_account_limit">

Gets the specified limit for the current account, for example, the maximum number of health checks that you can create using the account. For the default limit, see Limits in the Amazon Route 53 Developer Guide. To request a higher limit, open a case. You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to the Amazon Web Services Management Console and open the Trusted Advisor console at https://console.aws.amazon.com/trustedadvisor/. Then choose Service limits in the navigation pane.

```sql
SELECT
Count,
Limit
FROM aws.route53.account_limits
WHERE type = '{{ type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
