--- 
title: deliverability_dashboard_options
hide_title: false
hide_table_of_contents: false
keywords:
  - deliverability_dashboard_options
  - pinpoint_email
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

Creates, updates, deletes, gets or lists a <code>deliverability_dashboard_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deliverability_dashboard_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_email.deliverability_dashboard_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deliverability_dashboard_options"
    values={[
        { label: 'get_deliverability_dashboard_options', value: 'get_deliverability_dashboard_options' }
    ]}
>
<TabItem value="get_deliverability_dashboard_options">

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
    <td><CopyableCode code="account_status" /></td>
    <td><code>string</code></td>
    <td>The current status of your Deliverability dashboard subscription. If this value is PENDING_EXPIRATION, your subscription is scheduled to expire at the end of the current calendar month. (ACTIVE, PENDING_EXPIRATION, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="active_subscribed_domains" /></td>
    <td><code>array</code></td>
    <td>An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at the end of the current calendar month.</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the Deliverability dashboard is enabled for your Amazon Pinpoint account. If this value is true, the dashboard is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_expiration_subscribed_domains" /></td>
    <td><code>array</code></td>
    <td>An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that's scheduled to expire at the end of the current calendar month.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_expiry_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date, in Unix time format, when your current subscription to the Deliverability dashboard is scheduled to expire, if your subscription is scheduled to expire at the end of the current calendar month. This value is null if you have an active subscription that isn’t due to expire at the end of the month.</td>
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
    <td><a href="#get_deliverability_dashboard_options"><CopyableCode code="get_deliverability_dashboard_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests. When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see Amazon Pinpoint Pricing.</td>
</tr>
<tr>
    <td><a href="#put_deliverability_dashboard_option"><CopyableCode code="put_deliverability_dashboard_option" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DashboardEnabled"><code>DashboardEnabled</code></a></td>
    <td></td>
    <td>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests. When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see Amazon Pinpoint Pricing.</td>
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
    defaultValue="get_deliverability_dashboard_options"
    values={[
        { label: 'get_deliverability_dashboard_options', value: 'get_deliverability_dashboard_options' }
    ]}
>
<TabItem value="get_deliverability_dashboard_options">

Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests. When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see Amazon Pinpoint Pricing.

```sql
SELECT
account_status,
active_subscribed_domains,
dashboard_enabled,
pending_expiration_subscribed_domains,
subscription_expiry_date
FROM aws.pinpoint_email.deliverability_dashboard_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_deliverability_dashboard_option"
    values={[
        { label: 'put_deliverability_dashboard_option', value: 'put_deliverability_dashboard_option' }
    ]}
>
<TabItem value="put_deliverability_dashboard_option">

Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests. When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see Amazon Pinpoint Pricing.

```sql
REPLACE aws.pinpoint_email.deliverability_dashboard_options
SET 
DashboardEnabled = {{ DashboardEnabled }},
SubscribedDomains = '{{ SubscribedDomains }}'
WHERE 
region = '{{ region }}' --required
AND DashboardEnabled = {{ DashboardEnabled }} --required;
```
</TabItem>
</Tabs>
