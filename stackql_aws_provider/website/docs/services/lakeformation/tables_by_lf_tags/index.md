--- 
title: tables_by_lf_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tables_by_lf_tags
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>tables_by_lf_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tables_by_lf_tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.tables_by_lf_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_tables_by_lf_tags"
    values={[
        { label: 'search_tables_by_lf_tags', value: 'search_tables_by_lf_tags' }
    ]}
>
<TabItem value="search_tables_by_lf_tags">

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
    <td><CopyableCode code="lf_tag_on_database" /></td>
    <td><code>array</code></td>
    <td>A list of LF-tags attached to the database where the table resides.</td>
</tr>
<tr>
    <td><CopyableCode code="lf_tags_on_columns" /></td>
    <td><code>array</code></td>
    <td>A list of LF-tags attached to columns in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="lf_tags_on_table" /></td>
    <td><code>array</code></td>
    <td>A list of LF-tags attached to the table.</td>
</tr>
<tr>
    <td><CopyableCode code="table" /></td>
    <td><code>object</code></td>
    <td>A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.</td>
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
    <td><a href="#search_tables_by_lf_tags"><CopyableCode code="search_tables_by_lf_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation allows a search on TABLE resources by LFTags. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use SearchTablesByLFTags to find all resources where the given LFTags are valid to verify whether the returned resources can be shared.</td>
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
    defaultValue="search_tables_by_lf_tags"
    values={[
        { label: 'search_tables_by_lf_tags', value: 'search_tables_by_lf_tags' }
    ]}
>
<TabItem value="search_tables_by_lf_tags">

This operation allows a search on TABLE resources by LFTags. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use SearchTablesByLFTags to find all resources where the given LFTags are valid to verify whether the returned resources can be shared.

```sql
SELECT
lf_tag_on_database,
lf_tags_on_columns,
lf_tags_on_table,
table
FROM aws.lakeformation.tables_by_lf_tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
