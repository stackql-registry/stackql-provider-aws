--- 
title: protocols_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - protocols_lists
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

Creates, updates, deletes, gets or lists a <code>protocols_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protocols_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.protocols_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_protocols_list"
    values={[
        { label: 'get_protocols_list', value: 'get_protocols_list' },
        { label: 'list_protocols_lists', value: 'list_protocols_lists' }
    ]}
>
<TabItem value="get_protocols_list">

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
    <td><CopyableCode code="ProtocolsList" /></td>
    <td><code>object</code></td>
    <td>Information about the specified Firewall Manager protocols list.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtocolsListArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified protocols list. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_protocols_lists">

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
    <td><CopyableCode code="ListArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified protocols list. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the specified protocols list. (pattern: &lt;code&gt;^&#91;a-z0-9A-Z-&#93;&#123;36&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ListName" /></td>
    <td><code>string</code></td>
    <td>The name of the specified protocols list. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProtocolsList" /></td>
    <td><code>array</code></td>
    <td>An array of protocols in the Firewall Manager protocols list.</td>
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
    <td><a href="#get_protocols_list"><CopyableCode code="get_protocols_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified Firewall Manager protocols list.</td>
</tr>
<tr>
    <td><a href="#list_protocols_lists"><CopyableCode code="list_protocols_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of ProtocolsListDataSummary objects.</td>
</tr>
<tr>
    <td><a href="#put_protocols_list"><CopyableCode code="put_protocols_list" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtocolsList"><code>ProtocolsList</code></a></td>
    <td></td>
    <td>Creates an Firewall Manager protocols list.</td>
</tr>
<tr>
    <td><a href="#delete_protocols_list"><CopyableCode code="delete_protocols_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes an Firewall Manager protocols list.</td>
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
    defaultValue="get_protocols_list"
    values={[
        { label: 'get_protocols_list', value: 'get_protocols_list' },
        { label: 'list_protocols_lists', value: 'list_protocols_lists' }
    ]}
>
<TabItem value="get_protocols_list">

Returns information about the specified Firewall Manager protocols list.

```sql
SELECT
ProtocolsList,
ProtocolsListArn
FROM aws.fms.protocols_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_protocols_lists">

Returns an array of ProtocolsListDataSummary objects.

```sql
SELECT
ListArn,
ListId,
ListName,
ProtocolsList
FROM aws.fms.protocols_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_protocols_list"
    values={[
        { label: 'put_protocols_list', value: 'put_protocols_list' }
    ]}
>
<TabItem value="put_protocols_list">

Creates an Firewall Manager protocols list.

```sql
REPLACE aws.fms.protocols_lists
SET 
ProtocolsList = '{{ ProtocolsList }}',
TagList = '{{ TagList }}'
WHERE 
region = '{{ region }}' --required
AND ProtocolsList = '{{ ProtocolsList }}' --required
RETURNING
ProtocolsList,
ProtocolsListArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_protocols_list"
    values={[
        { label: 'delete_protocols_list', value: 'delete_protocols_list' }
    ]}
>
<TabItem value="delete_protocols_list">

Permanently deletes an Firewall Manager protocols list.

```sql
DELETE FROM aws.fms.protocols_lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
