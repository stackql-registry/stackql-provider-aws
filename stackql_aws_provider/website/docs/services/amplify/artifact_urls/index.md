--- 
title: artifact_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - artifact_urls
  - amplify
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

Creates, updates, deletes, gets or lists an <code>artifact_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifact_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplify.artifact_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_artifact_url"
    values={[
        { label: 'get_artifact_url', value: 'get_artifact_url' }
    ]}
>
<TabItem value="get_artifact_url">

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
    <td><CopyableCode code="artifactId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for an artifact. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="artifactUrl" /></td>
    <td><code>string</code></td>
    <td>The presigned URL for the artifact.</td>
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
    <td><a href="#get_artifact_url"><CopyableCode code="get_artifact_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-artifact_id"><code>artifact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the artifact info that corresponds to an artifact id.</td>
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
<tr id="parameter-artifact_id">
    <td><CopyableCode code="artifact_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for an artifact.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_artifact_url"
    values={[
        { label: 'get_artifact_url', value: 'get_artifact_url' }
    ]}
>
<TabItem value="get_artifact_url">

Returns the artifact info that corresponds to an artifact id.

```sql
SELECT
artifactId,
artifactUrl
FROM aws.amplify.artifact_urls
WHERE artifact_id = '{{ artifact_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
