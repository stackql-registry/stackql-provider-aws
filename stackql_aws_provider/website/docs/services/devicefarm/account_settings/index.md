--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - devicefarm
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

Creates, updates, deletes, gets or lists an <code>account_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_settings"
    values={[
        { label: 'get_account_settings', value: 'get_account_settings' }
    ]}
>
<TabItem value="get_account_settings">

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
    <td><CopyableCode code="awsAccountNumber" /></td>
    <td><code>string</code></td>
    <td>The AWS account number specified in the AccountSettings container.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultJobTimeoutMinutes" /></td>
    <td><code>integer</code></td>
    <td>The default number of minutes (at the account level) a test run executes before it times out. The default value is 150 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="maxJobTimeoutMinutes" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of minutes a test run executes before it times out.</td>
</tr>
<tr>
    <td><CopyableCode code="maxSlots" /></td>
    <td><code>object</code></td>
    <td>The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an offering-id:number pair, where the offering-id represents one of the IDs returned by the ListOfferings command.</td>
</tr>
<tr>
    <td><CopyableCode code="skipAppResign" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again. For more information about how Device Farm re-signs your apps, see Do you modify my app? in the AWS Device Farm FAQs.</td>
</tr>
<tr>
    <td><CopyableCode code="trialMinutes" /></td>
    <td><code>object</code></td>
    <td>Information about an AWS account's usage of free trial device minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="unmeteredDevices" /></td>
    <td><code>object</code></td>
    <td>Returns the unmetered devices you have purchased or want to purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="unmeteredRemoteAccessDevices" /></td>
    <td><code>object</code></td>
    <td>Returns the unmetered remote access devices you have purchased or want to purchase.</td>
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
    <td><a href="#get_account_settings"><CopyableCode code="get_account_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.</td>
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
    defaultValue="get_account_settings"
    values={[
        { label: 'get_account_settings', value: 'get_account_settings' }
    ]}
>
<TabItem value="get_account_settings">

Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.

```sql
SELECT
awsAccountNumber,
defaultJobTimeoutMinutes,
maxJobTimeoutMinutes,
maxSlots,
skipAppResign,
trialMinutes,
unmeteredDevices,
unmeteredRemoteAccessDevices
FROM aws.devicefarm.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
