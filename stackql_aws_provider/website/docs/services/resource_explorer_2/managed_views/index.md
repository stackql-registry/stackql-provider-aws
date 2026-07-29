--- 
title: managed_views
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_views
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

Creates, updates, deletes, gets or lists a <code>managed_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_explorer_2.managed_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_view"
    values={[
        { label: 'get_managed_view', value: 'get_managed_view' },
        { label: 'list_managed_views', value: 'list_managed_views' }
    ]}
>
<TabItem value="get_managed_view">

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
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>A search filter defines which resources can be part of a search query result set.</td>
</tr>
<tr>
    <td><CopyableCode code="included_properties" /></td>
    <td><code>array</code></td>
    <td>A structure that contains additional information about the managed view.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this managed view was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_view_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the managed view.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_view_name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed view.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that owns this managed view.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_policy" /></td>
    <td><code>string</code></td>
    <td>The resource policy that defines access to the managed view. To learn more about this policy, review Managed views.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>An Amazon resource name (ARN) of an Amazon Web Services account or organization that specifies whether this managed view includes resources from only the specified Amazon Web Services account or all accounts in the specified organization.</td>
</tr>
<tr>
    <td><CopyableCode code="trusted_service" /></td>
    <td><code>string</code></td>
    <td>The service principal of the Amazon Web Services service that created and manages the managed view.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the managed view.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_views">

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
    <td><CopyableCode code="managed_view" /></td>
    <td><code>string</code></td>
    <td>The list of managed views available in the Amazon Web Services Region in which you called this operation.</td>
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
    <td><a href="#get_managed_view"><CopyableCode code="get_managed_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of the specified Amazon Web Services-managed view.</td>
</tr>
<tr>
    <td><a href="#list_managed_views"><CopyableCode code="list_managed_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon resource names (ARNs) of the Amazon Web Services-managed views available in the Amazon Web Services Region in which you call this operation.</td>
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
    defaultValue="get_managed_view"
    values={[
        { label: 'get_managed_view', value: 'get_managed_view' },
        { label: 'list_managed_views', value: 'list_managed_views' }
    ]}
>
<TabItem value="get_managed_view">

Retrieves details of the specified Amazon Web Services-managed view.

```sql
SELECT
filters,
included_properties,
last_updated_at,
managed_view_arn,
managed_view_name,
owner,
resource_policy,
scope,
trusted_service,
version
FROM aws.resource_explorer_2.managed_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_managed_views">

Lists the Amazon resource names (ARNs) of the Amazon Web Services-managed views available in the Amazon Web Services Region in which you call this operation.

```sql
SELECT
managed_view
FROM aws.resource_explorer_2.managed_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
