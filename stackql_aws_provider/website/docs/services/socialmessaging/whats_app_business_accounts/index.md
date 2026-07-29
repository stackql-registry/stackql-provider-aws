--- 
title: whats_app_business_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_business_accounts
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

Creates, updates, deletes, gets or lists a <code>whats_app_business_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_business_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_business_accounts" /></td></tr>
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
    <td><a href="#disassociate_whats_app_business_account"><CopyableCode code="disassociate_whats_app_business_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociate a WhatsApp Business Account (WABA) from your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#associate_whats_app_business_account"><CopyableCode code="associate_whats_app_business_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is only used through the Amazon Web Services console during sign-up to associate your WhatsApp Business Account to your Amazon Web Services account.</td>
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
    <td>The unique identifier of your WhatsApp Business Account. WABA identifiers are formatted as waba-01234567890123456789012345678901. Use ListLinkedWhatsAppBusinessAccounts to list all WABAs and their details.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="disassociate_whats_app_business_account"
    values={[
        { label: 'disassociate_whats_app_business_account', value: 'disassociate_whats_app_business_account' },
        { label: 'associate_whats_app_business_account', value: 'associate_whats_app_business_account' }
    ]}
>
<TabItem value="disassociate_whats_app_business_account">

Disassociate a WhatsApp Business Account (WABA) from your Amazon Web Services account.

```sql
UPDATE aws.socialmessaging.whats_app_business_accounts
SET 
-- No updatable properties
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="associate_whats_app_business_account">

This is only used through the Amazon Web Services console during sign-up to associate your WhatsApp Business Account to your Amazon Web Services account.

```sql
UPDATE aws.socialmessaging.whats_app_business_accounts
SET 
signupCallback = '{{ signupCallback }}',
setupFinalization = '{{ setupFinalization }}'
WHERE 
region = '{{ region }}' --required
RETURNING
linked_whats_app_business_account_id,
signup_callback_result,
status_code;
```
</TabItem>
</Tabs>
