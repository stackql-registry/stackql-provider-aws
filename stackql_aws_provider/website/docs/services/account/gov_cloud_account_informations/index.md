--- 
title: gov_cloud_account_informations
hide_title: false
hide_table_of_contents: false
keywords:
  - gov_cloud_account_informations
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

Creates, updates, deletes, gets or lists a <code>gov_cloud_account_informations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gov_cloud_account_informations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account.gov_cloud_account_informations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gov_cloud_account_information"
    values={[
        { label: 'get_gov_cloud_account_information', value: 'get_gov_cloud_account_information' }
    ]}
>
<TabItem value="get_gov_cloud_account_information">

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
    <td><CopyableCode code="account_state" /></td>
    <td><code>string</code></td>
    <td>The account state of the linked GovCloud account. (PENDING_ACTIVATION, ACTIVE, SUSPENDED, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="gov_cloud_account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID number of the linked GovCloud account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_gov_cloud_account_information"><CopyableCode code="get_gov_cloud_account_information" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the GovCloud account linked to the specified standard account (if it exists) including the GovCloud account ID and state. To use this API, an IAM user or role must have the account:GetGovCloudAccountInformation IAM permission.</td>
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
    defaultValue="get_gov_cloud_account_information"
    values={[
        { label: 'get_gov_cloud_account_information', value: 'get_gov_cloud_account_information' }
    ]}
>
<TabItem value="get_gov_cloud_account_information">

Retrieves information about the GovCloud account linked to the specified standard account (if it exists) including the GovCloud account ID and state. To use this API, an IAM user or role must have the account:GetGovCloudAccountInformation IAM permission.

```sql
SELECT
account_state,
gov_cloud_account_id
FROM aws.account.gov_cloud_account_informations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
