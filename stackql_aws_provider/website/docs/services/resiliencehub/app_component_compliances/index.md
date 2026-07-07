--- 
title: app_component_compliances
hide_title: false
hide_table_of_contents: false
keywords:
  - app_component_compliances
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

Creates, updates, deletes, gets or lists an <code>app_component_compliances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_component_compliances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_component_compliances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_app_component_compliances"
    values={[
        { label: 'list_app_component_compliances', value: 'list_app_component_compliances' }
    ]}
>
<TabItem value="list_app_component_compliances">

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
    <td><CopyableCode code="componentCompliances" /></td>
    <td><code>array</code></td>
    <td>The compliances for an Resilience Hub Application Component, returned as an object. This object contains the names of the Application Components, compliances, costs, resiliency scores, outage scores, and more.</td>
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
    <td><a href="#list_app_component_compliances"><CopyableCode code="list_app_component_compliances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the compliances for an Resilience Hub Application Component.</td>
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
    defaultValue="list_app_component_compliances"
    values={[
        { label: 'list_app_component_compliances', value: 'list_app_component_compliances' }
    ]}
>
<TabItem value="list_app_component_compliances">

Lists the compliances for an Resilience Hub Application Component.

```sql
SELECT
componentCompliances,
nextToken
FROM aws.resiliencehub.app_component_compliances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
