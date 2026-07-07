--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - chime
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.account_settings" /></td></tr>
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
    <td><CopyableCode code="DisableRemoteControl" /></td>
    <td><code>boolean</code></td>
    <td>Setting that stops or starts remote control of shared screens during meetings.</td>
</tr>
<tr>
    <td><CopyableCode code="EnableDialOut" /></td>
    <td><code>boolean</code></td>
    <td>Setting that allows meeting participants to choose the Call me at a phone number option. For more information, see Join a Meeting without the Amazon Chime App.</td>
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
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dialout settings. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.</td>
</tr>
<tr>
    <td><a href="#update_account_settings"><CopyableCode code="update_account_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountSettings"><code>AccountSettings</code></a></td>
    <td></td>
    <td>Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
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

Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dialout settings. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.

```sql
SELECT
DisableRemoteControl,
EnableDialOut
FROM aws.chime.account_settings
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
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

Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.

```sql
UPDATE aws.chime.account_settings
SET 
AccountSettings = '{{ AccountSettings }}'
WHERE 
account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
AND AccountSettings = '{{ AccountSettings }}' --required;
```
</TabItem>
</Tabs>
