--- 
title: member_account_details
hide_title: false
hide_table_of_contents: false
keywords:
  - member_account_details
  - security_ir
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

Creates, updates, deletes, gets or lists a <code>member_account_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="member_account_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.security_ir.member_account_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_member_account_details"
    values={[
        { label: 'batch_get_member_account_details', value: 'batch_get_member_account_details' }
    ]}
>
<TabItem value="batch_get_member_account_details">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>The response element providing error messages for requests to GetMembershipAccountDetails.</td>
</tr>
<tr>
    <td><CopyableCode code="items_" /></td>
    <td><code>array</code></td>
    <td>The response element providing responses for requests to GetMembershipAccountDetails.</td>
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
    <td><a href="#batch_get_member_account_details"><CopyableCode code="batch_get_member_account_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_id"><code>membership_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information on whether the supplied account IDs are associated with a membership. AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be 123123123 which is nine digits, and with zero-prepend would be 000123123123. Not zero-prepending to 12 digits could result in errors.</td>
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
<tr id="parameter-membership_id">
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>Required element used in combination with BatchGetMemberAccountDetails to identify the membership ID to query.</td>
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
    defaultValue="batch_get_member_account_details"
    values={[
        { label: 'batch_get_member_account_details', value: 'batch_get_member_account_details' }
    ]}
>
<TabItem value="batch_get_member_account_details">

Provides information on whether the supplied account IDs are associated with a membership. AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be 123123123 which is nine digits, and with zero-prepend would be 000123123123. Not zero-prepending to 12 digits could result in errors.

```sql
SELECT
errors,
items_
FROM aws.security_ir.member_account_details
WHERE membership_id = '{{ membership_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
