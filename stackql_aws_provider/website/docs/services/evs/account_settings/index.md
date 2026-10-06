--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - evs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.evs.account_settings" /></td></tr>
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
    <td><CopyableCode code="settings" /></td>
    <td><code>array</code></td>
    <td>A list of regional account-level EVS settings for the account. EVS settings that have never been explicitly set are omitted from the response.</td>
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
    <td>Returns the configured EVS settings for your Amazon Web Services account in the specified Amazon Web Services Region. If no settings have been set, an empty list is returned.</td>
</tr>
<tr>
    <td><a href="#put_account_settings"><CopyableCode code="put_account_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-settings"><code>settings</code></a></td>
    <td></td>
    <td>Creates or updates account-level EVS settings for your Amazon Web Services account in the specified Amazon Web Services Region. EVS settings included in the request are created or overwritten. Settings omitted from the request retain their current values.</td>
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

Returns the configured EVS settings for your Amazon Web Services account in the specified Amazon Web Services Region. If no settings have been set, an empty list is returned.

```sql
SELECT
settings
FROM aws.evs.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_settings"
    values={[
        { label: 'put_account_settings', value: 'put_account_settings' }
    ]}
>
<TabItem value="put_account_settings">

Creates or updates account-level EVS settings for your Amazon Web Services account in the specified Amazon Web Services Region. EVS settings included in the request are created or overwritten. Settings omitted from the request retain their current values.

```sql
REPLACE aws.evs.account_settings
SET 
settings = '{{ settings }}'
WHERE 
region = '{{ region }}' --required
AND settings = '{{ settings }}' --required
RETURNING
settings;
```
</TabItem>
</Tabs>
