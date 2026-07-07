--- 
title: source_views
hide_title: false
hide_table_of_contents: false
keywords:
  - source_views
  - billing
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

Creates, updates, deletes, gets or lists a <code>source_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.source_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#associate_source_views"><CopyableCode code="associate_source_views" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-sourceViews"><code>sourceViews</code></a></td>
    <td></td>
    <td>Associates one or more source billing views with an existing billing view. This allows creating aggregate billing views that combine data from multiple sources.</td>
</tr>
<tr>
    <td><a href="#disassociate_source_views"><CopyableCode code="disassociate_source_views" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-sourceViews"><code>sourceViews</code></a></td>
    <td></td>
    <td>Removes the association between one or more source billing views and an existing billing view. This allows modifying the composition of aggregate billing views.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_source_views"
    values={[
        { label: 'associate_source_views', value: 'associate_source_views' }
    ]}
>
<TabItem value="associate_source_views">

Associates one or more source billing views with an existing billing view. This allows creating aggregate billing views that combine data from multiple sources.

```sql
UPDATE aws.billing.source_views
SET 
arn = '{{ arn }}',
sourceViews = '{{ sourceViews }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
AND sourceViews = '{{ sourceViews }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_source_views"
    values={[
        { label: 'disassociate_source_views', value: 'disassociate_source_views' }
    ]}
>
<TabItem value="disassociate_source_views">

Removes the association between one or more source billing views and an existing billing view. This allows modifying the composition of aggregate billing views.

```sql
EXEC aws.billing.source_views.disassociate_source_views 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"sourceViews": "{{ sourceViews }}"
}'
;
```
</TabItem>
</Tabs>
