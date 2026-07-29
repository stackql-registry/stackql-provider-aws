--- 
title: tracks
hide_title: false
hide_table_of_contents: false
keywords:
  - tracks
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>tracks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tracks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.tracks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_track"
    values={[
        { label: 'get_track', value: 'get_track' },
        { label: 'list_tracks', value: 'list_tracks' }
    ]}
>
<TabItem value="get_track">

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
    <td><CopyableCode code="track_name" /></td>
    <td><code>string</code></td>
    <td>The name of the track. Valid values are current and trailing. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_targets" /></td>
    <td><code>array</code></td>
    <td>An array of UpdateTarget objects to update with the track.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_version" /></td>
    <td><code>string</code></td>
    <td>The workgroup version number for the workgroup release.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tracks">

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
    <td><CopyableCode code="track_name" /></td>
    <td><code>string</code></td>
    <td>The name of the track. Valid values are current and trailing. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_targets" /></td>
    <td><code>array</code></td>
    <td>An array of UpdateTarget objects to update with the track.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_version" /></td>
    <td><code>string</code></td>
    <td>The workgroup version number for the workgroup release.</td>
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
    <td><a href="#get_track"><CopyableCode code="get_track" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the Redshift Serverless version for a specified track.</td>
</tr>
<tr>
    <td><a href="#list_tracks"><CopyableCode code="list_tracks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the Amazon Redshift Serverless versions.</td>
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
    defaultValue="get_track"
    values={[
        { label: 'get_track', value: 'get_track' },
        { label: 'list_tracks', value: 'list_tracks' }
    ]}
>
<TabItem value="get_track">

Get the Redshift Serverless version for a specified track.

```sql
SELECT
track_name,
update_targets,
workgroup_version
FROM aws.redshift_serverless.tracks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tracks">

List the Amazon Redshift Serverless versions.

```sql
SELECT
track_name,
update_targets,
workgroup_version
FROM aws.redshift_serverless.tracks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
