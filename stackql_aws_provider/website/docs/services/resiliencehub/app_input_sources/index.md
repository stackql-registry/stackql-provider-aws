--- 
title: app_input_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - app_input_sources
  - resiliencehub
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

Creates, updates, deletes, gets or lists an <code>app_input_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_input_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_input_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_app_input_sources"
    values={[
        { label: 'list_app_input_sources', value: 'list_app_input_sources' }
    ]}
>
<TabItem value="list_app_input_sources">

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
    <td><CopyableCode code="appInputSources" /></td>
    <td><code>array</code></td>
    <td>The list of Resilience Hub application input sources.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results, or null if there are no more results. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_app_input_sources"><CopyableCode code="list_app_input_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see Discover the structure and describe your Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#delete_app_input_source"><CopyableCode code="delete_app_input_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the input source and all of its imported resources from the Resilience Hub application.</td>
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
    defaultValue="list_app_input_sources"
    values={[
        { label: 'list_app_input_sources', value: 'list_app_input_sources' }
    ]}
>
<TabItem value="list_app_input_sources">

Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see Discover the structure and describe your Resilience Hub application.

```sql
SELECT
appInputSources,
nextToken
FROM aws.resiliencehub.app_input_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_input_source"
    values={[
        { label: 'delete_app_input_source', value: 'delete_app_input_source' }
    ]}
>
<TabItem value="delete_app_input_source">

Deletes the input source and all of its imported resources from the Resilience Hub application.

```sql
DELETE FROM aws.resiliencehub.app_input_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
