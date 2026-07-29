--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - apigateway
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.accounts" /></td></tr>
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
    <td><CopyableCode code="api_key_version" /></td>
    <td><code>string</code></td>
    <td>The version of the API keys used for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudwatch_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an Amazon CloudWatch role for the current Account.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>A list of features supported for the account. When usage plans are enabled, the features list will include an entry of "UsagePlans".</td>
</tr>
<tr>
    <td><CopyableCode code="throttle_settings" /></td>
    <td><code>object</code></td>
    <td>The API request rate limits.</td>
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
    <td>Gets information about the current Account resource.</td>
</tr>
<tr>
    <td><a href="#update_account"><CopyableCode code="update_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes information about the current Account resource.</td>
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

Gets information about the current Account resource.

```sql
SELECT
api_key_version,
cloudwatch_role_arn,
features,
throttle_settings
FROM aws.apigateway.accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account"
    values={[
        { label: 'update_account', value: 'update_account' }
    ]}
>
<TabItem value="update_account">

Changes information about the current Account resource.

```sql
UPDATE aws.apigateway.accounts
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
region = '{{ region }}' --required
RETURNING
api_key_version,
cloudwatch_role_arn,
features,
throttle_settings;
```
</TabItem>
</Tabs>
