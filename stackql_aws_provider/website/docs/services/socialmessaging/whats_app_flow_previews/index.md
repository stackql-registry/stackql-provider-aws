--- 
title: whats_app_flow_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_flow_previews
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_flow_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_flow_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_flow_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_whats_app_flow_preview"
    values={[
        { label: 'get_whats_app_flow_preview', value: 'get_whats_app_flow_preview' }
    ]}
>
<TabItem value="get_whats_app_flow_preview">

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
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Flow. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="preview" /></td>
    <td><code>object</code></td>
    <td>The preview URL and its expiration timestamp.</td>
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
    <td><a href="#get_whats_app_flow_preview"><CopyableCode code="get_whats_app_flow_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-flowId"><code>flowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-invalidate"><code>invalidate</code></a></td>
    <td>Generates a web preview URL for testing a WhatsApp Flow before publishing. Preview URLs expire in 30 days and can be shared with stakeholders for review.</td>
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
<tr id="parameter-flowId">
    <td><CopyableCode code="flowId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Flow to preview.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the WhatsApp Business Account associated with this Flow.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-invalidate">
    <td><CopyableCode code="invalidate" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to force generation of a new preview URL. Use this if the previous URL has been compromised or you want a fresh expiration period.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_whats_app_flow_preview"
    values={[
        { label: 'get_whats_app_flow_preview', value: 'get_whats_app_flow_preview' }
    ]}
>
<TabItem value="get_whats_app_flow_preview">

Generates a web preview URL for testing a WhatsApp Flow before publishing. Preview URLs expire in 30 days and can be shared with stakeholders for review.

```sql
SELECT
flow_id,
preview
FROM aws.socialmessaging.whats_app_flow_previews
WHERE id = '{{ id }}' -- required
AND flowId = '{{ flowId }}' -- required
AND region = '{{ region }}' -- required
AND invalidate = '{{ invalidate }}'
;
```
</TabItem>
</Tabs>
