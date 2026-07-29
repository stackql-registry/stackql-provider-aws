--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_email.accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account"
    values={[
        { label: 'get_account', value: 'get_account' }
    ]}
>
<TabItem value="get_account">

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
    <td><CopyableCode code="dedicated_ip_auto_warmup_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not the automatic warm-up feature is enabled for dedicated IP addresses that are associated with your account.</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement_status" /></td>
    <td><code>string</code></td>
    <td>The reputation status of your Amazon Pinpoint account. The status can be one of the following: HEALTHY – There are no reputation-related issues that currently impact your account. PROBATION – We've identified some issues with your Amazon Pinpoint account. We're placing your account under review while you work on correcting these issues. SHUTDOWN – Your account's ability to send email is currently paused because of an issue with the email sent from your account. When you correct the issue, you can contact us and request that your account's ability to send email is resumed.</td>
</tr>
<tr>
    <td><CopyableCode code="production_access_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not your account has production access in the current AWS Region. If the value is false, then your account is in the sandbox. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1. If the value is true, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</td>
</tr>
<tr>
    <td><CopyableCode code="send_quota" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.</td>
</tr>
<tr>
    <td><CopyableCode code="sending_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not email sending is enabled for your Amazon Pinpoint account in the current AWS Region.</td>
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
    <td><a href="#get_account"><CopyableCode code="get_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.</td>
</tr>
<tr>
    <td><a href="#put_account_dedicated_ip_warmup_attributes"><CopyableCode code="put_account_dedicated_ip_warmup_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enable or disable the automatic warm-up feature for dedicated IP addresses.</td>
</tr>
<tr>
    <td><a href="#put_account_sending_attributes"><CopyableCode code="put_account_sending_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enable or disable the ability of your account to send email.</td>
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
    defaultValue="get_account"
    values={[
        { label: 'get_account', value: 'get_account' }
    ]}
>
<TabItem value="get_account">

Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.

```sql
SELECT
dedicated_ip_auto_warmup_enabled,
enforcement_status,
production_access_enabled,
send_quota,
sending_enabled
FROM aws.pinpoint_email.accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_dedicated_ip_warmup_attributes"
    values={[
        { label: 'put_account_dedicated_ip_warmup_attributes', value: 'put_account_dedicated_ip_warmup_attributes' }
    ]}
>
<TabItem value="put_account_dedicated_ip_warmup_attributes">

Enable or disable the automatic warm-up feature for dedicated IP addresses.

```sql
REPLACE aws.pinpoint_email.accounts
SET 
AutoWarmupEnabled = {{ AutoWarmupEnabled }}
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="put_account_sending_attributes"
    values={[
        { label: 'put_account_sending_attributes', value: 'put_account_sending_attributes' }
    ]}
>
<TabItem value="put_account_sending_attributes">

Enable or disable the ability of your account to send email.

```sql
EXEC aws.pinpoint_email.accounts.put_account_sending_attributes 
@region='{{ region }}' --required 
@@json=
'{
"SendingEnabled": {{ SendingEnabled }}
}'
;
```
</TabItem>
</Tabs>
