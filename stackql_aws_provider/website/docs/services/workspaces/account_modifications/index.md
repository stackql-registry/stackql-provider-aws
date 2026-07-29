--- 
title: account_modifications
hide_title: false
hide_table_of_contents: false
keywords:
  - account_modifications
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

Creates, updates, deletes, gets or lists an <code>account_modifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_modifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.account_modifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_modifications"
    values={[
        { label: 'describe_account_modifications', value: 'describe_account_modifications' }
    ]}
>
<TabItem value="describe_account_modifications">

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
    <td><CopyableCode code="dedicated_tenancy_management_cidr_range" /></td>
    <td><code>string</code></td>
    <td>The IP address range, specified as an IPv4 CIDR block, for the management network interface used for the account. (pattern: &lt;code&gt;(^(&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)\.(&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)\.0\.0)(\/(16$))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_tenancy_support" /></td>
    <td><code>string</code></td>
    <td>The status of BYOL (whether BYOL is being enabled or disabled). (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The error code that is returned if the configuration of BYOL cannot be modified.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The text of the error message that is returned if the configuration of BYOL cannot be modified.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_state" /></td>
    <td><code>string</code></td>
    <td>The state of the modification to the configuration of BYOL. (PENDING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the modification of the BYOL configuration was started.</td>
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
    <td><a href="#describe_account_modifications"><CopyableCode code="describe_account_modifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.</td>
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
    defaultValue="describe_account_modifications"
    values={[
        { label: 'describe_account_modifications', value: 'describe_account_modifications' }
    ]}
>
<TabItem value="describe_account_modifications">

Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.

```sql
SELECT
dedicated_tenancy_management_cidr_range,
dedicated_tenancy_support,
error_code,
error_message,
modification_state,
start_time
FROM aws.workspaces.account_modifications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
