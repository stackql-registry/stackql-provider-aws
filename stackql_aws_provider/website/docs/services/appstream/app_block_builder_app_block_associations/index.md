--- 
title: app_block_builder_app_block_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - app_block_builder_app_block_associations
  - appstream
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

Creates, updates, deletes, gets or lists an <code>app_block_builder_app_block_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_block_builder_app_block_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.app_block_builder_app_block_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_block_builder_app_block_associations"
    values={[
        { label: 'describe_app_block_builder_app_block_associations', value: 'describe_app_block_builder_app_block_associations' }
    ]}
>
<TabItem value="describe_app_block_builder_app_block_associations">

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
    <td><CopyableCode code="app_block_builder_app_block_associations" /></td>
    <td><code>array</code></td>
    <td>This list of app block builders associated with app blocks.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
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
    <td><a href="#describe_app_block_builder_app_block_associations"><CopyableCode code="describe_app_block_builder_app_block_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more app block builder associations.</td>
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
    defaultValue="describe_app_block_builder_app_block_associations"
    values={[
        { label: 'describe_app_block_builder_app_block_associations', value: 'describe_app_block_builder_app_block_associations' }
    ]}
>
<TabItem value="describe_app_block_builder_app_block_associations">

Retrieves a list that describes one or more app block builder associations.

```sql
SELECT
app_block_builder_app_block_associations,
next_token
FROM aws.appstream.app_block_builder_app_block_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
