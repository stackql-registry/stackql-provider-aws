--- 
title: repository_sync_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_sync_definitions
  - codeconnections
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

Creates, updates, deletes, gets or lists a <code>repository_sync_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_sync_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeconnections.repository_sync_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repository_sync_definitions"
    values={[
        { label: 'list_repository_sync_definitions', value: 'list_repository_sync_definitions' }
    ]}
>
<TabItem value="list_repository_sync_definitions">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An enumeration token that, when provided in a request, returns the next batch of the results. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_sync_definitions" /></td>
    <td><code>array</code></td>
    <td>The list of repository sync definitions returned by the request. A RepositorySyncDefinition is a mapping from a repository branch to all the Amazon Web Services resources that are being synced from that branch.</td>
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
    <td><a href="#list_repository_sync_definitions"><CopyableCode code="list_repository_sync_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the repository sync definitions for repository links in your account.</td>
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
    defaultValue="list_repository_sync_definitions"
    values={[
        { label: 'list_repository_sync_definitions', value: 'list_repository_sync_definitions' }
    ]}
>
<TabItem value="list_repository_sync_definitions">

Lists the repository sync definitions for repository links in your account.

```sql
SELECT
next_token,
repository_sync_definitions
FROM aws.codeconnections.repository_sync_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
