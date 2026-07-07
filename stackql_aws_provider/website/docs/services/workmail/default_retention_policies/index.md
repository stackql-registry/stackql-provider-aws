--- 
title: default_retention_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - default_retention_policies
  - workmail
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

Creates, updates, deletes, gets or lists a <code>default_retention_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_retention_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.default_retention_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_retention_policy"
    values={[
        { label: 'get_default_retention_policy', value: 'get_default_retention_policy' }
    ]}
>
<TabItem value="get_default_retention_policy">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The retention policy description.</td>
</tr>
<tr>
    <td><CopyableCode code="FolderConfigurations" /></td>
    <td><code>array</code></td>
    <td>The retention policy folder configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The retention policy ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The retention policy name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_default_retention_policy"><CopyableCode code="get_default_retention_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the default retention policy details for the specified organization.</td>
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
    defaultValue="get_default_retention_policy"
    values={[
        { label: 'get_default_retention_policy', value: 'get_default_retention_policy' }
    ]}
>
<TabItem value="get_default_retention_policy">

Gets the default retention policy details for the specified organization.

```sql
SELECT
Description,
FolderConfigurations,
Id,
Name
FROM aws.workmail.default_retention_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
