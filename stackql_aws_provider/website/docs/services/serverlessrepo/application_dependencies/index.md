--- 
title: application_dependencies
hide_title: false
hide_table_of_contents: false
keywords:
  - application_dependencies
  - serverlessrepo
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

Creates, updates, deletes, gets or lists an <code>application_dependencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_dependencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.serverlessrepo.application_dependencies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_application_dependencies"
    values={[
        { label: 'list_application_dependencies', value: 'list_application_dependencies' }
    ]}
>
<TabItem value="list_application_dependencies">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the nested application.</td>
</tr>
<tr>
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the nested application.</td>
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
    <td><a href="#list_application_dependencies"><CopyableCode code="list_application_dependencies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-semanticVersion"><code>semanticVersion</code></a></td>
    <td>Retrieves the list of applications nested in the containing application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The total number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to specify where to start paginating.</td>
</tr>
<tr id="parameter-semanticVersion">
    <td><CopyableCode code="semanticVersion" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the application to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_application_dependencies"
    values={[
        { label: 'list_application_dependencies', value: 'list_application_dependencies' }
    ]}
>
<TabItem value="list_application_dependencies">

Retrieves the list of applications nested in the containing application.

```sql
SELECT
application_id,
semantic_version
FROM aws.serverlessrepo.application_dependencies
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND nextToken = '{{ nextToken }}'
AND semanticVersion = '{{ semanticVersion }}'
;
```
</TabItem>
</Tabs>
