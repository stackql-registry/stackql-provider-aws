--- 
title: user_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - user_settings
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

Creates, updates, deletes, gets or lists a <code>user_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.user_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_settings"
    values={[
        { label: 'get_user_settings', value: 'get_user_settings' }
    ]}
>
<TabItem value="get_user_settings">

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
    <td><CopyableCode code="Telephony" /></td>
    <td><code>object</code></td>
    <td>The telephony settings associated with the user.</td>
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
    <td><a href="#get_user_settings"><CopyableCode code="get_user_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves settings for the specified user ID, such as any associated phone number settings.</td>
</tr>
<tr>
    <td><a href="#update_user_settings"><CopyableCode code="update_user_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserSettings"><code>UserSettings</code></a></td>
    <td></td>
    <td>Updates the settings for the specified user, such as phone number settings.</td>
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
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_settings"
    values={[
        { label: 'get_user_settings', value: 'get_user_settings' }
    ]}
>
<TabItem value="get_user_settings">

Retrieves settings for the specified user ID, such as any associated phone number settings.

```sql
SELECT
Telephony
FROM aws.chime.user_settings
WHERE account_id = '{{ account_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_settings"
    values={[
        { label: 'update_user_settings', value: 'update_user_settings' }
    ]}
>
<TabItem value="update_user_settings">

Updates the settings for the specified user, such as phone number settings.

```sql
UPDATE aws.chime.user_settings
SET 
UserSettings = '{{ UserSettings }}'
WHERE 
account_id = '{{ account_id }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
AND UserSettings = '{{ UserSettings }}' --required;
```
</TabItem>
</Tabs>
