--- 
title: console_authorization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - console_authorization_configurations
  - signin
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

Creates, updates, deletes, gets or lists a <code>console_authorization_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="console_authorization_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signin.console_authorization_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_console_authorization_configuration"
    values={[
        { label: 'get_console_authorization_configuration', value: 'get_console_authorization_configuration' }
    ]}
>
<TabItem value="get_console_authorization_configuration">

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
    <td><CopyableCode code="console_authorization_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether console authorization is enabled</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Authorization scope</td>
</tr>
<tr>
    <td><CopyableCode code="target_id" /></td>
    <td><code>string</code></td>
    <td>Target account identifier for console authorization (pattern: &lt;code&gt;(\d&#123;12&#125;|o-&#91;a-z0-9&#93;&#123;10&#125;|r-&#91;0-9a-z&#93;&#123;4,32&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_console_authorization_configuration"><CopyableCode code="get_console_authorization_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get console authorization configuration with automatic scope detection</td>
</tr>
<tr>
    <td><a href="#put_console_authorization_configuration"><CopyableCode code="put_console_authorization_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enable console authorization configuration with automatic scope detection</td>
</tr>
<tr>
    <td><a href="#delete_console_authorization_configuration"><CopyableCode code="delete_console_authorization_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete console authorization configuration with automatic scope detection</td>
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
    defaultValue="get_console_authorization_configuration"
    values={[
        { label: 'get_console_authorization_configuration', value: 'get_console_authorization_configuration' }
    ]}
>
<TabItem value="get_console_authorization_configuration">

Get console authorization configuration with automatic scope detection

```sql
SELECT
console_authorization_enabled,
scope,
target_id
FROM aws.signin.console_authorization_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_console_authorization_configuration"
    values={[
        { label: 'put_console_authorization_configuration', value: 'put_console_authorization_configuration' }
    ]}
>
<TabItem value="put_console_authorization_configuration">

Enable console authorization configuration with automatic scope detection

```sql
REPLACE aws.signin.console_authorization_configurations
SET 
targetId = '{{ targetId }}'
WHERE 
region = '{{ region }}' --required
RETURNING
console_authorization_enabled,
scope,
target_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_console_authorization_configuration"
    values={[
        { label: 'delete_console_authorization_configuration', value: 'delete_console_authorization_configuration' }
    ]}
>
<TabItem value="delete_console_authorization_configuration">

Delete console authorization configuration with automatic scope detection

```sql
DELETE FROM aws.signin.console_authorization_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
