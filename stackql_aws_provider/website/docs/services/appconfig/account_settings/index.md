--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - appconfig
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.account_settings" /></td></tr>
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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>A parameter that indicates if deletion protection is enabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="protection_period_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The time interval during which AppConfig monitors for calls to GetLatestConfiguration or for a configuration profile or from an environment. AppConfig returns an error if a user calls or for the designated configuration profile or environment. To bypass the error and delete a configuration profile or an environment, specify BYPASS for the DeletionProtectionCheck parameter for either or .</td>
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
    <td>Returns information about the status of the DeletionProtection parameter.</td>
</tr>
<tr>
    <td><a href="#update_account_settings"><CopyableCode code="update_account_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the value of the DeletionProtection parameter.</td>
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

Returns information about the status of the DeletionProtection parameter.

```sql
SELECT
enabled,
protection_period_in_minutes
FROM aws.appconfig.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_settings"
    values={[
        { label: 'update_account_settings', value: 'update_account_settings' }
    ]}
>
<TabItem value="update_account_settings">

Updates the value of the DeletionProtection parameter.

```sql
UPDATE aws.appconfig.account_settings
SET 
DeletionProtection = '{{ DeletionProtection }}',
VendedMetrics = '{{ VendedMetrics }}'
WHERE 
region = '{{ region }}' --required
RETURNING
deletion_protection,
vended_metrics;
```
</TabItem>
</Tabs>
