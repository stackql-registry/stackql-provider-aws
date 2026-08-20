--- 
title: autonomous_database_wallet_details
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_wallet_details
  - odb
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_wallet_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_wallet_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.autonomous_database_wallet_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_autonomous_database_wallet_details"
    values={[
        { label: 'get_autonomous_database_wallet_details', value: 'get_autonomous_database_wallet_details' }
    ]}
>
<TabItem value="get_autonomous_database_wallet_details">

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
    <td><CopyableCode code="password_source_summary" /></td>
    <td><code>object</code></td>
    <td>The summary of the password source configuration for the Autonomous Database wallet.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Autonomous Database wallet. (ACTIVE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="time_rotated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous Database wallet was last rotated.</td>
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
    <td><a href="#get_autonomous_database_wallet_details"><CopyableCode code="get_autonomous_database_wallet_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the wallet details for the specified Autonomous Database.</td>
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
    defaultValue="get_autonomous_database_wallet_details"
    values={[
        { label: 'get_autonomous_database_wallet_details', value: 'get_autonomous_database_wallet_details' }
    ]}
>
<TabItem value="get_autonomous_database_wallet_details">

Gets the wallet details for the specified Autonomous Database.

```sql
SELECT
password_source_summary,
status,
time_rotated
FROM aws.odb.autonomous_database_wallet_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
