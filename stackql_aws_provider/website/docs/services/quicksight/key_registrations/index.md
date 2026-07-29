--- 
title: key_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - key_registrations
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>key_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.key_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_key_registration"
    values={[
        { label: 'describe_key_registration', value: 'describe_key_registration' }
    ]}
>
<TabItem value="describe_key_registration">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the customer managed key registration specified in the request. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_registration" /></td>
    <td><code>array</code></td>
    <td>A list of RegisteredCustomerManagedKey objects in a Quick Sight account.</td>
</tr>
<tr>
    <td><CopyableCode code="q_data_key" /></td>
    <td><code>object</code></td>
    <td>A list of QDataKey objects in a Quick Sight account.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_key_registration"><CopyableCode code="describe_key_registration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-default-key-only"><code>default-key-only</code></a></td>
    <td>Describes all customer managed key registrations in a Quick Sight account.</td>
</tr>
<tr>
    <td><a href="#update_key_registration"><CopyableCode code="update_key_registration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyRegistration"><code>KeyRegistration</code></a></td>
    <td></td>
    <td>Updates a customer managed key in a Quick Sight account.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the customer managed key registration that you want to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-default-key-only">
    <td><CopyableCode code="default-key-only" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether the request returns the default key only.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_key_registration"
    values={[
        { label: 'describe_key_registration', value: 'describe_key_registration' }
    ]}
>
<TabItem value="describe_key_registration">

Describes all customer managed key registrations in a Quick Sight account.

```sql
SELECT
aws_account_id,
key_registration,
q_data_key,
request_id,
status
FROM aws.quicksight.key_registrations
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `default-key-only` = '{{ default-key-only }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_key_registration"
    values={[
        { label: 'update_key_registration', value: 'update_key_registration' }
    ]}
>
<TabItem value="update_key_registration">

Updates a customer managed key in a Quick Sight account.

```sql
UPDATE aws.quicksight.key_registrations
SET 
KeyRegistration = '{{ KeyRegistration }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND KeyRegistration = '{{ KeyRegistration }}' --required
RETURNING
failed_key_registration,
request_id,
successful_key_registration;
```
</TabItem>
</Tabs>
