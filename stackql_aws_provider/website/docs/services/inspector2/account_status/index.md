--- 
title: account_status
hide_title: false
hide_table_of_contents: false
keywords:
  - account_status
  - inspector2
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

Creates, updates, deletes, gets or lists an <code>account_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.account_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_account_status"
    values={[
        { label: 'batch_get_account_status', value: 'batch_get_account_status' }
    ]}
>
<TabItem value="batch_get_account_status">

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
    <td><CopyableCode code="accounts" /></td>
    <td><code>array</code></td>
    <td>An array of objects that provide details on the status of Amazon Inspector for each of the requested accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_accounts" /></td>
    <td><code>array</code></td>
    <td>An array of objects detailing any accounts that failed to enable Amazon Inspector and why.</td>
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
    <td><a href="#batch_get_account_status"><CopyableCode code="batch_get_account_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.</td>
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
    defaultValue="batch_get_account_status"
    values={[
        { label: 'batch_get_account_status', value: 'batch_get_account_status' }
    ]}
>
<TabItem value="batch_get_account_status">

Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.

```sql
SELECT
accounts,
failed_accounts
FROM aws.inspector2.account_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
