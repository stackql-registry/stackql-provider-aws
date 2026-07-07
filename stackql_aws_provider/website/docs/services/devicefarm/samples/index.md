--- 
title: samples
hide_title: false
hide_table_of_contents: false
keywords:
  - samples
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>samples</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="samples" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.samples" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_samples"
    values={[
        { label: 'list_samples', value: 'list_samples' }
    ]}
>
<TabItem value="list_samples">

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
    <td>The sample's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The sample's type. Must be one of the following values: CPU: A CPU sample type. This is expressed as the app processing CPU time (including child processes) as reported by process, as a percentage. MEMORY: A memory usage sample type. This is expressed as the total proportional set size of an app process, in kilobytes. NATIVE_AVG_DRAWTIME NATIVE_FPS NATIVE_FRAMES NATIVE_MAX_DRAWTIME NATIVE_MIN_DRAWTIME OPENGL_AVG_DRAWTIME OPENGL_FPS OPENGL_FRAMES OPENGL_MAX_DRAWTIME OPENGL_MIN_DRAWTIME RX RX_RATE: The total number of bytes per second (TCP and UDP) that are sent, by app process. THREADS: A threads sample type. This is expressed as the total number of threads per app process. TX TX_RATE: The total number of bytes per second (TCP and UDP) that are received, by app process. (CPU, MEMORY, THREADS, RX_RATE, TX_RATE, RX, TX, NATIVE_FRAMES, NATIVE_FPS, NATIVE_MIN_DRAWTIME, NATIVE_AVG_DRAWTIME, NATIVE_MAX_DRAWTIME, OPENGL_FRAMES, OPENGL_FPS, OPENGL_MIN_DRAWTIME, OPENGL_AVG_DRAWTIME, OPENGL_MAX_DRAWTIME)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The presigned Amazon S3 URL that can be used with a GET request to download the sample's file.</td>
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
    <td><a href="#list_samples"><CopyableCode code="list_samples" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about samples, given an AWS Device Farm job ARN.</td>
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
    defaultValue="list_samples"
    values={[
        { label: 'list_samples', value: 'list_samples' }
    ]}
>
<TabItem value="list_samples">

Gets information about samples, given an AWS Device Farm job ARN.

```sql
SELECT
arn,
type_,
url
FROM aws.devicefarm.samples
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
