--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - ecr
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_setting"
    values={[
        { label: 'get_account_setting', value: 'get_account_setting' }
    ]}
>
<TabItem value="get_account_setting">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Retrieves the name of the account setting.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The setting value for the setting name. Valid value for basic scan type: AWS_NATIVE. Valid values for registry policy scope: V2. Valid values for blob mounting: ENABLED or DISABLED.</td>
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
    <td><a href="#get_account_setting"><CopyableCode code="get_account_setting" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the account setting value for the specified setting name.</td>
</tr>
<tr>
    <td><a href="#put_account_setting"><CopyableCode code="put_account_setting" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Allows you to change the basic scan type version or registry policy scope.</td>
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
    defaultValue="get_account_setting"
    values={[
        { label: 'get_account_setting', value: 'get_account_setting' }
    ]}
>
<TabItem value="get_account_setting">

Retrieves the account setting value for the specified setting name.

```sql
SELECT
name,
value
FROM aws.ecr.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_setting"
    values={[
        { label: 'put_account_setting', value: 'put_account_setting' }
    ]}
>
<TabItem value="put_account_setting">

Allows you to change the basic scan type version or registry policy scope.

```sql
REPLACE aws.ecr.account_settings
SET 
name = '{{ name }}',
value = '{{ value }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND value = '{{ value }}' --required
RETURNING
name,
value;
```
</TabItem>
</Tabs>
