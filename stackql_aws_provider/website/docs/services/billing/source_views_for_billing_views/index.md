--- 
title: source_views_for_billing_views
hide_title: false
hide_table_of_contents: false
keywords:
  - source_views_for_billing_views
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

Creates, updates, deletes, gets or lists a <code>source_views_for_billing_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_views_for_billing_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.source_views_for_billing_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_source_views_for_billing_view"
    values={[
        { label: 'list_source_views_for_billing_view', value: 'list_source_views_for_billing_view' }
    ]}
>
<TabItem value="list_source_views_for_billing_view">

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
    <td><CopyableCode code="source_view" /></td>
    <td><code>string</code></td>
    <td>A list of billing views used as the data source for the custom billing view.</td>
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
    <td><a href="#list_source_views_for_billing_view"><CopyableCode code="list_source_views_for_billing_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the source views (managed Amazon Web Services billing views) associated with the billing view.</td>
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
    defaultValue="list_source_views_for_billing_view"
    values={[
        { label: 'list_source_views_for_billing_view', value: 'list_source_views_for_billing_view' }
    ]}
>
<TabItem value="list_source_views_for_billing_view">

Lists the source views (managed Amazon Web Services billing views) associated with the billing view.

```sql
SELECT
source_view
FROM aws.billing.source_views_for_billing_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
