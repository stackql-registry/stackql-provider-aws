--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - sesv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.accounts" /></td></tr>
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
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>An object that defines your account details.</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement_status" /></td>
    <td><code>string</code></td>
    <td>The reputation status of your Amazon SES account. The status can be one of the following: HEALTHY – There are no reputation-related issues that currently impact your account. PROBATION – We've identified potential issues with your Amazon SES account. We're placing your account under review while you work on correcting these issues. SHUTDOWN – Your account's ability to send email is currently paused because of an issue with the email sent from your account. When you correct the issue, you can contact us and request that your account's ability to send email is resumed.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_attributes" /></td>
    <td><code>object</code></td>
    <td>The pricing attributes that apply to your Amazon SES account, including the currently active pricing plan and any scheduled change.</td>
</tr>
<tr>
    <td><CopyableCode code="production_access_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not your account has production access in the current Amazon Web Services Region. If the value is false, then your account is in the sandbox. When your account is in the sandbox, you can only send email to verified identities. If the value is true, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</td>
</tr>
<tr>
    <td><CopyableCode code="send_quota" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="sending_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not email sending is enabled for your Amazon SES account in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="suppression_attributes" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="vdm_attributes" /></td>
    <td><code>object</code></td>
    <td>The VDM attributes that apply to your Amazon SES account.</td>
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
    <td>Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#put_account_details"><CopyableCode code="put_account_details" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MailType"><code>MailType</code></a>, <a href="#parameter-WebsiteURL"><code>WebsiteURL</code></a></td>
    <td></td>
    <td>Update your Amazon SES account details.</td>
</tr>
<tr>
    <td><a href="#put_account_pricing_attributes"><CopyableCode code="put_account_pricing_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Plan"><code>Plan</code></a></td>
    <td></td>
    <td>Set the pricing plan for your Amazon SES account. Use this operation to choose a billing plan that packages multiple Amazon SES features at a single rate.</td>
</tr>
<tr>
    <td><a href="#put_account_vdm_attributes"><CopyableCode code="put_account_vdm_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VdmAttributes"><code>VdmAttributes</code></a></td>
    <td></td>
    <td>Update your Amazon SES account VDM attributes. You can execute this operation no more than once per second.</td>
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
<tr>
    <td><a href="#put_account_suppression_attributes"><CopyableCode code="put_account_suppression_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Change the settings for the account-level suppression list.</td>
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

Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.

```sql
SELECT
dedicated_ip_auto_warmup_enabled,
details,
enforcement_status,
pricing_attributes,
production_access_enabled,
send_quota,
sending_enabled,
suppression_attributes,
vdm_attributes
FROM aws.sesv2.accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_details"
    values={[
        { label: 'put_account_details', value: 'put_account_details' },
        { label: 'put_account_pricing_attributes', value: 'put_account_pricing_attributes' },
        { label: 'put_account_vdm_attributes', value: 'put_account_vdm_attributes' },
        { label: 'put_account_dedicated_ip_warmup_attributes', value: 'put_account_dedicated_ip_warmup_attributes' }
    ]}
>
<TabItem value="put_account_details">

Update your Amazon SES account details.

```sql
REPLACE aws.sesv2.accounts
SET 
MailType = '{{ MailType }}',
WebsiteURL = '{{ WebsiteURL }}',
ContactLanguage = '{{ ContactLanguage }}',
UseCaseDescription = '{{ UseCaseDescription }}',
AdditionalContactEmailAddresses = '{{ AdditionalContactEmailAddresses }}',
ProductionAccessEnabled = {{ ProductionAccessEnabled }}
WHERE 
region = '{{ region }}' --required
AND MailType = '{{ MailType }}' --required
AND WebsiteURL = '{{ WebsiteURL }}' --required;
```
</TabItem>
<TabItem value="put_account_pricing_attributes">

Set the pricing plan for your Amazon SES account. Use this operation to choose a billing plan that packages multiple Amazon SES features at a single rate.

```sql
REPLACE aws.sesv2.accounts
SET 
Plan = '{{ Plan }}'
WHERE 
region = '{{ region }}' --required
AND Plan = '{{ Plan }}' --required;
```
</TabItem>
<TabItem value="put_account_vdm_attributes">

Update your Amazon SES account VDM attributes. You can execute this operation no more than once per second.

```sql
REPLACE aws.sesv2.accounts
SET 
VdmAttributes = '{{ VdmAttributes }}'
WHERE 
region = '{{ region }}' --required
AND VdmAttributes = '{{ VdmAttributes }}' --required;
```
</TabItem>
<TabItem value="put_account_dedicated_ip_warmup_attributes">

Enable or disable the automatic warm-up feature for dedicated IP addresses.

```sql
REPLACE aws.sesv2.accounts
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
        { label: 'put_account_sending_attributes', value: 'put_account_sending_attributes' },
        { label: 'put_account_suppression_attributes', value: 'put_account_suppression_attributes' }
    ]}
>
<TabItem value="put_account_sending_attributes">

Enable or disable the ability of your account to send email.

```sql
EXEC aws.sesv2.accounts.put_account_sending_attributes 
@region='{{ region }}' --required 
@@json=
'{
"SendingEnabled": {{ SendingEnabled }}
}'
;
```
</TabItem>
<TabItem value="put_account_suppression_attributes">

Change the settings for the account-level suppression list.

```sql
EXEC aws.sesv2.accounts.put_account_suppression_attributes 
@region='{{ region }}' --required 
@@json=
'{
"SuppressedReasons": "{{ SuppressedReasons }}", 
"ValidationAttributes": "{{ ValidationAttributes }}"
}'
;
```
</TabItem>
</Tabs>
