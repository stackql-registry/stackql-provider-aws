--- 
title: global_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - global_settings
  - backup
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

Creates, updates, deletes, gets or lists a <code>global_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.global_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_global_settings"
    values={[
        { label: 'describe_global_settings', value: 'describe_global_settings' }
    ]}
>
<TabItem value="describe_global_settings">

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
    <td><CopyableCode code="GlobalSettings" /></td>
    <td><code>object</code></td>
    <td>The status of the flags isCrossAccountBackupEnabled, isMpaEnabled ('Mpa' refers to multi-party approval), and isDelegatedAdministratorEnabled. isCrossAccountBackupEnabled: Allow accounts in your organization to copy backups to other accounts. isMpaEnabled: Add cross-account access to your organization with the option to assign a Multi-party approval team to a logically air-gapped vault. isDelegatedAdministratorEnabled: Allow Backup to automatically synchronize delegated administrator permissions with Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the supported flags were last updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of LastUpdateTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
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
    <td><a href="#describe_global_settings"><CopyableCode code="describe_global_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes whether the Amazon Web Services account has enabled different cross-account management options, including cross-account backup, multi-party approval, and delegated administrator. Returns an error if the account is not a member of an Organizations organization. Example: describe-global-settings --region us-west-2</td>
</tr>
<tr>
    <td><a href="#update_global_settings"><CopyableCode code="update_global_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates whether the Amazon Web Services account has enabled different cross-account management options, including cross-account backup, multi-party approval, and delegated administrator. Returns an error if the account is not an Organizations management account. Use the DescribeGlobalSettings API to determine the current settings.</td>
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
    defaultValue="describe_global_settings"
    values={[
        { label: 'describe_global_settings', value: 'describe_global_settings' }
    ]}
>
<TabItem value="describe_global_settings">

Describes whether the Amazon Web Services account has enabled different cross-account management options, including cross-account backup, multi-party approval, and delegated administrator. Returns an error if the account is not a member of an Organizations organization. Example: describe-global-settings --region us-west-2

```sql
SELECT
GlobalSettings,
LastUpdateTime
FROM aws.backup.global_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_global_settings"
    values={[
        { label: 'update_global_settings', value: 'update_global_settings' }
    ]}
>
<TabItem value="update_global_settings">

Updates whether the Amazon Web Services account has enabled different cross-account management options, including cross-account backup, multi-party approval, and delegated administrator. Returns an error if the account is not an Organizations management account. Use the DescribeGlobalSettings API to determine the current settings.

```sql
UPDATE aws.backup.global_settings
SET 
GlobalSettings = '{{ GlobalSettings }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
