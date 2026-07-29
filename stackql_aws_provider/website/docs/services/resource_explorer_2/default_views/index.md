--- 
title: default_views
hide_title: false
hide_table_of_contents: false
keywords:
  - default_views
  - resource_explorer_2
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

Creates, updates, deletes, gets or lists a <code>default_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_explorer_2.default_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_view"
    values={[
        { label: 'get_default_view', value: 'get_default_view' }
    ]}
>
<TabItem value="get_default_view">

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
    <td><CopyableCode code="view_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the view that is the current default for the Amazon Web Services Region in which you called this operation.</td>
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
    <td><a href="#get_default_view"><CopyableCode code="get_default_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call GetView to retrieve the details of that view.</td>
</tr>
<tr>
    <td><a href="#associate_default_view"><CopyableCode code="associate_default_view" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ViewArn"><code>ViewArn</code></a></td>
    <td></td>
    <td>Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a Search that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region. If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every Search operation performed in that Region.</td>
</tr>
<tr>
    <td><a href="#disassociate_default_view"><CopyableCode code="disassociate_default_view" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>After you call this operation, the affected Amazon Web Services Region no longer has a default view. All Search operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the AssociateDefaultView operation. If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every Search operation performed in that Region.</td>
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
    defaultValue="get_default_view"
    values={[
        { label: 'get_default_view', value: 'get_default_view' }
    ]}
>
<TabItem value="get_default_view">

Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call GetView to retrieve the details of that view.

```sql
SELECT
view_arn
FROM aws.resource_explorer_2.default_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_default_view"
    values={[
        { label: 'associate_default_view', value: 'associate_default_view' },
        { label: 'disassociate_default_view', value: 'disassociate_default_view' }
    ]}
>
<TabItem value="associate_default_view">

Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a Search that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region. If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every Search operation performed in that Region.

```sql
UPDATE aws.resource_explorer_2.default_views
SET 
ViewArn = '{{ ViewArn }}'
WHERE 
region = '{{ region }}' --required
AND ViewArn = '{{ ViewArn }}' --required
RETURNING
view_arn;
```
</TabItem>
<TabItem value="disassociate_default_view">

After you call this operation, the affected Amazon Web Services Region no longer has a default view. All Search operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the AssociateDefaultView operation. If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every Search operation performed in that Region.

```sql
UPDATE aws.resource_explorer_2.default_views
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
