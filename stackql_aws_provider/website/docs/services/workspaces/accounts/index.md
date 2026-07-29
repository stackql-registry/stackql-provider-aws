--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - workspaces
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account"
    values={[
        { label: 'describe_account', value: 'describe_account' }
    ]}
>
<TabItem value="describe_account">

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
    <td><CopyableCode code="dedicated_tenancy_account_type" /></td>
    <td><code>string</code></td>
    <td>The type of linked account. (SOURCE_ACCOUNT, TARGET_ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_tenancy_management_cidr_range" /></td>
    <td><code>string</code></td>
    <td>The IP address range, specified as an IPv4 CIDR block, used for the management network interface. The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace. (pattern: &lt;code&gt;(^(&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)\.(&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)\.0\.0)(\/(16$))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_tenancy_support" /></td>
    <td><code>string</code></td>
    <td>The status of BYOL (whether BYOL is enabled or disabled). (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The text message to describe the status of BYOL.</td>
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
    <td><a href="#describe_account"><CopyableCode code="describe_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.</td>
</tr>
<tr>
    <td><a href="#modify_account"><CopyableCode code="modify_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the configuration of Bring Your Own License (BYOL) for the specified account.</td>
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
    defaultValue="describe_account"
    values={[
        { label: 'describe_account', value: 'describe_account' }
    ]}
>
<TabItem value="describe_account">

Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.

```sql
SELECT
dedicated_tenancy_account_type,
dedicated_tenancy_management_cidr_range,
dedicated_tenancy_support,
message
FROM aws.workspaces.accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_account"
    values={[
        { label: 'modify_account', value: 'modify_account' }
    ]}
>
<TabItem value="modify_account">

Modifies the configuration of Bring Your Own License (BYOL) for the specified account.

```sql
UPDATE aws.workspaces.accounts
SET 
DedicatedTenancySupport = '{{ DedicatedTenancySupport }}',
DedicatedTenancyManagementCidrRange = '{{ DedicatedTenancyManagementCidrRange }}'
WHERE 
region = '{{ region }}' --required
RETURNING
message;
```
</TabItem>
</Tabs>
