--- 
title: primary_emails
hide_title: false
hide_table_of_contents: false
keywords:
  - primary_emails
  - account
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

Creates, updates, deletes, gets or lists a <code>primary_emails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="primary_emails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account.primary_emails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_primary_email"
    values={[
        { label: 'get_primary_email', value: 'get_primary_email' }
    ]}
>
<TabItem value="get_primary_email">

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
    <td><CopyableCode code="primary_email" /></td>
    <td><code>string</code></td>
    <td>Retrieves the primary email address associated with the specified account.</td>
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
    <td><a href="#get_primary_email"><CopyableCode code="get_primary_email" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the primary email address for the specified account.</td>
</tr>
<tr>
    <td><a href="#accept_primary_email_update"><CopyableCode code="accept_primary_email_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-PrimaryEmail"><code>PrimaryEmail</code></a>, <a href="#parameter-Otp"><code>Otp</code></a></td>
    <td></td>
    <td>Accepts the request that originated from StartPrimaryEmailUpdate to update the primary email address (also known as the root user email address) for the specified account.</td>
</tr>
<tr>
    <td><a href="#start_primary_email_update"><CopyableCode code="start_primary_email_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-PrimaryEmail"><code>PrimaryEmail</code></a></td>
    <td></td>
    <td>Starts the process to update the primary email address for the specified account.</td>
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
    defaultValue="get_primary_email"
    values={[
        { label: 'get_primary_email', value: 'get_primary_email' }
    ]}
>
<TabItem value="get_primary_email">

Retrieves the primary email address for the specified account.

```sql
SELECT
primary_email
FROM aws.account.primary_emails
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_primary_email_update"
    values={[
        { label: 'accept_primary_email_update', value: 'accept_primary_email_update' },
        { label: 'start_primary_email_update', value: 'start_primary_email_update' }
    ]}
>
<TabItem value="accept_primary_email_update">

Accepts the request that originated from StartPrimaryEmailUpdate to update the primary email address (also known as the root user email address) for the specified account.

```sql
EXEC aws.account.primary_emails.accept_primary_email_update 
@region='{{ region }}' --required 
@@json=
'{
"AccountId": "{{ AccountId }}", 
"PrimaryEmail": "{{ PrimaryEmail }}", 
"Otp": "{{ Otp }}"
}'
;
```
</TabItem>
<TabItem value="start_primary_email_update">

Starts the process to update the primary email address for the specified account.

```sql
EXEC aws.account.primary_emails.start_primary_email_update 
@region='{{ region }}' --required 
@@json=
'{
"AccountId": "{{ AccountId }}", 
"PrimaryEmail": "{{ PrimaryEmail }}"
}'
;
```
</TabItem>
</Tabs>
