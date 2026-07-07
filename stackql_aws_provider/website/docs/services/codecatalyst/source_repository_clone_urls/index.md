--- 
title: source_repository_clone_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - source_repository_clone_urls
  - codecatalyst
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

Creates, updates, deletes, gets or lists a <code>source_repository_clone_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_repository_clone_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.source_repository_clone_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_source_repository_clone_urls"
    values={[
        { label: 'get_source_repository_clone_urls', value: 'get_source_repository_clone_urls' }
    ]}
>
<TabItem value="get_source_repository_clone_urls">

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
    <td><CopyableCode code="https" /></td>
    <td><code>string</code></td>
    <td>The HTTPS URL to use when cloning the source repository.</td>
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
    <td><a href="#get_source_repository_clone_urls"><CopyableCode code="get_source_repository_clone_urls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-source_repository_name"><code>source_repository_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the URLs that can be used with a Git client to clone a source repository.</td>
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
<tr id="parameter-project_name">
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_repository_name">
    <td><CopyableCode code="source_repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source repository.</td>
</tr>
<tr id="parameter-space_name">
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_source_repository_clone_urls"
    values={[
        { label: 'get_source_repository_clone_urls', value: 'get_source_repository_clone_urls' }
    ]}
>
<TabItem value="get_source_repository_clone_urls">

Returns information about the URLs that can be used with a Git client to clone a source repository.

```sql
SELECT
https
FROM aws.codecatalyst.source_repository_clone_urls
WHERE space_name = '{{ space_name }}' -- required
AND project_name = '{{ project_name }}' -- required
AND source_repository_name = '{{ source_repository_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
