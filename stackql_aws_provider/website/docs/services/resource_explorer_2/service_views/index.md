--- 
title: service_views
hide_title: false
hide_table_of_contents: false
keywords:
  - service_views
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

Creates, updates, deletes, gets or lists a <code>service_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_explorer_2.service_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_view"
    values={[
        { label: 'get_service_view', value: 'get_service_view' },
        { label: 'list_service_views', value: 'list_service_views' }
    ]}
>
<TabItem value="get_service_view">

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
    <td>A list of additional resource properties that are included in this view for search and filtering purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="scope_type" /></td>
    <td><code>string</code></td>
    <td>The scope type of the service view, which determines what resources are included.</td>
</tr>
<tr>
    <td><CopyableCode code="service_view_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service view.</td>
</tr>
<tr>
    <td><CopyableCode code="service_view_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service view. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="streaming_access_for_service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that has streaming access to this view's data.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_views">

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
    <td><CopyableCode code="service_view" /></td>
    <td><code>string</code></td>
    <td>A list of Amazon Resource Names (ARNs) for the service views available in the current Amazon Web Services account.</td>
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
    <td><a href="#get_service_view"><CopyableCode code="get_service_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific Resource Explorer service view. This operation returns the configuration and properties of the specified view.</td>
</tr>
<tr>
    <td><a href="#list_service_views"><CopyableCode code="list_service_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Resource Explorer service views available in the current Amazon Web Services account. This operation returns the ARNs of available service views.</td>
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
    defaultValue="get_service_view"
    values={[
        { label: 'get_service_view', value: 'get_service_view' },
        { label: 'list_service_views', value: 'list_service_views' }
    ]}
>
<TabItem value="get_service_view">

Retrieves details about a specific Resource Explorer service view. This operation returns the configuration and properties of the specified view.

```sql
SELECT
filters,
included_properties,
scope_type,
service_view_arn,
service_view_name,
streaming_access_for_service
FROM aws.resource_explorer_2.service_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_views">

Lists all Resource Explorer service views available in the current Amazon Web Services account. This operation returns the ARNs of available service views.

```sql
SELECT
service_view
FROM aws.resource_explorer_2.service_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
