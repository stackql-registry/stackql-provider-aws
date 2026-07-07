--- 
title: compositions
hide_title: false
hide_table_of_contents: false
keywords:
  - compositions
  - ivs_realtime
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

Creates, updates, deletes, gets or lists a <code>compositions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compositions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.compositions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_composition"
    values={[
        { label: 'get_composition', value: 'get_composition' },
        { label: 'list_compositions', value: 'list_compositions' }
    ]}
>
<TabItem value="get_composition">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the Composition resource. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:composition/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>Array of Destination objects. A Composition can contain either one destination (channel or s3) or two (one channel and one s3).</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>UTC time of the Composition end. This is an ISO 8601 timestamp; note that this is returned as a string.</td>
</tr>
<tr>
    <td><CopyableCode code="layout" /></td>
    <td><code>object</code></td>
    <td>Layout object to configure composition parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="stageArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the stage used as input (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stage/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>UTC time of the Composition start. This is an ISO 8601 timestamp; note that this is returned as a string.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the Composition. (STARTING, ACTIVE, STOPPING, FAILED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_compositions">

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
    <td><CopyableCode code="compositions" /></td>
    <td><code>array</code></td>
    <td>List of the matching Compositions (summary information only).</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more compositions than maxResults, use nextToken in the request to get the next set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=_-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_composition"><CopyableCode code="get_composition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about the specified Composition resource.</td>
</tr>
<tr>
    <td><a href="#list_compositions"><CopyableCode code="list_compositions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all Compositions in your account, in the AWS region where the API request is processed.</td>
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
    defaultValue="get_composition"
    values={[
        { label: 'get_composition', value: 'get_composition' },
        { label: 'list_compositions', value: 'list_compositions' }
    ]}
>
<TabItem value="get_composition">

Get information about the specified Composition resource.

```sql
SELECT
arn,
destinations,
endTime,
layout,
stageArn,
startTime,
state,
tags
FROM aws.ivs_realtime.compositions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_compositions">

Gets summary information about all Compositions in your account, in the AWS region where the API request is processed.

```sql
SELECT
compositions,
nextToken
FROM aws.ivs_realtime.compositions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
