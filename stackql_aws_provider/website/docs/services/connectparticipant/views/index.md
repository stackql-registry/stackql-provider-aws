--- 
title: views
hide_title: false
hide_table_of_contents: false
keywords:
  - views
  - connectparticipant
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

Creates, updates, deletes, gets or lists a <code>views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectparticipant.views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_view"
    values={[
        { label: 'describe_view', value: 'describe_view' }
    ]}
>
<TabItem value="describe_view">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="Content" /></td>
    <td><code>object</code></td>
    <td>View content containing all content necessary to render a view except for runtime input data.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the view. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-:\/$&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the view. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The current version of the view.</td>
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
    <td><a href="#describe_view"><CopyableCode code="describe_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-view_token"><code>view_token</code></a>, <a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the view for the specified view token. For security recommendations, see Amazon Connect Chat security best practices.</td>
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
<tr id="parameter-X-Amz-Bearer">
    <td><CopyableCode code="X-Amz-Bearer" /></td>
    <td><code>string</code></td>
    <td>The connection token.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-view_token">
    <td><CopyableCode code="view_token" /></td>
    <td><code>string</code></td>
    <td>An encrypted token originating from the interactive message of a ShowView block operation. Represents the desired view.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_view"
    values={[
        { label: 'describe_view', value: 'describe_view' }
    ]}
>
<TabItem value="describe_view">

Retrieves the view for the specified view token. For security recommendations, see Amazon Connect Chat security best practices.

```sql
SELECT
Arn,
Content,
Id,
Name,
Version
FROM aws.connectparticipant.views
WHERE view_token = '{{ view_token }}' -- required
AND `X-Amz-Bearer` = '{{ X-Amz-Bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
