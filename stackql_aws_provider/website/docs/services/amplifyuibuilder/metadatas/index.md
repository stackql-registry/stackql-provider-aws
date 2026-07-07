--- 
title: metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - metadatas
  - amplifyuibuilder
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

Creates, updates, deletes, gets or lists a <code>metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifyuibuilder.metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metadata"
    values={[
        { label: 'get_metadata', value: 'get_metadata' }
    ]}
>
<TabItem value="get_metadata">

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
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>Represents the configuration settings for the features metadata.</td>
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
    <td><a href="#get_metadata"><CopyableCode code="get_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns existing metadata for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#put_metadata_flag"><CopyableCode code="put_metadata_flag" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-feature_name"><code>feature_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Stores the metadata information about a feature on a form.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the Amplify app.</td>
</tr>
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is part of the Amplify app.</td>
</tr>
<tr id="parameter-feature_name">
    <td><CopyableCode code="feature_name" /></td>
    <td><code>string</code></td>
    <td>The name of the feature associated with the metadata.</td>
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
    defaultValue="get_metadata"
    values={[
        { label: 'get_metadata', value: 'get_metadata' }
    ]}
>
<TabItem value="get_metadata">

Returns existing metadata for an Amplify app.

```sql
SELECT
features
FROM aws.amplifyuibuilder.metadatas
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_metadata_flag"
    values={[
        { label: 'put_metadata_flag', value: 'put_metadata_flag' }
    ]}
>
<TabItem value="put_metadata_flag">

Stores the metadata information about a feature on a form.

```sql
REPLACE aws.amplifyuibuilder.metadatas
SET 
body = '{{ body }}'
WHERE 
app_id = '{{ app_id }}' --required
AND environment_name = '{{ environment_name }}' --required
AND feature_name = '{{ feature_name }}' --required
AND region = '{{ region }}' --required
AND body = '{{ body }}' --required;
```
</TabItem>
</Tabs>
