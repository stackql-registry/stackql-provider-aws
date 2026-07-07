--- 
title: on_cluster_app_ui_presigned_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - on_cluster_app_ui_presigned_urls
  - emr
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

Creates, updates, deletes, gets or lists an <code>on_cluster_app_ui_presigned_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_cluster_app_ui_presigned_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.on_cluster_app_ui_presigned_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_on_cluster_app_ui_presigned_url"
    values={[
        { label: 'get_on_cluster_app_ui_presigned_url', value: 'get_on_cluster_app_ui_presigned_url' }
    ]}
>
<TabItem value="get_on_cluster_app_ui_presigned_url">

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
    <td><CopyableCode code="PresignedURL" /></td>
    <td><code>string</code></td>
    <td>The cluster's generated presigned URL. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PresignedURLReady" /></td>
    <td><code>boolean</code></td>
    <td>Used to determine if the presigned URL is ready.</td>
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
    <td><a href="#get_on_cluster_app_ui_presigned_url"><CopyableCode code="get_on_cluster_app_ui_presigned_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The presigned URL properties for the cluster's application user interface.</td>
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
    defaultValue="get_on_cluster_app_ui_presigned_url"
    values={[
        { label: 'get_on_cluster_app_ui_presigned_url', value: 'get_on_cluster_app_ui_presigned_url' }
    ]}
>
<TabItem value="get_on_cluster_app_ui_presigned_url">

The presigned URL properties for the cluster's application user interface.

```sql
SELECT
PresignedURL,
PresignedURLReady
FROM aws.emr.on_cluster_app_ui_presigned_urls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
