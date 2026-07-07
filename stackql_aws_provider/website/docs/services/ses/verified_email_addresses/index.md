--- 
title: verified_email_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_email_addresses
  - ses
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

Creates, updates, deletes, gets or lists a <code>verified_email_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_email_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.verified_email_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_verified_email_addresses"
    values={[
        { label: 'list_verified_email_addresses', value: 'list_verified_email_addresses' }
    ]}
>
<TabItem value="list_verified_email_addresses">

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
    <td><CopyableCode code="verified_email_address" /></td>
    <td><code>string</code></td>
    <td>A list of email addresses that have been verified.</td>
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
    <td><a href="#list_verified_email_addresses"><CopyableCode code="list_verified_email_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deprecated. Use the ListIdentities operation to list the email addresses and domains associated with your account.</td>
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
    defaultValue="list_verified_email_addresses"
    values={[
        { label: 'list_verified_email_addresses', value: 'list_verified_email_addresses' }
    ]}
>
<TabItem value="list_verified_email_addresses">

Deprecated. Use the ListIdentities operation to list the email addresses and domains associated with your account.

```sql
SELECT
verified_email_address
FROM aws.ses.verified_email_addresses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
