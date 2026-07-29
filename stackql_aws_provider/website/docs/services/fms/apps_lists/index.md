--- 
title: apps_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - apps_lists
  - fms
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

Creates, updates, deletes, gets or lists an <code>apps_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.apps_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_apps_list"
    values={[
        { label: 'get_apps_list', value: 'get_apps_list' },
        { label: 'list_apps_lists', value: 'list_apps_lists' }
    ]}
>
<TabItem value="get_apps_list">

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
    <td><CopyableCode code="apps_list" /></td>
    <td><code>object</code></td>
    <td>Information about the specified Firewall Manager applications list.</td>
</tr>
<tr>
    <td><CopyableCode code="apps_list_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the applications list. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apps_lists">

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
    <td><CopyableCode code="apps_list" /></td>
    <td><code>array</code></td>
    <td>An array of App objects in the Firewall Manager applications list.</td>
</tr>
<tr>
    <td><CopyableCode code="list_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the applications list. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="list_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the applications list. (pattern: &lt;code&gt;^&#91;a-z0-9A-Z-&#93;&#123;36&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="list_name" /></td>
    <td><code>string</code></td>
    <td>The name of the applications list. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#get_apps_list"><CopyableCode code="get_apps_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified Firewall Manager applications list.</td>
</tr>
<tr>
    <td><a href="#list_apps_lists"><CopyableCode code="list_apps_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of AppsListDataSummary objects.</td>
</tr>
<tr>
    <td><a href="#put_apps_list"><CopyableCode code="put_apps_list" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppsList"><code>AppsList</code></a></td>
    <td></td>
    <td>Creates an Firewall Manager applications list.</td>
</tr>
<tr>
    <td><a href="#delete_apps_list"><CopyableCode code="delete_apps_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes an Firewall Manager applications list.</td>
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
    defaultValue="get_apps_list"
    values={[
        { label: 'get_apps_list', value: 'get_apps_list' },
        { label: 'list_apps_lists', value: 'list_apps_lists' }
    ]}
>
<TabItem value="get_apps_list">

Returns information about the specified Firewall Manager applications list.

```sql
SELECT
apps_list,
apps_list_arn
FROM aws.fms.apps_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_apps_lists">

Returns an array of AppsListDataSummary objects.

```sql
SELECT
apps_list,
list_arn,
list_id,
list_name
FROM aws.fms.apps_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_apps_list"
    values={[
        { label: 'put_apps_list', value: 'put_apps_list' }
    ]}
>
<TabItem value="put_apps_list">

Creates an Firewall Manager applications list.

```sql
REPLACE aws.fms.apps_lists
SET 
AppsList = '{{ AppsList }}',
TagList = '{{ TagList }}'
WHERE 
region = '{{ region }}' --required
AND AppsList = '{{ AppsList }}' --required
RETURNING
apps_list,
apps_list_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_apps_list"
    values={[
        { label: 'delete_apps_list', value: 'delete_apps_list' }
    ]}
>
<TabItem value="delete_apps_list">

Permanently deletes an Firewall Manager applications list.

```sql
DELETE FROM aws.fms.apps_lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
