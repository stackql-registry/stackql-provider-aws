--- 
title: linked_whats_app_business_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - linked_whats_app_business_accounts
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>linked_whats_app_business_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="linked_whats_app_business_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.linked_whats_app_business_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_linked_whats_app_business_account"
    values={[
        { label: 'get_linked_whats_app_business_account', value: 'get_linked_whats_app_business_account' },
        { label: 'list_linked_whats_app_business_accounts', value: 'list_linked_whats_app_business_accounts' }
    ]}
>
<TabItem value="get_linked_whats_app_business_account">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the linked WhatsApp Business Account, formatted as waba-01234567890123456789012345678901. (pattern: &lt;code&gt;.*(^waba-.*$)|(^arn:.*:waba/&#91;0-9a-zA-Z&#93;+$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the linked WhatsApp Business Account. (pattern: &lt;code&gt;arn:.*:waba/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The Meta Conversions API dataset ID associated with this WhatsApp Business Account. This value is a numeric string of 10 to 20 digits. This field is not present when no dataset has been created for this account. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_destinations" /></td>
    <td><code>array</code></td>
    <td>The event destinations for the linked WhatsApp Business Account.</td>
</tr>
<tr>
    <td><CopyableCode code="link_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the WhatsApp Business Account was linked.</td>
</tr>
<tr>
    <td><CopyableCode code="marketing_messages_onboarding_status" /></td>
    <td><code>string</code></td>
    <td>The onboarding status for the Marketing Messages API. This value is fetched from Meta and indicates whether the WhatsApp Business Account is onboarded for Meta's Marketing Messages API.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_numbers" /></td>
    <td><code>array</code></td>
    <td>The phone numbers associated with the Linked WhatsApp Business Account.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_status" /></td>
    <td><code>string</code></td>
    <td>The registration status of the linked WhatsApp Business Account. (COMPLETE, INCOMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="waba_id" /></td>
    <td><code>string</code></td>
    <td>The WhatsApp Business Account ID from meta.</td>
</tr>
<tr>
    <td><CopyableCode code="waba_name" /></td>
    <td><code>string</code></td>
    <td>The name of the linked WhatsApp Business Account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_linked_whats_app_business_accounts">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the linked WhatsApp Business Account, formatted as waba-01234567890123456789012345678901. (pattern: &lt;code&gt;.*(^waba-.*$)|(^arn:.*:waba/&#91;0-9a-zA-Z&#93;+$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the linked WhatsApp Business Account. (pattern: &lt;code&gt;arn:.*:waba/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The Meta Conversions API dataset ID associated with this WhatsApp Business Account. This value is a numeric string of 10 to 20 digits. This field is not present when no dataset has been created for this account. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_destinations" /></td>
    <td><code>array</code></td>
    <td>The event destinations for the linked WhatsApp Business Account.</td>
</tr>
<tr>
    <td><CopyableCode code="link_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the WhatsApp Business Account was linked.</td>
</tr>
<tr>
    <td><CopyableCode code="marketing_messages_onboarding_status" /></td>
    <td><code>string</code></td>
    <td>The onboarding status for the Marketing Messages API. This value is fetched from Meta and indicates whether the WhatsApp Business Account is onboarded for Meta's Marketing Messages API.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_status" /></td>
    <td><code>string</code></td>
    <td>The registration status of the linked WhatsApp Business Account. (COMPLETE, INCOMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="waba_id" /></td>
    <td><code>string</code></td>
    <td>The WhatsApp Business Account ID provided by Meta.</td>
</tr>
<tr>
    <td><CopyableCode code="waba_name" /></td>
    <td><code>string</code></td>
    <td>The name of the linked WhatsApp Business Account.</td>
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
    <td><a href="#get_linked_whats_app_business_account"><CopyableCode code="get_linked_whats_app_business_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the details of your linked WhatsApp Business Account.</td>
</tr>
<tr>
    <td><a href="#list_linked_whats_app_business_accounts"><CopyableCode code="list_linked_whats_app_business_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List all WhatsApp Business Accounts linked to your Amazon Web Services account.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier, from Amazon Web Services, of the linked WhatsApp Business Account. WABA identifiers are formatted as waba-01234567890123456789012345678901. Use ListLinkedWhatsAppBusinessAccounts to list all WABAs and their details.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next token for pagination.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_linked_whats_app_business_account"
    values={[
        { label: 'get_linked_whats_app_business_account', value: 'get_linked_whats_app_business_account' },
        { label: 'list_linked_whats_app_business_accounts', value: 'list_linked_whats_app_business_accounts' }
    ]}
>
<TabItem value="get_linked_whats_app_business_account">

Get the details of your linked WhatsApp Business Account.

```sql
SELECT
id,
arn,
dataset_id,
event_destinations,
link_date,
marketing_messages_onboarding_status,
phone_numbers,
registration_status,
waba_id,
waba_name
FROM aws.socialmessaging.linked_whats_app_business_accounts
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_linked_whats_app_business_accounts">

List all WhatsApp Business Accounts linked to your Amazon Web Services account.

```sql
SELECT
id,
arn,
dataset_id,
event_destinations,
link_date,
marketing_messages_onboarding_status,
registration_status,
waba_id,
waba_name
FROM aws.socialmessaging.linked_whats_app_business_accounts
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
